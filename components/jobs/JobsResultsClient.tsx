'use client'

import { useEffect, useMemo, useState } from 'react'
import { JobCard } from '@/components/jobs/JobCard'

interface JobsResultsClientProps {
  initialOpportunities: any[]
  initialPage: number
  totalCount: number
  cacheKey?: string
}

const initialBatchSize = 10
const batchSize = 10

export default function JobsResultsClient({ initialOpportunities, initialPage, totalCount, cacheKey = 'careerhunt-jobs-cache-default' }: JobsResultsClientProps) {
  const [opportunities, setOpportunities] = useState(initialOpportunities)
  const [visibleCount, setVisibleCount] = useState(Math.min(initialBatchSize, initialOpportunities.length))

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const cached = window.sessionStorage.getItem(cacheKey)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (parsed && typeof parsed === 'object' && Array.isArray(parsed.opportunities)) {
          setOpportunities(parsed.opportunities)
          setVisibleCount(Math.min(parsed.visibleCount ?? initialBatchSize, parsed.opportunities.length))
          return
        }

        if (Array.isArray(parsed) && parsed.length > 0) {
          setOpportunities(parsed)
          setVisibleCount(Math.min(initialBatchSize, parsed.length))
          return
        }
      }
    } catch {
      // Ignore invalid cache data and fall back to the initial list.
    }

    window.sessionStorage.setItem(cacheKey, JSON.stringify({ opportunities: initialOpportunities, visibleCount: Math.min(initialBatchSize, initialOpportunities.length) }))
    setOpportunities(initialOpportunities)
    setVisibleCount(Math.min(initialBatchSize, initialOpportunities.length))
  }, [initialOpportunities, initialPage, cacheKey])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(cacheKey, JSON.stringify({ opportunities, visibleCount }))
    }
  }, [opportunities, visibleCount, cacheKey])

  const displayedOpportunities = useMemo(() => {
    return opportunities.slice(0, visibleCount)
  }, [opportunities, visibleCount])

  const hasMore = visibleCount < opportunities.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + batchSize, opportunities.length))
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
          {displayedOpportunities.length > 0 ? (
            displayedOpportunities.map((item: any) => {
              if (item.type === 'live') {
                return (
                  <div key={item.id || `${item.source}-${item.title}`} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] bg-emerald-100 text-emerald-700`}>
                        External
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

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          <div className="text-sm text-slate-500">
            Showing {displayedOpportunities.length} of {opportunities.length} jobs
          </div>
          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              See more jobs
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
