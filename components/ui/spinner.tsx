import { Loader } from '@/components/loader'
import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Loader 
      className={className} 
      size={16} 
      {...props} 
    />
  )
}

export { Spinner }
