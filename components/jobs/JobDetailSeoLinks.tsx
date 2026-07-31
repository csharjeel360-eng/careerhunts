import Link from 'next/link'

interface JobDetailSeoLinksProps {
  city?: string
  companyName?: string
  companySlug?: string
  skills?: string[]
  category?: string
  jobSlug?: string
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function getSalaryGuideHref(category?: string) {
  const normalized = (category || '').toLowerCase()

  if (normalized.includes('software') || normalized.includes('tech') || normalized.includes('developer') || normalized.includes('engineering')) {
    return '/salary-guide/software-engineer-dubai-abu-dhabi-2026'
  }

  if (normalized.includes('nurse') || normalized.includes('health')) {
    return '/salary-guide/nurse-salary-uae-dha-haad-moh-2026'
  }

  if (normalized.includes('teacher') || normalized.includes('education')) {
    return '/salary-guide/teacher-salary-dubai-curriculum-2026'
  }

  if (normalized.includes('graduate') || normalized.includes('entry')) {
    return '/salary-guide/entry-level-salary-uae-fresh-graduates-2026'
  }

  return '/salary-guide/uae-salary-guide-2026'
}

export default function JobDetailSeoLinks({ city, companyName, companySlug, skills = [], category, jobSlug }: JobDetailSeoLinksProps) {
  const companyHref = '/companies'
  const cityHref = city ? `/jobs?city=${encodeURIComponent(city)}` : '/jobs'

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {city ? (
        <Link href={cityHref} className="font-medium text-sky-700 transition hover:text-sky-800">
          View more jobs in {city}
        </Link>
      ) : null}
      {companyName ? (
        <Link href={companyHref} className="font-medium text-sky-700 transition hover:text-sky-800">
          View all jobs at {companyName}
        </Link>
      ) : null}
      <Link href={getSalaryGuideHref(category)} className="font-medium text-sky-700 transition hover:text-sky-800">
        Related salary guide
      </Link>
      <Link href="/visa/uae-employment-visa-guide" className="font-medium text-sky-700 transition hover:text-sky-800">
        Visa & work permit info
      </Link>
      {skills.length ? (
        <span className="text-slate-500">Skills:</span>
      ) : null}
      {skills.map((skill) => (
        <Link key={skill} href={`/jobs?skill=${encodeURIComponent(skill)}`} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200">
          {skill}
        </Link>
      ))}
      {jobSlug ? (
        <span className="text-xs text-slate-400">{jobSlug}</span>
      ) : null}
    </div>
  )
}
