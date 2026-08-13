import { MetadataRoute } from 'next'
import { getJobs, getCategories } from '@/lib/api'
import { getArticleSlugs } from '@/lib/articleData'
import { SITE_URL } from '@/lib/seo'

export const revalidate = 3600

const normalizeLastModified = (value?: string | Date | null): Date => {
  if (!value) return new Date()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

const getAllActiveJobs = async () => {
  try {
    const allJobs: Array<{ slug: string; updatedAt?: string; postedDate?: string; status?: string }> = []
    let page = 1
    const limit = 100

    while (true) {
      const jobsResponse = await getJobs({ 
        page, 
        limit,
        status: 'active' // Only fetch active jobs
      }).catch(() => ({
        data: [] as Array<{ slug: string; updatedAt?: string; postedDate?: string; status?: string }>,
        pagination: { pages: 0 },
      }))

      const pageJobs = jobsResponse.data || []
      if (!pageJobs.length) break

      // Filter only active status jobs
      const activeJobs = pageJobs.filter(job => job.status === 'active' || !job.status)
      allJobs.push(...activeJobs)

      const totalPages = jobsResponse.pagination?.pages || 0
      if (page >= totalPages || pageJobs.length < limit) break

      page += 1
    }

    return allJobs
  } catch (error) {
    console.error('Error fetching jobs for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Homepage - highest priority, daily updates
  sitemapEntries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  })

  // 2. Main navigation pages
  const staticPages = [
    { path: '/jobs', frequency: 'daily' as const, priority: 0.95 },
    { path: '/companies', frequency: 'weekly' as const, priority: 0.8 },
    { path: '/career-insights', frequency: 'weekly' as const, priority: 0.8 },
    { path: '/salary-guide', frequency: 'weekly' as const, priority: 0.8 },
    { path: '/career-resources', frequency: 'weekly' as const, priority: 0.7 },
    { path: '/visa', frequency: 'weekly' as const, priority: 0.75 },
    // Trust & legal pages
    { path: '/about', frequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', frequency: 'monthly' as const, priority: 0.6 },
    { path: '/privacy', frequency: 'yearly' as const, priority: 0.5 },
    { path: '/terms', frequency: 'yearly' as const, priority: 0.5 },
    { path: '/cookies', frequency: 'yearly' as const, priority: 0.5 },
    { path: '/disclaimer', frequency: 'yearly' as const, priority: 0.5 },
  ]

  staticPages.forEach(page => {
    sitemapEntries.push({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.frequency,
      priority: page.priority,
    })
  })

  // 3. Active job pages only
  try {
    const activeJobs = await getAllActiveJobs()
    
    activeJobs.forEach(job => {
      if (job.slug && job.slug.trim()) {
        sitemapEntries.push({
          url: `${SITE_URL}/jobs/${job.slug}`,
          lastModified: normalizeLastModified(job.updatedAt || job.postedDate),
          changeFrequency: 'weekly',
          priority: 0.8,
        })
      }
    })
  } catch (error) {
    console.warn('Failed to fetch active jobs for sitemap')
  }

  // 4. Article pages - dynamically loaded from content directory
  try {
    const articleSlugs = getArticleSlugs()
    
    articleSlugs.forEach(slug => {
      sitemapEntries.push({
        url: `${SITE_URL}${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  } catch (error) {
    console.warn('Failed to fetch articles for sitemap:', error)
  }

  // 5. Category pages (if they exist)
  try {
    const categoriesResponse = await getCategories().catch(() => ({
      data: [] as Array<{ slug: string }>
    }))
    
    const categories = categoriesResponse?.data || []

    categories.forEach(category => {
      if (category.slug) {
        sitemapEntries.push({
          url: `${SITE_URL}/categories/${category.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      }
    })
  } catch (error) {
    console.warn('Failed to fetch categories for sitemap')
  }

  // 6. Remove duplicate URLs
  const uniqueUrls = new Set<string>()
  const uniqueEntries: MetadataRoute.Sitemap = []

  sitemapEntries.forEach(entry => {
    if (!uniqueUrls.has(entry.url)) {
      uniqueUrls.add(entry.url)
      uniqueEntries.push(entry)
    }
  })

  return uniqueEntries
}