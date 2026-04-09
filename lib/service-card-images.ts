/**
 * Card images for service listings (homepage grid, etc.)
 */
export function getServiceCardImage(slug: string): { src: string; contain?: boolean } {
  const map: Record<string, { src: string; contain?: boolean }> = {
    refrigerator: { src: '/images/repair/ref-card-bg.jpg' },
    'washing-machine': { src: '/washing-machine-repair/image.png', contain: true },
    dryer: { src: '/dryer-repair/image.png', contain: true },
    'oven-range': { src: '/oven-range-repair/service-maintenance-worker-repairing.jpg' },
    dishwasher: { src: '/dishwasher-repair/image.png', contain: true },
    microwave: { src: '/microwave-repair/image.png', contain: true },
    'air-conditioner': { src: '/ac-repair/image.png', contain: true },
    television: { src: '/tv-repair/image.png', contain: true },
    computer: { src: '/computer-repair/image.png', contain: true },
  }
  return map[slug] ?? { src: '/placeholder.jpg', contain: true }
}
