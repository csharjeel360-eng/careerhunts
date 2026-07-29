import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/LegalPage'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy | CareerHunt',
  description: 'How CareerHunt collects, uses, and protects your information, including how third-party advertising partners like Google use cookies on this site.',
  alternates: {
    canonical: getCanonicalUrl('/privacy')
  }
}

const sections = [
  {
    heading: 'Information We Collect',
    body: [
      'We collect information you provide directly when you contact us, submit a job application, sign up for job alerts, or post a job listing as an employer. This may include your name, email address, phone number, CV or application details, and any information you include in your profile or inquiry.',
      'We also collect information automatically when you visit the site, including your IP address, browser type, device type, pages visited, and referring URL. We use this to understand how the site is used and keep it functioning properly.',
      'We use cookies and similar technologies to remember preferences, keep sessions working where needed, and understand aggregate site usage through analytics tools.'
    ]
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'We use the information we collect to operate and improve CareerHunt, publish and manage job listings, help users discover opportunities, respond to inquiries and applications, send job alerts you have opted into, and understand site usage through aggregated and anonymized analytics.',
      'CareerHunt is a job board that features opportunities in the UAE and across global and remote roles. We may also use content and information to support visa guidance and career resources that appear on the site.'
    ]
  },
  {
    heading: 'Data Sharing',
    body: [
      'We may share limited information with employers when you apply to a job listing, with service providers who help us operate the site under confidentiality obligations, and with legal authorities when required by law or to protect rights, safety, or property.',
      'We do not sell personal data to third parties for unrelated commercial purposes.'
    ]
  },
  {
    heading: 'Advertising and Analytics',
    body: [
      'CareerHunt may use third-party advertising and analytics tools to understand traffic and improve the site experience. These providers may use cookies or similar technologies in accordance with their own policies.',
      'If you prefer, you can manage cookie choices through your browser settings and the consent controls offered on the site.'
    ]
  },
  {
    heading: 'Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect the information we hold. No method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security, but we work to keep your information protected against unauthorized access, alteration, or disclosure.'
    ]
  },
  {
    heading: 'Your Choices',
    body: [
      'You can disable cookies through your browser settings, though this may affect how parts of the site function. You can also manage your consent preferences using the cookie controls provided on the site.',
      'You can request that we delete personal information you have submitted to us by emailing us at contact@careerhunt.online.'
    ]
  },
  {
    heading: 'Children’s Privacy',
    body: [
      'CareerHunt is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to remove it.'
    ]
  },
  {
    heading: 'International Visitors',
    body: [
      'CareerHunt is available to users worldwide, including visitors from the UAE, Europe, and other regions. If you are located in a jurisdiction with specific data protection rights, you may contact us to exercise those rights.'
    ]
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We encourage you to review this page periodically.'
    ]
  }
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how CareerHunt collects, uses, and protects your information when you visit our website. By using CareerHunt, you agree to the practices described below."
      sections={sections}
      contactInfo={[
        'Email: contact@careerhunt.online',
        'Website: careerhunt.online',
        'Signed by: CareerHunt'
      ]}
    />
  )
}
