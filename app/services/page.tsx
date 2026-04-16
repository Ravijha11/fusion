import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/services'
import { Phone, ArrowRight } from 'lucide-react'
import { getServiceCardImage } from '@/lib/service-card-images'
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from '@/lib/book-service-theme'
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA_CITY } from '@/lib/site-config'

const PHONE_NUMBER = PHONE_DISPLAY
const PHONE_HREF = PHONE_TEL

export const metadata: Metadata = {
  title: 'Appliance Repair Services',
  description:
    `Professional appliance repair services in ${SERVICE_AREA_CITY}. We repair refrigerators, washing machines, dryers, ovens, dishwashers, TVs, and more. Starting prices and written estimates before repair work.`,
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
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
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
              Services &amp; <span style={{ color: BOOK_SERVICE_BG }}>starting prices</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
              Choose your appliance category to see common issues and starting prices for the service call &amp; diagnosis.
              Earlier appointment windows may be available depending on scheduling (not guaranteed).
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
              {PHONE_NUMBER && PHONE_HREF ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-7 text-base font-semibold rounded-none border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  <a href={PHONE_HREF} aria-label={`Call us at ${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    {PHONE_NUMBER}
                  </a>
                </Button>
              ) : null}
            </div>

            <p className="mt-8 text-sm text-white/70 max-w-3xl mx-auto">
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
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white text-[#101921]" aria-labelledby="all-services-heading">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 id="all-services-heading" className="sr-only">
              All Services
            </h2>
            
            {/* Kitchen Appliances */}
            <div>
              <h3 className="text-2xl font-black text-[#101921] mb-6">
                Kitchen Appliances
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter(s => ['refrigerator', 'oven-range', 'dishwasher', 'microwave'].includes(s.slug))
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      title={service.name}
                      description={service.description}
                      href={`/services/${service.slug}`}
                      startingPrice={service.startingPrice}
                      bgImage={getServiceCardImage(service.slug).src}
                    />
                  ))}
              </div>
            </div>

            {/* Laundry Appliances */}
            <div className="mt-12">
              <h3 className="text-2xl font-black text-[#101921] mb-6">
                Laundry Appliances
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter(s => ['washing-machine', 'dryer'].includes(s.slug))
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      title={service.name}
                      description={service.description}
                      href={`/services/${service.slug}`}
                      startingPrice={service.startingPrice}
                      bgImage={getServiceCardImage(service.slug).src}
                    />
                  ))}
              </div>
            </div>

            {/* Climate & Air */}
            <div className="mt-12">
              <h3 className="text-2xl font-black text-[#101921] mb-6">
                Climate & Air
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter(s => ['air-conditioner'].includes(s.slug))
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      title={service.name}
                      description={service.description}
                      href={`/services/${service.slug}`}
                      startingPrice={service.startingPrice}
                      bgImage={getServiceCardImage(service.slug).src}
                    />
                  ))}
              </div>
            </div>

            {/* Electronics */}
            <div className="mt-12">
              <h3 className="text-2xl font-black text-[#101921] mb-6">
                Electronics
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter(s => ['television', 'computer'].includes(s.slug))
                  .map((service) => (
                    <ServiceCard
                      key={service.slug}
                      title={service.name}
                      description={service.description}
                      href={`/services/${service.slug}`}
                      startingPrice={service.startingPrice}
                      bgImage={getServiceCardImage(service.slug).src}
                    />
                  ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-black text-[#101921] sm:text-4xl">
              Don&apos;t See Your Appliance?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We repair many other appliances not listed here. Contact us to discuss your repair needs.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-none"
                style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}
