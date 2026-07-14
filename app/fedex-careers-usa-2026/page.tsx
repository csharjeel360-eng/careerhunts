import { Metadata } from 'next'
import FedExCareersPage from '@/components/company/FedExCareersPage'

export const metadata: Metadata = {
  title: 'FedEx Careers in USA 2026 | Latest Job Openings & Apply Online',
  description: 'Discover latest FedEx Careers in USA 2026. Explore warehouse jobs, delivery driver jobs, software engineering roles, logistics careers, salaries, benefits, and hiring process.',
  alternates: {
    canonical: 'https://careerhunt.online/fedex-careers-usa-2026',
  },
  keywords: ['FedEx Careers', 'FedEx Jobs USA', 'FedEx Hiring', 'FedEx Careers 2026', 'Warehouse Jobs USA', 'Delivery Driver Jobs'],
  openGraph: {
    title: 'FedEx Careers in USA 2026 | Latest Job Openings & Apply Online',
    description: 'Discover latest FedEx Careers in USA 2026. Explore warehouse jobs, delivery driver jobs, software engineering roles, logistics careers, salaries, benefits, and hiring process.',
    url: 'https://careerhunt.online/fedex-careers-usa-2026',
    siteName: 'CareerHunt',
    images: [{ url: '/fedex-careers-usa-2026.png', width: 1200, height: 630, alt: 'FedEx Careers in USA 2026' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FedEx Careers in USA 2026 | Latest Job Openings & Apply Online',
    description: 'Discover latest FedEx Careers in USA 2026. Explore warehouse jobs, delivery driver jobs, software engineering roles, salaries, benefits, and hiring process.',
    images: ['/fedex-careers-usa-2026.png'],
  },
}

export default function FedExCareersRoutePage() {
  return <FedExCareersPage />
}
