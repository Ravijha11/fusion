'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const heroImages = [
  { src: '/Hero section/image.png', alt: 'Appliance Repair Hero 1' },
  { src: '/Hero section/image copy.png', alt: 'Appliance Repair Hero 2' },
  { src: '/Hero section/image copy 2.png', alt: 'Appliance Repair Hero 3' },
  { src: '/Hero section/image copy 3.png', alt: 'Appliance Repair Hero 4' },
]

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-0 mt-12 overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 relative group">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                {/* Decorative Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Protocol Phase 0{index + 1}</span>
                    <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase italic">System Recovery <span className="text-primary italic">Active</span></h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Controls - Hidden on mobile, visible on group hover on desktop */}
        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
          <CarouselPrevious className="left-6 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-white" />
          <CarouselNext className="right-6 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </div>
  )
}
