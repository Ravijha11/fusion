'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
const PHONE_NUMBER = '555-123-4567'
const PHONE_HREF = `tel:+1${PHONE_NUMBER.replace(/-/g, '')}`

const services = [
  { name: 'Refrigerator Repair', href: '/services/refrigerator' },
  { name: 'Washing Machine Repair', href: '/services/washing-machine' },
  { name: 'Dryer Repair', href: '/services/dryer' },
  { name: 'Oven & Range Repair', href: '/services/oven-range' },
  { name: 'Dishwasher Repair', href: '/services/dishwasher' },
  { name: 'TV Repair', href: '/services/television' },
]

const company = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-white/10 py-16 text-white"
      style={{
        background:
          'linear-gradient(135deg, #d6daec 0%, #6b7fd7 35%, #4b4b92 70%, #2d2d5a 100%)',
      }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand and contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <div className="relative h-16 w-56">
                <Image
                  src="/Logo/digital-bull-logo-removebg-preview.png"
                  alt="DigitalBull logo"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </Link>

            <p className="mt-6 text-[15px] leading-relaxed text-white/85">
              Licensed appliance repair in the New York area. Clear pricing on every service page —
              see our{' '}
              <Link href="/refund" className="font-semibold text-amber-200 underline-offset-2 hover:underline">
                Refund Policy
              </Link>
              .
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-[15px] font-medium text-white/90 transition-colors hover:text-amber-200"
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <div className="rounded-full bg-white/10 p-2">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href="mailto:support@digitalbull.co.in"
                className="flex items-center gap-3 text-[15px] font-medium text-white/90 transition-colors hover:text-amber-200"
              >
                <div className="rounded-full bg-white/10 p-2">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span>support@digitalbull.co.in</span>
              </a>
              <a
                href="https://www.digitalbull.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] font-medium text-white/90 transition-colors hover:text-amber-200"
              >
                <div className="rounded-full bg-white/10 p-2">
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span>www.digitalbull.co.in</span>
              </a>
              <div className="flex items-start gap-3 text-[15px] font-medium text-white/90">
                <div className="rounded-full bg-white/10 p-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="mt-1">Serving all local areas</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] text-white/80 transition-colors hover:text-amber-200"
                  >
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] text-white/80 transition-colors hover:text-amber-200"
                  >
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] text-white/80 transition-colors hover:text-amber-200"
                  >
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="text-sm text-white/75">
            &copy; {currentYear} DigitalBull. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-white/80 transition-colors hover:text-amber-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/80 transition-colors hover:text-amber-200"
            >
              Terms of Service
            </Link>
            <Link href="/refund" className="text-sm text-white/80 transition-colors hover:text-amber-200">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
