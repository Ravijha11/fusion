import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from '@/lib/book-service-theme'
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA_DISPLAY } from '@/lib/site-config'
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users,
  ArrowRight,
  Award,
  Heart,
} from 'lucide-react'

const PHONE_NUMBER = PHONE_DISPLAY
const PHONE_HREF = PHONE_TEL

export const metadata: Metadata = {
  title: 'About Us',
  description:
    `Learn how our appliance repair booking service works in ${SERVICE_AREA_DISPLAY}: transparent starting prices, written estimates, and clear terms.`,
  alternates: {
    canonical: '/about',
  },
}

const values = [
  {
    icon: Clock,
    title: 'Flexible scheduling',
    description:
      'Earlier or next-day windows may be available when scheduling allows (not guaranteed). We share estimated arrival windows when you contact us.',
  },
  {
    icon: Shield,
    title: 'Quality Service',
    description:
      'We match requests with qualified technicians. Licensing and insurance requirements can vary by job and location.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'From booking to follow-up, we keep communication clear: what the visit includes, what it costs, and what happens next.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description:
      'We handle common home appliance issues across kitchen and laundry categories. For uncommon models, we can confirm before dispatch.',
  },
]

const stats = [
  { value: 'Flexible', label: 'Appointments (when available)' },
  { value: 'Upfront', label: 'Written estimates' },
  { value: 'Local', label: 'Technician network' },
  { value: 'Clear', label: 'Starting prices' },
]

export default function AboutPage() {
  return (
    <>
      
      <main id="main-content" className="flex-1 bg-white text-[#101921]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-28 bg-[#101921] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/image.png')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#101921]/75" aria-hidden />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
                About <span style={{ color: BOOK_SERVICE_BG }}>Us</span>
              </h1>
              <p className="text-xl text-gray-200 font-medium">
                We help customers schedule appliance repair by collecting the right details up front,
                then connecting the request to a qualified technician. We focus on clear starting
                prices, written estimates before repair work begins, and accessible policies.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 px-7 text-base font-bold rounded-none"
                  style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
                >
                  <Link href="/services">
                    View services &amp; starting prices <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-7 text-base font-semibold rounded-none border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights (no review/rating claims) */}
        <section className="border-y border-gray-200 bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-[#101921]">{stat.value}</p>
                  <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                  <p>
                    When an appliance stops working, customers usually want two things fast:
                    a clear appointment window and a clear price expectation.
                  </p>
                  <p>
                    Our process is designed to collect the details technicians need (symptoms,
                    model information when available, and access notes), so the visit is efficient.
                    Before repair work starts, you receive a written estimate for parts and labor.
                  </p>
                  <p>
                    We keep our policies easy to find — including Privacy Policy, Terms of Service,
                    and Refund Policy — so customers can make informed decisions.
                  </p>
                </div>
              </div>
              
              {/* Image placeholder */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-center p-8">
                    <Users className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
                    <p className="mt-4 text-lg font-medium text-foreground">Serving {SERVICE_AREA_DISPLAY}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-16 lg:py-24" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 id="values-heading" className="text-3xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                What guides everything we do
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 lg:py-24" aria-labelledby="how-we-work-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 id="how-we-work-heading" className="text-3xl font-bold text-foreground text-center">
                How We Work
              </h2>
              <p className="mt-4 text-center text-lg text-muted-foreground">
                No inflated claims — just a straightforward process and clear terms.
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">You Contact Us</h3>
                    <p className="mt-2 text-muted-foreground">
                      Book online or call us to describe your appliance problem. We&apos;ll ask 
                      a few questions to understand the issue.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">We Match You with a Technician</h3>
                    <p className="mt-2 text-muted-foreground">
                      Based on your location and appliance type, we connect you with a qualified 
                      independent technician who can help.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">The Technician Arrives</h3>
                    <p className="mt-2 text-muted-foreground">
                      The visit covers diagnosis and a written estimate. If you approve, the
                      technician proceeds with the repair based on parts availability.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Problem Solved</h3>
                    <p className="mt-2 text-muted-foreground">
                      Once you approve the estimate, the technician completes the repair when possible.
                      Some repairs may require a follow-up visit for parts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="rounded-lg bg-card border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Important Information
              </h3>
              <p className="mt-3 text-muted-foreground">
                We connect customers with independent local technicians. Availability, licensing,
                and insurance requirements can vary by job and location — verify credentials with
                the assigned technician before work begins. Starting prices shown on service pages
                are for the service call/diagnosis and do not include parts and labor for repairs.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Read our{' '}
                <Link href="/privacy-policy" className="font-semibold text-primary underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                ,{' '}
                <Link href="/terms" className="font-semibold text-primary underline-offset-2 hover:underline">
                  Terms of Service
                </Link>
                , and{' '}
                <Link href="/refund" className="font-semibold text-primary underline-offset-2 hover:underline">
                  Refund Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Get Your Appliance Fixed?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Book a repair request online or contact us to discuss your needs.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold">
                <Link href="/contact">
                  Book a Repair
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              
              {PHONE_NUMBER && PHONE_HREF ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold"
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
