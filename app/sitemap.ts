import type { MetadataRoute } from 'next'
import { SITE_ORIGIN } from '@/lib/site-config'
import { services } from '@/lib/services'

const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/how-it-works',
  '/privacy-policy',
  '/terms',
  '/refund',
  '/services',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_ORIGIN
  const lastModified = new Date()

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  return entries
}
