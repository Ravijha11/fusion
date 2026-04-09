/**
 * Consent Management Platform (CMP) utilities
 * Manages user consent for advertising and analytics tracking
 * Required for Microsoft UET compliance in EU/UK/Switzerland
 */

export type ConsentType = 'ad_storage' | 'analytics_storage' | 'functionality_storage'

export interface ConsentState {
  ad_storage: boolean
  analytics_storage: boolean
  functionality_storage: boolean
  timestamp: number
}

const CONSENT_KEY = 'smart_pro_consent'
const CONSENT_VERSION = '1.0'

/**
 * Get current consent state from localStorage
 */
export function getConsentState(): ConsentState | null {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return null
    
    const parsed = JSON.parse(stored)
    if (parsed.version !== CONSENT_VERSION) return null
    
    return parsed.consent as ConsentState
  } catch {
    return null
  }
}

/**
 * Save consent state to localStorage
 */
export function saveConsentState(consent: Partial<ConsentState>): void {
  if (typeof window === 'undefined') return
  
  const state: ConsentState = {
    ad_storage: consent.ad_storage ?? false,
    analytics_storage: consent.analytics_storage ?? false,
    functionality_storage: consent.functionality_storage ?? true,
    timestamp: Date.now(),
  }
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      version: CONSENT_VERSION,
      consent: state,
    }))
    
    // Update dataLayer for tracking scripts
    updateDataLayer(state)
  } catch {
    // localStorage not available
  }
}

/**
 * Check if a specific consent type is granted
 */
export function hasConsent(type: ConsentType): boolean {
  const state = getConsentState()
  if (!state) return false
  return state[type] === true
}

/**
 * Check if any consent has been given (user has interacted with banner)
 */
export function hasConsentBeenGiven(): boolean {
  return getConsentState() !== null
}

/**
 * Accept all consent types
 */
export function acceptAllConsent(): void {
  saveConsentState({
    ad_storage: true,
    analytics_storage: true,
    functionality_storage: true,
  })
}

/**
 * Reject non-essential consent (only keep functionality)
 */
export function rejectNonEssentialConsent(): void {
  saveConsentState({
    ad_storage: false,
    analytics_storage: false,
    functionality_storage: true,
  })
}

/**
 * Update Google Tag Manager / Microsoft UET dataLayer with consent state
 */
function updateDataLayer(consent: ConsentState): void {
  if (typeof window === 'undefined') return
  
  // Initialize dataLayer if not exists
  window.dataLayer = window.dataLayer || []
  
  // Push consent update to dataLayer
  window.dataLayer.push({
    event: 'consent_update',
    consent: {
      ad_storage: consent.ad_storage ? 'granted' : 'denied',
      analytics_storage: consent.analytics_storage ? 'granted' : 'denied',
      functionality_storage: consent.functionality_storage ? 'granted' : 'denied',
    },
  })
  
  // If ad_storage is granted, initialize UET
  if (consent.ad_storage) {
    initializeUET()
  }
}

/**
 * Initialize Microsoft UET tag (only call after ad_storage consent)
 */
function initializeUET(): void {
  if (typeof window === 'undefined') return
  
  // Check if UET is already loaded
  if (window.uetq) return
  
  // Initialize UET queue
  window.uetq = window.uetq || []
  
  // UET Tag ID would be configured via environment variable
  const uetTagId = process.env.NEXT_PUBLIC_UET_TAG_ID
  
  if (!uetTagId) {
    console.warn('UET Tag ID not configured')
    return
  }
  
  // Load UET script dynamically
  const script = document.createElement('script')
  script.async = true
  script.src = `https://bat.bing.com/bat.js`
  script.onload = () => {
    if (window.UET) {
      window.uetq = new window.UET({ ti: uetTagId })
      window.uetq.push('pageLoad')
    }
  }
  document.head.appendChild(script)
}

// TypeScript declarations for global objects
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    uetq: unknown[] | { push: (action: string, data?: Record<string, unknown>) => void }
    UET?: new (config: { ti: string }) => { push: (action: string, data?: Record<string, unknown>) => void }
  }
}
