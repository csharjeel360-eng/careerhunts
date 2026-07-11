import type { Metadata } from 'next'
import NumeroJobPage from '@/components/jobs/NumeroJobPage'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Senior Software Engineer (Backend)',
    description:
      'Build scalable backend systems for Numero, a YC-backed startup focused on modern fundraising technology, donor CRM, email and SMS outreach, and payment software for political campaigns and nonprofits.',
    datePosted: '2026-07-11',
    validThrough: '2026-12-31',
    employmentType: 'FULL_TIME',
    jobLocationType: 'TELECOMMUTE',
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'Remote',
        addressLocality: 'Remote',
      },
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Numero',
      sameAs: 'https://www.ycombinator.com/companies/numero',
      url: 'https://www.ycombinator.com/companies/numero',
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 160000,
        maxValue: 200000,
        unitText: 'YEAR',
      },
    },
    salaryCurrency: 'USD',
    industry: 'Political Technology / SaaS',
    experienceRequirements: 'Senior-level backend engineering experience building scalable software products.',
    qualifications: [
      'Backend Development',
      'API Design',
      'Distributed Systems',
      'Cloud Infrastructure',
      'Performance Optimization',
      'Software Architecture',
    ],
    responsibilities: [
      'Design scalable backend services',
      'Build APIs for integrations',
      'Improve system architecture',
      'Optimize performance',
      'Collaborate with founders',
      'Ship production-ready features',
    ],
    applicationContact: {
      '@type': 'ContactPoint',
      contactType: 'careers',
      email: 'careers@numero.example',
    },
    applyUrl: 'https://www.ycombinator.com/companies/numero/jobs/bLIP9PG-senior-software-engineer-backend',
    directApply: true,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Numero',
    url: 'https://www.ycombinator.com/companies/numero',
    sameAs: [
      'https://www.ycombinator.com/companies/numero',
      'https://www.workatastartup.com/companies/numero',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://careerhunt.com/' },
      { '@type': 'ListItem', position: 2, name: 'Jobs', item: 'https://careerhunt.com/jobs' },
      { '@type': 'ListItem', position: 3, name: 'Senior Software Engineer (Backend)', item: 'https://careerhunt.com/numero-senior-software-engineer-backend-remote-usa' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this position fully remote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. This role is fully remote within the United States with a remote-first operating model built around async work and clear ownership.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the salary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The salary range is $160,000–$200,000 USD per year, depending on experience, interview performance, and the final offer.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the official Y Combinator application link at the top of this page to submit your application directly.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Senior Software Engineer (Backend) at Numero',
    url: 'https://careerhunt.com/numero-senior-software-engineer-backend-remote-usa',
    description: 'Explore the Numero Senior Software Engineer (Backend) role, responsibilities, benefits, salary range, and hiring process.',
    inLanguage: 'en-US',
  },
]

export const metadata: Metadata = {
  title: 'Senior Software Engineer (Backend) at Numero | Remote USA | Apply Online',
  description: 'Apply for the Senior Software Engineer (Backend) job at Numero. Remote U.S. position with a salary of $160,000–$200,000 per year. Explore responsibilities, requirements, benefits, company overview, and apply through the official Y Combinator careers page.',
  keywords: [
    'Numero Careers',
    'Numero Jobs',
    'Senior Software Engineer',
    'Backend Engineer Jobs',
    'Remote Software Engineer Jobs',
    'Y Combinator Jobs',
    'Remote Backend Developer',
    'USA Remote Jobs',
    'Software Engineering Careers',
    'Career Hunt',
  ],
  alternates: {
    canonical: 'https://careerhunt.com/numero-senior-software-engineer-backend-remote-usa',
  },
  openGraph: {
    title: 'Senior Software Engineer (Backend) at Numero | Remote USA | Apply Online',
    description: 'Apply for the Senior Software Engineer (Backend) job at Numero. Remote U.S. position with a salary of $160,000–$200,000 per year.',
    url: 'https://careerhunt.com/numero-senior-software-engineer-backend-remote-usa',
    siteName: 'Career Hunt',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Software Engineer (Backend) at Numero | Remote USA | Apply Online',
    description: 'Apply for the Senior Software Engineer (Backend) job at Numero. Remote U.S. position with a salary of $160,000–$200,000 per year.',
  },
}

export default function NumeroJobRoutePage() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`${schema['@type']}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <NumeroJobPage />
    </>
  )
}
