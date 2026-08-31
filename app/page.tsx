import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import {
  ArrowRight,
  Bell,
  BookOpenText,
  Briefcase,
  Building2,
  FileText,
  Headphones,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react'
import { JobCard } from '@/components/jobs/JobCard'
import { getLatestJobs, getCategories } from '@/lib/api'
import { getLiveJobs } from '@/lib/live-jobs'
import { careerResources as careerResourceData } from '@/lib/careerResourceData'
import { getPageMetadata, getCanonicalUrl, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Jobs & Visa Guide 2026 | CareerHunt',
  description:
    'Find UAE jobs with visa sponsorship info, salary guides, and hiring insights for Dubai, Abu Dhabi & Sharjah — all in one place. Updated daily.',
  path: '/',
  keywords: [
    'jobs',
    'career opportunities',
    'salary guide',
    'job search',
    'remote jobs',
    'professional growth'
  ]
})

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

  const featuredCompanies = [
    {
      title: 'DHL Careers UAE 2026',
      desc: 'Explore DHL jobs in Dubai, Abu Dhabi, and across the UAE.',
      href: '/dhl-careers-uae-2026',
      logo: '/DHLlogo.webp'
    },
    {
      title: 'Noon Careers UAE 2026',
      desc: 'Discover careers in e-commerce, operations, logistics, and technology at Noon.',
      href: '/noon-careers-uae-2026',
      logo: '/noonlogo.webp'
    },
    {
      title: 'Emirates Group Careers UAE 2026',
      desc: 'Find Emirates Group opportunities, salary insights, and application guidance.',
      href: '/emirates-group-careers-uae-2026',
      logo: '/emirateslogo.webp'
    }
  ]

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CareerHunt',
      url: getCanonicalUrl('/'),
      description:
        'CareerHunt helps professionals discover job opportunities, salary insights, and career resources in one trusted platform.',
      potentialAction: {
        '@type': 'SearchAction',
        target: new URL('/jobs?keyword={search_term_string}', SITE_URL).toString(),
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CareerHunt',
      url: getCanonicalUrl('/'),
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

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200 h-[420px] sm:h-[450px] lg:h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero%20(3).webp')",
                backgroundPosition: 'center right',
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/55 to-transparent" />

            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center p-5 sm:p-8 lg:p-12">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Find your next job<br />
                in the <span className="font-semibold text-sky-300">UAE</span>
              </h1>
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-slate-100 sm:text-base lg:text-lg">
                Dubai · Abu Dhabi · Sharjah — with visa and Golden Visa guidance built in
              </p>

              <form action="/jobs" method="get" className="flex w-full flex-col gap-3 sm:w-fit sm:flex-row">
                <div className="flex w-full items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-3 shadow-md transition hover:shadow-lg focus-within:border-sky-500 sm:min-w-[280px] lg:min-w-[360px]">
                  <Search className="h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    name="keyword"
                    placeholder="Job title or keyword"
                    className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
                <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-700 active:scale-95 sm:px-8">
                  Search
                </button>
              </form>
            </div>

            <div className="absolute right-4 top-4 z-20 rounded-2xl bg-white/95 p-3 shadow-lg sm:right-6 sm:top-6 sm:p-5">
              <div className="text-center">
                <div className="text-xl font-bold text-sky-600 sm:text-2xl lg:text-3xl">10,000+</div>
                <div className="text-[10px] font-medium leading-4 text-slate-600 sm:text-xs">
                  <span>Active Jobs</span>
                  <br />
                  <span>in UAE</span>
                </div>
              </div>
            </div>
          </div>



          {/* Emirate and Visa Section - 2 Column Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Left: Browse by Emirate */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-7 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-600 block mb-6">Browse by emirate</span>
              <div className="grid gap-4 grid-cols-2">
                {[
                  { name: 'Dubai', image: '/dubai.webp' },
                  { name: 'Abu Dhabi', image: '/abudabhi.webp' },
                  { name: 'Sharjah', image: '/sharjah.webp' },
                  { name: 'Ajman', image: '/Ajman.webp' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={`/jobs?city=${encodeURIComponent(item.name)}`}
                    className="group relative rounded-[16px] overflow-hidden transition-all duration-300 h-24 sm:h-32"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundPosition: 'center',
                      }}
                    />
                    {/* Text overlay at bottom - much lighter for clearer images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-slate-900/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                      <p className="text-center text-xs sm:text-sm font-bold text-white drop-shadow-lg">{item.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="text-slate-400">📍</span>
                <Link href="/jobs" className="text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 transition">
                  More opportunities across the UAE
                </Link>
              </div>
            </div>

            {/* Right: Visa and Legal Hub */}
            <div className="rounded-[24px] border border-slate-200 overflow-hidden transition-all duration-300 relative min-h-[380px] sm:min-h-[420px]" style={{
              backgroundImage: "url('/visa%20and%20guides.webp')",
              backgroundPosition: 'center right',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
              {/* Subtle overlay for content readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
              
              {/* Content Section */}
              <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-700 block mb-3">Visa and legal hub</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-8 leading-tight">Work visas, Golden Visa, sponsorship — explained</h3>
                  
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Employment Visa', icon: '📋', href: '/visa/uae-employment-visa-guide' },
                      { label: 'Golden Visa', icon: '👑', href: '/visa/uae-golden-visa-guide' },
                      { label: 'Family Sponsorship', icon: '👥', href: '/visa/uae-family-sponsorship-guide' },
                      { label: 'Work Permit', icon: '📄', href: '/visa/uae-work-permit-guide' },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-[12px] border border-sky-300 bg-sky-100 px-3 py-3 text-center shadow-md transition-all duration-300 hover:bg-sky-200 hover:border-sky-500 hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <span className="block text-2xl sm:text-3xl mb-1">{item.icon}</span>
                        <span className="text-xs sm:text-sm leading-tight font-semibold text-slate-800 block">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Jobs Section */}
          <div className="mt-12 rounded-[24px] border border-slate-200 bg-white p-7 sm:p-8">
            <div className="flex items-center justify-between gap-2 mb-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">Latest jobs</span>
              <Link href="/jobs" className="text-sm font-semibold text-sky-700 hover:text-sky-800 transition">View all →</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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

          {/* Features Section */}
          <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-2 shadow-sm sm:p-3">
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">
              {[
                {
                  icon: Bell,
                  title: 'Latest Job Alerts',
                  description: 'Get notified about new jobs that match you'
                },
                {
                  icon: MapPin,
                  title: 'Top UAE Locations',
                  description: 'Find jobs in Dubai, Abu Dhabi, Sharjah & more'
                },
                {
                  icon: ShieldCheck,
                  title: 'Trusted Employers',
                  description: 'Connect with verified companies across the UAE'
                },
                {
                  icon: FileText,
                  title: 'Visa Guidance',
                  description: 'All the info you need for work visas and Golden Visa'
                },
                {
                  icon: Headphones,
                  title: 'Career Support',
                  description: 'Resources and tips to help you grow your career'
                }
              ].map((feature, index) => {
                const Icon = feature.icon

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-[16px] border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:border-sky-200 hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 sm:h-12 sm:w-12">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold leading-tight text-slate-900 sm:text-[15px]">{feature.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-sky-200 bg-gradient-to-r from-sky-50 via-sky-50 to-slate-50 p-4 sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm sm:h-12 sm:w-12">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                    Your next opportunity is just a search away
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 sm:text-base">
                    Explore thousands of job openings across the UAE and take the next step in your career.
                  </p>
                </div>
              </div>

              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-700 sm:px-6 sm:py-4 sm:text-base"
              >
                Browse Jobs Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Salary Guide and Career Resources Section */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-xs">Salary guide preview</span>
              </div>

              <div className="space-y-3">
                {salaryPreview.map((item) => (
                  <Link
                    key={item.role}
                    href={item.href}
                    className="flex flex-col items-start justify-between gap-2 rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-sm sm:flex-row sm:items-center"
                  >
                    <span className="font-medium text-slate-700">{item.role}</span>
                    <span className="font-semibold text-emerald-600">{item.amount}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:text-xs">Featured company pages</p>
                <div className="space-y-3">
                  {featuredCompanies.map((company) => (
                    <Link
                      key={company.href}
                      href={company.href}
                      className="flex items-center justify-between gap-3 rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                          <img
                            src={company.logo}
                            alt={company.title}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate font-semibold text-slate-900">{company.title}</div>
                          <div className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs">{company.desc}</div>
                        </div>
                      </div>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-base font-bold text-slate-500">
                        ›
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <BookOpenText className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-xs">Featured career guides</span>
              </div>

              <div className="space-y-4">
                <Link
                  href="/career-insights"
                  className="inline-flex w-full items-center justify-center rounded-[14px] bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-sky-700 active:scale-[0.99]"
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
                      className="flex items-start gap-3 rounded-[14px] border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-sm"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                        <FileText className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs">
                          {item.excerpt || item.description || 'Helpful guidance for your next career move.'}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Footer Support Section */}
          <div className="mt-12 rounded-[24px] border border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50/50 p-8 text-center shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">Employer and support</span>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
              <Link href="/employer" className="font-semibold text-sky-700 hover:text-sky-800 transition">Post a job</Link>
              <span className="text-slate-300">•</span>
              <Link href="/about" className="font-semibold text-sky-700 hover:text-sky-800 transition">About</Link>
              <span className="text-slate-300">•</span>
              <Link href="/contact" className="font-semibold text-sky-700 hover:text-sky-800 transition">Contact</Link>
              <span className="text-slate-300">•</span>
              <Link href="/privacy" className="font-semibold text-sky-700 hover:text-sky-800 transition">Privacy</Link>
              <span className="text-slate-300">•</span>
              <Link href="/sitemap" className="font-semibold text-sky-700 hover:text-sky-800 transition">Sitemap</Link>
            </div>
            <div className="mt-5 flex justify-center">
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
      </section>
    </>
  )
}