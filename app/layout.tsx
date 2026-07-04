import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import NavigationDebug from '@/components/dev/NavigationDebug'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo'

const interFontClass = 'font-sans'

export const metadata: Metadata = {
  metadataBase: new URL('https://careerhunt.online'),
  title: {
    default: 'CareerHunt | Jobs, Salary Guides & Career Resources',
    template: '%s | CareerHunt'
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  description:
    'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
  keywords: ['jobs', 'career opportunities', 'salary guide', 'job search', 'recruitment', 'professional growth'],
  authors: [{ name: 'CareerHunt' }],
  creator: 'CareerHunt',
  publisher: 'CareerHunt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://careerhunt.online',
    title: 'CareerHunt | Jobs, Salary Guides & Career Resources',
    description: 'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
    siteName: 'CareerHunt',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CareerHunt'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerHunt | Jobs, Salary Guides & Career Resources',
    description: 'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'jobs',
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'FF72EC1DD9AE9C2F2BB277908AD0BBDD',
    },
  },
  alternates: {
    canonical: 'https://careerhunt.online',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PDB5G9J8');`
        }} />
      </head>
      <body className={interFontClass}>
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
      </body>
    </html>
  )
}