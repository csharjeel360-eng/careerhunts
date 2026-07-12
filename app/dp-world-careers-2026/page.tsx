import type { Metadata } from 'next'
import { NativeAd } from '@/components/ads/NativeAd'
import DPWorldCareersPage from '@/components/company/DPWorldCareersPage'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo'

const pageTitle = 'DP World Careers 2026 | Latest Logistics, Port & Supply Chain Jobs'
const pageDescription = 'Discover the latest DP World Careers 2026. Explore logistics, engineering, IT, warehouse, finance, supply chain, and port operations jobs. Learn about salaries, benefits, hiring process, and apply online.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'DP World Careers',
    'DP World Jobs',
    'DP World Careers UAE',
    'DP World Dubai Jobs',
    'DP World Logistics Careers',
    'DP World Supply Chain Jobs',
    'DP World Port Jobs',
    'DP World Engineering Jobs',
    'DP World Warehouse Jobs',
    'Dubai Logistics Jobs',
  ],
  alternates: {
    canonical: 'https://careerhunt.online/dp-world-careers-2026',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/dp-world-careers-2026',
    siteName: 'CareerHunt',
    type: 'article',
    images: [
      {
        url: 'https://careerhunt.online/DP World Careers.png',
        width: 1200,
        height: 630,
        alt: 'DP World Careers 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://careerhunt.online/DP World Careers.png'],
  },
}

export default function DPWorldCareersRoutePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'DP World Careers 2026', item: '/dp-world-careers-2026' },
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/dp-world-careers-2026',
    datePublished: '2026-07-11',
    authorName: 'CareerHunt Editorial Team',
    keywords: [
      'DP World Careers',
      'DP World Jobs',
      'DP World Careers UAE',
      'DP World Dubai Jobs',
      'DP World Logistics Careers',
      'DP World Supply Chain Jobs',
      'DP World Port Jobs',
      'DP World Engineering Jobs',
      'DP World Warehouse Jobs',
      'Dubai Logistics Jobs',
    ],
  })

  const faqSchema = generateFAQSchema([
    { question: 'How do I apply for DP World jobs?', answer: 'Visit the official DP World careers portal, choose a relevant role, and complete the online application with your CV and supporting documents.' },
    { question: 'Does DP World hire international candidates?', answer: 'Yes. DP World recruits talent from many nationalities and offers roles across an extensive international network.' },
    { question: 'What qualifications are required?', answer: 'Requirements vary by role, but most positions value a relevant degree or diploma, English communication skills, technical expertise, and practical experience.' },
    { question: 'Are remote jobs available?', answer: 'Remote roles are limited and more common in corporate and technical functions, while operational positions are often location-based.' },
    { question: 'What benefits does DP World provide?', answer: 'Employees often receive competitive compensation, medical coverage, leave benefits, retirement support, performance bonuses, and training opportunities.' },
    { question: 'Does DP World offer internships?', answer: 'Yes. DP World offers internships and early-career pathways for students and recent graduates.' },
    { question: 'How long does recruitment take?', answer: 'The process can take several weeks depending on role complexity, screening timelines, interviews, and verification steps.' },
    { question: 'What countries does DP World hire in?', answer: 'DP World hires across more than 75 countries, with a particularly strong presence in the Middle East, Europe, Africa, Asia, and the Americas.' },
    { question: 'Are fresh graduates eligible?', answer: 'Yes. DP World regularly recruits graduates for trainee, graduate, and entry-level roles across the business.' },
    { question: 'Where can I check current vacancies?', answer: 'Use the official DP World careers portal and CareerHunt’s logistics job pages to find the latest openings.' },
  ])

  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/dp-world-careers-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'DP World Careers 2026', item: '/dp-world-careers-2026' },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <NativeAd className="mx-auto my-10 max-w-3xl" />
      <DPWorldCareersPage />
    </>
  )
}
