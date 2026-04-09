import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CookieConsentProvider } from '@/components/cookie-consent-provider'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/footer'
import { ContactPromoStrip } from '@/components/layout/ContactPromoStrip'
import { ChatBot } from '@/components/chat-bot'

export const metadata: Metadata = {
  title: {
    default: 'DigitalBull — Advanced Appliance Restoration',
    template: '%s | DigitalBull',
  },
  description:
    'Licensed appliance repair in the New York area: refrigerators, laundry, cooking appliances, and more. Clear pricing and same-day options when available.',
  keywords: ['appliance repair', 'New York', 'refrigerator repair', 'washing machine repair', 'advanced tech', 'same-day service', 'DigitalBull'],
  authors: [{ name: 'DigitalBull' }],
  creator: 'DigitalBull',
  publisher: 'DigitalBull',
  metadataBase: new URL('https://www.digitalbull.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalbull.co.in',
    siteName: 'DigitalBull',
    title: 'DigitalBull — Advanced Appliance Restoration',
    description:
      'Licensed appliance repair in the New York area with clear pricing and same-day options when available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DigitalBull — Professional appliance restoration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalBull — Advanced Appliance Restoration',
    description: 'Precision engineering and expert appliance restoration in New York.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/favicon/site.webmanifest' }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4b32c3' },
    { media: '(prefers-color-scheme: dark)', color: '#2d2d5a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// LocalBusiness structured data
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.digitalbull.co.in/#organization',
  name: 'DigitalBull',
  description: 'Precision engineering and expert appliance restoration in New York.',
  url: 'https://www.digitalbull.co.in',
  telephone: '+1-555-123-4567',
  email: 'support@digitalbull.co.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'New York',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased">
        <CookieConsentProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <ContactPromoStrip />
            <Footer />
          </div>
          <ChatBot />
          <CookieConsentBanner />
        </CookieConsentProvider>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
