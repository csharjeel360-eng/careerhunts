import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read CareerHunt privacy practices for account data, job applications, and platform security.',
  alternates: {
    canonical: 'https://careerhunt.com/privacy'
  }
}

const sections = [
  {
    heading: 'Information We Collect',
    body: [
      'We collect information needed to create and manage accounts, process applications, and improve the platform experience.',
      'This can include your name, email address, profile details, and technical usage information such as browser and device data.'
    ]
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'Your information helps us provide relevant job recommendations, support account access, and communicate updates about your activity.',
      'We may also use anonymized data to improve the quality of our services and ensure the platform remains secure.'
    ]
  },
  {
    heading: 'Data Security',
    body: [
      'We use reasonable security practices to protect personal information from unauthorized access, use, or disclosure.',
      'Please keep your login credentials secure and notify us immediately if you suspect any unauthorized access.'
    ]
  },
  {
    heading: 'Your Choices',
    body: [
      'You may update or request deletion of your account information where applicable and as permitted by law.',
      'If you have any questions about your personal data, please contact us at support@jobboard.com.'
    ]
  }
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how CareerHunt collects, uses, and protects your information when you use our platform to discover jobs and manage your career profile."
      sections={sections}
    />
  )
}
