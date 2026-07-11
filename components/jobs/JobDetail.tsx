import Link from 'next/link'
import { MapPin, Briefcase, Calendar, Globe, ArrowRight, Eye } from 'lucide-react'
import { formatDate, formatSalary, normalizeWebsiteUrl } from '@/lib/utils'
import { JobCard } from './JobCard'

interface JobDetailProps {
  job: any
  similarJobs?: any[]
}

export default function JobDetail({ job, similarJobs }: JobDetailProps) {
  const companyDescription = job.companyDescription || job.companyId?.description || 'Company description is not available.'
  const companyWebsite = normalizeWebsiteUrl(job.companyWebsite || job.companyId?.website || '')
  const companyName = job.companyId?.name || job.companyName || 'Company'
  const workMode = job.workMode || 'Flexible'
  const employmentType = job.employmentType || 'Full-time'
  const salaryLabel = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <Link
          href="/jobs"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-900"
        >
          <span className="mr-2">←</span>
          Back to jobs
        </Link>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_340px]">
          <div className="space-y-5 sm:space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 shadow-[0_20px_70px_-24px_rgba(15,23,42,0.3)] backdrop-blur sm:p-7 lg:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
                    <Briefcase className="mr-2 h-4 w-4" />
                    {job.category || 'Career opportunity'}
                  </div>
                  <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
                    {job.title}
                  </h1>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {job.summary || 'A compelling opportunity for professionals looking to grow with a modern, ambitious team.'}
                  </p>
                </div>

                <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:max-w-[220px] sm:text-left lg:text-right">
                  <p className="text-sm text-slate-500">Posted</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{formatDate(job.postedDate)}</p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{job.city}, {job.country}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Salary</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{salaryLabel}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Employment type</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{employmentType}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Work mode</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{workMode}</p>
                </div>
              </div>
            </div>

            <article className="space-y-5 sm:space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">Job description</h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700 sm:text-base">
                  {job.description || 'No description available yet.'}
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-lg font-semibold text-slate-900">Responsibilities</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {job.responsibilities?.length ? job.responsibilities.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : <li>No responsibilities specified.</li>}
                  </ul>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-lg font-semibold text-slate-900">Qualifications</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {job.requirements?.length ? job.requirements.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : <li>No qualifications specified.</li>}
                  </ul>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-semibold text-slate-900">Additional job details</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Preferred Qualifications</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.preferredQualifications?.length ? job.preferredQualifications.join(', ') : 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Required Skills</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.requiredSkills?.length ? job.requiredSkills.join(', ') : 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Benefits</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.benefits?.length ? job.benefits.join(', ') : 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Experience Level</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.experienceLevel || 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Education Level</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.educationLevel || 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Number Of Vacancies</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.numberOfVacancies || 'Not specified'}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Application Email</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{job.applicationEmail || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-6 xl:self-start">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Apply by</p>
                  <p className="mt-2 text-sm text-slate-700">{job.applicationDeadline ? formatDate(job.applicationDeadline) : 'Open until filled'}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Employment type</p>
                  <p className="mt-2 text-sm text-slate-700">{employmentType}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Work mode</p>
                  <p className="mt-2 text-sm text-slate-700">{workMode}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <Globe className="h-6 w-6 text-slate-500" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{companyDescription}</p>
              {companyWebsite && (
                <a
                  href={companyWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-cyan-700"
                >
                  Visit website <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold">Apply for this role</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Take the next step and connect with the hiring team directly.</p>
              {job.applicationUrl ? (
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Apply now
                </a>
              ) : job.applicationEmail ? (
                <a
                  href={`mailto:${job.applicationEmail}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Email application
                </a>
              ) : (
                <p className="mt-6 text-sm text-slate-400">No application link provided yet.</p>
              )}
            </div>
          </aside>
        </div>

        {similarJobs && similarJobs.length > 0 && (
          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:mt-12 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Similar jobs</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">Other roles you may be interested in</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/jobs" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  More jobs
                </Link>
                <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Latest career blogs
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {similarJobs.map((jobItem: any) => (
                <JobCard key={jobItem._id || jobItem.slug} job={jobItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
