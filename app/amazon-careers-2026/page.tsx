import type { Metadata } from 'next'
import { NativeAd } from '@/components/ads/NativeAd'
import AmazonCareersPage from '@/components/company/AmazonCareersPage'
import { getCanonicalUrl } from '@/lib/seo'

const pageTitle = 'Amazon Careers 2026 | Latest Amazon Jobs Worldwide & Apply Online'
const pageDescription = 'Explore the latest Amazon Careers 2026. Discover Amazon jobs worldwide, salary information, hiring process, employee benefits, remote opportunities, internships, and apply online.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Amazon Careers',
    'Amazon Jobs',
    'Amazon Careers 2026',
    'Amazon Remote Jobs',
    'Amazon Warehouse Jobs',
    'Amazon AWS Careers',
    'Amazon Software Engineer Jobs',
    'Amazon Internship',
    'Amazon Hiring',
    'Amazon Customer Service Jobs',
  ],
  alternates: {
    canonical: getCanonicalUrl('/amazon-careers-2026'),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl('/amazon-careers-2026'),
    siteName: 'CareerHunt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function AmazonCareersRoutePage() {
  return (
    <>
      <AmazonCareersPage />
    </>
  )
}
