import { LegalPage } from '@/components/legal/LegalPage'

const sections = [
  {
    heading: 'General Information',
    body: [
      'The information provided on CareerHunt is intended for general informational purposes only.',
      'While we strive to keep listings, salary insights, and other content accurate and up to date, we cannot guarantee full correctness at all times.'
    ]
  },
  {
    heading: 'No Professional Advice',
    body: [
      'The content on this platform should not be treated as legal, financial, or professional advice.',
      'Please consult qualified professionals for matters that require specialized guidance.'
    ]
  },
  {
    heading: 'Third-Party Content',
    body: [
      'Some job opportunities and employer information may be provided by third parties.',
      'We recommend reviewing all such information carefully before applying or making any commitments.'
    ]
  }
]

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="This disclaimer outlines the scope of the information and services provided by CareerHunt and the limits of our responsibility."
      sections={sections}
    />
  )
}
