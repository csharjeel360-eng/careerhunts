import type { Metadata } from 'next'
import AlFuttaimCareersPage from '@/components/company/AlFuttaimCareersPage'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  getCanonicalUrl,
} from '@/lib/seo'

const pageTitle = 'Al Futtaim Careers UAE 2026 | Jobs, Salary & How to Apply'
const pageDescription = 'Complete 2026 guide to Al Futtaim careers in UAE — open roles across automotive, retail, and real estate, salary ranges, and exactly how to apply through A Future With Us.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'al futtaim careers',
    'al futtaim jobs dubai',
    'al futtaim group careers',
    'a future with us careers',
    'al futtaim job vacancies',
    'al futtaim motors careers',
    'majid al futtaim careers',
  ],
  alternates: {
    canonical: getCanonicalUrl('/al-futtaim-careers-uae'),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl('/al-futtaim-careers-uae'),
    siteName: 'CareerHunt',
    type: 'article',
    images: [
      {
        url: getCanonicalUrl('/Al%20Futtaim%20Careers%20UAE%202026.webp'),
        width: 1200,
        height: 630,
        alt: 'Al Futtaim Careers UAE 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [getCanonicalUrl('/Al%20Futtaim%20Careers%20UAE%202026.webp')],
  },
}

export default function AlFuttaimCareersRoutePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/career-insights' },
    { name: 'Al Futtaim Careers UAE 2026', item: '/al-futtaim-careers-uae' },
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl('/al-futtaim-careers-uae'),
    datePublished: '2026-08-16',
    authorName: 'CareerHunt Editorial Team',
    keywords: [
      'al futtaim careers',
      'al futtaim jobs dubai',
      'al futtaim group careers',
      'a future with us careers',
      'al futtaim job vacancies',
      'al futtaim motors careers',
      'majid al futtaim careers',
    ],
  })

  const faqSchema = generateFAQSchema([
    {
      question: 'What is Al Futtaim official careers website?',
      answer: 'Al-Futtaim Group official careers portal is A Future With Us at afuturewithus.com. This is separate from Majid Al Futtaim, which runs a different careers portal.',
    },
    {
      question: 'Is Al Futtaim the same company as Majid Al Futtaim?',
      answer: 'No. They are separate companies with different portfolios and different careers portals. Al-Futtaim Group operates Toyota, IKEA, and ACE. Majid Al Futtaim operates Carrefour and Mall of the Emirates.',
    },
    {
      question: 'What industries does Al Futtaim Group hire for?',
      answer: 'The group hires across automotive, retail, real estate, financial services, and healthcare, with roles spanning sales, service, operations, engineering, and corporate support.',
    },
    {
      question: 'Does Al Futtaim hire freshers?',
      answer: 'Yes, especially for retail floor roles, customer service, and some entry-level support positions. Automotive sales and technical roles usually prefer some relevant prior experience.',
    },
    {
      question: 'How long does the hiring process take?',
      answer: 'Entry-level retail roles can move within a couple of weeks, while corporate, engineering, and management roles generally take longer because they involve multiple rounds.',
    },
    {
      question: 'Do I need a UAE driving license?',
      answer: 'For most automotive sales and service roles, a valid UAE driving license is typically required even at entry level because the role often involves test drives and customer-facing vehicle handling.',
    },
  ])

  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl('/al-futtaim-careers-uae'),
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Career Insights', item: '/career-insights' },
      { name: 'Al Futtaim Careers UAE 2026', item: '/al-futtaim-careers-uae' },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AlFuttaimCareersPage />
    </>
  )
}
