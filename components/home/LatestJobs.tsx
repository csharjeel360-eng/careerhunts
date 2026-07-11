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
    tags: ['Genentech Careers', 'Biotech Jobs', 'USA Roles'],
    border: 'border-[#005EB8]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(0,94,184,0.24)]',
    badgeBg: 'bg-[#005EB8]',
    badgeText: 'text-white',
    titleHover: 'group-hover:text-[#005EB8]'
  },
  {
    title: 'Shopify Careers 2026',
    excerpt:
      'Explore Shopify remote jobs, internships, engineering roles, product opportunities, and customer support positions with insights on salaries and benefits.',
    category: 'Career Guide',
    href: '/shopify-careers-2026',
    tags: ['Shopify Careers', 'Remote Jobs', 'Ecommerce Roles'],
    border: 'border-[#95BF47]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(149,191,71,0.24)]',
    badgeBg: 'bg-[#95BF47]',
    badgeText: 'text-slate-950',
    titleHover: 'group-hover:text-[#95BF47]'
  },
  {
    title: 'Emirates Group Careers in UAE 2026',
    excerpt:
      'Learn about the latest Emirates Group jobs in UAE across cabin crew, engineering, IT, and airport careers, plus how to apply online successfully.',
    category: 'Career Guide',
    href: '/emirates-group-careers-uae-2026',
    tags: ['Emirates Careers', 'UAE Jobs', 'Aviation Roles'],
    border: 'border-[#D71920]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(215,25,32,0.24)]',
    badgeBg: 'bg-[#D71920]',
    badgeText: 'text-white',
    titleHover: 'group-hover:text-[#D71920]'
  },
  {
    title: 'Qatar Airways Careers 2026',
    excerpt:
      'Explore Qatar Airways job openings across cabin crew, pilots, engineering, operations, and customer service with insight into company benefits and application tips.',
    category: 'Career Guide',
    href: '/qatar-airways-careers-2026',
    tags: ['Qatar Airways', 'Doha Jobs', 'Aviation Careers'],
    border: 'border-[#5C0E62]',
    shadow: 'shadow-[0_25px_70px_-24px_rgba(92,14,98,0.24)]',
    badgeBg: 'bg-[#5C0E62]',
    badgeText: 'text-white',
    titleHover: 'group-hover:text-[#5C0E62]'
  }
]

export function LatestJobs({ jobs }: any) {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-16">

      {(!jobs || jobs.length === 0) ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600">No latest jobs available yet.</div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(jobs || []).slice(0, 9).map((job: any) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </>
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
              className={`group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border ${item.border} bg-white p-6 md:p-7 ${item.shadow} transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div>
                <div className={`mb-3 h-1 w-16 rounded-full ${item.badgeBg}`} />
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${item.badgeBg} ${item.badgeText}`}>
                    {item.category}
                  </span>
                  <span className="text-sm font-medium text-slate-500">Read guide</span>
                </div>
                <div>
                  <h4 className={`text-xl md:text-2xl font-semibold tracking-tight ${item.titleHover}`}>
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm md:text-base leading-6 md:leading-7 text-slate-600 max-h-[4.5rem] overflow-hidden">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:mt-8">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs md:text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">View full guide</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-900">
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
