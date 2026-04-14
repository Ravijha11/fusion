'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { services } from '@/lib/services'
import { getServiceCardImage } from '@/lib/service-card-images'
import { COMPANY_NAME } from '@/lib/site-config'

const SECTION_BG = '#0A0E14'

export function FusionFeaturedServices() {
  return (
    <section
      className="relative py-16 sm:py-24"
      style={{ background: SECTION_BG }}
      aria-labelledby="our-services-heading"
      id="services"
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10"
        style={{
          height: 'clamp(80px, 12vh, 140px)',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.08) 65%, transparent 100%)',
        }}
      />
      <div className="relative z-20 mx-auto mt-2 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full overflow-visible rounded-t-[28px] rounded-b-[25px] bg-white px-6 py-12 shadow-xl sm:px-10 sm:py-16">
          <motion.div
            className="s2-heading-wrap mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="hor-wrap align-center max-w-4xl mx-auto text-center">
              <h2 id="our-services-heading" className="txt-56 text-gray-900">
                <span className="thin">
                  <strong>What we fix</strong>
                </span>
              </h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-gray-700 sm:text-xl">
                Starting prices for the service call and diagnosis are on each service page. The
                technician explains parts and labor costs in a written estimate before repair work
                begins.
              </p>
            </div>
          </motion.div>

          <div className="my-8 border-t border-gray-200 sm:my-10" aria-hidden />

          <p className="mb-10 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            All our services
          </p>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
            {services.map((svc, i) => {
              const { src, contain } = getServiceCardImage(svc.slug)
              return (
                <motion.article
                  key={svc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: Math.min(i * 0.04, 0.4) }}
                >
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group block h-full text-inherit no-underline"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80 transition group-hover:ring-[#4b32c3]/30 group-hover:shadow-md">
                      <Image
                        src={src}
                        alt={`${svc.name} — ${COMPANY_NAME}`}
                        fill
                        className={contain ? 'object-contain object-center p-2' : 'object-cover object-center'}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="case-slide-txt mt-4">
                      <h3 className="txt-40 text-[clamp(1.25rem,2.2vw,1.75rem)]">{svc.name}</h3>
                      <p className="txt-20 mt-1 font-semibold text-amber-800">
                        Starting at {svc.startingPrice}
                      </p>
                      <p className="txt-20 mt-2 line-clamp-3 text-gray-600">{svc.description}</p>
                      <span className="mt-3 inline-flex text-sm font-bold text-[#4b32c3] group-hover:underline">
                        View details &amp; pricing
                      </span>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-14 border-t border-gray-200 pt-10">
            <p className="mx-auto max-w-2xl text-center text-sm text-gray-600 sm:text-base">
              Every service page lists the same starting price you see here, plus what the visit
              includes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
