import { cn } from '@/lib/utils'

interface LoaderProps {
  className?: string
  size?: number
  color?: string
}

export function Loader({ className, size, color }: LoaderProps) {
  return (
    <div 
      className={cn('loader', className)} 
      style={{ 
        ...(size && { '--size': `${size}px` } as React.CSSProperties),
        ...(color && { '--color': color } as React.CSSProperties)
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
