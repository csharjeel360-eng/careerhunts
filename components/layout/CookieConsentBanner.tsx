'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_COOKIE = 'careerhunt_cookie_consent'
const CONSENT_STORAGE_KEY = 'careerhunt-cookie-consent'

function setConsentCookie(choice: 'accepted' | 'rejected') {
  if (typeof document === 'undefined') return

  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${CONSENT_COOKIE}=${choice}; expires=${expires}; path=/; SameSite=Lax`
}

export function CookieConsentBanner() {
  const [open, setOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) {
      setOpen(true)
      return
    }

    setOpen(false)
  }, [])

  const persistConsent = (choice: 'accepted' | 'rejected') => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
    setConsentCookie(choice)
    setOpen(false)
    setShowPreferences(false)
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: choice }))
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-700 bg-slate-950/95 px-4 py-4 text-slate-100 shadow-2xl backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold">We use cookies to improve site experience and measurement.</p>
          <p className="mt-1 text-sm text-slate-300">
            Accept for analytics and essential site functionality, or reject non-essential tracking.{' '}
            <Link href="/cookies" className="font-medium text-cyan-300 underline-offset-2 hover:underline">
              Learn more
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
            onClick={() => setShowPreferences((value) => !value)}
          >
            {showPreferences ? 'Hide details' : 'Manage'}
          </button>
          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
            onClick={() => persistConsent('rejected')}
          >
            Reject
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            onClick={() => persistConsent('accepted')}
          >
            Accept
          </button>
        </div>
      </div>

      {showPreferences && (
        <div className="mx-auto mt-3 max-w-6xl text-sm text-slate-300">
          We only enable analytics after you accept cookies.
        </div>
      )}
    </div>
  )
}
