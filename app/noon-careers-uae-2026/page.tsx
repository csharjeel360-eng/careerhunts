import type { Metadata } from 'next'
import NoonCareersPage from '@/components/company/NoonCareersPage'

const pageTitle = 'Noon Careers UAE 2026 | Latest Noon Jobs in Dubai, Abu Dhabi & Across UAE – Apply Online'
const pageDescription = 'Explore the latest Noon Careers UAE 2026. Find jobs in Dubai, Abu Dhabi, Sharjah, and across the UAE including warehouse, delivery, software engineering, customer service, HR, marketing, logistics, and corporate roles. Apply online today.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Noon Careers',
    'Noon Jobs UAE',
    'Dubai Jobs',
    'Warehouse Jobs UAE',
    'Delivery Rider Jobs UAE',
    'Software Engineer Jobs Dubai',
    'Customer Service Jobs UAE',
    'Noon Delivery Jobs',
    'Noon Warehouse Jobs',
    'Noon Careers Dubai',
    'Noon Careers Abu Dhabi',
    'Noon Hiring 2026',
    'Jobs in UAE',
    'Career Hunt',
  ],
  alternates: {
    canonical: 'https://careerhunt.online/noon-careers-uae-2026',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/noon-careers-uae-2026',
    siteName: 'CareerHunt',
    type: 'article',
    images: [
      {
        url: 'https://careerhunt.online/Noon%20Careers%20UAE.png',
        width: 1200,
        height: 630,
        alt: 'Noon Careers UAE 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://careerhunt.online/Noon%20Careers%20UAE.png'],
  },
}

export default function NoonCareersRoutePage() {
  return <NoonCareersPage />
}
