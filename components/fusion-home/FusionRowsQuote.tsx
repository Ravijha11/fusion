'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const strip1 = [
  'Scheduling options',
  'Licensed technicians',
  'Refrigeration',
  'Laundry',
  'Cooking appliances',
  'Dishwashers',
  'Clear quotes',
  'New York metro',
  'In-home repair',
  'Warranty on parts',
]

const strip2 = [
  'Washer & dryer',
  'Oven & range',
  'Microwave',
  'TV & display',
  'Computer help',
  'AC service',
  'Diagnostics first',
  'No hidden fees',
  'Book online',
]

const AVATAR_SRC = '/placeholder-user.jpg'

const PHONE_DISPLAY = '555-123-4567'

export function FusionRowsQuote() {
  return (
    <div className="overflow-hide">
      <section data-anim="rows" className="s-global z-5">
        <div className="padding-global">
          <div className="container big center">
            <div className="rows-wrap">
              <motion.div
                className="row move-left"
                animate={{ x: ['-56.3899em', '56.3899em'] }}
                transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
              >
                {[...strip1, ...strip1, ...strip1].map((t, i) => (
                  <div key={`${t}-${i}`} className="bg-txt">
                    {t}
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="row move-right"
                animate={{ x: ['56.3899em', '-56.3899em'] }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              >
                {[...strip2, ...strip2, ...strip2].map((t, i) => (
                  <div key={`${t}-${i}`} className="bg-txt">
                    {t}
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="row move-left"
                animate={{ x: ['-40em', '40em'] }}
                transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
              >
                {strip1.map((t) => (
                  <span key={t} className="bg-chip">
                    {t}
                  </span>
                ))}
                {strip2.map((t) => (
                  <span key={t} className="bg-chip">
                    {t}
                  </span>
                ))}
                {strip1.map((t) => (
                  <span key={`${t}-b`} className="bg-chip">
                    {t}
                  </span>
                ))}
                {strip2.map((t) => (
                  <span key={`${t}-b`} className="bg-chip">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="quotecard-wrap"
              initial={{ opacity: 0, y: 16, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="card">
                <div className="ver-wrap gap-3">
                  <p className="quote-icon">&ldquo;</p>
                  <p className="txt-56 quote">
                    We fix appliances the right way: honest timelines, upfront pricing, and technicians
                    who respect your home.
                  </p>
                  <div className="hor-wrap gap-2">
                    <Image
                      src={AVATAR_SRC}
                      width={128}
                      height={128}
                      loading="lazy"
                      alt="Smart Pro customer care"
                      className="ava-128"
                    />
                    <div className="ver-wrap gap-025">
                      <div className="txt-32">
                        <strong>Smart Pro</strong>{' '}
                        <span className="txt-24" style={{ color: '#64748b' }}>
                          {PHONE_DISPLAY}
                        </span>
                      </div>
                      <div className="txt-24">Appliance repair · New York</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
