'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/** All hero images under public/hero-section — shown one at a time, sliding horizontally */
const HERO_IMAGES = [
  '/hero-section/1.png',
  '/hero-section/2.png',
  '/hero-section/3.png',
  '/hero-section/4.png',
] as const

const HERO_LINES = [
  'Appliance repair booking when your kitchen or laundry room stops cold.',
  'Qualified technicians, clear starting prices, and written estimates before repair work begins.',
  'Refrigerators, washers, ovens, dishwashers, TVs, and more — we come to you.',
  'Book online or call — visits typically include assessment and a written estimate for approved work.',
]

const ROTATE_INTERVAL_MS = 3500

export function FusionHero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % Math.max(HERO_LINES.length, HERO_IMAGES.length))
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  const slideIndex = lineIndex % HERO_IMAGES.length
  const slidePercent = 100 / HERO_IMAGES.length

  return (
    <section
      className="hero-merged relative min-h-screen md:min-h-0 md:h-[100vh]"
      style={{
        background:
          'radial-gradient(circle at center, #5b5bb8 0%, #4f4fa3 40%, #3d3d8c 70%, #2a2a6a 85%, #0A0E14 100%)',
      }}
      aria-labelledby="hero-heading"
    >
      <div className="hero-sticky hero-sticky-responsive relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 md:sticky md:top-0 md:h-screen">
        {/* Horizontally sliding image strip — one full viewport per image */}
        <div className="people-wrap absolute inset-0 overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ width: `${HERO_IMAGES.length * 100}%` }}
            animate={{ x: `${-slideIndex * slidePercent}%` }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.65, ease: [0.32, 0.72, 0, 1] }
            }
            aria-hidden
          >
            {HERO_IMAGES.map((src, i) => (
              <div
                key={src}
                className="hero-image-layer relative h-full shrink-0 overflow-hidden"
                style={{ width: `${slidePercent}%` }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                  style={{ objectPosition: 'center' }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background: `
              radial-gradient(
                ellipse 90% 80% at 50% 100%,
                transparent 35%,
                rgba(0, 0, 0, 0.15) 60%,
                rgba(0, 0, 0, 0.4) 100%
              ),
              radial-gradient(
                ellipse 100% 100% at 50% 50%,
                transparent 40%,
                rgba(0, 0, 0, 0.08) 70%,
                rgba(0, 0, 0, 0.25) 100%
              )
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[22%]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #0A0E14 100%)',
          }}
        />

        <div className="hero-content relative z-10 w-full max-w-4xl px-2 text-center text-white">
          <div className="hero-heading-wrap">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              DigitalBull · New York
            </p>
            <h1
              id="hero-heading"
              className="heading font-bold leading-[1.2] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif' }}
            >
              <span
                className="block min-h-[3.25rem] sm:min-h-[3.75rem] md:min-h-[4.25rem] lg:min-h-[4.75rem] text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl"
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={lineIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="block text-slate-50 drop-shadow-[0_6px_28px_rgba(0,0,0,0.65)]"
                  >
                    {HERO_LINES[lineIndex % HERO_LINES.length]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-amber-400 px-8 py-4 text-lg font-bold tracking-tight text-gray-900 shadow-lg transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-transparent sm:px-10 sm:py-4 sm:text-xl"
              >
                Book a repair
              </Link>
              <Link
                href="/services"
                className="text-base font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                View services &amp; pricing
              </Link>
            </div>
            <p className="txt-24 mt-6 text-base font-normal text-white/60 sm:mt-8 sm:text-lg sm:text-xl">
              scroll to see more
            </p>

            {/* Slide indicators — which image is showing */}
            <div
              className="mt-8 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Hero images"
            >
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === i}
                  aria-label={`Show slide ${i + 1} of ${HERO_IMAGES.length}`}
                  className={`h-2 rounded-full transition-all ${
                    slideIndex === i ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  onClick={() => setLineIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
