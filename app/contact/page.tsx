'use client'

import React from 'react'
import { ContactFaqSection } from '@/components/contact-faq'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { trackPhoneClick } from '@/lib/tracking'
import { BOOK_SERVICE_BG, BOOK_SERVICE_FG } from '@/lib/book-service-theme'
import { ContactMessageForm } from '@/components/contact-message-form'
import { EMAIL_SUPPORT, PHONE_DISPLAY, PHONE_TEL, SITE_HOST_DISPLAY, SITE_ORIGIN } from '@/lib/site-config'

const PHONE_NUMBER = PHONE_DISPLAY
const PHONE_HREF = PHONE_TEL

export default function ContactPage() {
  return (
    <div className="bg-white text-[#101921]">
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-32 bg-[#101921] text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/image.png')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#101921]/75" aria-hidden />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
                Contact <span style={{ color: BOOK_SERVICE_BG }}>Us</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                Call, email, or send a booking request. We will confirm availability and next steps during business hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#101921] mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    Local technicians cover the metro and surrounding neighborhoods. Reach out and we will match you with the next available appointment.
                  </p>
                </div>

                {/* Primary Contact Card */}
                {PHONE_NUMBER && PHONE_HREF ? (
                  <div className="rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
                      <Phone className="h-32 w-32 text-[#101921]" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#F15A24] mb-4">Phone</p>
                    <a
                      href={PHONE_HREF}
                      onClick={() => trackPhoneClick()}
                      className="flex items-center gap-4 text-4xl md:text-5xl font-black text-[#101921] hover:text-[#F15A24] transition-colors tracking-tight"
                    >
                      <div className="p-3 rounded-2xl bg-[#F15A24] text-white shadow-lg shadow-[#F15A24]/30">
                        <Phone className="h-8 w-8" />
                      </div>
                      {PHONE_NUMBER}
                    </a>
                    <p className="mt-6 text-sm font-medium text-gray-500">
                      We typically respond during business hours (see below). If we miss you, leave a
                      message or email us.
                    </p>
                  </div>
                ) : null}

                {/* Screenshot-style left panel cards */}
                <div className="rounded-2xl border border-gray-200 bg-[#f7f7fb] overflow-hidden">
                  <div
                    className="py-3 text-center text-sm font-bold"
                    style={{ backgroundColor: BOOK_SERVICE_BG, color: BOOK_SERVICE_FG }}
                  >
                    Book Service
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="rounded-xl bg-white border border-gray-200 p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#eef0ff] flex items-center justify-center text-[#3b3be0]">
                        <MapPin className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#101921]">Service Area</p>
                        <p className="text-sm text-gray-600">New York metro area and nearby communities</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white border border-gray-200 p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#eef0ff] flex items-center justify-center text-[#3b3be0]">
                        <Mail className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#101921]">Email Address</p>
                        <a
                          href={`mailto:${EMAIL_SUPPORT}`}
                          className="text-sm font-semibold text-gray-700 hover:text-[#F15A24] transition-colors break-all"
                        >
                          {EMAIL_SUPPORT}
                        </a>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white border border-gray-200 p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#eef0ff] flex items-center justify-center text-[#3b3be0]">
                        <MapPin className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#101921]">Website</p>
                        <a
                          href={SITE_ORIGIN}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gray-700 hover:text-[#F15A24] transition-colors break-all"
                        >
                          {SITE_HOST_DISPLAY}
                        </a>
                      </div>
                    </div>

                    {PHONE_NUMBER && PHONE_HREF ? (
                      <div className="rounded-xl border border-yellow-200 bg-[#f6c95a] p-5 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-white/70 flex items-center justify-center overflow-hidden">
                          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#101921] font-black">
                            A
                          </div>
                        </div>
                        <div className="min-w-0">
                          <a
                            href={PHONE_HREF}
                            onClick={() => trackPhoneClick()}
                            className="block font-black tracking-tight text-[#101921]"
                          >
                            {PHONE_NUMBER}
                          </a>
                          <p className="text-sm font-medium text-[#101921]/80">
                            Scheduling &amp; service questions
                          </p>
                        </div>
                      </div>
                    ) : null}

                    <div className="rounded-xl bg-white border border-gray-200 p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-[#eef0ff] flex items-center justify-center text-[#3b3be0]">
                        <Clock className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#101921]">Business Hours</p>
                        <p className="text-sm text-gray-600">Mon–Fri: 08:00–18:00 · Sat–Sun: 09:00–16:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="relative">
                <ContactMessageForm />
              </div>
            </div>
          </div>
        </section>

        {/* The new FAQ Section mapping directly to applicare.services/fq/ */}
        <ContactFaqSection />

        {/* Security / Disclaimer Section */}
        <section className="bg-gray-100 py-12 border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-8 text-center flex flex-col items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm mb-4">
              <ShieldCheck className="h-6 w-6 text-[#101921]" />
            </div>
            <p className="text-sm font-medium text-gray-500 text-center leading-relaxed max-w-2xl">
              We coordinate with independent technicians. Licensing and insurance requirements can vary by job and location—verify credentials with the assigned technician when applicable. Information you submit is sent over HTTPS and handled as described in our{' '}
              <a href="/privacy-policy" className="text-[#F15A24] hover:underline font-bold">
                Privacy Policy
              </a>
              ,{' '}
              <a href="/terms" className="text-[#F15A24] hover:underline font-bold">
                Terms
              </a>
              , and{' '}
              <a href="/refund" className="text-[#F15A24] hover:underline font-bold">
                Refund Policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      
    </div>
  )
}
