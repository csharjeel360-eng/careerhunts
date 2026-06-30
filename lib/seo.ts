const SITE_URL = 'https://careerhunt.com'
const SITE_NAME = 'CareerHunt'

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
      email: 'careerhunt233@gmail.com',
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