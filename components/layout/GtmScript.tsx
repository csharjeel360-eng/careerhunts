'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const CONSENT_STORAGE_KEY = 'careerhunt-cookie-consent'

export function GtmScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    setShouldLoad(stored === 'accepted')

    const handleConsent = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail
      setShouldLoad(detail === 'accepted')
    }

    window.addEventListener('cookie-consent-changed', handleConsent as EventListener)
    return () => window.removeEventListener('cookie-consent-changed', handleConsent as EventListener)
  }, [])

  if (!shouldLoad) {
    return null
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PDB5G9J8');
          `,
        }}
      />
    </>
  )
}
