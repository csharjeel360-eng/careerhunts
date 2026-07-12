'use client'

import { useEffect, useRef } from 'react'

interface BannerAd300x250Props {
  className?: string
}

export function BannerAd300x250({ className = '' }: BannerAd300x250Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptIdRef = useRef(`adsterra-banner-300x250-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const win = window as any
    win.atOptions = {
      key: '2c8f1f830ecef97082b1ab3febedb9ae',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {},
    }

    const script = document.createElement('script')
    script.id = scriptIdRef.current
    script.src = 'https://www.highperformanceformat.com/2c8f1f830ecef97082b1ab3febedb9ae/invoke.js'
    script.async = true

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
          <p className="text-xs text-slate-500">Non-disruptive 300x250 ad placement</p>
        </div>
      </div>
      <div ref={containerRef} className="mt-4 flex justify-center" />
    </div>
  )
}
