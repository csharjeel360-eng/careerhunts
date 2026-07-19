'use client'

import { useEffect, useRef, useState } from 'react'

interface BannerAd728x90Props {
  className?: string
}

export function BannerAd728x90({ className = '' }: BannerAd728x90Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptIdRef = useRef(`adsterra-banner-728x90-${Math.random().toString(36).slice(2)}`)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isLocalEnvironment = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    if (process.env.NODE_ENV !== 'production' || isLocalEnvironment) {
      setShowFallback(true)
      return
    }

    const win = window as any
    win.atOptions = {
      key: '2f69d75f7efe51fce97e0290d98b88d8',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    }

    const script = document.createElement('script')
    script.id = scriptIdRef.current
    script.src = 'https://www.highperformanceformat.com/2f69d75f7efe51fce97e0290d98b88d8/invoke.js'
    script.async = true
    script.onload = () => setShowFallback(false)
    script.onerror = () => setShowFallback(true)

    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }

    return () => {
      if (script.parentElement) {
        script.parentElement.removeChild(script)
      }
    }
  }, [])

  return (
    <div className={`mx-auto rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm ${className}`}>
      <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-600 sm:flex-row sm:justify-between">
        <div>
          <span className="font-semibold text-slate-900">Sponsored banner</span>
          <p className="text-xs text-slate-500">Non-disruptive 728x90 ad placement</p>
        </div>
      </div>
      {showFallback ? (
        <div className="mt-4 flex min-h-[90px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm text-slate-500">
          Banner ad is unavailable in this environment.
        </div>
      ) : (
        <div ref={containerRef} className="mt-4 flex justify-center" />
      )}
    </div>
  )
}
