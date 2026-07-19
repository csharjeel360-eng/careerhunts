import type { Metadata } from 'next'
import CarrefourCareersPage from '@/components/company/CarrefourCareersPage'
import { getCanonicalUrl } from '@/lib/seo'

const pageTitle = 'Carrefour Hypermarket Careers 2026 – Latest Job Vacancies & Apply Online'
const pageDescription = 'Explore Carrefour Hypermarket Careers 2026. Discover latest Carrefour jobs, retail and warehouse roles, salaries, benefits, hiring process, and apply through the official careers portal.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Carrefour Careers',
    'Carrefour Jobs',
    'Carrefour Hypermarket Careers 2026',
    'Retail Jobs',
    'Warehouse Jobs',
    'UAE Jobs',
    'Customer Service Jobs',
    'Carrefour Hiring',
    'Carrefour Store Jobs',
    'Carrefour Salary',
  ],
  alternates: {
    canonical: getCanonicalUrl('/carrefour-hypermarket-careers-2026'),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl('/carrefour-hypermarket-careers-2026'),
    siteName: 'CareerHunt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function CarrefourCareersRoutePage() {
  return <CarrefourCareersPage />
}
