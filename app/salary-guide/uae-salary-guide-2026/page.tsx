import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, getCanonicalUrl } from '@/lib/seo'

const pageTitle = 'UAE Salary Guide 2026: What You\'ll Actually Earn by Industry, Role and Emirate'
const pageDescription = 'A practical breakdown of UAE salaries in 2026 by industry, emirate and experience level — plus what actually makes up your take-home pay.'
const canonicalPath = '/salary-guide/uae-salary-guide-2026'
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
    'UAE salary guide 2026',
    'salary in UAE 2026',
    'average salary UAE',
    'Dubai salary guide',
    'Abu Dhabi salary guide',
  ],
}

const faqItems = [
  {
    question: 'Is salary growth still strong in the UAE in 2026?',
    answer: 'It is slower than a few years ago. Average raises are running closer to 1–2% broadly, though specialist roles in tech, healthcare, and finance are still seeing meaningfully stronger increases than generalist or entry-level positions.',
  },
  {
    question: 'Do salaries get taxed in the UAE?',
    answer: 'No personal income tax applies to individual salaries, regardless of nationality. That is a major reason take-home pay in the UAE often runs 35–45% higher than an equivalent gross salary would deliver in a country with full income tax.',
  },
  {
    question: 'Does nationality affect salary in the UAE?',
    answer: 'UAE labour law explicitly requires equal pay and prohibits discrimination in both government and private sectors. In practice, negotiating leverage still comes down to skills, licensing, and experience rather than passport.',
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

export default function UAESalaryGuide2026Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'UAE Salary Guide 2026', item: canonicalPath },
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    datePublished: '2026-06-02',
    authorName: 'Fatima Al Rashid',
    keywords: [
      'UAE salary guide 2026',
      'average salary UAE',
      'Dubai salary guide',
      'Abu Dhabi salary guide',
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
              UAE Salary Guide 2026: What You&apos;ll Actually Earn by Industry, Role and Emirate
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              If you have searched for the average salary in the UAE recently, you have probably noticed that the numbers do not agree with each other. That is because different surveys measure different things, from basic salary alone to the full package with allowances and benefits.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This guide cuts through the noise and gives you a practical view of the UAE salary landscape in 2026.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>Reading time: 8 min read</span>
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
                <h2>Why the “average salary” figure is almost useless on its own</h2>
                <p>
                  Recruitment firms calculate UAE averages using different mixes of roles, seniority levels, and — critically — whether they count basic salary alone or the full package including housing allowance, transport, and other benefits. That is why you will see anything from roughly AED 13,500 to AED 22,500 a month quoted as “the” UAE average. The real number for you depends far more on your industry, your emirate, and your experience level than on any single headline figure.
                </p>
                <p>
                  A more useful starting point: across most current market surveys, somewhere between 55–65% of professional roles in the UAE fall between AED 10,000 and AED 40,000 a month. Below that band you are mostly looking at entry-level, retail, and hospitality positions. Above it, you are in senior finance, oil and gas, and executive territory.
                </p>

                <h2>Salary by industry — where the money actually is</h2>
                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-left">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Industry</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Typical monthly range (AED)</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Technology &amp; AI</td>
                        <td className="px-4 py-3 text-sm text-slate-700">12,000 – 35,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Fastest-growing pay band, driven by the UAE&apos;s national AI strategy</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Banking &amp; Finance</td>
                        <td className="px-4 py-3 text-sm text-slate-700">15,000 – 50,000+</td>
                        <td className="px-4 py-3 text-sm text-slate-700">DIFC/ADGM roles sit at the top end</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Healthcare</td>
                        <td className="px-4 py-3 text-sm text-slate-700">10,000 – 40,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Requires DHA/DOH/MOH licensing before you can practise</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Construction &amp; Engineering</td>
                        <td className="px-4 py-3 text-sm text-slate-700">9,000 – 30,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Skilled trades are in genuine shortage</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Hospitality &amp; Retail</td>
                        <td className="px-4 py-3 text-sm text-slate-700">4,000 – 12,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Often supplemented by service charges, tips, or commission</td>
                      </tr>
                      <tr className="odd:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-700">Oil &amp; Gas</td>
                        <td className="px-4 py-3 text-sm text-slate-700">15,000 – 45,000+</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Senior engineering roles push well past headline averages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  These are ranges, not promises — a five-year-experience software engineer and a fifteen-year-experience one both technically sit inside “technology,” but they are not competing for the same offer.
                </p>

                <h2>Dubai vs. Abu Dhabi vs. the rest</h2>
                <p>
                  Location changes your paycheck more than most people expect. Dubai&apos;s concentration of multinational headquarters, fintech companies, and international banks tends to push salaries roughly 10–20% above Sharjah and the northern emirates for equivalent roles. Abu Dhabi, driven by government entities, ADNOC-linked companies, and ADGM financial firms, often runs close to or slightly above Dubai for senior and specialist positions, even though it is a smaller, less internationally visible market.
                </p>
                <p>
                  The northern emirates — Ajman, Fujairah, Umm Al Quwain, Ras Al Khaimah — generally sit 30–40% below the national average, which matters a lot if you are weighing a lower salary against a much lower cost of living.
                </p>

                <h2>What actually makes up your package</h2>
                <ul>
                  <li><strong>Basic salary</strong> — the figure your end-of-service gratuity is calculated on. This matters more than people realize, because two offers with the same total package can have very different basic salary components.</li>
                  <li><strong>Housing allowance</strong> — often 20–30% of basic salary, sometimes provided as accommodation directly instead of cash.</li>
                  <li><strong>Transport allowance</strong> — smaller, but standard in most private-sector packages.</li>
                  <li><strong>Health insurance</strong> — legally mandatory for all employees in Dubai and Abu Dhabi, though coverage quality varies a lot between employers.</li>
                  <li><strong>End-of-service gratuity</strong> — the UAE&apos;s substitute for a pension, calculated on your basic salary and years of service.</li>
                </ul>
                <p>
                  If a new offer looks 15% higher than your current salary, always ask for the basic salary breakdown before accepting. A lower basic salary — even inside a higher total package — means a smaller gratuity payout down the line, and that difference compounds the longer you stay.
                </p>

                <h2>A number worth knowing if you&apos;re chasing the Golden Visa</h2>
                <p>
                  If long-term residency is part of your plan, there is a specific figure to keep in mind: skilled professionals applying for the UAE&apos;s 10-year Golden Visa currently need to show a basic salary of at least AED 30,000 a month, along with a relevant degree and an occupation classified at Level 1 or 2. That threshold is worth checking before you negotiate a package structured to look good on paper but thin on basic salary.
                </p>

                <h2>Frequently asked questions</h2>
                <FAQAccordion items={faqItems} />

                <p className="mt-6 text-sm italic text-slate-600">
                  This guide is updated periodically as new market survey data becomes available. Figures are indicative ranges drawn from current recruitment industry reporting, not guaranteed offers.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Related guides</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li><Link href="/uae-work-visa-sponsorship-guide-2026" className="text-sky-700 hover:underline">UAE Work Visa & Sponsorship Guide 2026</Link></li>
                <li><Link href="/emirates-group-careers-uae-2026" className="text-sky-700 hover:underline">Emirates Group Careers in UAE 2026</Link></li>
                <li><Link href="/qatar-airways-careers-2026" className="text-sky-700 hover:underline">Qatar Airways Careers 2026</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </article>
  )
}
