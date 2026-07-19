import { Metadata } from 'next'
import GemsEducationCareersPage from '@/components/company/GemsEducationCareersPage'
import { getCanonicalUrl, getDefaultMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...getDefaultMetadata(),
  title: 'GEMS Education Careers UAE 2026 | Teaching & Corporate Jobs',
  description: 'Explore GEMS Education careers in the UAE. Discover teaching roles, school leadership, corporate jobs, salary ranges, visa sponsorship info, and official application guidance.',
  alternates: {
    canonical: getCanonicalUrl('/gems-education-careers-uae-2026'),
  },
  openGraph: {
    title: 'GEMS Education Careers UAE 2026 | Teaching & Corporate Jobs',
    description: 'Explore GEMS Education careers in the UAE. Discover teaching roles, school leadership, corporate jobs, salary ranges, visa sponsorship info, and official application guidance.',
    url: getCanonicalUrl('/gems-education-careers-uae-2026'),
    type: 'article',
    images: [{ url: '/UAE education careers (1).png', width: 1200, height: 630, alt: 'GEMS Education careers banner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEMS Education Careers UAE 2026 | Teaching & Corporate Jobs',
    description: 'Explore GEMS Education careers in the UAE. Discover teaching roles, school leadership, corporate jobs, salary ranges, visa sponsorship info, and official application guidance.',
    images: ['/UAE education careers (1).png'],
  },
}

export default function Page() {
  return <GemsEducationCareersPage />
}
