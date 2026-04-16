'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { COMPANY_NAME, PHONE_DISPLAY, SERVICE_AREA_CITY } from '@/lib/site-config'

const strip1 = [
  'Scheduling options',
  'Licensed technicians',
  'Refrigeration',
  'Laundry',
  'Cooking appliances',
  'Dishwashers',
  'Clear quotes',
  `${SERVICE_AREA_CITY} area`,
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

const AVATAR_SRC = '/Logo/image.png'

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
                    We focus on clear scheduling windows, written estimates after diagnosis, and
                    technicians who respect your home.
                  </p>
                  <div className="hor-wrap gap-2">
                    <div
                      className="ava-128"
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 9999,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
                        padding: 10,
                      }}
                      aria-hidden
                    >
                      <Image
                        src={AVATAR_SRC}
                        width={128}
                        height={128}
                        loading="lazy"
                        alt={`${COMPANY_NAME} logo`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="ver-wrap gap-025">
                      <div className="txt-32">
                        <strong>{COMPANY_NAME}</strong>
                        {PHONE_DISPLAY ? (
                          <span className="txt-24" style={{ color: '#64748b' }}>
                            {' '}
                            {PHONE_DISPLAY}
                          </span>
                        ) : null}
                      </div>
                      <div className="txt-24">Appliance repair · {SERVICE_AREA_CITY}</div>
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
