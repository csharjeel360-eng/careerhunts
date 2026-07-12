'use client'

import Link from 'next/link'
import { ExternalLink, Briefcase, MapPin, Calendar } from 'lucide-react'
import type { LiveJob } from '@/lib/live-jobs'

interface LiveJobsFeedProps {
  jobs: LiveJob[]
  error?: string
}

export function LiveJobsFeed({ jobs, error }: LiveJobsFeedProps) {
  if (error) {
    return (
      <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-700">
        <p className="text-lg font-medium">Jobs temporarily unavailable.</p>
        <p className="mt-2 text-sm">{error}</p>
      </div>
    )
  }

  if (!jobs.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-700">
        <p className="text-lg font-medium">No live roles are available right now.</p>
        <p className="mt-2 text-sm">Please check again shortly.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job) => (
        <div key={job.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">{job.source}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{job.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{job.company}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              {job.source === 'USAJOBS' ? 'Government' : 'Private sector'}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
              <MapPin className="h-3.5 w-3.5 text-slate-500" />
              {job.location || 'Remote / UAE'}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
              <Calendar className="h-3.5 w-3.5 text-slate-500" />
              {job.postedDate ? new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently posted'}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="inline-flex items-center gap-2 text-sm text-slate-600">
              <Briefcase className="h-4 w-4 text-slate-500" />
              Live opportunity
            </div>
            {job.applyUrl ? (
              <Link href={job.applyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition hover:text-cyan-700">
                Apply <ExternalLink className="h-4 w-4" />
              </Link>
            ) : (
              <span className="text-sm text-slate-500">Apply link unavailable</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
