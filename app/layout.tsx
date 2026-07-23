import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import NavigationDebug from '@/components/dev/NavigationDebug'
import { generateOrganizationSchema, generateWebsiteSchema, getDefaultMetadata } from '@/lib/seo'
import { CookieConsentBanner } from '@/components/layout/CookieConsentBanner'
import { GtmScript } from '@/components/layout/GtmScript'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-poppins', display: 'swap' })
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
         <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="naver-site-verification" content="" />
        <link rel="preconnect" href="https://careerhunt.online" />
        <link rel="preconnect" href="https://careerhunt-8f97d.firebaseapp.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://apis.google.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="/icon.svg" as="image" />
      </head>
      <body className={interFontClass} style={{ fontFamily: 'var(--font-inter)' }}>
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
            <NavigationDebug />
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