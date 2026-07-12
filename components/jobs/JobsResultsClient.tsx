'use client'

import { useMemo, useState } from 'react'
import { JobCard } from '@/components/jobs/JobCard'

interface JobsResultsClientProps {
  initialOpportunities: any[]
  initialPage: number
  totalCount: number
}

const pageSize = 21

export default function JobsResultsClient({ initialOpportunities, initialPage, totalCount }: JobsResultsClientProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const totalPages = Math.max(1, Math.ceil(initialOpportunities.length / pageSize))
  const safePage = Math.min(currentPage, totalPages)
  const startIndex = (safePage - 1) * pageSize

  const paginatedOpportunities = useMemo(() => {
    return initialOpportunities.slice(startIndex, startIndex + pageSize)
  }, [initialOpportunities, startIndex])

  const handlePageChange = (nextPage: number) => {
    const normalizedPage = Math.min(Math.max(nextPage, 1), totalPages)
    setCurrentPage(normalizedPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.28)]">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">All opportunities</p>
            <p className="text-sm text-slate-500">Newest roles appear first across local listings and live external sources.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedOpportunities.length > 0 ? (
            paginatedOpportunities.map((item: any) => {
              if (item.type === 'live') {
                return (
                  <div key={item.id || `${item.source}-${item.title}`} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${item.source === 'USAJOBS' ? 'bg-cyan-100 text-cyan-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {item.source === 'USAJOBS' ? 'Government' : 'Greenhouse'}
                      </span>
                      <span className="text-xs font-medium text-slate-500">External</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.company}</p>
                    <p className="mt-3 text-sm text-slate-500">{item.location || 'Remote / Hybrid'}</p>
                    <a href={item.applyUrl || '/jobs'} target={item.applyUrl ? '_blank' : undefined} rel={item.applyUrl ? 'noreferrer' : undefined} className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-cyan-700">
                      View role <span className="ml-2">→</span>
                    </a>
                  </div>
                )
              }

              return (
                <div key={item._id} className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <JobCard job={item} />
                </div>
              )
            })
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 md:col-span-2 xl:col-span-3">
              No jobs match your filters.
            </div>
          )}
        </div>

        {totalPages > 1 ? (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
            <div className="text-sm text-slate-500">
              Page {safePage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
              {safePage > 1 ? (
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Previous
                </button>
              ) : null}
              {safePage < totalPages ? (
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Next
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
