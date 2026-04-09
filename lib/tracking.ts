/**
 * Tracking utilities for Microsoft UET conversions
 * All tracking is consent-gated and does NOT send PII
 */

import { hasConsent } from './cmp'

/**
 * Fire a UET conversion event (consent-gated)
 * @param eventName - Name of the conversion event
 * @param eventData - Optional non-PII event data
 */
export function fireUETConversion(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
): void {
  // Only fire if ad_storage consent is granted
  if (!hasConsent('ad_storage')) {
    return
  }
  
  if (typeof window === 'undefined' || !window.uetq) {
    return
  }
  
  // Push conversion event to UET
  // Note: We deliberately do NOT send any PII (names, emails, phone numbers, etc.)
  const eventPayload: Record<string, unknown> = {
    ec: 'conversion', // event category
    ea: eventName,    // event action
    ...eventData,
  }
  
  if (Array.isArray(window.uetq)) {
    window.uetq.push(['trackEvent', eventPayload])
  } else if (window.uetq && typeof window.uetq.push === 'function') {
    window.uetq.push('trackEvent', eventPayload)
  }
}

/**
 * Track booking form submission conversion
 * Called when a user successfully submits the booking form
 * Does NOT send any form data - only tracks that a conversion occurred
 */
export function trackBookingSubmission(): void {
  fireUETConversion('booking_submission', {
    ev: 1, // event value
  })
  
  // Also push to dataLayer for any other analytics
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'booking_submission',
      timestamp: Date.now(),
    })
  }
}

/**
 * Track phone click-to-call conversion
 * Called when a user clicks the phone number to call
 * Does NOT send the phone number - only tracks that a click occurred
 */
export function trackPhoneClick(): void {
  fireUETConversion('phone_click', {
    ev: 1, // event value
  })
  
  // Also push to dataLayer for any other analytics
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      timestamp: Date.now(),
    })
  }
}

/**
 * Track service page view
 * @param serviceName - Name of the service viewed (e.g., "refrigerator", "washing-machine")
 */
export function trackServicePageView(serviceName: string): void {
  if (!hasConsent('analytics_storage')) {
    return
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_page_view',
      service_name: serviceName,
      timestamp: Date.now(),
    })
  }
}

/**
 * Track form interaction start
 * Called when user starts interacting with the booking form
 */
export function trackFormStart(): void {
  if (!hasConsent('analytics_storage')) {
    return
  }
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_start',
      timestamp: Date.now(),
    })
  }
}
