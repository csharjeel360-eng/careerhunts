'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

interface NativeAdProps {
  containerId?: string
  scriptSrc?: string
  className?: string
}

const defaultContainerId = 'container-0f159373a76a0dc5fde3f7c2b7c3ed2a'
const defaultScriptSrc = 'https://pl30330263.effectivecpmnetwork.com/0f159373a76a0dc5fde3f7c2b7c3ed2a/invoke.js'

export function NativeAd({
  containerId = defaultContainerId,
  scriptSrc = defaultScriptSrc,
  className = '',
}: NativeAdProps) {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      setShowFallback(true)
    }
  }, [])

  return (
    <div className={`rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-500">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
        Sponsored content
      </div>
      <div className="min-h-[180px]">
        {showFallback ? (
          <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm text-slate-500">
            Sponsored content is temporarily unavailable in this environment.
          </div>
        ) : (
          <>
            <Script
              id={`adsterra-${containerId}`}
              strategy="afterInteractive"
              src={scriptSrc}
              data-cfasync="false"
              onError={() => setShowFallback(true)}
            />
            <div id={containerId}></div>
          </>
        )}
      </div>
    </div>
  )
}
