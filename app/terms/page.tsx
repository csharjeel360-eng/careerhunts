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
      'You may use CareerHunt to browse jobs, apply for opportunities, and interact with employers in a lawful and respectful manner.',
      'You agree not to misuse the platform, submit false information, or interfere with other users or system operations.'
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
      'Employers and users may submit job listings and profile information, and we may review content for compliance and quality.',
      'We are not responsible for the accuracy of third-party submissions, but we aim to maintain a reliable and trustworthy experience.'
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
