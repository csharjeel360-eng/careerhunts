import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import CareerInsightsClient from '@/components/shared/CareerInsightsClient'
import { BLOG_POSTS } from '@/lib/blogData'
import { getPageMetadata, SITE_URL } from '@/lib/seo'

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
    url: `${SITE_URL}/career-insights`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: BLOG_POSTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/career-insights/${p.slug}`,
        name: p.title
      }))
    }
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <Script id="career-insights-jsonld" type="application/ld+json">
        {JSON.stringify(blogJsonLd)}
      </Script>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/background.webp')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />

      <div className="container relative mx-auto px-3 py-10 sm:px-4 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">Insights</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            Career Insights & Job Search Guides 2026
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
            Discover expert career advice, resume tips, interview strategies, salary negotiation guidance, remote work best practices, and insights into AI career trends to help you find the right job and grow your career in 2026.
          </p>
        </div>

        <CareerInsightsClient />
      </div>
    </section>
  )
}
