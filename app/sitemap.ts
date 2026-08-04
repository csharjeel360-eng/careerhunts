import { MetadataRoute } from 'next'
import { getJobs, getCategories, getCountries } from '@/lib/api'

export const revalidate = 3600

const getBaseUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://careerhunt.online'
  return configuredUrl.replace(/\/+$/, '')
}

const buildUrl = (
  path: string,
  lastModified: Date | string = new Date(),
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly',
  priority = 0.6,
) => ({
  url: `${getBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`,
  lastModified,
  changeFrequency,
  priority,
})

const normalizeLastModified = (value?: string | Date | null) => {
  if (!value) return new Date()

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

const getAllPublishedJobs = async () => {
  const allJobs: Array<{ slug: string; updatedAt?: string; postedDate?: string }> = []
  let page = 1
  const limit = 100

  while (true) {
    const jobsResponse = await getJobs({ page, limit }).catch(() => ({
      data: [] as Array<{ slug: string; updatedAt?: string; postedDate?: string }>,
      pagination: { pages: 0 },
    }))

    const pageJobs = jobsResponse.data || []
    if (!pageJobs.length) break

    allJobs.push(...pageJobs)

    const totalPages = jobsResponse.pagination?.pages || 0
    if (page >= totalPages || pageJobs.length < limit) break

    page += 1
  }

  return allJobs
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = [
    buildUrl('/', new Date(), 'daily', 1),
    buildUrl('/jobs', new Date(), 'daily', 0.95),
    buildUrl('/about', new Date(), 'monthly', 0.7),
    buildUrl('/contact', new Date(), 'monthly', 0.6),
    buildUrl('/companies', new Date(), 'weekly', 0.8),
    buildUrl('/categories', new Date(), 'weekly', 0.75),
    buildUrl('/countries', new Date(), 'weekly', 0.75),
    buildUrl('/blog', new Date(), 'weekly', 0.7),
    buildUrl('/career-resources', new Date(), 'weekly', 0.7),
    buildUrl('/career-resources/payroll-job-description-salary-uae', new Date(), 'weekly', 0.72),
    buildUrl('/career-insights', new Date(), 'weekly', 0.7),
    buildUrl('/guides', new Date(), 'weekly', 0.65),
    buildUrl('/visa', new Date(), 'weekly', 0.65),
    buildUrl('/salary-guide', new Date(), 'monthly', 0.8),
    buildUrl('/uae-work-visa-sponsorship-guide-2026', new Date(), 'monthly', 0.75),
    buildUrl('/visa/uae-golden-visa-property-threshold-2026', new Date(), 'monthly', 0.75),
    buildUrl('/amazon-careers-2026', new Date(), 'weekly', 0.9),
    buildUrl('/fedex-careers-usa-2026', new Date(), 'weekly', 0.9),
    buildUrl('/noon-careers-uae-2026', new Date(), 'weekly', 0.9),
    buildUrl('/markq-trading-llc-storekeeper-dubai', new Date(), 'monthly', 0.7),
    buildUrl('/privacy', new Date(), 'monthly', 0.4),
    buildUrl('/terms', new Date(), 'monthly', 0.4),
    buildUrl('/disclaimer', new Date(), 'monthly', 0.4),
    buildUrl('/cookies', new Date(), 'monthly', 0.4),
  ]

  const allJobs = await getAllPublishedJobs()
  const categoriesResponse = await getCategories().catch(() => [] as Array<{ slug: string }>)
  const countriesResponse = await getCountries().catch(() => [] as Array<{ slug: string }>)

  const jobUrls = allJobs.map((job) => ({
    url: `${getBaseUrl()}/jobs/${job.slug}`,
    lastModified: normalizeLastModified(job.updatedAt || job.postedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryUrls = (categoriesResponse || []).map((category) => ({
    url: `${getBaseUrl()}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const countryUrls = (countriesResponse || []).map((country) => ({
    url: `${getBaseUrl()}/countries/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...jobUrls, ...categoryUrls, ...countryUrls]
}