import type { Metadata } from 'next'
import Script from 'next/script'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedJobs } from '@/components/home/FeaturedJobs'
import { LatestJobs } from '@/components/home/LatestJobs'
import { SalaryGuides } from '@/components/home/SalaryGuides'
import { CareerResources } from '@/components/home/CareerResources'
import { getTopViewedJobs, getFeaturedJobs, getLatestJobs, getCategories } from '@/lib/api'

export const metadata: Metadata = {
  title: 'CareerHunt | Find Modern Jobs, Salary Insights, and Career Growth Resources',
  description:
    'Explore curated job opportunities, salary guides, and career resources designed to help professionals grow with confidence.',
  keywords: [
    'jobs',
    'career opportunities',
    'salary guide',
    'job search',
    'remote jobs',
    'professional growth'
  ],
  alternates: {
    canonical: 'https://careerhunt.com/'
  },
  openGraph: {
    title: 'CareerHunt | Find Modern Jobs, Salary Insights, and Career Growth Resources',
    description:
      'Explore curated job opportunities, salary guides, and career resources designed to help professionals grow with confidence.',
    url: 'https://careerhunt.com/',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerHunt | Find Modern Jobs, Salary Insights, and Career Growth Resources',
    description:
      'Explore curated job opportunities, salary guides, and career resources designed to help professionals grow with confidence.'
  }
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [topViewedJobs, featuredJobsFromApi, latestJobs, categories] = await Promise.all([
    getTopViewedJobs(),
    getFeaturedJobs(),
    getLatestJobs(),
    getCategories()
  ])

  const featuredJobs = (topViewedJobs && topViewedJobs.length > 0) ? topViewedJobs : featuredJobsFromApi

  const salaryGuides = [
    { _id: 'salary-guide-1', title: 'Software Engineer Salary Trends' },
    { _id: 'salary-guide-2', title: 'Remote Job Salary Benchmarks' },
    { _id: 'salary-guide-3', title: 'Salary Expectations by Industry' }
  ]

  const careerResources = [
    { _id: 'resource-1', title: 'Resume Checklist for 2026' },
    { _id: 'resource-2', title: 'Interview Preparation Guide' },
    { _id: 'resource-3', title: 'Networking Tips for Job Seekers' }
  ]

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CareerHunt',
      url: 'https://careerhunt.com/',
      description:
        'CareerHunt helps professionals discover job opportunities, salary insights, and career resources in one modern platform.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://careerhunt.com/jobs?keyword={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CareerHunt',
      url: 'https://careerhunt.com/',
      sameAs: ['https://www.linkedin.com/']
    }
  ]

  return (
    <>
      <Script
        id="careerhunt-home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection categories={categories} />
      <FeaturedJobs jobs={featuredJobs} />
      <LatestJobs jobs={latestJobs} />
      <SalaryGuides guides={salaryGuides} />
      <CareerResources items={careerResources} />
    </>
  )
}