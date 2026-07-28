import Link from 'next/link'
import { MapPin, Briefcase, Calendar, Globe, Mail, ExternalLink, Building2, Clock3, Share2, Flag, ArrowLeft } from 'lucide-react'
import { formatDate, formatLocation, formatSalary, normalizeWebsiteUrl } from '@/lib/utils'

interface JobDetailProps {
  job: any
  similarJobs?: any[]
}

export default function JobDetail({ job, similarJobs = [] }: JobDetailProps) {
  const companyDescription = job.companyDescription || job.companyId?.description || 'Company description is not available.'
  const companyWebsite = normalizeWebsiteUrl(job.companyWebsite || job.companyId?.website || '')
  const companyName = job.companyName || job.companyId?.name || 'Company'
  const locationText = formatLocation(job.city, job.country)
  const workMode = job.workMode || 'Flexible'
  const employmentType = job.employmentType || 'Full-time'
  const salaryLabel = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)
  const experienceLevel = job.experienceLevel ? job.experienceLevel.replace('-', ' ') : 'Not specified'
  const educationLevel = job.educationLevel ? job.educationLevel.replace('-', ' ') : 'Not specified'
  const responsibilities = Array.isArray(job.responsibilities) ? job.responsibilities : []
  const requirements = Array.isArray(job.requirements) ? job.requirements : []
  const preferredQualifications = Array.isArray(job.preferredQualifications) ? job.preferredQualifications : []
  const requiredSkills = Array.isArray(job.requiredSkills) ? job.requiredSkills : []
  const benefits = Array.isArray(job.benefits) ? job.benefits : []
  const summary = job.summary || job.description || 'No summary provided yet.'
  const applicationDeadline = job.applicationDeadline ? formatDate(job.applicationDeadline) : 'Not specified'
  const applicationUrl = job.applicationUrl ? normalizeWebsiteUrl(job.applicationUrl) : ''
  const initials = companyName
    .split(' ')
    .map((name: string) => name.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <section className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)] py-6 sm:py-10 lg:py-14">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <Link
          href="/jobs"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to jobs
        </Link>

        <div className="mt-5 rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
          <div className="mb-4 text-sm text-slate-500">
            Home / Jobs / {job.category || 'Technology'} / {job.title}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-slate-900">{job.title}</h1>
                  <p className="mt-1 text-sm text-slate-500">{companyName} · {locationText}</p>
                </div>
              </div>

              <div>
                {job.applicationUrl ? (
                  <a href={applicationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                    Apply now
                  </a>
                ) : job.applicationEmail ? (
                  <a href={`mailto:${job.applicationEmail}`} className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                    Apply now
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{employmentType}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{workMode}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{salaryLabel}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">Posted {formatDate(job.postedDate)}</span>
            </div>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-slate-900">Job description</h2>
                <p className="text-sm leading-7 text-slate-600">{summary}</p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Responsibilities</h3>
                {responsibilities.length ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {responsibilities.map((item: string) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">No responsibilities specified.</p>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Requirements</h3>
                {requirements.length ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {requirements.map((item: string) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">No requirements specified.</p>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Preferred qualifications</h3>
                {preferredQualifications.length ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {preferredQualifications.map((item: string) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">No preferred qualifications specified.</p>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Required skills</h3>
                {requiredSkills.length ? (
                  <div className="flex flex-wrap gap-2">
                    {requiredSkills.map((item: string) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{item}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No skills specified.</p>
                )}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Benefits</h3>
                {benefits.length ? (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                    {benefits.map((item: string) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">No benefits specified.</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <h3 className="text-sm font-semibold text-slate-900">About {companyName}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{companyDescription}</p>
                {companyWebsite ? (
                  <a href={companyWebsite} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-700">
                    <Building2 className="h-4 w-4" /> Visit company website
                  </a>
                ) : null}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <h3 className="text-sm font-semibold text-slate-900">Job details</h3>
                <div className="mt-3 space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> <span>{locationText || 'Location not specified'}</span></div>
                  <div className="flex items-start gap-2"><Briefcase className="mt-0.5 h-4 w-4" /> <span>{employmentType} · {workMode}</span></div>
                  <div className="flex items-start gap-2"><Calendar className="mt-0.5 h-4 w-4" /> <span>Experience: {experienceLevel}</span></div>
                  <div className="flex items-start gap-2"><Globe className="mt-0.5 h-4 w-4" /> <span>Education: {educationLevel}</span></div>
                  <div className="flex items-start gap-2"><Clock3 className="mt-0.5 h-4 w-4" /> <span>Vacancies: {job.vacancies ?? 1}</span></div>
                  <div className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> <span>{job.applicationEmail || 'Email not provided'}</span></div>
                  <div className="flex items-start gap-2"><ExternalLink className="mt-0.5 h-4 w-4" /> <span>{job.applicationUrl ? 'Application link available' : 'No external link'}</span></div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <h3 className="text-sm font-semibold text-slate-900">Similar jobs</h3>
                <div className="mt-3 space-y-2">
                  {similarJobs.length ? similarJobs.map((item: any) => (
                    <Link key={item.slug} href={`/jobs/${item.slug}`} className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-sky-700 hover:bg-slate-50">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.companyName || item.companyId?.name || 'Company'}</div>
                    </Link>
                  )) : (
                    <p className="text-sm text-slate-500">No similar jobs available right now.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Share2 className="h-4 w-4 text-slate-400" />
              <Flag className="h-4 w-4 text-slate-400" />
            </div>
            <span className="text-sm text-slate-500">Reference #{job.slug || 'JOB-001'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
