'use client'

import { motion } from 'framer-motion'

export function FusionValueCards() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A0E14] py-20 sm:py-28"
      aria-labelledby="value-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            'radial-gradient(900px 520px at 50% 20%, rgba(255,255,255,0.18) 0%, rgba(214,218,236,0.12) 30%, rgba(91,91,184,0.20) 55%, rgba(10,14,20,0.0) 100%), radial-gradient(1100px 640px at 50% 105%, rgba(91,91,184,0.30) 0%, rgba(10,14,20,0.0) 65%)',
        }}
      />
      <div className="relative z-[1] mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="value-heading"
          className="text-center text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl"
          style={{
            textShadow: '0 2px 18px rgba(0,0,0,0.45), 0 14px 60px rgba(91,91,184,0.18)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Thorough{' '}
          <span
            className="font-bold text-amber-400"
            style={{ fontFamily: 'var(--font-script), system-ui, sans-serif' }}
          >
            diagnostics
          </span>
          <br />
          <span className="font-bold">and clear next steps</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-center text-lg font-semibold text-white sm:text-2xl"
          style={{ textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Detailed diagnostics, estimates that list parts and labor when applicable, and clear
          communication from booking to completion.
        </motion.p>
      </div>
    </section>
  )
}
