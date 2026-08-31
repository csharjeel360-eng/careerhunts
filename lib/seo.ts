import type { Metadata, Viewport } from 'next'

export const SITE_URL = 'https://careerhunt.online'
export const SITE_HOSTNAME = 'careerhunt.online'
const SITE_NAME = 'CareerHunt'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export function getCanonicalUrl(path: string) {
  const normalizedPath = typeof path === 'string' ? path.trim() : ''
  const safePath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`
  const canonicalPath = safePath === '/' ? '/' : safePath.replace(/\/+$/, '')
  return new URL(canonicalPath, SITE_URL).toString()
}

/**
 * Normalize canonical URL by removing tracking parameters and cleaning up the path
 * Removes: utm_source, utm_medium, utm_campaign, utm_content, gclid, fbclid, and other tracking params
 * Normalizes: spaces, duplicate slashes, trailing slashes (except root)
 */
export function normalizeCanonicalUrl(urlString: string, baseUrl: string = SITE_URL): string {
  try {
    const url = new URL(urlString, baseUrl)
    
    // Remove tracking parameters
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
      'gclid', 'fbclid', 'msclkid', 'mc_cid', 'mc_eid', '_ga', '_gac', 'ref',
    ]
    
    trackingParams.forEach(param => url.searchParams.delete(param))
    
    // Normalize pathname: trim, remove duplicate slashes
    let pathname = url.pathname.replace(/\/+/g, '/').trim()
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1)
    }
    
    // Normalize search params values: trim whitespace
    const normalizedParams = new URLSearchParams()
    url.searchParams.forEach((value, key) => {
      normalizedParams.set(key, value.trim())
    })
    
    // Rebuild URL
    const canonical = `${url.protocol}//${url.hostname}${pathname}`
    const searchString = normalizedParams.toString()
    return searchString ? `${canonical}?${searchString}` : canonical
  } catch {
    // Fallback to simple normalization if URL parsing fails
    return getCanonicalUrl(urlString.split('?')[0])
  }
}

/**
 * Determine if a URL with query parameters should be indexed
 * Returns true for intentional landing pages, false for temporary search/filter results
 */
export function shouldIndexFilterUrl(pathname: string, searchParams: Record<string, string | string[]>): boolean {
  // Only index base routes without filters
  if (pathname === '/jobs' && Object.keys(searchParams).length === 0) {
    return true
  }
  
  if (pathname === '/career-insights' && Object.keys(searchParams).length === 0) {
    return true
  }
  
  if (pathname === '/salary-guide' && Object.keys(searchParams).length === 0) {
    return true
  }
  
  // Index intentional category/city landing pages (these would be created separately, not through filters)
  // For now, noindex all filter combinations
  if (Object.keys(searchParams).length > 0) {
    return false
  }
  
  return true
}

/**
 * Get noindex metadata for filter/search result pages
 */
export function getFilterPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const metadata = getPageMetadata({ title, description, path, keywords })
  return {
    ...metadata,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  }
}

/**
 * Trim and normalize location/taxonomy values
 * Used for city names, country names, categories, etc.
 */
export function normalizeLocationValue(value: string | undefined | null): string {
  if (!value) return ''
  return String(value).trim().replace(/\s+/g, ' ')
}

export function getPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const canonical = getCanonicalUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export function getNoIndexMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const metadata = getPageMetadata({ title, description, path, keywords })
  return {
    ...metadata,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  }
}

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'CareerHunt',
      template: '%s | CareerHunt'
    },
    icons: {
      icon: '/icon.svg',
      shortcut: '/icon.svg',
      apple: '/icon.svg',
    },
    description:
      'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
    keywords: ['jobs', 'career opportunities', 'salary guide', 'job search', 'recruitment', 'professional growth'],
    authors: [{ name: 'CareerHunt' }],
    creator: 'CareerHunt',
    publisher: 'CareerHunt',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      title: 'CareerHunt | Jobs, Salary Guides & Career Resources',
      description: 'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
      siteName: 'CareerHunt',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'CareerHunt'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CareerHunt | Jobs, Salary Guides & Career Resources',
      description: 'Discover job opportunities, salary insights, and career resources to help you grow your professional path with confidence.',
      images: ['/og-image.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'jobs',
    verification: {
      google: '',
      other: {
        'msvalidate.01': 'FF72EC1DD9AE9C2F2BB277908AD0BBDD',
      },
    },
    alternates: {
      canonical: getCanonicalUrl('/'),
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: ['https://www.linkedin.com/company/careerhunt'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@careerhunt.online',
      telephone: '+971-50-XXX-XXXX',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic']
    },
    areaServed: 'AE',
    serviceArea: {
      '@type': 'Place',
      name: 'United Arab Emirates'
    }
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'CareerHunt helps professionals discover jobs, salary insights, and career resources.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/jobs?keyword={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

function normalizeEmploymentType(value?: string) {
  const normalized = (value || '').toString().trim().toLowerCase()

  switch (normalized) {
    case 'full-time':
    case 'full_time':
      return 'FULL_TIME'
    case 'part-time':
    case 'part_time':
      return 'PART_TIME'
    case 'contract':
    case 'contractor':
      return 'CONTRACTOR'
    case 'internship':
      return 'INTERN'
    case 'freelance':
    case 'self-employed':
      return 'SELF_EMPLOYED'
    default:
      return normalized.toUpperCase() || 'FULL_TIME'
  }
}

function normalizeDate(value?: string | Date) {
  if (!value) return undefined

  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return undefined

  return date.toISOString()
}

function normalizeDateOnly(value?: string | Date) {
  const iso = normalizeDate(value)
  return iso ? iso.split('T')[0] : undefined
}

function stripHtml(value?: string) {
  if (!value) return ''
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function mapExperienceRequirements(value?: string) {
  const normalized = (value || '').toString().trim().toLowerCase()

  switch (normalized) {
    case 'entry':
      return 'Entry level'
    case 'junior':
      return 'Junior level'
    case 'mid':
      return 'Mid level'
    case 'senior':
      return 'Senior level'
    case 'lead':
      return 'Lead level'
    case 'executive':
      return 'Executive level'
    default:
      return value || 'Not specified'
  }
}

function mapEducationRequirements(value?: string) {
  const normalized = (value || '').toString().trim().toLowerCase()

  switch (normalized) {
    case 'high-school':
      return 'High school diploma'
    case 'bachelors':
      return "Bachelor's degree"
    case 'masters':
      return "Master's degree"
    case 'phd':
      return 'PhD or doctoral degree'
    default:
      return value || 'Not specified'
  }
}

export function generateJobSchema(job: any) {
  const activeStatus = (job.jobStatus || job.status || 'active').toString().toLowerCase()

  if (['expired', 'filled', 'paused', 'removed', 'inactive'].includes(activeStatus)) {
    return {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title || '',
      description: 'This job posting is no longer active.',
      url: `${SITE_URL}/jobs/${job.slug || ''}`,
    }
  }

  const companyName = job.companyId?.name || job.companyName || 'Company'
  const companyWebsite = job.companyWebsite || job.companyId?.website || ''
  const companyLogo = job.companyLogo || job.companyId?.logo || ''
  const description = stripHtml(job.summary || job.description || job.requirements?.join(' ') || '')
  const postedDate = normalizeDateOnly(job.postedDate || job.createdAt)

  let validThrough: string | undefined
  const rawDeadline = job.validThrough || job.expiryDate || job.applicationDeadline
  if (rawDeadline) {
    const deadlineTime = new Date(rawDeadline).getTime()
    if (!Number.isNaN(deadlineTime) && deadlineTime > Date.now()) {
      validThrough = normalizeDate(rawDeadline)
    }
  }

  const salaryCurrency = job.salaryCurrency || 'USD'
  const salaryPeriod = (job.salaryPeriod || 'year').toString().toLowerCase()
  const salaryMin = job.salaryMin ?? job.salary?.min
  const salaryMax = job.salaryMax ?? job.salary?.max

  const baseSalary = (salaryMin !== undefined && salaryMin !== null) || (salaryMax !== undefined && salaryMax !== null) ? {
    '@type': 'MonetaryAmount',
    currency: salaryCurrency,
    value: {
      '@type': 'QuantitativeValue',
      ...(salaryMin !== undefined && salaryMin !== null ? { minValue: salaryMin } : {}),
      ...(salaryMax !== undefined && salaryMax !== null ? { maxValue: salaryMax } : {}),
      ...(salaryMin !== undefined && salaryMin !== null && salaryMax === undefined ? { value: salaryMin } : {}),
      unitText: salaryPeriod,
    },
  } : undefined

  const workMode = (job.workMode || 'not-specified').toString().toLowerCase()
  const locationCountry = normalizeLocationValue(job.country || 'AE')
  const locationCity = normalizeLocationValue(job.city)
  const stateText = normalizeLocationValue(job.state)
  const eligibleApplicantLocation = normalizeLocationValue(job.eligibleApplicantLocation || job.applicantLocationRequirements || (workMode === 'remote' ? 'Worldwide' : locationCountry))

  const jobLocation: Record<string, any> = {
    '@type': 'Place',
  }

  if (workMode === 'remote') {
    jobLocation['@type'] = 'Place'
    jobLocation.jobLocationType = 'TELECOMMUTE'
    if (eligibleApplicantLocation) {
      jobLocation.applicantLocationRequirements = {
        '@type': 'Country',
        name: eligibleApplicantLocation === 'Worldwide' ? 'Worldwide' : eligibleApplicantLocation,
      }
    }
  } else {
    const address: Record<string, any> = {
      '@type': 'PostalAddress',
      ...(job.address ? { streetAddress: job.address } : {}),
      ...(job.postalCode ? { postalCode: job.postalCode } : {}),
      ...(locationCity ? { addressLocality: locationCity } : {}),
      ...(stateText ? { addressRegion: stateText } : {}),
      ...(locationCountry ? { addressCountry: locationCountry } : {}),
    }

    if (Object.keys(address).length > 1) {
      jobLocation.address = address
    }
  }

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title || '',
    ...(description ? { description } : {}),
    ...(postedDate ? { datePosted: postedDate } : {}),
    ...(validThrough ? { validThrough } : {}),
    employmentType: normalizeEmploymentType(job.employmentType),
    hiringOrganization: {
      '@type': 'Organization',
      name: companyName,
      ...(companyWebsite ? { sameAs: companyWebsite } : {}),
      ...(companyLogo ? { logo: companyLogo } : {}),
    },
    jobLocation,
    ...(baseSalary ? { baseSalary } : {}),
    ...(job.requiredSkills?.length ? { skills: job.requiredSkills } : {}),
    ...(job.requirements?.length ? { qualifications: job.requirements } : {}),
    ...(job.responsibilities?.length ? { responsibilities: job.responsibilities } : {}),
    ...(job.benefits?.length ? { jobBenefits: job.benefits } : {}),
    ...(job.educationLevel ? { educationRequirements: mapEducationRequirements(job.educationLevel) } : {}),
    ...(job.experienceLevel ? { experienceRequirements: mapExperienceRequirements(job.experienceLevel) } : {}),
    ...(job.category ? { occupationalCategory: job.category } : {}),
    ...(job.applicationUrl ? { directApply: true } : {}),
    url: `${SITE_URL}/jobs/${job.slug}`,
    identifier: {
      '@type': 'PropertyValue',
      name: companyName,
      value: job._id || job.slug || job.title,
    },
  }

  if (workMode === 'remote' && !job.applicationUrl && !job.applicationEmail) {
    schema.directApply = false
  }

  return schema
}

export function generateBreadcrumbSchema(items: { name: string, item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.item}`
    }))
  }
}

export function generateFAQSchema(faqs: { question: string, answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateWebPageSchema({ title, description, url, breadcrumbItems }: { title: string, description: string, url: string, breadcrumbItems?: { name: string, item: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    },
    breadcrumb: breadcrumbItems ? generateBreadcrumbSchema(breadcrumbItems) : undefined
  }
}

export function generateArticleSchema({ title, description, url, datePublished, authorName, keywords }: { title: string, description: string, url: string, datePublished: string, authorName: string, keywords: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/icon.svg`
    },
    datePublished,
    mainEntityOfPage: url,
    keywords
  }
}