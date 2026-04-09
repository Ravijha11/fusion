'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { 
  getConsentState, 
  saveConsentState, 
  hasConsentBeenGiven,
  acceptAllConsent,
  rejectNonEssentialConsent,
  type ConsentState 
} from '@/lib/cmp'

interface CookieConsentContextType {
  consentState: ConsentState | null
  hasGivenConsent: boolean
  showBanner: boolean
  acceptAll: () => void
  rejectNonEssential: () => void
  updateConsent: (consent: Partial<ConsentState>) => void
  closeBanner: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}

interface CookieConsentProviderProps {
  children: ReactNode
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consentState, setConsentState] = useState<ConsentState | null>(null)
  const [hasGivenConsent, setHasGivenConsent] = useState(true) // Default true to prevent flash
  const [showBanner, setShowBanner] = useState(false)

  // Load consent state on mount
  useEffect(() => {
    const state = getConsentState()
    const hasConsent = hasConsentBeenGiven()
    
    setConsentState(state)
    setHasGivenConsent(hasConsent)
    
    // Show banner if consent hasn't been given
    if (!hasConsent) {
      // Small delay to prevent layout shift
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = useCallback(() => {
    acceptAllConsent()
    const newState = getConsentState()
    setConsentState(newState)
    setHasGivenConsent(true)
    setShowBanner(false)
  }, [])

  const rejectNonEssential = useCallback(() => {
    rejectNonEssentialConsent()
    const newState = getConsentState()
    setConsentState(newState)
    setHasGivenConsent(true)
    setShowBanner(false)
  }, [])

  const updateConsent = useCallback((consent: Partial<ConsentState>) => {
    saveConsentState(consent)
    const newState = getConsentState()
    setConsentState(newState)
    setHasGivenConsent(true)
    setShowBanner(false)
  }, [])

  const closeBanner = useCallback(() => {
    setShowBanner(false)
  }, [])

  return (
    <CookieConsentContext.Provider
      value={{
        consentState,
        hasGivenConsent,
        showBanner,
        acceptAll,
        rejectNonEssential,
        updateConsent,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}
