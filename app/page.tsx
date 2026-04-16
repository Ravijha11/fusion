import type { Metadata } from 'next'
import { FusionHero } from '@/components/fusion-home/FusionHero'
import { FusionFeaturedServices } from '@/components/fusion-home/FusionFeaturedServices'
import { FusionRowsQuote } from '@/components/fusion-home/FusionRowsQuote'
import { FusionValueCards } from '@/components/fusion-home/FusionValueCards'
import { FusionFAQ } from '@/components/fusion-home/FusionFAQ'
import { COMPANY_NAME, SERVICE_AREA_CITY, SERVICE_AREA_DISPLAY } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Appliance Repair in ${SERVICE_AREA_CITY}`,
  description:
    `${COMPANY_NAME} — appliance repair booking in ${SERVICE_AREA_DISPLAY} with qualified technicians and clear starting prices. Book online or contact us.`,
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main id="main-content">
      <FusionHero />
      <FusionFeaturedServices />
      <FusionRowsQuote />
      <FusionValueCards />
      <FusionFAQ />
    </main>
  )
}
