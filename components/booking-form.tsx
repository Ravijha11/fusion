'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { trackBookingSubmission, trackFormStart } from '@/lib/tracking'
import { CheckCircle, AlertCircle, ShieldCheck, Zap } from 'lucide-react'
import { Loader } from '@/components/loader'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Form validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  address: z.string().min(5, 'Please enter your full address'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  issueDescription: z.string().min(10, 'Please describe the issue (at least 10 characters)'),
  serviceType: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingFormProps {
  serviceType?: string
  serviceName?: string
  /** Tight layout under contact page “Book Service” banner (shared yellow CTA) */
  contactLayout?: boolean
}

export function BookingForm({ serviceType, serviceName, contactLayout }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasStartedForm, setHasStartedForm] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<{
    confirmationNumber: string
    estimatedArrival: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: serviceType || '',
    },
  })

  // Track form start when user begins interacting
  const formValues = watch()
  useEffect(() => {
    const hasValue = Object.values(formValues).some(v => v && v.length > 0)
    if (hasValue && !hasStartedForm) {
      setHasStartedForm(true)
      trackFormStart()
    }
  }, [formValues, hasStartedForm])

  const onSubmit = async (data: BookingFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate confirmation details
    const confirmationNumber = `REF-${Date.now().toString().slice(-6).toUpperCase()}`
    const now = new Date()
    now.setHours(now.getHours() + 2)
    const estimatedArrival = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
    
    setBookingDetails({
      confirmationNumber,
      estimatedArrival,
    })
    
    trackBookingSubmission()
    setIsSubmitted(true)
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  const cardRadius = contactLayout
    ? 'rounded-b-3xl rounded-t-none'
    : 'rounded-[2.5rem]'

  const submitBtnClass = contactLayout ? 'book-service-submit' : undefined

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted && bookingDetails ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${cardRadius} uiverse-card p-10 md:p-16 text-center shadow-2xl backdrop-blur-3xl`}
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-success/20 mb-8 overflow-hidden relative">
              <motion.div 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle className="h-12 w-12 text-success" aria-hidden="true" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-success/20 to-transparent" />
            </div>
            
            <h3 className="text-4xl font-black italic tracking-tighter text-foreground uppercase mb-4">
              Request <span className="text-success italic">received</span>
            </h3>
            
            <p className="text-xl text-muted-foreground font-medium mb-4">
              Thank you. We have your details and will follow up to confirm your appointment.
            </p>
            <p className="text-sm text-muted-foreground/90 max-w-md mx-auto mb-12">
              Reference below is for your records. A team member may reach out by phone or email using the information you provided.
            </p>
            
            <div className="space-y-4 max-w-sm mx-auto p-8 rounded-3xl glass-dark border border-white/5 text-left mb-12">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Reference</span>
                <span className="font-black text-primary font-mono">{bookingDetails.confirmationNumber}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Requested window</span>
                <span className="font-black text-foreground">{bookingDetails.estimatedArrival}</span>
              </div>
              {serviceName && (
                <div className="flex justify-between items-center pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service</span>
                  <span className="font-black text-foreground">{serviceName}</span>
                </div>
              )}
            </div>
            
            <Button 
              variant="uiverse" 
              onClick={() => setIsSubmitted(false)}
              className={submitBtnClass ? `h-16 px-10 text-base ${submitBtnClass}` : 'h-16 px-10 text-base'}
            >
              Submit another request
            </Button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)} 
            className={`${cardRadius} uiverse-card p-8 md:p-12 shadow-2xl relative overflow-hidden`}
            noValidate
          >
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />
            
            <div className="relative space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Full name <span className="text-destructive font-normal">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="h-14 rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-bold"
                    aria-invalid={!!errors.name}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-xs font-bold text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Phone <span className="text-destructive font-normal">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="555-123-4567"
                    className="h-14 rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-bold"
                    aria-invalid={!!errors.phone}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-xs font-bold text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Email <span className="text-muted-foreground lowercase opacity-50">(optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@domain.tech"
                  className="h-14 rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-bold"
                  {...register('email')}
                />
              </div>

              {/* Address */}
              <div className="space-y-3">
                <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Service address <span className="text-destructive font-normal">*</span>
                </Label>
                <Input
                  id="address"
                  placeholder="Street, apartment, city, ZIP"
                  className="h-14 rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-bold"
                  aria-invalid={!!errors.address}
                  {...register('address')}
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Date */}
                <div className="space-y-3">
                  <Label htmlFor="preferredDate" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Preferred date <span className="text-destructive font-normal">*</span>
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    min={today}
                    className="h-14 rounded-xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-bold"
                    aria-invalid={!!errors.preferredDate}
                    {...register('preferredDate')}
                  />
                  <p className="text-[11px] font-semibold text-muted-foreground/80">
                    Select a date (format depends on your device/browser).
                  </p>
                </div>
                
                <div className="flex flex-col justify-end pb-1">
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Same-day visits when available — ask when we call</span>
                  </div>
                </div>
              </div>

              {/* Issue description */}
              <div className="space-y-3">
                <Label htmlFor="issueDescription" className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  What&apos;s wrong? <span className="text-destructive font-normal">*</span>
                </Label>
                <Textarea
                  id="issueDescription"
                  placeholder="Appliance type, symptoms, and anything else that helps us prepare…"
                  className="min-h-[120px] rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all font-medium py-4"
                  aria-invalid={!!errors.issueDescription}
                  {...register('issueDescription')}
                />
              </div>

              {/* Security info */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <ShieldCheck className="h-5 w-5 text-primary opacity-60" />
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground leading-relaxed">
                  Submitted over a secure (HTTPS) connection. We use your information only to schedule and provide service — see our{' '}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="uiverse"
                disabled={isSubmitting}
                className={submitBtnClass ? `w-full h-20 text-xl ${submitBtnClass}` : 'w-full h-20 text-xl'}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <Loader size={24} color="currentColor" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Submit booking request'
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
