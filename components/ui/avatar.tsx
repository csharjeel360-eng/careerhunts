import * as React from 'react'
import { cn } from '@/lib/utils'

type AvatarProps = React.HTMLAttributes<HTMLDivElement>

type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>

type AvatarFallbackProps = React.HTMLAttributes<HTMLDivElement>

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <div className={cn('relative flex shrink-0 overflow-hidden rounded-full', className)} {...props}>
      {children}
    </div>
  )
}

export function AvatarFallback({ className, children, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-slate-300 text-sm font-medium text-slate-700',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return <img className={cn('h-full w-full rounded-full object-cover', className)} {...props} />
}

export default Avatar
