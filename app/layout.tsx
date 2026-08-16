import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { generateOrganizationSchema, generateWebsiteSchema, getDefaultMetadata, SITE_URL } from '@/lib/seo'
import { CookieConsentBanner } from '@/components/layout/CookieConsentBanner'
import { GtmScript } from '@/components/layout/GtmScript'

import NavigationDebugClient from '@/components/dev/NavigationDebugClient'

const showNavigationDebug = process.env.NODE_ENV !== 'production'
const interFontClass = 'font-sans'

export const metadata: Metadata = {
  ...getDefaultMetadata(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
         <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="naver-site-verification" content="" />
        <meta name="google-adsense-account" content="ca-pub-4145901573793792" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
        <link rel="preload" href="/icon.svg" as="image" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9988251242642237"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={interFontClass} style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }} suppressHydrationWarning>
        <GtmScript />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDB5G9J8" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            {showNavigationDebug ? <NavigationDebugClient /> : null}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
          />
          <Toaster />
        </ThemeProvider>
        <CookieConsentBanner />
      </body>
    </html>
  )
}