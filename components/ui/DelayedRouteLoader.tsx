'use client'

import { useEffect, useState } from 'react'

type DelayedRouteLoaderProps = {
  children: React.ReactNode
  delayMs?: number
  className?: string
}

export function DelayedRouteLoader({ children, delayMs = 250, className }: DelayedRouteLoaderProps) {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(true), delayMs)
    return () => window.clearTimeout(timer)
  }, [delayMs])

  if (!showLoader) {
    return null
  }

  return (
    <div className={className} role="status" aria-live="polite" aria-label="Loading page">
      {children}
    </div>
  )
}
