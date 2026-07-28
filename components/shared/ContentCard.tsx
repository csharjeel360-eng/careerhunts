import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type ContentCardVariant = 'guide' | 'salary' | 'visa'

interface ContentCardRow {
  label: string
  value: string
}

interface ContentCardProps {
  title: string
  description?: string
  category: string
  href: string
  variant: ContentCardVariant
  authorName?: string
  authorInitials?: string
  readTime?: string
  publishedAt?: string
  updatedAt?: string
  rows?: ContentCardRow[]
}

const variantStyles = {
  guide: {
    pill: 'bg-[hsl(var(--category-career))] text-[hsl(var(--category-career-foreground))] dark:bg-[hsl(var(--category-career))]/20 dark:text-[hsl(var(--category-career-foreground))]',
    body: 'text-slate-600 dark:text-slate-400',
    border: 'border-[hsla(var(--border),0.5)] dark:border-slate-800',
    surface: 'bg-white dark:bg-slate-950',
    footer: 'border-[hsla(var(--border),0.2)] dark:border-slate-800'
  },
  salary: {
    pill: 'bg-[hsl(var(--category-salary))] text-[hsl(var(--category-salary-foreground))] dark:bg-[hsl(var(--category-salary))]/20 dark:text-[hsl(var(--category-salary-foreground))]',
    body: 'text-slate-600 dark:text-slate-400',
    border: 'border-[hsla(var(--border),0.5)] dark:border-slate-800',
    surface: 'bg-white dark:bg-slate-950',
    footer: 'border-[hsla(var(--border),0.2)] dark:border-slate-800'
  },
  visa: {
    pill: 'bg-[hsl(var(--category-visa))] text-[hsl(var(--category-visa-foreground))] dark:bg-[hsl(var(--category-visa))]/20 dark:text-[hsl(var(--category-visa-foreground))]',
    body: 'text-slate-600 dark:text-slate-400',
    border: 'border-[hsla(var(--border),0.5)] dark:border-slate-800',
    surface: 'bg-white dark:bg-slate-950',
    footer: 'border-[hsla(var(--border),0.2)] dark:border-slate-800'
  }
} as const

function getReadTime(text?: string, fallback?: string) {
  if (fallback) return fallback
  if (!text) return '4 min read'

  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 180))
  return `${minutes} min read`
}

function formatDate(value?: string) {
  if (!value) return null

  const trimmed = value.trim()
  if (!trimmed) return null

  const parsed = new Date(trimmed)
  if (!Number.isNaN(parsed.getTime())) {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(parsed)
  }

  return trimmed
}

export default function ContentCard({
  title,
  description,
  category,
  href,
  variant,
  authorName,
  authorInitials,
  readTime,
  publishedAt,
  updatedAt,
  rows
}: ContentCardProps) {
  const styles = variantStyles[variant]
  const footerLabel = updatedAt
    ? `Last updated ${formatDate(updatedAt)}`
    : publishedAt
      ? `Published ${formatDate(publishedAt)}`
      : 'Published recently'
  const displayReadTime = getReadTime(description, readTime)
  const isAuthorRowVisible = variant === 'guide' || variant === 'visa'

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded-[12px] border border-[0.5px] ${styles.border} ${styles.surface} p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className="flex items-center justify-start gap-3">
        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${styles.pill}`}>
          {category}
        </span>
      </div>

      <h3 className="mt-4 text-[16px] font-medium leading-7 text-slate-900 line-clamp-2 dark:text-slate-100">
        {title}
      </h3>

      {variant === 'salary' ? (
        <div className="mt-4 overflow-hidden rounded-[10px] border border-slate-200/70 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-200/70 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <span>Role level</span>
            <span>Range</span>
          </div>
          {rows?.slice(0, 3).map((row) => (
            <div key={`${row.label}-${row.value}`} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-200/70 px-3 py-3 last:border-b-0 dark:border-slate-800">
              <span className="text-sm text-slate-700 dark:text-slate-300">{row.label}</span>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{row.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className={`mt-4 text-sm leading-7 ${styles.body} line-clamp-2`}>
          {description}
        </p>
      )}

      {isAuthorRowVisible ? (
        <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-500 dark:text-slate-400">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {authorInitials || 'A'}
          </div>
          <span className="font-medium text-slate-700 dark:text-slate-200">{authorName || 'CareerHunt'}</span>
          <span>•</span>
          <span>{displayReadTime}</span>
        </div>
      ) : null}

      <div className={`mt-auto flex items-center justify-between border-t pt-4 text-sm ${styles.footer}`}>
        <span className="text-slate-500 dark:text-slate-400">{footerLabel}</span>
        <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 dark:text-slate-400" />
      </div>
    </Link>
  )
}
