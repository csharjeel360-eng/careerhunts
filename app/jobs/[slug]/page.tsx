import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getJobBySlug, getLatestJobs } from '@/lib/api'
import JobDetail from '@/components/jobs/JobDetail'
import { generateJobSchema, generateBreadcrumbSchema } from '@/lib/seo'

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

  const companyName = job.companyId?.name || 'Company'

  return {
    title: `${job.title} at ${companyName}`,
    description: job.summary || `Apply for ${job.title} position at ${companyName}. ${job.requirements?.join(' ')}`,
    keywords: job.keywords?.join(', ') || `${job.title}, ${companyName}, ${job.category} job`,
    openGraph: {
      title: `${job.title} at ${companyName}`,
      description: job.summary || `Apply for ${job.title} position at ${companyName}`,
      url: `https://your-job-board.com/jobs/${job.slug}`,
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
      canonical: `https://your-job-board.com/jobs/${job.slug}`,
    },
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params

  const [job, latestJobs] = await Promise.all([
    getJobBySlug(slug),
    getLatestJobs(),
  ])

  if (!job) {
    notFound()
  }

  const similarJobs = (latestJobs || []).filter((item: any) => item.slug !== slug).slice(0, 3)
  
  const jobSchema = generateJobSchema(job)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
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
      <JobDetail job={job} similarJobs={similarJobs} />
    </>
  )
}

// Increment view on server-side render only for non-SSR or as a fallback