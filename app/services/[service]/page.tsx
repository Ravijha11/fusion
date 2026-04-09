import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { BookingForm } from '@/components/booking-form'
import { Button } from '@/components/ui/button'
import { services, getServiceBySlug } from '@/lib/services'
import { getServiceCardImage } from '@/lib/service-card-images'
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from '@/lib/book-service-theme'
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield, 
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

const PHONE_NUMBER = '555-123-4567'
const PHONE_HREF = `tel:+1${PHONE_NUMBER.replace(/-/g, '')}`

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ service: string }> 
}): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ service: string }> 
}) {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  
  if (!service) {
    notFound()
  }

  // Generate Service structured data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Smart Pro',
      telephone: '+1-555-123-4567',
    },
    areaServed: {
      '@type': 'City',
      name: 'New York',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.startingPrice.replace('$', ''),
        priceCurrency: 'USD',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
        },
      },
    },
  }

  return (
    <>
      
      <main id="main-content" className="flex-1">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-28 bg-[#101921] text-white">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={service.slug === 'refrigerator' ? '/images/repair/ref-repair-1.jpg' : getServiceCardImage(service.slug).src}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#101921]/75" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">{service.shortName}</li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-balance">
                  {service.heroHeadline}
                </h1>

                <p className="mt-6 text-xl text-white/80 font-medium">
                  {service.longDescription}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="text-2xl font-black" style={{ color: BOOK_SERVICE_BG }}>
                    Starting at {service.startingPrice}
                  </span>
                  <span className="text-white/70">Service call &amp; diagnosis</span>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 px-7 text-base font-bold rounded-none"
                    style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
                  >
                    <a href="#booking-form">
                      Book Service <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-7 text-base font-semibold rounded-none border-white/30 text-white hover:bg-white/10"
                  >
                    <a href={PHONE_HREF} aria-label={`Call us at ${PHONE_NUMBER}`}>
                      <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                      {PHONE_NUMBER}
                    </a>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-semibold text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                    <span>Same-day options when available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" aria-hidden="true" />
                    <span>Qualified technicians (licensing where required)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" aria-hidden="true" />
                    <span>Written estimate before repairs</span>
                  </div>
                </div>

                <p className="mt-8 text-sm text-white/70 max-w-3xl">
                  Starting prices are for the service call/diagnosis. If you approve repairs, the technician provides a written
                  estimate for parts and labor before work begins. See our{' '}
                  <Link href="/terms" className="font-semibold underline-offset-2 hover:underline" style={{ color: BOOK_SERVICE_BG }}>
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href="/refund" className="font-semibold underline-offset-2 hover:underline" style={{ color: BOOK_SERVICE_BG }}>
                    Refund Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-widest text-white/70">Need help now?</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-3 flex items-center gap-3 text-2xl font-black text-white hover:text-white/90"
                    aria-label={`Call us at ${PHONE_NUMBER}`}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}>
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {PHONE_NUMBER}
                  </a>
                  <p className="mt-3 text-sm text-white/70">
                    We respond during business hours. You can also submit a booking request online.
                  </p>
                  <Button
                    asChild
                    className="mt-6 w-full h-12 rounded-none font-bold"
                    style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
                  >
                    <a href="#booking-form">Request an appointment</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Gallery Section for Refrigerator */}
        {service.slug === 'refrigerator' && (
          <section className="py-12 bg-muted/30" aria-labelledby="gallery-heading">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 id="gallery-heading" className="text-2xl font-bold text-foreground mb-8 text-center uppercase tracking-wider">
                Our Expert <span className="text-primary">Technicians in Action</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-square overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary transition-all group">
                    <Image
                      src={`/images/repair/ref-repair-${num}.jpg`}
                      alt={`Refrigerator repair specialist - ${num}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">Repair Protocol {num}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-muted-foreground font-medium">
                Example photos from prior visits. Availability and results depend on the issue and parts.
              </p>
            </div>
          </section>
        )}

        {/* Common Faults Section */}
        <section className="py-16 lg:py-20" aria-labelledby="common-faults-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 
                  id="common-faults-heading" 
                  className="text-3xl font-bold text-foreground"
                >
                  Common {service.shortName} Problems We Fix
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our experienced technicians can diagnose and repair these issues and more:
                </p>
                
                <ul className="mt-8 space-y-4">
                  {service.commonFaults.map((fault, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle 
                        className="h-6 w-6 text-primary shrink-0 mt-0.5" 
                        aria-hidden="true" 
                      />
                      <span className="text-lg text-foreground">{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#101921] text-white">
                    <AlertCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-[#101921]">When to call a technician</h3>
                    <p className="mt-2 text-gray-600">
                      If you&apos;re seeing repeated errors, leaks, electrical smells, or the unit won&apos;t power on, it&apos;s safer to stop using it and request service.
                      DIY repairs can be unsafe and may affect manufacturer warranty coverage.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Need help now?</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-3 inline-flex items-center gap-3 text-2xl font-black text-[#101921] hover:opacity-90 transition-opacity"
                    aria-label={`Call us at ${PHONE_NUMBER}`}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#101921]" style={{ backgroundColor: BOOK_SERVICE_BG }}>
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {PHONE_NUMBER}
                  </a>
                  <p className="mt-2 text-sm text-gray-600">
                    Or submit a booking request below. We confirm availability during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-muted/30 py-16 lg:py-20" aria-labelledby="how-it-works-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 
                id="how-it-works-heading" 
                className="text-3xl font-bold text-foreground"
              >
                How {service.shortName} Repair Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your {service.shortName.toLowerCase()} fixed in three simple steps
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {service.steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center uiverse-card p-8 rounded-2xl"
                >
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground border-4 border-background shadow-lg">
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground font-medium">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section 
          id="booking-form" 
          className="bg-gray-100 py-16 lg:py-20 scroll-mt-20" 
          aria-labelledby="booking-heading"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 
                  id="booking-heading" 
                  className="text-3xl font-bold text-foreground sm:text-4xl"
                >
                  Book Your {service.shortName} Repair
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Submit the form and we will confirm availability and next steps during business hours.
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-lg text-foreground">Same-day appointments when available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-lg text-foreground">Starting at {service.startingPrice} service call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-lg text-foreground">Qualified technicians (licensing/insurance where required)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-lg text-foreground">Written estimate before repairs</span>
                  </div>
                </div>
                
                <div className="mt-8 rounded-2xl uiverse-card p-8">
                  <p className="text-lg font-semibold">
                    Prefer to call?
                  </p>
                  <a 
                    href={PHONE_HREF}
                    className="mt-2 flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Call us at ${PHONE_NUMBER}`}
                  >
                    <Phone className="h-6 w-6" aria-hidden="true" />
                    {PHONE_NUMBER}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Available Mon-Fri 8am-6pm, Sat 9am-4pm
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    See{' '}
                    <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    ,{' '}
                    <Link href="/terms" className="font-semibold text-primary hover:underline">
                      Terms
                    </Link>
                    , and{' '}
                    <Link href="/refund" className="font-semibold text-primary hover:underline">
                      Refund Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              
              <div>
                <BookingForm 
                  serviceType={service.slug} 
                  serviceName={service.name}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 lg:py-20" aria-labelledby="related-services-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 
              id="related-services-heading" 
              className="text-2xl font-bold text-foreground"
            >
              Other Services You May Need
            </h2>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {services
                .filter(s => s.slug !== service.slug)
                .slice(0, 6)
                .map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/services/${relatedService.slug}`}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-foreground hover:border-primary/50 hover:bg-accent transition-colors"
                  >
                    {relatedService.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}
