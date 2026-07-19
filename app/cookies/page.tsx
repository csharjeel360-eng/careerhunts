import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cookie Policy | CareerHunt',
  description: 'Learn how CareerHunt uses cookies and local storage to improve your browsing experience, support analytics, and respect your consent choices.',
  alternates: {
    canonical: getCanonicalUrl('/cookies'),
  },
  openGraph: {
    title: 'Cookie Policy | CareerHunt',
    description: 'Learn how CareerHunt uses cookies and local storage to improve your browsing experience, support analytics, and respect your consent choices.',
    url: getCanonicalUrl('/cookies'),
    type: 'article',
    siteName: 'CareerHunt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | CareerHunt',
    description: 'Learn how CareerHunt uses cookies and local storage to improve your browsing experience, support analytics, and respect your consent choices.',
  },
}

const sections = [
  {
    heading: 'What are cookies?',
    body: [
      'Cookies are small text files stored in your browser that help websites remember preferences, keep sessions working, and understand how visitors interact with the site.',
      'We use cookies to improve site functionality, remember consent choices, and measure anonymized traffic to improve the experience on CareerHunt.'
    ],
  },
  {
    heading: 'Types of cookies we use',
    body: [
      'Essential cookies help the site load correctly, remember your basic preferences, and keep the consent banner from appearing repeatedly.',
      'Analytics cookies are used only if you accept them. They help us understand which pages are useful and how visitors move through the site so we can improve content and performance.'
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'When you first visit the site, you can choose to accept or reject non-essential cookies. Your choice is stored so the banner will not appear again until you clear your browser data or change your preference.',
      'You can also revisit this page at any time to understand what cookies are used and how your choice affects site behavior.'
    ],
  },
  {
    heading: 'Privacy and data',
    body: [
      'We do not use cookies to collect personal data for advertising purposes. Any analytics data is limited to aggregate usage patterns and is handled in line with our privacy practices.',
      'If you have questions, contact us at careerhunt233@gmail.com.'
    ],
  },
]

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This page explains how CareerHunt uses cookies and similar technologies to deliver a better experience while respecting your privacy choices."
      sections={sections}
    />
  )
}
