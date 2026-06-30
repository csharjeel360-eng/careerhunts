import React from 'react'
import Link from 'next/link'
import { JobCard } from '@/components/jobs/JobCard'

export function FeaturedJobs({ jobs }: any) {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Handpicked opportunities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured roles for ambitious professionals
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover career-defining positions from leading employers across fast-growing industries and modern teams.
          </p>
        </div>
        <Link href="/jobs" className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900">
          Browse all openings
          <span className="ml-2">→</span>
        </Link>
      </div>

      {(!jobs || jobs.length === 0) ? (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600">No featured jobs available yet.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(jobs || []).slice(0, 6).map((job: any) => (
            <JobCard key={job._id} job={job} variant="featured" />
          ))}
        </div>
      )}
    </section>
  )
}

export default FeaturedJobs
