'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  '/hero-section/1.png',
  '/hero-section/2.png',
  '/hero-section/3.png',
  '/hero-section/4.png',
  '/oven-range-repair/image.png',
  '/oven-range-repair/image copy.png',
  '/oven-range-repair/image copy 2.png',
  '/oven-range-repair/service-maintenance-worker-repairing.jpg',
  '/dishwasher-repair/image.png',
  '/dishwasher-repair/image copy.png',
  '/dishwasher-repair/image copy 2.png',
  '/dishwasher-repair/image copy 3.png',
  '/microwave-repair/image.png',
  '/washing-machine-repair/image.png',
  '/dryer-repair/image.png',
  '/ac-repair/image.png',
  '/computer-repair/image.png',
]

export function HeroBackgroundSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <div className="relative h-full w-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {heroImages.map((src, index) => (
            <div key={index} className="relative h-full w-full flex-[0_0_100%] min-w-0">
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover object-center brightness-[0.85] contrast-[1.05] transition-opacity duration-1000"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
      {/* High-tech overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      
      {/* Decorative scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-10" />
    </div>
  )
}
