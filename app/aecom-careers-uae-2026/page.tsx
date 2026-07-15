import type { Metadata } from 'next'
import { NativeAd } from '@/components/ads/NativeAd'
import AECOMCareersPage from '@/components/company/AECOMCareersPage'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo'

const pageTitle = 'AECOM Careers in UAE 2026 | Latest Engineering & Infrastructure Jobs in Dubai'
const pageDescription = 'Explore the latest AECOM Careers in UAE 2026. Find engineering, architecture, project management, BIM, HSE, surveying, and corporate jobs in Dubai, Abu Dhabi, and the UAE. Learn about salaries, benefits, hiring process, and apply online.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'AECOM Careers UAE',
    'AECOM Jobs Dubai',
    'AECOM Careers Dubai',
    'Engineering Jobs UAE',
    'Civil Engineer Jobs Dubai',
    'Mechanical Engineer Jobs UAE',
    'Construction Jobs Dubai',
    'Infrastructure Jobs UAE',
    'BIM Jobs Dubai',
    'Project Management Jobs UAE',
    'Architecture Jobs Dubai',
    'Dubai Engineering Careers',
    'AECOM UAE Jobs 2026',
    'Abu Dhabi Engineering Jobs',
  ],
  alternates: {
    canonical: 'https://careerhunt.online/aecom-careers-uae-2026',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/aecom-careers-uae-2026',
    siteName: 'CareerHunt',
    type: 'article',
    images: [
      {
        url: 'https://careerhunt.online/aecom-careers-uae-2026.png',
        width: 1200,
        height: 630,
        alt: 'AECOM Careers in UAE 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://careerhunt.online/aecom-careers-uae-2026.png'],
  },
}

export default function AECOMCareersRoutePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'AECOM Careers in UAE 2026', item: '/aecom-careers-uae-2026' },
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/aecom-careers-uae-2026',
    datePublished: '2026-07-15',
    authorName: 'CareerHunt Editorial Team',
    keywords: [
      'AECOM Careers UAE',
      'AECOM Jobs Dubai',
      'AECOM Careers Dubai',
      'Engineering Jobs UAE',
      'Civil Engineer Jobs Dubai',
      'Mechanical Engineer Jobs UAE',
      'Construction Jobs Dubai',
      'Infrastructure Jobs UAE',
      'BIM Jobs Dubai',
      'Project Management Jobs UAE',
      'Architecture Jobs Dubai',
      'Dubai Engineering Careers',
      'AECOM UAE Jobs 2026',
      'Abu Dhabi Engineering Jobs',
    ],
  })

  const faqSchema = generateFAQSchema([
    { question: 'How can I apply for AECOM jobs?', answer: 'Submit your application through the official AECOM careers portal, upload your CV, and track your status online.' },
    { question: 'Is AECOM hiring in Dubai?', answer: 'Yes. AECOM regularly recruits for roles in Dubai, Abu Dhabi, and across the UAE across engineering, design, and corporate functions.' },
    { question: 'Does AECOM hire fresh graduates?', answer: 'Yes. AECOM offers graduate development programs, internships, and entry-level opportunities for early-career professionals.' },
    { question: 'What is the average salary at AECOM UAE?', answer: 'Salaries vary by experience and role, but typical ranges start from around AED 70,000 for graduates and can exceed AED 400,000 for senior leadership roles.' },
    { question: 'Are international applicants eligible?', answer: 'Yes. AECOM hires candidates from many nationalities, provided they meet the role requirements and local employment guidelines.' },
    { question: 'Does AECOM provide training?', answer: 'AECOM provides structured training, digital engineering development, mentorship, and internal learning opportunities.' },
    { question: 'What qualifications are required?', answer: 'Most roles require a relevant degree, professional experience, and strong technical or project delivery skills depending on the position.' },
    { question: 'Where are AECOM UAE offices located?', answer: 'AECOM operates in Dubai and Abu Dhabi and supports projects across the broader UAE.' },
    { question: 'How long does the hiring process take?', answer: 'The process typically takes several weeks, depending on screening, assessments, interviews, and verification steps.' },
    { question: 'Is experience mandatory for every role?', answer: 'Not always. AECOM offers entry-level, graduate, and experienced roles, and requirements vary by function.' },
  ])

  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/aecom-careers-uae-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Career Insights', item: '/blog' },
      { name: 'AECOM Careers in UAE 2026', item: '/aecom-careers-uae-2026' },
    ],
  })

  const jobPostingCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'JobPosting', title: 'Senior Engineer – Track & Alignment', hiringOrganization: { '@type': 'Organization', name: 'AECOM' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } } } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'JobPosting', title: 'Planning Engineer', hiringOrganization: { '@type': 'Organization', name: 'AECOM' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Abu Dhabi', addressCountry: 'AE' } } } },
      { '@type': 'ListItem', position: 3, item: { '@type': 'JobPosting', title: 'BIM Technician III', hiringOrganization: { '@type': 'Organization', name: 'AECOM' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } } } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingCollectionSchema) }} />
      <NativeAd className="mx-auto my-10 max-w-3xl" />
      <AECOMCareersPage />
    </>
  )
}
