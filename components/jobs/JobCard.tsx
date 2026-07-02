'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react'

const allowedRemoteImageHosts = [
  'res.cloudinary.com',
  'lh3.googleusercontent.com',
  'lh6.googleusercontent.com',
  'firebasestorage.googleapis.com',
  'avatars.githubusercontent.com',
  'graph.facebook.com'
]

const isSafeImageUrl = (url?: string) => {
  if (!url) return false

  const normalized = url.trim()
  if (!normalized) return false
  if (normalized.startsWith('data:')) return false
  if (normalized.startsWith('/')) return true

  try {
    const parsed = new URL(normalized)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

const isAllowedRemoteImageUrl = (url?: string) => {
  if (!isSafeImageUrl(url)) return false

  try {
    const parsed = new URL(url as string)
    return allowedRemoteImageHosts.includes(parsed.hostname)
  } catch {
    return false
  }
}

import { Card, CardContent } from '@/components/ui/card'
import { formatSalary } from '@/lib/utils'

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
    salaryMin: number
    salaryMax: number
    salaryCurrency: string
    isFeatured: boolean
    isUrgent: boolean
    postedDate: string
    createdAt?: string
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
  const creatorName = job.createdBy?.name || job.createdBy?.username || 'Unknown user'
  const creatorAvatar = job.createdBy?.avatar
  const postedByText = job.createdBy?.username ? `@${job.createdBy.username}` : creatorName
  const postedDateValue = job.postedDate || job.createdAt
  const postedDate = postedDateValue ? new Date(postedDateValue) : null
  const isValidPostedDate = postedDate && !Number.isNaN(postedDate.getTime())
  const relativePostedLabel = isValidPostedDate ? getRelativePostedLabel(postedDate) : 'Recently posted'
  const actualPostedDate = isValidPostedDate
    ? postedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : ''

  return (
    <Card className={`group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg ${variant === 'featured' ? 'ring-2 ring-cyan-100' : ''}`}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-100 shadow-sm">
              {isSafeImageUrl(creatorAvatar) ? (
                isAllowedRemoteImageUrl(creatorAvatar) ? (
                  <Image
                    src={creatorAvatar!}
                    alt={creatorName}
                    fill
                    className="rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={creatorAvatar!}
                    alt={creatorName}
                    className="h-full w-full rounded-full object-cover"
                  />
                )
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-600">
                  {creatorName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Posted by</p>
              <p className="mt-0.5 truncate text-sm font-semibold text-slate-900">{postedByText}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-2">
            {job.isFeatured && (
              <span className="rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Featured
              </span>
            )}
            {job.isUrgent && (
              <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                Urgent
              </span>
            )}
          </div>
        </div>

        <Link href={`/jobs/${job.slug}`} className="mt-4 block">
          <h2 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-cyan-700 line-clamp-2">
            {job.title}
          </h2>
        </Link>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600 ring-1 ring-slate-200">
          <Calendar className="h-3.5 w-3.5 text-slate-500" />
          <span>{relativePostedLabel}</span>
          {actualPostedDate && (
            <>
              <span className="text-slate-400">•</span>
              <span>{actualPostedDate}</span>
            </>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
            <MapPin className="h-3.5 w-3.5 text-slate-500" />
            {job.city}, {job.country}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
            <Briefcase className="h-3.5 w-3.5 text-slate-500" />
            {job.employmentType}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
            <DollarSign className="h-3.5 w-3.5 text-slate-500" />
            {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
            {job.category}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-xs text-slate-500">Ready to apply?</p>
          <Link
            href={`/jobs/${job.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition hover:text-cyan-700"
            aria-label={`View details for ${job.title}`}
          >
            View role <span aria-hidden="true">→</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}