import type { Metadata } from 'next'
import { FusionHero } from '@/components/fusion-home/FusionHero'
import { FusionFeaturedServices } from '@/components/fusion-home/FusionFeaturedServices'
import { FusionRowsQuote } from '@/components/fusion-home/FusionRowsQuote'
import { FusionValueCards } from '@/components/fusion-home/FusionValueCards'
import { FusionFAQ } from '@/components/fusion-home/FusionFAQ'

export const metadata: Metadata = {
  title: 'Appliance Repair in New York',
  description:
    'DigitalBull — appliance repair booking in New York with qualified technicians and clear starting prices. Book online or call.',
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
