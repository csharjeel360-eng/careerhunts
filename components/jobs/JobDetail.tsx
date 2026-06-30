import Link from 'next/link'
import { MapPin, Briefcase, Calendar, Globe, ArrowRight, Eye } from 'lucide-react'
import { formatDate, formatSalary } from '@/lib/utils'

interface JobDetailProps {
  job: any
}

export default function JobDetail({ job }: JobDetailProps) {
  const companyName = job.companyId?.name || job.companyName || 'Company'
  const companyDescription = job.companyId?.description || 'Company description is not available.'
  const workMode = job.workMode || 'Flexible'
  const employmentType = job.employmentType || 'Full-time'
  const salaryLabel = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-4 py-10 sm:py-14">
        <Link href="/jobs" className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900">
          <span className="mr-2">←</span>
          Back to jobs
        </Link>

        <div className="mt-6 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_25px_70px_-24px_rgba(15,23,42,0.24)] backdrop-blur">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
                    <Briefcase className="mr-2 h-4 w-4" />
                    {job.category || 'Career opportunity'}
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    {job.title}
                  </h1>
                  <p className="mt-3 text-lg font-medium text-slate-700">{companyName}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {job.summary || 'A compelling opportunity for professionals looking to grow with a modern, ambitious team.'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-right">
                  <p className="text-sm text-slate-500">Posted</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{formatDate(job.postedDate)}</p>
                  <p className="mt-3 flex items-center justify-end gap-2 text-sm text-slate-600">
                    <Eye className="h-4 w-4 text-slate-500" />
                    {job.views ?? 0} views
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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

            <article className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Job description</h2>
                <p className="mt-5 whitespace-pre-line text-slate-700">{job.description || 'No description available yet.'}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Responsibilities</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                    {job.responsibilities?.length ? job.responsibilities.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : <li>No responsibilities specified.</li>}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Qualifications</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                    {job.requirements?.length ? job.requirements.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) : <li>No qualifications specified.</li>}
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
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

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Hiring company</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{companyName}</h3>
                </div>
                <Globe className="h-6 w-6 text-slate-500" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{companyDescription}</p>
              {job.companyId?.website && (
                <a
                  href={job.companyId.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-cyan-700"
                >
                  Visit website <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
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
      </div>
    </section>
  )
}
