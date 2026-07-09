import type { Metadata } from 'next'
import ShopifyCareersPage from '@/components/company/ShopifyCareersPage'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo'

const pageTitle = 'Shopify Careers 2026 | Remote Jobs, Internships & Latest Vacancies'
const pageDescription =
  'Explore the latest Shopify Careers 2026. Find remote jobs, software engineering roles, internships, product management positions, customer support jobs, salaries, benefits, hiring process, and apply online today.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Shopify Careers',
    'Shopify Jobs',
    'Shopify Remote Jobs',
    'Shopify Internship',
    'Software Engineer Shopify',
    'Shopify Careers 2026',
    'Shopify Hiring',
    'Remote Tech Jobs',
    'Canada Remote Jobs',
    'Ecommerce Jobs'
  ],
  alternates: {
    canonical: 'https://careerhunt.online/shopify-careers-2026'
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/shopify-careers-2026',
    siteName: 'CareerHunt',
    type: 'article',
    images: [
      {
        url: 'https://careerhunt.online/Shopify Careers.png',
        width: 1200,
        height: 630,
        alt: 'Shopify Careers 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://careerhunt.online/Shopify Careers.png']
  }
}

export default function ShopifyCareersRoutePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: 'Shopify Careers 2026', item: '/shopify-careers-2026' }
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/shopify-careers-2026',
    datePublished: '2026-07-09',
    authorName: 'CareerHunt Editorial Team',
    keywords: [
      'Shopify Careers',
      'Shopify Jobs',
      'Shopify Remote Jobs',
      'Shopify Internship',
      'Software Engineer Shopify',
      'Shopify Careers 2026',
      'Shopify Hiring',
      'Remote Tech Jobs',
      'Canada Remote Jobs',
      'Ecommerce Jobs'
    ]
  })

  const faqSchema = generateFAQSchema([
    { question: 'How do I apply for Shopify jobs?', answer: 'Visit the official Shopify Careers portal, find a matching role, and submit your application online with an updated CV and supporting materials.' },
    { question: 'Does Shopify hire internationally?', answer: 'Yes. Shopify hires globally and offers remote-friendly opportunities across many regions, though some roles may have location-based requirements.' },
    { question: 'Are Shopify jobs remote?', answer: 'Many Shopify jobs are remote-first or hybrid, depending on the team, function, and location.' },
    { question: 'Does Shopify sponsor visas?', answer: 'Visa sponsorship varies by role and location, so review the official posting for eligibility details.' },
    { question: 'What is Digital by Design?', answer: 'Digital by Design is Shopify’s philosophy for building a modern, flexible, global workplace with distributed collaboration at its core.' },
    { question: 'How long is the hiring process?', answer: 'The process usually includes application review, recruiter conversations, assessments, interviews, and an offer stage over several weeks.' },
    { question: 'Does Shopify hire fresh graduates?', answer: 'Yes. Shopify offers internships, graduate programs, and entry-level opportunities across engineering, design, operations, and business functions.' },
    { question: 'What benefits does Shopify offer?', answer: 'Benefits commonly include competitive compensation, stock options, health coverage, wellness programs, learning budgets, and flexible work options.' },
    { question: 'Does Shopify have internships?', answer: 'Yes. Shopify regularly offers internships and early-career opportunities for students and recent graduates.' },
    { question: 'What skills are required?', answer: 'Core skills include communication, product thinking, problem solving, leadership, collaboration, AI literacy, and adaptability.' },
    { question: 'Can I work remotely?', answer: 'Many roles are remote-first or hybrid depending on the team and location, so review each role carefully.' },
    { question: 'How often are new jobs posted?', answer: 'Shopify regularly publishes new roles across engineering, product, design, commercial, support, and operations.' }
  ])

  const webPageSchema = generateWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/shopify-careers-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: 'Shopify Careers 2026', item: '/shopify-careers-2026' }
    ]
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ShopifyCareersPage />
    </>
  )
}
