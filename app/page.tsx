import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Briefcase, Building2, Search, Sparkles, TrendingUp } from 'lucide-react'
import { JobCard } from '@/components/jobs/JobCard'
import { getLatestJobs, getCategories } from '@/lib/api'
import { getLiveJobs } from '@/lib/live-jobs'
import { careerResources as careerResourceData } from '@/lib/careerResourceData'

export const metadata: Metadata = {
  title: 'UAE Jobs & Visa Guide 2026 | CareerHunt',
  description:
    'Find UAE jobs with visa sponsorship info, salary guides, and hiring insights for Dubai, Abu Dhabi & Sharjah — all in one place. Updated daily.',
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
    title: 'UAE Jobs & Visa Guide 2026 | CareerHunt',
    description:
      'Find UAE jobs with visa sponsorship info, salary guides, and hiring insights for Dubai, Abu Dhabi & Sharjah — all in one place. Updated daily.',
    url: 'https://careerhunt.online/',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Jobs & Visa Guide 2026 | CareerHunt',
    description:
      'Find UAE jobs with visa sponsorship info, salary guides, and hiring insights for Dubai, Abu Dhabi & Sharjah — all in one place. Updated daily.'
  }
}

export const revalidate = 60

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
    relativePostedLabel: (() => {
      const posted = job.postedDate || job.createdAt
      if (!posted) return 'Recently posted'
      const date = new Date(posted)
      if (Number.isNaN(date.getTime())) return 'Recently posted'
      const now = new Date()
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const diffDays = Math.round((startOfToday.getTime() - startOfDate.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays <= 0) return 'Today'
      if (diffDays === 1) return '1 day ago'
      if (diffDays < 7) return `${diffDays} days ago`
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`
      return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`
    })(),
    actualPostedDate: (() => {
      const posted = job.postedDate || job.createdAt
      if (!posted) return ''
      const date = new Date(posted)
      if (Number.isNaN(date.getTime())) return ''
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    })(),
  }))

  const liveExternalJobs = (liveJobs || []).map((job: any) => ({
    ...job,
    sourceLabel: 'External',
    sortDate: job.postedDate || '',
    relativePostedLabel: (() => {
      const posted = job.postedDate
      if (!posted) return 'Recently posted'
      const date = new Date(posted)
      if (Number.isNaN(date.getTime())) return 'Recently posted'
      const now = new Date()
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const diffDays = Math.round((startOfToday.getTime() - startOfDate.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays <= 0) return 'Today'
      if (diffDays === 1) return '1 day ago'
      if (diffDays < 7) return `${diffDays} days ago`
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`
      return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`
    })(),
    actualPostedDate: (() => {
      const posted = job.postedDate
      if (!posted) return ''
      const date = new Date(posted)
      if (Number.isNaN(date.getTime())) return ''
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    })(),
  }))

  const mixedJobs = [...serverJobs, ...liveExternalJobs]
    .sort((a, b) => getSortTimestamp(b.sortDate) - getSortTimestamp(a.sortDate))
    .slice(0, 6)

  const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman']
  const visaTags = [
    { label: 'Employment Visa', href: '/visa/uae-employment-visa-guide' },
    { label: 'Golden Visa', href: '/visa/uae-golden-visa-guide' },
    { label: 'Family Sponsorship', href: '/visa/uae-family-sponsorship-guide' },
    { label: 'Work Permit', href: '/visa/uae-work-permit-guide' },
  ]
  const salaryPreview = [
    {
      role: 'Software engineer salaries in the UAE',
      amount: 'Dubai vs. Abu Dhabi comparison',
      href: '/salary-guide/software-engineer-dubai-abu-dhabi-2026',
    },
    {
      role: 'Entry-level salary in the UAE',
      amount: 'Fresh graduate pay expectations',
      href: '/salary-guide/entry-level-salary-uae-fresh-graduates-2026',
    },
    {
      role: 'Teacher salary in Dubai',
      amount: 'Curriculum and school comparisons',
      href: '/salary-guide/teacher-salary-dubai-curriculum-2026',
    },
  ]
  const careerGuides = (careerResourceData || []).slice(0, 4)

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

      <section className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)] py-6 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="space-y-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
            <div className="rounded-[20px] bg-sky-50 p-6 text-center sm:p-8">
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">Find your next job in the UAE</p>
              <p className="mx-auto mt-2 max-w-[420px] text-sm leading-7 text-slate-600">Dubai · Abu Dhabi · Sharjah — with visa and Golden Visa guidance built in</p>
              <form action="/jobs" method="get" className="mx-auto mt-4 flex w-full max-w-[480px] flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="keyword"
                    placeholder="Job title or keyword"
                    className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none"
                  />
                </div>
                <button type="submit" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  Search
                </button>
              </form>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[20px] border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Browse by emirate</span>
                <div className="mt-3 grid gap-2 sm:grid-cols-4">
                  {emirates.map((item) => (
                    <Link key={item} href={`/jobs?city=${encodeURIComponent(item)}`} className="rounded-[12px] border border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-sky-50 p-4 sm:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">Visa and legal hub</span>
                <p className="mt-2 text-sm font-semibold text-slate-900">Work visas, Golden Visa, sponsorship — explained</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {visaTags.map((item) => (
                    <Link key={item.href} href={item.href} className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-800">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Latest jobs</span>
                <Link href="/jobs" className="text-sm font-semibold text-sky-700">View all →</Link>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {mixedJobs.length > 0 ? mixedJobs.map((item: any) => (
                  <div key={item._id || item.id || `${item.source}-${item.title}`} className="rounded-[16px] border border-slate-200 bg-slate-50 p-4">
                    <JobCard job={item} variant="featured" />
                  </div>
                )) : (
                  <div className="rounded-[16px] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 md:col-span-2 xl:col-span-3">
                    No latest jobs available yet.
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[20px] border border-slate-200 bg-white p-4 sm:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Salary guide preview</span>
                <div className="mt-3 space-y-2">
                  {salaryPreview.map((item) => (
                    <Link key={item.role} href={item.href} className="flex items-center justify-between rounded-[12px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-sky-300 hover:bg-white">
                      <span>{item.role}</span>
                      <span className="font-semibold text-emerald-700">{item.amount}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Featured company pages</p>
                  <div className="mt-3 grid gap-3">
                    <Link href="/dhl-careers-uae-2026" className="rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-sky-300 hover:bg-slate-100">
                      <div className="font-semibold text-slate-900">DHL Careers UAE 2026</div>
                      <div className="mt-1 text-xs leading-5 text-slate-600">Explore DHL jobs in Dubai, Abu Dhabi, and across the UAE.</div>
                    </Link>
                    <Link href="/noon-careers-uae-2026" className="rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-sky-300 hover:bg-slate-100">
                      <div className="font-semibold text-slate-900">Noon Careers UAE 2026</div>
                      <div className="mt-1 text-xs leading-5 text-slate-600">Discover careers in e-commerce, operations, logistics, and technology at Noon.</div>
                    </Link>
                    <Link href="/emirates-group-careers-uae-2026" className="rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-sky-300 hover:bg-slate-100">
                      <div className="font-semibold text-slate-900">Emirates Group Careers UAE 2026</div>
                      <div className="mt-1 text-xs leading-5 text-slate-600">Find Emirates Group opportunities, salary insights, and application guidance.</div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-4 sm:p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Featured career guides</span>
                <div className="mt-3 grid gap-3">
                  <Link
                    href="/career-insights"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                  >
                    Go to Career Insights
                  </Link>
                  {careerGuides.map((item: any) => {
                    const isCareerInsights = item.slug === 'career-insights'

                    if (isCareerInsights) return null

                    return (
                      <Link
                        key={item.slug || item.title}
                        href={item.slug ? `/career-resources/${item.slug}` : '/career-resources'}
                        className="rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 hover:border-sky-300 hover:bg-slate-100"
                      >
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-600">
                          {item.excerpt || item.description || 'Helpful guidance for your next career move.'}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-slate-50/70 p-4 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Employer and support</span>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
                <Link href="/employer" className="font-semibold text-sky-700">Post a job</Link>
                <Link href="/about" className="font-semibold text-sky-700">About</Link>
                <Link href="/contact" className="font-semibold text-sky-700">Contact</Link>
                <Link href="/privacy" className="font-semibold text-sky-700">Privacy</Link>
                <Link href="/sitemap" className="font-semibold text-sky-700">Sitemap</Link>
              </div>
              <div className="mt-4 flex justify-center">
                <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://sellwithboost.com/badge/listing.svg"
                    alt="Listed on Sell With boost"
                    style={{ height: '40px', width: 'auto' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}