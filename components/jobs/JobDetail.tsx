'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Briefcase, Calendar, Globe, Mail, ExternalLink, Building2, Clock3, Share2, Flag, ArrowLeft, MessageCircle, AlertCircle, X } from 'lucide-react'
import { formatDate, formatLocation, formatSalary, normalizeWebsiteUrl } from '@/lib/utils'
import JobDetailBreadcrumbs from '@/components/jobs/JobDetailBreadcrumbs'
import JobDetailSeoLinks from '@/components/jobs/JobDetailSeoLinks'
import MarketContextBlock from '@/components/jobs/MarketContextBlock'

interface JobDetailProps {
  job: any
}

export default function JobDetail({ job }: JobDetailProps) {
  const [shareMessage, setShareMessage] = useState('')
  const [showReportNotice, setShowReportNotice] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [applyNotice, setApplyNotice] = useState('')
  const companyDescription = job.companyDescription || job.companyId?.description || 'Company description is not available.'
  const companyWebsite = normalizeWebsiteUrl(job.companyWebsite || job.companyId?.website || '')
  const companyName = job.companyName || job.companyId?.name || 'Company'
  const locationText = formatLocation(job.city, job.country)
  const companySlug = (job.companySlug || job.companyId?.slug || '').toString().trim()
  const companyHref = companySlug ? `/companies/${companySlug}` : '/companies'
  const locationHref = job.city ? `/jobs?city=${encodeURIComponent(job.city)}` : '/jobs'
  const marketContext = typeof job.marketContext === 'string' ? job.marketContext : null
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
  const applicationUrl = job.applicationUrl ? normalizeWebsiteUrl(job.applicationUrl) : ''
  const applicationEmail = job.applicationEmail || ''
  const whatsappNumber = job.whatsappNumber || ''
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/[^\d+]/g, '')}` : ''
  const initials = companyName
    .split(' ')
    .map((name: string) => name.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

    if (navigator.share && shareUrl) {
      try {
        await navigator.share({ title: job.title, text: `Check out this job: ${job.title}`, url: shareUrl })
        setShareMessage('Shared successfully.')
      } catch {
        setShareMessage('Sharing was cancelled.')
      }
      return
    }

    if (shareUrl) {
      navigator.clipboard?.writeText(shareUrl)
      setShareMessage('Link copied to clipboard.')
    }
  }

  const handleReport = () => {
    setShowReportNotice(true)
    setShareMessage('Thanks for flagging this listing. Our team will review it soon.')
  }

  const handleApplyAction = (type: 'url' | 'whatsapp' | 'email') => {
    if (type === 'url') {
      if (applicationUrl) {
        window.open(applicationUrl, '_blank', 'noopener,noreferrer')
        setIsApplyModalOpen(false)
        setApplyNotice('')
        return
      }

      setApplyNotice('No application URL is available for this opportunity at the moment. Please try another option or contact the employer directly.')
      return
    }

    if (type === 'whatsapp') {
      if (whatsappLink) {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer')
        setIsApplyModalOpen(false)
        setApplyNotice('')
        return
      }

      setApplyNotice('No WhatsApp number is available for this role at the moment. Please use the application link or email option instead.')
      return
    }

    if (applicationEmail) {
      window.location.href = `mailto:${applicationEmail}`
      setIsApplyModalOpen(false)
      setApplyNotice('')
      return
    }

    setApplyNotice('No email address is available for this opportunity at the moment. Please choose another application method.')
  }

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
          <JobDetailBreadcrumbs city={job.city} title={job.title} />

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                  {initials}
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-slate-900">{job.title}</h1>
                  <p className="mt-1 text-sm text-slate-500">
                    <Link href={companyHref} className="font-medium text-slate-700 transition hover:text-sky-700">{companyName}</Link>
                    {' · '}
                    <Link href={locationHref} className="font-medium text-slate-700 transition hover:text-sky-700">{locationText}</Link>
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setApplyNotice('')
                    setIsApplyModalOpen(true)
                  }}
                  className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Apply now
                </button>
                <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                  Choose the most convenient way to apply for this role.
                </p>
                <Link href="/visa/uae-employment-visa-guide" className="mt-3 inline-flex text-sm font-medium text-sky-700">
                  Visa & work permit info
                </Link>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{employmentType}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{workMode}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{salaryLabel}</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">Posted {formatDate(job.postedDate)}</span>
            </div>
            <JobDetailSeoLinks
              city={job.city}
              companyName={companyName}
              companySlug={companySlug}
              skills={requiredSkills}
              category={job.category}
              jobSlug={job.slug}
            />
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-slate-900">Job description</h2>
                <p className="text-sm leading-7 text-slate-600">{summary}</p>
              </div>

              <MarketContextBlock marketContext={marketContext} />

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
                      <Link key={item} href={`/jobs?skill=${encodeURIComponent(item)}`} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200">
                        {item}
                      </Link>
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
                  <div className="flex items-start gap-2"><ExternalLink className="mt-0.5 h-4 w-4" /> <span>{job.applicationUrl ? 'External application link available' : 'No external link'}</span></div>
                </div>
              </div>

            </div>
          </div>

          {isApplyModalOpen ? (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-3 py-6">
              <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Choose how to apply</h3>
                    <p className="mt-1 text-sm text-slate-500">Select the option that works best for you.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsApplyModalOpen(false)
                      setApplyNotice('')
                    }}
                    className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Close apply options"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3 p-5">
                  {applyNotice ? (
                    <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-800">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{applyNotice}</span>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => handleApplyAction('url')}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Apply via application URL
                    </span>
                    <span className="text-xs text-slate-500">{applicationUrl ? 'Open link' : 'Unavailable'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleApplyAction('whatsapp')}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Apply via WhatsApp
                    </span>
                    <span className="text-xs text-slate-500">{whatsappLink ? 'Open chat' : 'Unavailable'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleApplyAction('email')}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Apply via email
                    </span>
                    <span className="text-xs text-slate-500">{applicationEmail ? 'Send mail' : 'Unavailable'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                aria-label="Share job"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button
                type="button"
                onClick={handleReport}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                aria-label="Flag job"
              >
                <Flag className="h-4 w-4" />
                Flag
              </button>
            </div>
            <div className="text-sm text-slate-500">
              {shareMessage ? <span className="text-emerald-600">{shareMessage}</span> : <span>Reference #{job.slug || 'JOB-001'}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
