import type { Metadata } from 'next'
import Script from 'next/script'
import { BannerAd300x250 } from '@/components/ads/BannerAd300x250'
import { HeroSection } from '@/components/home/HeroSection'
import { LatestJobs } from '@/components/home/LatestJobs'
import { SalaryGuides } from '@/components/home/SalaryGuides'
import { CareerResources } from '@/components/home/CareerResources'
import { getLatestJobs, getCategories } from '@/lib/api'
import { getLiveJobs } from '@/lib/live-jobs'
import { careerResources as careerResourceData } from '@/lib/careerResourceData'
import { salaryGuides as salaryGuideData } from '@/lib/salaryGuideData'

export const metadata: Metadata = {
  title: 'CareerHunt – Find Remote Jobs, Internships & Latest Job Openings',
  description:
    'Discover remote jobs, internships, and career opportunities on CareerHunt. Search thousands of jobs and apply online today.',
  keywords: [
    'jobs',
    'career opportunities',
    'salary guide',
    'job search',
    'remote jobs',
    'professional growth'
  ],
  alternates: {
    canonical: 'https://careerhunt.online/'
  },
  openGraph: {
    title: 'CareerHunt – Find Remote Jobs, Internships & Latest Job Openings',
    description:
      'Discover remote jobs, internships, and career opportunities on CareerHunt. Search thousands of jobs and apply online today.',
    url: 'https://careerhunt.online/',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerHunt – Find Remote Jobs, Internships & Latest Job Openings',
    description:
      'Discover remote jobs, internships, and career opportunities on CareerHunt. Search thousands of jobs and apply online today.'
  }
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [latestJobs, categories, liveJobs] = await Promise.all([
    getLatestJobs(),
    getCategories(),
    getLiveJobs()
  ])

  const getSortTimestamp = (value?: string) => {
    if (!value) return 0
    const parsed = Date.parse(value)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const serverJobs = (latestJobs || []).map((job: any) => ({
    ...job,
    sourceLabel: 'Server',
    sortDate: job.postedDate || job.createdAt || '',
  }))
  const greenhouseJobs = (liveJobs || [])
    .filter((job: any) => job.source === 'Greenhouse')
    .map((job: any) => ({
      ...job,
      sourceLabel: 'Greenhouse',
      sortDate: job.postedDate || '',
    }))
  const governmentJobs = (liveJobs || [])
    .filter((job: any) => job.source === 'USAJOBS')
    .map((job: any) => ({
      ...job,
      sourceLabel: 'Government',
      sortDate: job.postedDate || '',
    }))

  const mixedJobs = [...serverJobs, ...greenhouseJobs, ...governmentJobs]
    .sort((a, b) => getSortTimestamp(b.sortDate) - getSortTimestamp(a.sortDate))
    .slice(0, 9)

  const salaryGuides = salaryGuideData.slice(0, 3)

  const careerResources = careerResourceData.slice(0, 3)

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CareerHunt',
      url: 'https://careerhunt.online/',
      description:
        'CareerHunt helps professionals discover job opportunities, salary insights, and career resources in one trusted platform.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://careerhunt.online/jobs?keyword={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CareerHunt',
      url: 'https://careerhunt.online/',
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
      <LatestJobs jobs={latestJobs} mixedJobs={mixedJobs} />
      <BannerAd300x250 className="my-10 mx-auto max-w-[320px]" />
      <SalaryGuides guides={salaryGuides} />
      <CareerResources items={careerResources} />
    </>
  )
}