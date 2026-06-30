import * as React from 'react'
import { cn } from '@/lib/utils'

export const Badge = ({ children, variant = 'default', className }: any) => (
  <span className={cn('inline-flex items-center px-2 py-0.5 rounded text-xs font-medium', className)}>{children}</span>
)

export default Badge
