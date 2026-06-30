"use client"

import { useEffect } from 'react'

export default function NavigationDebug() {
  useEffect(() => {
    try {
      console.debug('NavigationDebug: mount', { state: window.history.state, length: window.history.length, href: window.location.href })

      const origPush = window.history.pushState.bind(window.history)
      const origReplace = window.history.replaceState.bind(window.history)

      window.history.pushState = function (data: any, title: string, url?: string | null) {
        console.debug('NavigationDebug: pushState', { data, url, href: window.location.href, length: window.history.length })
        return origPush(data, title, url)
      }

      window.history.replaceState = function (data: any, title: string, url?: string | null) {
        console.debug('NavigationDebug: replaceState', { data, url, href: window.location.href, length: window.history.length })
        return origReplace(data, title, url)
      }

      const onPop = (ev: PopStateEvent) => {
        console.debug('NavigationDebug: popstate', { state: ev.state, href: window.location.href, length: window.history.length })
        try {
          // If the user navigated back to the employer dashboard URL, force a reload so the app-router renders correctly
          if (window.location.pathname === '/employer') {
            console.debug('NavigationDebug: popstate -> reload to', window.location.href)
            window.location.replace(window.location.href)
          }
        } catch (err) {
          console.error('NavigationDebug: popstate handler error', err)
        }
      }

      window.addEventListener('popstate', onPop)

      return () => {
        window.history.pushState = origPush
        window.history.replaceState = origReplace
        window.removeEventListener('popstate', onPop)
        console.debug('NavigationDebug: unmount')
      }
    } catch (err) {
      console.error('NavigationDebug error', err)
    }
  }, [])

  return null
}
