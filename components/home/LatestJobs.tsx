import React from 'react'
import Link from 'next/link'
import { JobCard } from '@/components/jobs/JobCard'

export function LatestJobs({ jobs }: any) {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-8 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Freshly added</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            New roles posted every day
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Stay ahead of the market with newly published opportunities from innovative companies and growing teams.
          </p>
        </div>
        <Link href="/jobs" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          View more jobs
        </Link>
      </div>

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
    </section>
  )
}

export default LatestJobs
