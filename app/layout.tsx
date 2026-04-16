import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_POSTAL_CODE,
  ADDRESS_REGION,
  ADDRESS_STREET,
  COMPANY_NAME,
  EMAIL_SUPPORT,
  PHONE_E164,
  SERVICE_AREA_CITY,
  SERVICE_AREA_DISPLAY,
  SITE_ORIGIN,
} from '@/lib/site-config'
import './globals.css'
import { CookieConsentProvider } from '@/components/cookie-consent-provider'
import { CookieConsentBanner } from '@/components/cookie-consent-banner'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/footer'
import { ContactPromoStrip } from '@/components/layout/ContactPromoStrip'
import { ChatBot } from '@/components/chat-bot'

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} — Appliance Repair Booking`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    `Appliance repair booking in ${SERVICE_AREA_DISPLAY}: refrigerators, laundry, cooking appliances, and more. Clear starting prices and written estimates before repair work.`,
  keywords: [
    'appliance repair',
    SERVICE_AREA_CITY,
    'refrigerator repair',
    'washing machine repair',
    COMPANY_NAME,
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  metadataBase: new URL(SITE_ORIGIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_ORIGIN,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Appliance Repair Booking`,
    description:
      `Appliance repair booking in ${SERVICE_AREA_DISPLAY} with clear starting prices and written estimates before repair work.`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Appliance repair booking`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — Appliance Repair Booking`,
    description:
      `Appliance repair booking in ${SERVICE_AREA_DISPLAY} with qualified technicians and clear starting prices.`,
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
  '@id': `${SITE_ORIGIN}/#organization`,
  name: COMPANY_NAME,
  description:
    `Appliance repair booking in ${SERVICE_AREA_DISPLAY} with qualified technicians and clear starting prices.`,
  url: SITE_ORIGIN,
  ...(PHONE_E164 ? { telephone: PHONE_E164 } : {}),
  email: EMAIL_SUPPORT,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_STREET,
    addressLocality: ADDRESS_LOCALITY,
    addressRegion: ADDRESS_REGION,
    postalCode: ADDRESS_POSTAL_CODE,
    addressCountry: ADDRESS_COUNTRY,
  },
  areaServed: {
    '@type': 'City',
    name: ADDRESS_LOCALITY,
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
