'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  iconSrc?: string
  startingPrice?: string
  featured?: boolean
  bgImage?: string
}

export function ServiceCard({ 
  title, 
  description, 
  href, 
  iconSrc,
  startingPrice,
  featured = false,
  bgImage
}: ServiceCardProps) {
  const isImageCard = Boolean(bgImage)

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
      >
        <Link 
          href={href}
          className={cn(
            "group relative flex h-full flex-col overflow-hidden transition-all p-6 rounded-xl",
            isImageCard ? "bg-black" : "bg-white border border-gray-100 shadow-sm hover:shadow-lg",
            featured && "md:col-span-2 md:row-span-2 p-8"
          )}
        >
          {isImageCard && (
            <>
              <Image
                src={bgImage}
                alt=""
                fill
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500" />
            </>
          )}
          
          <div className="flex items-start justify-between mb-8 z-10 relative">
            {iconSrc ? (
              <div
                className={cn(
                  "relative h-14 w-14 shrink-0 overflow-hidden rounded-lg p-2 border",
                  isImageCard ? "bg-white/10 border-white/15" : "bg-orange-50 border-orange-100",
                )}
              >
                <Image
                  src={iconSrc}
                  alt=""
                  fill
                  className="object-contain p-2"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <div
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  isImageCard
                    ? "bg-white/10 border-white/15"
                    : "bg-orange-50 border-orange-100 group-hover:bg-primary",
                )}
              >
                <Cpu
                  className={cn(
                    "h-7 w-7 transition-colors",
                    isImageCard ? "text-white" : "text-primary group-hover:text-white",
                  )}
                  aria-hidden="true"
                />
              </div>
            )}
            
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors border",
                isImageCard
                  ? "bg-white/10 text-white border-white/15"
                  : "bg-gray-50 text-secondary group-hover:bg-primary group-hover:text-white border-gray-100 group-hover:border-transparent",
              )}
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        
        <div className="flex-1 z-10 relative mt-auto">
          <h3 className={cn(
            "font-bold tracking-tight transition-colors group-hover:text-primary mb-2",
            featured ? "text-2xl" : "text-xl",
            isImageCard ? "text-white" : "text-secondary"
          )}>
            {title}
          </h3>
          <p className={cn(
            "leading-relaxed",
            featured ? "text-base max-w-md" : "text-sm line-clamp-3",
            isImageCard ? "text-white/80" : "text-gray-500"
          )}>
            {description}
          </p>
        </div>
        
        {startingPrice && (
          <div className={cn(
            "mt-6 pt-4 border-t flex items-center justify-between z-10 relative",
            isImageCard ? "border-white/20" : "border-gray-100"
          )}>
            <span className={cn(
              "text-[13px] font-semibold tracking-wide",
              isImageCard ? "text-white/70" : "text-gray-400"
            )}>Starting price</span>
            <span className={cn(
              "text-sm font-bold",
              isImageCard ? "text-white" : "text-primary"
            )}>From {startingPrice}</span>
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export function ServiceCardCompact({ 
  title, 
  href 
}: Pick<ServiceCardProps, 'title' | 'href'>) {
  return (
    <Link 
      href={href}
      className="group flex items-center gap-2 py-2 text-gray-500 hover:text-primary transition-all font-semibold tracking-tight"
    >
      <div className="h-1 w-0 bg-primary transition-all group-hover:w-4" />
      {title}
    </Link>
  )
}
