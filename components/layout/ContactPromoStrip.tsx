'use client'

import Link from 'next/link'
import { PhoneCall } from 'lucide-react'

const PHONE_DISPLAY = '555-123-4567'
const PHONE_TEL = 'tel:+15551234567'

export function ContactPromoStrip() {
  return (
    <section
      id="contact"
      aria-label="Contact Smart Pro"
      className="relative overflow-hidden border-y border-amber-400/25 bg-gradient-to-br from-[#15153b] via-[#252547] to-[#1a1a3e]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(251,191,36,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 30%, rgba(75,50,195,0.4) 0%, transparent 40%)',
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-7 sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-8">
        <div className="min-w-0 flex-1 space-y-4">
          <p
            className="text-2xl font-semibold text-amber-400 sm:text-3xl"
            style={{ fontFamily: 'var(--font-script), cursive' }}
          >
            Need a technician?
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
            <span className="font-semibold text-amber-300">Call us</span> for a quick response —
            or use the contact form for a written summary of your issue. We respond during business
            hours and outline next steps clearly.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch lg:flex-row lg:items-center">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-900/20 transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a3e]"
          >
            <PhoneCall className="h-4 w-4 shrink-0" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Book online
          </Link>
        </div>
      </div>
    </section>
  )
}
