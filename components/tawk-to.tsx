'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: unknown
    Tawk_LoadStart?: Date
  }
}

const TAWK_TO_SCRIPT_ID = 'tawkto-embed-script'
const TAWK_TO_SRC = 'https://embed.tawk.to/69ef66443aaa4c1c3adc0a91/1jn7ievok'

export function TawkTo() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    window.Tawk_API = window.Tawk_API ?? {}
    window.Tawk_LoadStart = new Date()

    // Avoid injecting the script multiple times on client navigations/hot reloads.
    if (document.getElementById(TAWK_TO_SCRIPT_ID)) return

    const s1 = document.createElement('script')
    s1.id = TAWK_TO_SCRIPT_ID
    s1.async = true
    s1.src = TAWK_TO_SRC
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')

    const s0 = document.getElementsByTagName('script')[0]
    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.body.appendChild(s1)
    }
  }, [])

  return null
}

