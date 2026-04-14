'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackPhoneClick } from '@/lib/tracking'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site-config'

const PHONE_NUMBER = PHONE_DISPLAY
const PHONE_HREF = PHONE_TEL

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePhoneClick = () => {
    trackPhoneClick()
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      {/* Top Utility Bar (Navy) */}
      <div className="hidden lg:flex w-full bg-secondary text-white py-2 px-8 justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-6">
          {PHONE_NUMBER && PHONE_HREF ? (
            <>
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span>Phone: {PHONE_NUMBER}</span>
              </a>
              <div className="h-4 w-px bg-white/20" />
            </>
          ) : null}
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Independent technicians (licensing where required)</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <div className="h-4 w-px bg-white/20" />
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 lg:px-8 bg-white" 
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex shrink-0">
          <Link href="/" className="group flex items-center">
            <div className="relative h-12 w-48 transition-transform">
              <Image
                src="/Logo/image.png"
                alt={`${COMPANY_NAME} logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-bold text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <Button 
            asChild 
            className="ml-4 uiverse-button"
          >
            <Link href="/contact">Book Service</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            className="text-secondary hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Animated Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-2xl lg:hidden border-l border-gray-100"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative h-10 w-40">
                    <Image
                      src="/Logo/image.png"
                      alt={`${COMPANY_NAME} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-100 text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-8 flow-root">
                <div className="flex flex-col gap-2">
                  {navigation.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-lg font-bold text-secondary hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button 
                      asChild 
                      className="w-full uiverse-button text-center"
                    >
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        Book Service Today
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )

}
