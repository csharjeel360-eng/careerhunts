import type { Metadata } from 'next'
import { NativeAd } from '@/components/ads/NativeAd'
import DhlCareersPage from '@/components/company/DhlCareersPage'

const pageTitle = 'DHL Careers UAE 2026 | Latest DHL Dubai Jobs & Apply Online'
const pageDescription = 'Explore the latest DHL Careers in UAE. Discover DHL jobs in Dubai and Abu Dhabi, including Warehouse Assistant, Courier, Logistics, Air Freight, Customer Service, Supply Chain, Sales, and Corporate opportunities. Learn about salaries, benefits, hiring requirements, and apply through the official DHL Careers website.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'DHL Careers UAE',
    'DHL Jobs Dubai',
    'DHL Careers Dubai',
    'DHL Warehouse Jobs',
    'DHL Logistics Jobs UAE',
    'DHL Courier Jobs',
    'DHL Supply Chain Careers',
    'DHL Express Careers',
    'DHL Driver Jobs UAE',
    'Logistics Jobs Dubai',
    'Warehouse Jobs UAE',
    'Air Freight Jobs Dubai',
    'UAE Logistics Careers',
    'DHL Careers 2026',
  ],
  alternates: {
    canonical: 'https://careerhunt.com/dhl-careers-uae-2026',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.com/dhl-careers-uae-2026',
    siteName: 'CareerHunt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function DhlCareersRoutePage() {
  return (
    <>
      <DhlCareersPage />
    </>
  )
}
