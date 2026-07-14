import React from 'react'
import Link from 'next/link'
import { JobCard } from '@/components/jobs/JobCard'

const careerBlogItems = [
  {
    title: 'Genentech Careers USA 2026',
    excerpt:
      'Discover Genentech job opportunities in biotech, research, engineering, and commercial roles across the United States with salary insights and application guidance.',
    category: 'Career Guide',
    href: '/genentech-careers-usa-2026',
    image: '/Genentech%20Careers%20USA%202026.png',
    tags: ['Genentech Careers', 'Biotech Jobs', 'USA Roles'],
    border: 'border-[#005EB8]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(0,94,184,0.24)]',
    badgeBg: 'bg-[#005EB8]',
    badgeText: 'text-white',
  },
  {
    title: 'Shopify Careers 2026',
    excerpt:
      'Explore Shopify remote jobs, internships, engineering roles, product opportunities, and customer support positions with insights on salaries and benefits.',
    category: 'Career Guide',
    href: '/shopify-careers-2026',
    image: '/shopify-careers-2026.png',
    tags: ['Shopify Careers', 'Remote Jobs', 'Ecommerce Roles'],
    border: 'border-[#95BF47]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(149,191,71,0.24)]',
    badgeBg: 'bg-[#95BF47]',
    badgeText: 'text-slate-950',
  },
  {
    title: 'Emirates Group Careers in UAE 2026',
    excerpt:
      'Learn about the latest Emirates Group jobs in UAE across cabin crew, engineering, IT, and airport careers, plus how to apply online successfully.',
    category: 'Career Guide',
    href: '/emirates-group-careers-uae-2026',
    image: '/Emirates%20Group%20Careers.png',
    tags: ['Emirates Careers', 'UAE Jobs', 'Aviation Roles'],
    border: 'border-[#D71920]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(215,25,32,0.24)]',
    badgeBg: 'bg-[#D71920]',
    badgeText: 'text-white',
  },
  {
    title: 'Qatar Airways Careers 2026',
    excerpt:
      'Explore Qatar Airways job openings across cabin crew, pilots, engineering, operations, and customer service with insight into company benefits and application tips.',
    category: 'Career Guide',
    href: '/qatar-airways-careers-2026',
    image: '/Qatar%20Airways%20Careers.png',
    tags: ['Qatar Airways', 'Doha Jobs', 'Aviation Careers'],
    border: 'border-[#5C0E62]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(92,14,98,0.24)]',
    badgeBg: 'bg-[#5C0E62]',
    badgeText: 'text-white',
  }
]

export function LatestJobs({ jobs, mixedJobs }: { jobs?: any[]; mixedJobs?: any[] }) {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16">
      {mixedJobs && mixedJobs.length > 0 ? (
        <div className="mb-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Latest opportunities</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">9 newest jobs from the latest sources</h3>
            </div>
            <Link href="/jobs" className="text-sm font-semibold text-slate-700 transition hover:text-slate-900">
              View all roles
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mixedJobs.slice(0, 9).map((item: any) => (
              <div key={item._id || item.id || `${item.source}-${item.title}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <JobCard job={item} variant="featured" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600">No latest jobs available yet.</div>
      )}

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Explore more opportunities</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-900">Find the right role for your next career move</h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Browse all current openings, filter by industry, location and experience, and apply to the jobs that match your goals.
        </p>
        <Link href="/jobs" className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Explore more jobs
        </Link>
      </div>

      <section className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Career insights</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900">Featured career guides</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore major company career guides with detailed hiring and salary insights for top employers in 2026.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          {careerBlogItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border ${item.border} bg-cover bg-center p-6 md:p-7 ${item.shadow} transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
              <div className="relative z-10">
                <div className={`mb-3 h-1 w-16 rounded-full ${item.badgeBg}`} />
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${item.badgeBg} ${item.badgeText}`}>
                    {item.category}
                  </span>
                  <span className="text-sm font-medium text-white">Read guide</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm md:text-base leading-6 md:leading-7 text-white/90 max-h-[4.5rem] overflow-hidden">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="relative z-10 mt-6 flex flex-col gap-3 border-t border-white/25 pt-4 sm:mt-8">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs md:text-sm font-medium text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">View full guide</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
                    Go
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Browse more career insights
          </Link>
        </div>
      </section>
    </section>
  )
}

export default LatestJobs
