import type { Metadata } from 'next'

export const SITE_URL = 'https://careerhunt.online'
export const SITE_HOSTNAME = 'careerhunt.online'
const SITE_NAME = 'CareerHunt'

export function getCanonicalUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const canonicalPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/+$/, '')
  return new URL(canonicalPath, SITE_URL).toString()
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
    sameAs: ['https://www.linkedin.com/'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@careerhunt.online',
      telephone: '+923259579107',
      areaServed: 'PK',
      availableLanguage: ['English']
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

export function generateJobSchema(job: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary || job.description,
    datePosted: job.postedDate,
    validThrough: job.expiryDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.companyId.name,
      sameAs: job.companyId.website,
      logo: job.companyId.logo
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.city,
        addressCountry: job.country
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salaryCurrency || 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'YEAR'
      }
    },
    skills: job.requiredSkills,
    qualifications: job.requirements,
    responsibilities: job.responsibilities,
    benefits: job.benefits,
    educationRequirements: job.educationLevel,
    experienceRequirements: job.experienceLevel,
    occupationalCategory: job.category,
    jobBenefits: job.benefits,
    workHours: 'Full-time',
    url: `${SITE_URL}/jobs/${job.slug}`,
    identifier: {
      '@type': 'PropertyValue',
      name: job.companyId.name,
      value: job._id
    }
  }
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