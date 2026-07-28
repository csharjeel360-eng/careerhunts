import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, getCanonicalUrl } from '@/lib/seo'

const pageTitle = 'Software Engineer Salaries in the UAE (2026): Dubai vs. Abu Dhabi Compared'
const pageDescription = 'What software engineers actually earn in Dubai and Abu Dhabi in 2026, by experience level, and why the two markets do not pay the same way.'
const canonicalPath = '/salary-guide/software-engineer-dubai-abu-dhabi'
const canonicalUrl = getCanonicalUrl(canonicalPath)

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: 'CareerHunt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  metadataBase: new URL('https://careerhunt.online'),
  keywords: [
    'software engineer salary UAE',
    'Dubai software engineer salary',
    'Abu Dhabi software engineer salary',
    'UAE salary guide 2026',
  ],
}

const faqItems = [
  {
    question: 'Is it easier to find a software engineering job in Dubai or Abu Dhabi?',
    answer: 'Dubai has significantly more open roles simply due to the size and density of its tech and startup ecosystem. Abu Dhabi has fewer openings, but they tend to be with larger, more stable employers.',
  },
  {
    question: 'Do software engineers in the UAE need any specific licensing?',
    answer: 'No professional licensing is required for software engineering roles, unlike healthcare or some engineering disciplines. What matters is your employment visa and, for higher-paying roles, meeting the salary threshold if you are pursuing a Golden Visa.',
  },
  {
    question: 'Are remote or hybrid software engineering roles common in the UAE?',
    answer: 'Hybrid arrangements are increasingly standard, especially at larger companies. Fully remote roles based in the UAE are less common than in Western markets, though it is growing as companies compete for scarce senior talent.',
  },
]

function FAQAccordion({ items }: { items: typeof faqItems }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.question}</summary>
          <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default function SoftwareEngineerSalaryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Salary Guide', item: '/salary-guide' },
    { name: 'Software Engineer Salaries in the UAE (2026)', item: canonicalPath },
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    datePublished: '2026-05-14',
    authorName: 'Omar Khalid',
    keywords: [
      'software engineer salary UAE',
      'Dubai software engineer salary',
      'Abu Dhabi software engineer salary',
    ],
  })

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <article className="bg-white text-slate-900">
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-2xl backdrop-blur sm:p-10">
            <p className="mb-4 inline-flex rounded-full bg-cyan-100/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 ring-1 ring-cyan-200/20">
              Salary Guide
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Software Engineer Salaries in the UAE (2026): Dubai vs. Abu Dhabi Compared
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Ask five recruiters what a software engineer earns in the UAE and you will get five different answers — not because anyone is wrong, but because the title covers everything from a junior developer at a small startup to a principal engineer inside a large state-backed company.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Here is what the range actually looks like once you separate it out by experience and emirate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>Reading time: 6 min read</span>
              <span>•</span>
              <span>Updated: July 28, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="prose prose-slate max-w-none">
                <h2>The short version</h2>

                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-left">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Experience level</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Dubai (AED/month)</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Abu Dhabi (AED/month)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Entry level (0–2 yrs)</td>
                        <td className="px-4 py-3 text-sm text-slate-700">8,000 – 13,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">8,500 – 13,500</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Mid level (3–6 yrs)</td>
                        <td className="px-4 py-3 text-sm text-slate-700">15,000 – 24,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">16,000 – 25,000</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Senior (7–12 yrs)</td>
                        <td className="px-4 py-3 text-sm text-slate-700">25,000 – 38,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">26,000 – 40,000</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Lead / Principal</td>
                        <td className="px-4 py-3 text-sm text-slate-700">35,000 – 55,000+</td>
                        <td className="px-4 py-3 text-sm text-slate-700">36,000 – 55,000+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Abu Dhabi consistently runs slightly ahead of Dubai for equivalent seniority — usually by somewhere in the 5–10% range — which surprises a lot of candidates who assume Dubai&apos;s bigger, flashier tech scene automatically means bigger paychecks. It does not, quite.
                </p>

                <h2>Why Abu Dhabi edges ahead</h2>
                <p>
                  Dubai has the volume: more startups, more regional tech hubs, more competition among employers for talent, which should theoretically drive pay up. But Abu Dhabi&apos;s tech hiring is increasingly anchored by government-linked entities and large state-backed companies building out AI and smart-city initiatives under the UAE&apos;s national AI strategy — and those employers tend to pay a premium to secure senior talent quickly rather than negotiate hard.
                </p>
                <p>
                  For junior and mid-level roles, the gap mostly disappears. At that experience level, the two markets are close enough that other factors — team, tech stack, growth potential, commute — should probably decide more than a small percentage difference in salary.
                </p>

                <h2>What moves the number more than the city does</h2>
                <p>
                  City matters less than these three things:
                </p>
                <ul>
                  <li><strong>Specific skill stack.</strong> Generalist full-stack developers sit toward the lower end of every bracket above. Engineers with strong AI/ML experience, cloud architecture (particularly AWS or Azure at scale), or cybersecurity specialization routinely clear the top of their experience bracket, sometimes by a wide margin, because demand for those specific skills is currently outpacing the supply of qualified candidates in the region.</li>
                  <li><strong>Company type.</strong> A large multinational or a well-funded scale-up will generally out-pay a small local company at every level, though smaller companies sometimes compensate with equity, faster promotion cycles, or more senior titles earlier.</li>
                  <li><strong>Basic salary vs. total package.</strong> As with every UAE role, the number quoted to you is rarely just cash. Housing allowance, transport, and health insurance are typically layered on top of a basic salary — and your end-of-service gratuity is calculated on that basic figure alone. Two offers with identical headline numbers can differ meaningfully once you check what the basic salary actually is.</li>
                </ul>

                <h2>A quick gut check before you negotiate</h2>
                <p>
                  If you are currently earning below AED 15,000 with 3+ years of relevant experience, or below AED 25,000 with 7+ years, in either city, you are likely underpaid relative to current market rates — assuming your skill set matches what is listed above as premium (cloud, AI/ML, security). That is not universally true for every specialization, but it is a reasonable first flag to check.
                </p>

                <h2>Frequently asked questions</h2>
                <FAQAccordion items={faqItems} />

                <p className="mt-6 text-sm italic text-slate-600">
                  Figures above are indicative ranges based on current market activity and are not a guarantee of any specific offer. Always confirm basic salary versus total package when comparing roles.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Related guides</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li><Link href="/salary-guide/uae-salary-guide-2026" className="text-sky-700 hover:underline">UAE Salary Guide 2026</Link></li>
                <li><Link href="/uae-work-visa-sponsorship-guide-2026" className="text-sky-700 hover:underline">UAE Work Visa & Sponsorship Guide 2026</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
