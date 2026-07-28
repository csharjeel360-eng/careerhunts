import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'
import ContentCard from '@/components/shared/ContentCard'
import { BLOG_POSTS } from '@/lib/blogData'
import { BLOG_PAGE_CARDS } from '@/lib/blogPageCards'

export const metadata: Metadata = {
  title: 'UAE Career Guides: Visa, Salary & Hiring Tips 2026',
  description:
    'Practical guides on UAE work visas, salary benchmarks, and getting hired — written for job seekers navigating the UAE market.',
  keywords: [
    'UAE careers',
    'visa guide',
    'salary benchmarks',
    'hiring tips',
    'job search 2026'
  ],
  alternates: {
    canonical: 'https://careerhunt.online/career-insights'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'UAE Career Guides: Visa, Salary & Hiring Tips 2026',
    description:
      'Practical guides on UAE work visas, salary benchmarks, and getting hired — written for job seekers navigating the UAE market.',
    url: 'https://careerhunt.online/career-insights',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Career Guides: Visa, Salary & Hiring Tips 2026',
    description:
      'Practical guides on UAE work visas, salary benchmarks, and getting hired — written for job seekers navigating the UAE market.'
  }
}

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
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Career Insights & Job Search Guides 2026
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Discover expert career advice, resume tips, interview strategies, salary negotiation guidance, remote work best practices, and insights into AI career trends to help you find the right job and grow your career in 2026.
          </p>
        </div>

        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          <ContentCard
            href="/guides"
            title="Browse the guides hub"
            description="See career advice, salary insights, and visa guidance in one place."
            category="Career guide"
            variant="guide"
            authorName="CareerHunt"
            authorInitials="CH"
            readTime="4 min read"
            publishedAt="Jul 24, 2026"
            updatedAt="Jul 28, 2026"
          />
          <ContentCard
            href="/salary-guide"
            title="Explore salary benchmarks"
            description="Compare market ranges, salary trends, and high-growth roles in 2026."
            category="Salary guide"
            variant="salary"
            readTime="4 min read"
            publishedAt="Jul 24, 2026"
            updatedAt="Jul 28, 2026"
            rows={[{ label: 'Software Engineer', value: 'AED 15k–40k' }, { label: 'Product Manager', value: 'AED 20k–45k' }, { label: 'Data Analyst', value: 'AED 12k–25k' }]}
          />
          <ContentCard
            href="/salary-guide/uae-salary-guide-2026"
            title="UAE salary guide 2026"
            description="Compare software engineer salaries in Dubai and Abu Dhabi and see what changes the market in 2026."
            category="Salary guide"
            variant="salary"
            authorName="CareerHunt"
            authorInitials="CH"
            readTime="4 min read"
            publishedAt="Jul 24, 2026"
            updatedAt="Jul 28, 2026"
            rows={[{ label: 'Entry level', value: 'AED 8k–13k' }, { label: 'Mid level', value: 'AED 15k–25k' }, { label: 'Senior', value: 'AED 25k–40k' }]}
          />
          <ContentCard
            href="/salary-guide/software-engineer-dubai-abu-dhabi"
            title="Software engineer salaries in the UAE"
            description="See how Dubai and Abu Dhabi differ for software engineers in 2026 and what drives the pay gap."
            category="Salary guide"
            variant="salary"
            authorName="CareerHunt"
            authorInitials="CH"
            readTime="4 min read"
            publishedAt="May 14, 2026"
            updatedAt="Jul 28, 2026"
            rows={[{ label: 'Entry level', value: 'AED 8k–13k' }, { label: 'Mid level', value: 'AED 15k–25k' }, { label: 'Senior', value: 'AED 25k–40k' }]}
          />
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
              '/uae-work-visa-sponsorship-guide-2026'
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
