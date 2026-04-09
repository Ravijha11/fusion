'use client'

import { useState } from 'react'
import { useCookieConsent } from './cookie-consent-provider'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectNonEssential, closeBanner } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 
              id="cookie-consent-title" 
              className="text-lg font-semibold text-card-foreground"
            >
              We Value Your Privacy
            </h2>
            <p className="mt-2 text-muted-foreground">
              We use cookies to improve your experience, analyze site traffic, and show you 
              relevant advertising. You can choose to accept all cookies or manage your preferences.
            </p>
            
            {showDetails && (
              <div className="mt-4 space-y-3 rounded-lg bg-muted p-4">
                <div>
                  <h3 className="font-medium text-foreground">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Required for the site to function properly. Cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors use our site to improve the experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Advertising Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Used by Microsoft Advertising to show you relevant ads. We never share 
                    your personal information with advertisers.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={closeBanner}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close cookie consent banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {showDetails ? 'Hide details' : 'Learn more about cookies'}
          </button>
          
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              onClick={rejectNonEssential}
              className="h-12 px-6 text-base"
            >
              Essential Only
            </Button>
            <Button
              onClick={acceptAll}
              className="h-12 px-6 text-base"
            >
              Accept All
            </Button>
          </div>
        </div>
        
        <p className="mt-4 text-xs text-muted-foreground">
          By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
          Read our{' '}
          <a href="/privacy-policy" className="underline hover:text-foreground">
            Privacy Policy
          </a>{' '}
          for more information.
        </p>
      </div>
    </div>
  )
}
