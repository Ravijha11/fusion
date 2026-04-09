import type { Metadata } from 'next'
import { FusionFAQ } from '@/components/fusion-home/FusionFAQ'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about scheduling, pricing, warranty, and service coverage.',
}

export default function FAQPage() {
  return (
    <main id="main-content" className="bg-white text-[#101921]">
      <FusionFAQ />
    </main>
  )
}

