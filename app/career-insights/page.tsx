import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import Script from 'next/script'
import ContentCard from '@/components/shared/ContentCard'
import { BLOG_POSTS } from '@/lib/blogData'
import { BLOG_PAGE_CARDS } from '@/lib/blogPageCards'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Career Guides: Visa, Salary & Hiring Tips 2026',
  description:
    'Practical guides on UAE work visas, salary benchmarks, and getting hired — written for job seekers navigating the UAE market.',
  path: '/career-insights',
  keywords: ['UAE careers', 'visa guide', 'salary benchmarks', 'hiring tips', 'job search 2026'],
})

export default function CareerInsightsPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Career Insights & Job Search Guides 2026 | Resume, Interviews & AI Careers',
    description: 'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.',
    url: 'https://careerhunt.online/career-insights',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: BLOG_POSTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://careerhunt.online/career-insights/${p.slug}`,
        name: p.title
      }))
    }
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <Script id="career-insights-jsonld" type="application/ld+json">
        {JSON.stringify(blogJsonLd)}
      </Script>
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-3 py-10 sm:px-4 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">Insights</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            Career Insights & Job Search Guides 2026
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
            Discover expert career advice, resume tips, interview strategies, salary negotiation guidance, remote work best practices, and insights into AI career trends to help you find the right job and grow your career in 2026.
          </p>
          <p className="mt-5 text-sm font-medium text-slate-700 sm:mt-6">
            Featured guide:{' '}
            <Link href="/career-resources/emiratisation-quota-2026-expat-jobseekers" className="text-blue-600 underline-offset-4 hover:underline">
              Emiratisation Quota 2026 for Expat Job Seekers
            </Link>
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">
            Also read:{' '}
            <Link href="/career-resources/payroll-job-description-salary-uae" className="text-blue-600 underline-offset-4 hover:underline">
              Payroll Job Description & Salary in UAE 2026
            </Link>
          </p>
        </div>

        <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] sm:mt-10 sm:gap-6">
          {BLOG_PAGE_CARDS.filter((card) =>
            [
              '/dhl-careers-uae-2026',
              '/markq-trading-llc-storekeeper-dubai',
              '/noon-careers-uae-2026',
              '/gems-education-careers-uae-2026',
              '/dp-world-careers-2026',
              '/emirates-group-careers-uae-2026',
              '/warehouse-jobs-uae-2026',
              '/qatar-airways-careers-2026',
              '/carrefour-hypermarket-careers-2026',
              '/uae-work-visa-sponsorship-guide-2026',
              '/visa/uae-employment-visa-guide',
              '/visa/uae-golden-visa-guide',
              '/visa/uae-family-sponsorship-guide',
              '/visa/uae-work-permit-guide',
              '/visa/uae-golden-visa-property-threshold-2026',
              '/visa/uae-overstay-fine-2026',
              '/visa/uae-jobseeker-visa-2026',
              '/visa/uae-freelance-permit-vs-employment-visa',
              '/visa/uae-visa-cancellation-grace-period-2026',
              '/salary-guide/software-engineer-dubai-abu-dhabi-2026',
              '/salary-guide/nurse-salary-uae-dha-haad-moh-2026',
              '/salary-guide/teacher-salary-dubai-curriculum-2026',
              '/salary-guide/entry-level-salary-uae-fresh-graduates-2026',
              '/salary-guide/g42-careers-uae-2026',
              '/career-resources/uae-experience-certificate-guide',
              '/career-resources/emiratisation-quota-2026-expat-jobseekers',
              '/career-resources/payroll-job-description-salary-uae',
              '/career-resources/negotiate-salary-uae-job-offer',
              '/career-insights/sharjah-aviation-services-careers'
            ].includes(card.href)
          ).map((card) => {
            const category = card.category ?? 'Career guide'
            const variant = category.toLowerCase().includes('visa') ? 'visa' : 'guide'

            return (
              <ContentCard
                key={card.href}
                href={card.href}
                title={card.title}
                description={card.description}
                category={category}
                variant={variant}
                authorName={card.authorName ?? 'CareerHunt'}
                authorInitials={card.authorInitials ?? 'CH'}
                readTime={card.readTime ?? '6 min read'}
                publishedAt={card.publishedAt}
                updatedAt={card.updatedAt}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
