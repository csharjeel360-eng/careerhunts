import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface JobDetailBreadcrumbsProps {
  city?: string
  title: string
}

export default function JobDetailBreadcrumbs({ city, title }: JobDetailBreadcrumbsProps) {
  const cityLabel = city?.trim() || 'Location'
  const cityHref = city ? `/jobs?city=${encodeURIComponent(city)}` : '/jobs'

  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-slate-500">
      <Link href="/" className="transition hover:text-slate-900">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/jobs" className="transition hover:text-slate-900">
        Jobs
      </Link>
      <ChevronRight className="h-4 w-4" />
      {city ? (
        <Link href={cityHref} className="transition hover:text-slate-900">
          {cityLabel}
        </Link>
      ) : (
        <span className="text-slate-700">Location</span>
      )}
      <ChevronRight className="h-4 w-4" />
      <span className="text-slate-700">{title}</span>
    </nav>
  )
}
