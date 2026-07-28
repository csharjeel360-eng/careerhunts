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
      'We collect information you provide directly when you contact us, submit a job application, sign up for job alerts, or post a job listing as an employer. This typically includes your name, email address, and any details relevant to that request.',
      'We also collect information automatically when you visit the site, including your IP address, browser type, device type, pages visited, and referring URL. Like most websites, we use this to understand usage patterns and keep the site functioning properly.',
      'We use cookies and similar technologies to remember your preferences, keep you signed in where applicable, and understand aggregate site usage through analytics tools.'
    ]
  },
  {
    heading: 'How Third-Party Advertising Works on This Site',
    body: [
      'CareerHunt displays advertisements served by Google AdSense and other third-party advertising vendors. These partners may use cookies — including the Google DoubleClick cookie — to serve ads based on your prior visits to this website and other websites across the internet.',
      'Google’s use of advertising cookies allows it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet. You can opt out of personalized advertising by visiting Google Ads Settings or About Ads.',
      'We do not control the cookies placed by third-party advertising networks, and we encourage you to review the privacy policies of those parties directly.'
    ]
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'We use the information we collect to operate and improve the CareerHunt website and job listing functionality, respond to inquiries and applications, send job alerts you have opted into, understand site usage through aggregated and anonymized analytics, and detect and prevent fraud, spam, or misuse of the platform.',
      'We do not sell your personal information to third parties.'
    ]
  },
  {
    heading: 'Data Sharing',
    body: [
      'We may share limited information with employers when you apply to a job listing, with service providers who help us operate the site under confidentiality obligations, with advertising partners for the cookie-based interest advertising described above, and with legal authorities when required by law or to protect rights, safety, or property.'
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
      'You can disable cookies through your browser settings, though this may affect how parts of the site function. You can also opt out of personalized advertising using the links provided above.',
      'You can request that we delete personal information you have submitted to us by emailing us at privacy@careerhunt.online.'
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
      'CareerHunt is based in and focused on the UAE job market, but our site is accessible globally. If you are visiting from the European Economic Area, the United Kingdom, or elsewhere with specific data protection rights, you can exercise those rights by contacting us directly.'
    ]
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The last updated date at the top of this page will reflect the most recent version. We encourage you to review this page periodically.'
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
        'Email: privacy@careerhunt.online',
        'Website: careerhunt.online',
        'Signed by: CareerHunt, founded by Sharjeel'
      ]}
    />
  )
}
