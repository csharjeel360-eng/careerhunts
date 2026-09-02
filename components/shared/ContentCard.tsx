import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpenText, Briefcase, DollarSign, FileText } from 'lucide-react'

export type ContentCardVariant = 'guide' | 'salary' | 'visa' | 'resources'

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
  backgroundImage?: string
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
  },
  resources: {
    pill: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-200',
    body: 'text-slate-600 dark:text-slate-400',
    border: 'border-[hsla(var(--border),0.5)] dark:border-slate-800',
    surface: 'bg-white dark:bg-slate-950',
    footer: 'border-[hsla(var(--border),0.2)] dark:border-slate-800'
  }
} as const

const categoryIcons = {
  guide: Briefcase,
  salary: DollarSign,
  visa: FileText,
  resources: BookOpenText,
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
  backgroundImage,
  rows
}: ContentCardProps) {
  const styles = variantStyles[variant]
  const Icon = categoryIcons[variant] ?? Briefcase
  const publishedDate = formatDate(publishedAt)
  const updatedDate = formatDate(updatedAt)
  const footerLabel = publishedDate && updatedDate
    ? 'Updated recently'
    : publishedDate
      ? 'Published recently'
      : updatedDate
        ? 'Updated recently'
        : 'New article'
  const displayReadTime = getReadTime(description, readTime)
  const isAuthorRowVisible = variant === 'guide' || variant === 'visa' || variant === 'resources'

  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200/80 bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_14px_30px_rgba(14,116,144,0.12)]`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500" />

      {backgroundImage ? (
        <div className="mb-3 overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100">
          <Image
            src={backgroundImage}
            alt={title}
            width={640}
            height={300}
            className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-2 pt-0.5">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] ${styles.pill}`}>
          <Icon className="h-2.5 w-2.5" />
          {category}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[8px] font-medium text-slate-500">
          {displayReadTime}
        </span>
      </div>

      <h3 className="mt-2 text-[0.96rem] font-semibold leading-5 text-slate-900 transition-colors duration-200 group-hover:text-sky-700 dark:text-slate-100">
        {title}
      </h3>

      {variant === 'salary' ? (
        <div className="mt-4 overflow-hidden rounded-[14px] border border-slate-200 bg-slate-50/80">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-slate-200 bg-white/70 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span>Role</span>
            <span>Range</span>
          </div>
          {rows?.slice(0, 3).map((row) => (
            <div key={`${row.label}-${row.value}`} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-200 px-3 py-3 last:border-b-0">
              <span className="text-sm text-slate-700">{row.label}</span>
              <span className="text-sm font-semibold text-slate-900">{row.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className={`mt-2 text-[12.5px] leading-5 ${styles.body} line-clamp-3`}>
          {description}
        </p>
      )}

      <div className="mt-2.5 flex items-center gap-1 overflow-hidden border-t border-slate-200 pt-2">
        {publishedDate && (
          <span className="inline-flex min-w-0 items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-emerald-700 whitespace-nowrap">
            Publish {publishedDate}
          </span>
        )}
        {updatedDate && (
          <span className="inline-flex min-w-0 items-center rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-sky-700 whitespace-nowrap">
            Update {updatedDate}
          </span>
        )}
        {!publishedDate && !updatedDate && (
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-slate-600 whitespace-nowrap">
            {footerLabel}
          </span>
        )}
      </div>

      {isAuthorRowVisible ? (
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <Image
                src="/icon.svg"
                alt="CareerHunt logo"
                width={20}
                height={20}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-medium text-slate-700">{authorName || 'CareerHunt'}</span>
          </div>
        </div>
      ) : null}

      <div className="mt-2.5 flex items-center justify-between rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
        <span className="text-xs">Read article</span>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-200 group-hover:translate-x-1 group-hover:text-sky-700">
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}
