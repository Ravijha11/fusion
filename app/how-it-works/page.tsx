import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from '@/lib/book-service-theme'
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA_DISPLAY } from '@/lib/site-config'
import { 
  Phone, 
  ArrowRight,
  CalendarCheck,
  UserCheck,
  Wrench,
  CheckCircle,
  Clock,
  Shield,
  CreditCard,
} from 'lucide-react'

const PHONE_NUMBER = PHONE_DISPLAY
const PHONE_HREF = PHONE_TEL

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'How our appliance repair booking works: request service online or by phone, get a written estimate, and approve repairs before work begins.',
  alternates: {
    canonical: '/how-it-works',
  },
}

const steps = [
  {
    number: 1,
    icon: CalendarCheck,
    title: 'Book Online or Call',
    description:
      'Send a booking request in a few minutes. Choose a preferred date. Earlier appointment windows may be available depending on scheduling (not guaranteed).',
    details: [
      'Fill out our simple online form',
      ...(PHONE_NUMBER ? [`Or call us at ${PHONE_NUMBER}`] : []),
      'Describe your appliance issue',
      'Choose your preferred appointment time',
    ],
  },
  {
    number: 2,
    icon: UserCheck,
    title: 'We Match You with a Technician',
    description: 'Based on your location and appliance type, we connect you with a qualified independent technician who specializes in your repair.',
    details: [
      'Technician is assigned based on expertise',
      'We confirm your request during business hours',
      'Arrival windows depend on scheduling and parts',
      'Verify credentials on arrival when applicable',
    ],
  },
  {
    number: 3,
    icon: Wrench,
    title: 'Technician Arrives & Diagnoses',
    description: 'Your technician arrives at your home with tools and common parts. They diagnose the issue and provide a written estimate before any repair work begins.',
    details: [
      'Technician arrives in scheduled window',
      'Full inspection of your appliance',
      'Clear explanation of the problem',
      'Written estimate before repair work begins',
    ],
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Problem Solved',
    description:
      'If you approve the estimate, the technician completes the repair when possible. Some jobs require a follow-up visit if parts must be ordered.',
    details: [
      'Repair completed efficiently',
      'Technician tests everything works',
      'Pay directly to the technician',
      'Warranty details are provided by the technician',
    ],
  },
]

const faqs = [
  {
    question: 'How quickly can I get service?',
    answer:
      'Earlier or next-day windows may be available depending on technician availability (not guaranteed). When you call or book, we share the earliest options we can offer.',
  },
  {
    question: 'How much will my repair cost?',
    answer:
      'Each service page shows a starting price for the service call and diagnosis. After diagnosing the issue, the technician provides a written estimate for parts and labor before starting any repair work.',
  },
  {
    question: 'Who are the technicians?',
    answer:
      `We connect customers with independent appliance repair technicians in ${SERVICE_AREA_DISPLAY}. Licensing and insurance requirements can vary by job and location—ask to see credentials when applicable.`,
  },
  {
    question: 'What if the repair can\'t be completed in one visit?',
    answer: 'If special parts need to be ordered, your technician will schedule a follow-up visit at no additional service call fee. They\'ll explain the timeline and keep you informed.',
  },
  {
    question: 'What brands do you service?',
    answer:
      'We service many major appliance brands and models. If you\'re unsure whether your appliance is covered, include the brand/model in your booking request and we\'ll confirm.',
  },
  {
    question: 'Is there a warranty on repairs?',
    answer:
      'Warranty terms are provided by the individual technician and can vary by repair type and parts used. Discuss warranty details before approving the repair.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-28 bg-[#101921] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/image.png')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#101921]/75" aria-hidden />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
              How It Works
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              A simple process: request service, get a written estimate, and approve repairs before work begins.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="h-12 px-7 text-base font-bold rounded-none"
                style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
              >
                <Link href="/contact">
                  Book Service <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-7 text-base font-semibold rounded-none border-white/30 text-white hover:bg-white/10">
                <Link href="/services">View services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 lg:py-24 bg-white text-[#101921]" aria-labelledby="steps-heading">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <h2 id="steps-heading" className="sr-only">Steps to Get Your Appliance Repaired</h2>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`flex flex-col gap-8 lg:flex-row lg:gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step number and icon */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <step.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-600">
                      {step.description}
                    </p>
                    
                    <ul className="mt-6 space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle 
                            className="h-5 w-5 text-primary shrink-0 mt-0.5" 
                            aria-hidden="true" 
                          />
                          <span className="text-[#101921]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16 lg:py-24" aria-labelledby="why-us-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <h2 id="why-us-heading" className="text-3xl font-bold text-[#101921]">
                Why choose us?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Clear process, clear terms, and clear pricing
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#101921] text-white mb-4">
                  <Clock className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-[#101921]">Scheduling options</h3>
                <p className="mt-3 text-gray-600">
                  Earlier or next-day windows may be available depending on technician availability (not guaranteed).
                </p>
              </div>
              
              <div className="text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#101921] text-white mb-4">
                  <CreditCard className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-[#101921]">Written estimates</h3>
                <p className="mt-3 text-gray-600">
                  Starting prices are shown on service pages. After diagnosis, you receive a written estimate before any repair work starts.
                </p>
              </div>
              
              <div className="text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#101921] text-white mb-4">
                  <Shield className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-[#101921]">Clear terms</h3>
                <p className="mt-3 text-gray-600">
                  We share next steps clearly and link to our policies so you can make an informed decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 lg:py-24 bg-white" aria-labelledby="faqs-heading">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="text-center">
              <h2 id="faqs-heading" className="text-3xl font-bold text-[#101921]">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Common questions about our repair service
              </p>
            </div>
            
            <div className="mt-12 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-lg font-semibold text-[#101921]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              See also our{' '}
              <Link href="/privacy-policy" className="font-semibold text-[#F15A24] hover:underline">
                Privacy Policy
              </Link>
              ,{' '}
              <Link href="/terms" className="font-semibold text-[#F15A24] hover:underline">
                Terms
              </Link>
              , and{' '}
              <Link href="/refund" className="font-semibold text-[#F15A24] hover:underline">
                Refund Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-[#101921] sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Send a booking request or call during business hours to confirm the earliest available appointment.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-none"
                style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
              >
                <Link href="/contact">
                  Book Service
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              
              {PHONE_NUMBER && PHONE_HREF ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold rounded-none"
                >
                  <a href={PHONE_HREF} aria-label={`Call us at ${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Call {PHONE_NUMBER}
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}
