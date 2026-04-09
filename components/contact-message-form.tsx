'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, CheckCircle } from 'lucide-react'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactMessageForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900))
    setSent(true)
    reset()
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-white border border-gray-200 p-8">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700 border border-green-100">
            <CheckCircle className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#101921]">Message sent</h3>
            <p className="mt-1 text-sm text-gray-600">
              Thanks — we&apos;ll reply during business hours.
            </p>
          </div>
        </div>
        <Button
          type="button"
          className="mt-6 w-full rounded-none bg-[#F15A24] text-white hover:bg-[#D94A1A]"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl bg-[#f5efe9] p-8 border border-gray-200">
      <h3 className="text-xl font-bold text-[#101921] mb-6">Leave a Message</h3>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-xs font-semibold text-gray-600">
            First Name
          </Label>
          <Input id="firstName" className="bg-white" aria-invalid={!!errors.firstName} {...register('firstName')} />
          {errors.firstName && (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-xs font-semibold text-gray-600">
            Last Name
          </Label>
          <Input id="lastName" className="bg-white" aria-invalid={!!errors.lastName} {...register('lastName')} />
          {errors.lastName && (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 mt-5">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-semibold text-gray-600">
            Phone Number
          </Label>
          <Input id="phone" type="tel" className="bg-white" aria-invalid={!!errors.phone} {...register('phone')} />
          {errors.phone && (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold text-gray-600">
            Email Address
          </Label>
          <Input id="email" type="email" className="bg-white" aria-invalid={!!errors.email} {...register('email')} />
          {errors.email && (
            <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2 mt-5">
        <Label htmlFor="subject" className="text-xs font-semibold text-gray-600">
          Subject
        </Label>
        <Input id="subject" className="bg-white" aria-invalid={!!errors.subject} {...register('subject')} />
        {errors.subject && (
          <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2 mt-5">
        <Label htmlFor="message" className="text-xs font-semibold text-gray-600">
          Message
        </Label>
        <Textarea
          id="message"
          className="bg-white min-h-[140px]"
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden /> {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-none bg-[#F15A24] text-white hover:bg-[#D94A1A]"
      >
        {isSubmitting ? 'Submitting…' : 'Submit'}
      </Button>
    </form>
  )
}

