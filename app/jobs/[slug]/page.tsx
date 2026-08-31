import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getJobBySlug } from '@/lib/api'
import JobDetail from '@/components/jobs/JobDetail'
import { generateJobSchema, generateBreadcrumbSchema, generateFAQSchema, getCanonicalUrl } from '@/lib/seo'

interface JobPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    return {
      title: 'Job Not Found',
      description: 'The job you are looking for does not exist.'
    }
  }

  const companyName = job.companyName || job.companyId?.name || 'Company'
  const canonicalSlug = typeof job.slug === 'string' && job.slug.trim() ? job.slug.trim() : slug
  const canonicalUrl = getCanonicalUrl(`/jobs/${canonicalSlug}`)
  const city = (job.city || 'UAE').toString().trim()
  const locationText = city ? `${city}` : 'UAE'
  const title = `${job.title} at ${companyName} – ${locationText} | CareerHunt`
  const description = [job.title, companyName, locationText, job.summary || job.description || 'job opportunity'].filter(Boolean).join(' · ')

  return {
    title,
    description: description.slice(0, 160),
    keywords: job.keywords?.length ? job.keywords : [job.title, companyName, locationText, job.category || 'jobs'],
    openGraph: {
      title,
      description: description.slice(0, 200),
      url: canonicalUrl,
      type: 'article',
      publishedTime: job.postedDate,
      modifiedTime: job.updatedAt,
      authors: [companyName],
      tags: job.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description.slice(0, 200),
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params

  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const jobSchema = generateJobSchema(job)
  const canonicalSlug = typeof job.slug === 'string' && job.slug.trim() ? job.slug.trim() : slug
  const faqItems = [
    ...(job.city ? [{ question: 'Where is this job located?', answer: `${job.title} is based in ${job.city}${job.country ? `, ${job.country}` : ''}.` }] : []),
    ...(job.workMode ? [{ question: 'Is this job remote?', answer: `This role is listed as ${job.workMode}.` }] : []),
    ...(job.salaryMin || job.salaryMax ? [{ question: 'What salary is offered?', answer: `The role lists ${job.salaryCurrency || 'USD'} ${job.salaryMin || ''}${job.salaryMin && job.salaryMax ? ' to ' : ''}${job.salaryMax || ''}${job.salaryPeriod ? ` per ${job.salaryPeriod}` : ''}.` }] : []),
    ...(job.applicationUrl || job.applicationEmail ? [{ question: 'How can candidates apply?', answer: job.applicationUrl ? `Apply through the official application link for this role.` : `Apply by emailing ${job.applicationEmail}.` }] : []),
  ]
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    ...(job.city ? [{ name: job.city, item: `/jobs?city=${encodeURIComponent(job.city)}` }] : []),
    { name: job.title, item: `/jobs/${canonicalSlug}` }
  ])
  const faqSchema = faqItems.length ? generateFAQSchema(faqItems) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      ) : null}
      <JobDetail job={job} />
    </>
  )
}
