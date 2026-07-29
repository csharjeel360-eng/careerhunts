import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Review CareerHunt terms of use for job seekers, employers, and platform users.',
  alternates: {
    canonical: getCanonicalUrl('/terms')
  }
}

const sections = [
  {
    heading: 'Use of the Platform',
    body: [
      'You may use CareerHunt to browse job opportunities, apply for roles, and access career resources in a lawful and respectful manner.',
      'CareerHunt includes UAE listings, global opportunities, remote roles, and visa guidance content. You agree not to misuse the platform, submit false information, or interfere with other users or system operations.'
    ]
  },
  {
    heading: 'Account Responsibilities',
    body: [
      'You are responsible for keeping your account information accurate and for protecting your credentials.',
      'Any activity carried out through your account is your responsibility unless caused by a security issue on our side.'
    ]
  },
  {
    heading: 'Content and Listings',
    body: [
      'Employers, publishers, and users may submit job listings, profile information, or other content, and we may review content for compliance and quality.',
      'We are not responsible for the accuracy, completeness, or availability of third-party submissions or external application links, but we aim to maintain a reliable and useful experience.'
    ]
  },
  {
    heading: 'Applications and Third-Party Links',
    body: [
      'When you click through to apply for a role, you may be redirected to an external employer, recruiter, or third-party application site. CareerHunt is not responsible for the operations, policies, or outcomes of those external services.',
      'If a listing is sourced from a third-party provider, the site will make that clear where possible so you can understand where the application will be completed.'
    ]
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'CareerHunt is provided as-is and we do not guarantee uninterrupted access or error-free performance.',
      'Our liability for any claims related to the platform is limited to the extent permitted by law.'
    ]
  }
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These Terms & Conditions govern how you use the CareerHunt website and its services. By using our platform, you agree to these terms."
      sections={sections}
    />
  )
}
