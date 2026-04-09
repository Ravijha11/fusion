'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How quickly can you come out?',
    a: 'We offer same-day and next-day appointments across much of the New York metro when parts and technician availability allow. When you call or book online, we share realistic arrival windows.',
  },
  {
    q: 'How does pricing work?',
    a: 'Each service page lists a starting price for the service call and diagnosis. Before we begin repair work, you receive a written estimate for parts and labor so you can approve the next step.',
  },
  {
    q: 'Do you warranty your work?',
    a: 'Warranty terms vary by technician, repair type, and parts used. If a warranty applies, the technician will explain the terms before you approve the repair.',
  },
  {
    q: 'Which brands do you service?',
    a: 'We service most major residential brands for kitchen, laundry, and common home electronics. If you have a niche or commercial unit, contact us with the model number and we will confirm.',
  },
  {
    q: 'Is my data safe when I use your contact form?',
    a: 'We use your information only to respond to service requests, as described in our Privacy Policy. We do not sell your personal data.',
  },
]

export function FusionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="py-20 sm:py-28"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: '#dbe3ee' }}
      id="faq-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.aside
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl bg-[#4b32c3] p-7 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:p-9 lg:sticky lg:top-24">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#ffc700] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] sm:h-20 sm:w-20">
                  <Image
                    src="/Logo/digital-bull-logo-removebg-preview.png"
                    alt="DigitalBull logo"
                    fill
                    sizes="80px"
                    className="rounded-full object-contain p-2.5"
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-xl font-semibold leading-tight sm:text-2xl">
                    DigitalBull
                  </div>
                  <div className="text-sm text-white/80 sm:text-base">Appliance repair team</div>
                </div>
              </div>

              <p className="mt-6 text-2xl font-light leading-tight sm:text-3xl">
                Not sure which service you need? Tell us the symptom — we will point you to the right
                page and price range.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:text-base"
              >
                Contact us
              </Link>
            </div>
          </motion.aside>

          <div className="lg:col-span-7">
            <h2 id="faq-heading" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Common questions
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Straight answers — see also our{' '}
              <Link href="/privacy-policy" className="font-semibold text-[#4b32c3] underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              ,{' '}
              <Link href="/refund" className="font-semibold text-[#4b32c3] underline-offset-2 hover:underline">
                Refund Policy
              </Link>
              , and{' '}
              <Link href="/terms" className="font-semibold text-[#4b32c3] underline-offset-2 hover:underline">
                Terms
              </Link>
              .
            </p>

            <ul className="mt-10 space-y-3">
              {faqs.map((item, index) => {
                const open = openIndex === index
                return (
                  <li
                    key={item.q}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.q}</span>
                      <span
                        className={cn(
                          'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition',
                          open && 'rotate-45',
                        )}
                        aria-hidden
                      >
                        <Plus className="h-5 w-5 text-slate-700" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 text-slate-600 sm:px-6 sm:pb-6">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
