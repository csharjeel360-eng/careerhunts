import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getJobBySlug } from '@/lib/api'
import JobDetail from '@/components/jobs/JobDetail'
import { generateJobSchema, generateBreadcrumbSchema, getCanonicalUrl } from '@/lib/seo'

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
  const canonicalUrl = getCanonicalUrl(`/jobs/${job.slug}`)
  const isOriginalContent = job.isOriginalContent !== false
  const city = (job.city || 'UAE').toString().trim()
  const category = (job.category || 'jobs').toString().trim()
  const keywordSet = [
    `${job.title} ${city}`,
    `${job.title} ${companyName}`,
    `${category} jobs in ${city}`,
    `${job.title} UAE`,
    `${category} UAE`,
    `${job.title} hiring ${city}`,
  ].filter(Boolean)

  return {
    title: `${job.title} in ${city} | ${companyName}`,
    description: job.summary || `Apply for ${job.title} in ${city} with ${companyName}. ${job.requirements?.join(' ')}`,
    keywords: job.keywords?.join(', ') || keywordSet.join(', '),
    openGraph: {
      title: `${job.title} at ${companyName}`,
      description: job.summary || `Apply for ${job.title} position at ${companyName}`,
      url: canonicalUrl,
      type: 'article',
      publishedTime: job.postedDate,
      modifiedTime: job.updatedAt,
      authors: [companyName],
      tags: job.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} at ${companyName}`,
      description: job.summary || `Apply for ${job.title} position at ${companyName}`,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isOriginalContent ? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    } : {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    ...(job.city ? [{ name: job.city, item: `/jobs?city=${encodeURIComponent(job.city)}` }] : []),
    { name: job.title, item: `/jobs/${job.slug}` }
  ])
  
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
      <JobDetail job={job} />
    </>
  )
}

// Increment view on server-side render only for non-SSR or as a fallback