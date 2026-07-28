'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { formatLocation, formatSalary } from '@/lib/utils'

interface JobCardProps {
  job: {
    _id: string
    title: string
    slug: string
    companyId?: {
      name?: string
      logo?: string
    }
    companyName?: string
    companyLogo?: string
    createdBy?: {
      _id?: string
      name?: string
      username?: string
      avatar?: string
      email?: string
      role?: string
      isActive?: boolean
      createdAt?: string
    }
    category: string
    country: string
    city: string
    employmentType: string
    workMode?: string
    salaryMin: number
    salaryMax: number
    salaryCurrency: string
    isFeatured: boolean
    isUrgent: boolean
    postedDate: string
    createdAt?: string
    relativePostedLabel?: string
    actualPostedDate?: string
  }
  variant?: 'featured' | 'latest'
}

const getRelativePostedLabel = (date: Date) => {
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
}

export function JobCard({ job, variant = 'latest' }: JobCardProps) {
  // Prefer server-provided labels to keep SSR and hydration consistent.
  const relativePostedLabel = job.relativePostedLabel || (() => {
    const postedDateValue = job.postedDate || job.createdAt
    const postedDate = postedDateValue ? new Date(postedDateValue) : null
    const isValidPostedDate = postedDate && !Number.isNaN(postedDate.getTime())
    return isValidPostedDate ? getRelativePostedLabel(postedDate) : 'Recently posted'
  })()

  const actualPostedDate = job.actualPostedDate || (() => {
    const postedDateValue = job.postedDate || job.createdAt
    const postedDate = postedDateValue ? new Date(postedDateValue) : null
    const isValidPostedDate = postedDate && !Number.isNaN(postedDate.getTime())
    return isValidPostedDate
      ? postedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : ''
  })()
  const salaryText = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)
  const locationText = formatLocation(job.city, job.country)
  const seoSummary = `${job.title}${locationText ? ` in ${locationText}` : ''}. ${job.employmentType} role in ${job.category} with ${salaryText} compensation.`

  const companyName = job.companyName || job.companyId?.name || 'Company'
  const initials = companyName
    .split(' ')
    .map((name: string) => name.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className={`group relative flex h-full flex-col gap-2.5 rounded-[12px] border-[0.5px] border-slate-200 bg-white p-[1.1rem] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md ${variant === 'featured' ? 'ring-2 ring-cyan-100' : ''}`}>
      {job.isFeatured && (
        <span className="absolute top-3 right-3 text-[11px] font-semibold text-slate-800 bg-slate-100 rounded-[8px] px-2.5 py-1">
          Featured
        </span>
      )}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-slate-100 text-[12px] font-semibold text-slate-700">
          {initials}
        </div>
        <div>
          <Link href={`/jobs/${job.slug}`} className="block text-[15px] font-semibold leading-5 text-slate-900 transition-colors hover:text-cyan-700" aria-label={`${job.title}${locationText ? ` in ${locationText}` : ''}`}>
            {job.title}
          </Link>
          <p className="mt-1 text-[12px] text-slate-500">{companyName}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {locationText && (
          <span className="text-[11px] bg-slate-100 rounded-[8px] px-2.5 py-1 text-slate-600">{locationText}</span>
        )}
        <span className="text-[11px] bg-slate-100 rounded-[8px] px-2.5 py-1 text-slate-600">{job.employmentType || 'Full-time'}</span>
        <span className="text-[11px] bg-slate-100 rounded-[8px] px-2.5 py-1 text-slate-600">{job.workMode || 'Hybrid'}</span>
      </div>

      <p className={`text-[13px] font-semibold mt-2 ${salaryText.includes('Salary not') ? 'text-slate-500' : 'text-emerald-700'}`}>
        {salaryText}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-2.5">
        <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Calendar className="h-3.5 w-3.5" />
          {relativePostedLabel}
        </span>
        <Link href={`/jobs/${job.slug}`} className="text-[12px] font-semibold text-cyan-700" aria-label={`View details for ${job.title}`}>
          View role →
        </Link>
      </div>
    </div>
  )
}