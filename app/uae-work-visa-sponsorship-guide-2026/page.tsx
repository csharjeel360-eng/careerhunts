import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema, getCanonicalUrl } from '@/lib/seo'

const pageTitle = 'UAE Work Visa 2026: Sponsorship, Costs & Application Guide'
const pageDescription = 'Everything you need to know about UAE work visas in 2026 — employment visa sponsorship, Golden Visa salary thresholds, costs, timelines, and how to apply.'
const canonicalPath = '/uae-work-visa-sponsorship-guide-2026'
const canonicalUrl = getCanonicalUrl(canonicalPath)

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'UAE Work Visa & Sponsorship Guide 2026',
    description: 'A complete, up-to-date breakdown of UAE employment visas, sponsorship rules, Golden Visa eligibility, costs, and processing times.',
    url: canonicalUrl,
    siteName: 'CareerHunt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Work Visa Guide 2026: What You Actually Need to Know',
    description: 'Employment visa, Golden Visa, Green Visa, costs, timelines — the full 2026 breakdown for anyone planning to work in the UAE.',
  },
  metadataBase: new URL('https://careerhunt.online'),
  keywords: [
    'UAE work visa',
    'UAE employment visa',
    'UAE visa sponsorship',
    'UAE Golden Visa requirements',
    'UAE work permit cost',
    'how to get a work visa in UAE',
  ],
}

const faqItems = [
  {
    question: 'Do I need a job offer before applying for a UAE work visa?',
    answer: 'Yes. The standard Employment Visa can only be initiated by a UAE-licensed employer after you have accepted a job offer and signed a contract — you cannot apply independently.',
  },
  {
    question: 'How long does a UAE work visa take to process?',
    answer: 'Most standard applications take two to six weeks from job offer to residence visa activation, though free zone employers can sometimes move faster than mainland companies.',
  },
  {
    question: 'Who pays for a UAE work visa — the employee or employer?',
    answer: 'By law, the employer covers the core visa, work permit, and government fees for the standard Employment Visa. Employees should be cautious of any request to personally cover these core costs.',
  },
  {
    question: 'Can I get a UAE Golden Visa without an employer?',
    answer: 'Yes, that is the point of the Golden Visa — it is self-sponsored. However, if you then take a job in the UAE, your employer must still register a separate MOHRE work permit for that role.',
  },
  {
    question: 'Does gross salary count toward the AED 30,000 Golden Visa threshold?',
    answer: 'No. As of 2026, only your basic salary — the specific line item on your MOHRE-registered labour contract — counts. Housing, transport, and other allowances are excluded.',
  },
  {
    question: 'What happens if my UAE work visa expires while I am still employed?',
    answer: 'Your employer is responsible for renewal before expiry. Overstaying triggers daily fines and can complicate future visa or Golden Visa applications.',
  },
  {
    question: 'Can I switch employers while on a UAE work visa?',
    answer: 'Yes, but you typically need a No Objection Certificate from your current employer and must follow MOHRE&apos;s formal job-change procedure rather than starting the new role informally.',
  },
  {
    question: 'Is a work permit the same as a work visa?',
    answer: 'No. A work permit is MOHRE&apos;s authorization for an employer to hire a specific foreign worker; the work visa is the immigration document that lets that worker legally enter, reside, and work in the UAE. They are processed together but are legally distinct.',
  },
  {
    question: 'Do free zone jobs follow the same visa process as mainland jobs?',
    answer: 'The core steps are similar, but free zone companies apply through their specific free zone authority rather than MOHRE directly, which can sometimes mean different timelines and fee structures.',
  },
  {
    question: 'What is the Green Visa, and how is it different from the Golden Visa?',
    answer: 'The Green Visa is a shorter-duration (up to 5-year), self-sponsored option for skilled employees, freelancers, and investors with somewhat lower thresholds than the Golden Visa&apos;s AED 30,000 salary requirement.',
  },
]

const suggestedArticles = [
  { title: 'Emirates Group Careers in UAE 2026', href: '/emirates-group-careers-uae-2026' },
  { title: 'Qatar Airways Careers 2026', href: '/qatar-airways-careers-2026' },
  { title: 'DP World Careers 2026', href: '/dp-world-careers-2026' },
  { title: 'Warehouse Jobs in UAE 2026', href: '/warehouse-jobs-uae-2026' },
  { title: 'AECOM Careers in UAE 2026', href: '/aecom-careers-uae-2026' },
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

export default function UAEWorkVisaSponsorshipGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'UAE Work Visa & Sponsorship Guide 2026', item: canonicalPath },
  ])

  const articleSchema = generateArticleSchema({
    title: 'UAE Work Visa & Sponsorship Guide 2026',
    description: pageDescription,
    url: canonicalUrl,
    datePublished: '2026-07-24',
    authorName: 'CareerHunt',
    keywords: [
      'UAE work visa',
      'UAE employment visa',
      'UAE visa sponsorship',
      'UAE Golden Visa requirements',
      'UAE work permit cost',
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
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Image
            src="/UAE Work Visa & Sponsorship Guide.png"
            alt="UAE Work Visa & Sponsorship Guide"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-2xl backdrop-blur sm:p-10">
            <p className="mb-4 inline-flex rounded-full bg-cyan-100/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 ring-1 ring-cyan-200/20">
              Career Insights
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              UAE Work Visa & Sponsorship Guide 2026: Types, Costs, and How to Apply
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              A UAE work visa is the residence permit that lets a foreign national legally live and work in the country, and for most jobseekers it must be sponsored by a UAE-licensed employer through the Ministry of Human Resources and Emiratisation (MOHRE).
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This guide breaks down every visa category, the sponsorship process, real costs, processing times, and the newer self-sponsored routes — Golden, Green, and Freelance visas — so you know exactly which one applies to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span>Reading time: 9 minutes</span>
              <span>•</span>
              <span>Updated: July 24, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="prose prose-slate max-w-none">
                <h2>What Is a UAE Work Visa?</h2>
              <p>
                A UAE work visa (officially an Employment Visa) is an immigration authorization tied to a specific employer and job role. It is different from a work permit, which is a separate MOHRE approval confirming the employer has the legal right to hire that worker. In practice, the two are processed together: the work permit comes first, and the residence visa follows once the employee is inside the country.
              </p>
              <p>
                Holding a valid work visa also gives you access to an Emirates ID, the right to open a UAE bank account, and eligibility to sponsor certain family members, depending on your salary.
              </p>

              <h2>Who Needs Employer Sponsorship — and Who Doesn't</h2>
              <p>Most people working in the UAE fall into one of two groups:</p>
              <h3>Employer-sponsored (standard route)</h3>
              <p>
                The Employment Visa is the most common category. Your employer must hold a valid trade license and MOHRE establishment card before they can sponsor anyone, and they remain legally responsible for your visa status for as long as you&apos;re employed.
              </p>
              <h3>Self-sponsored (newer routes)</h3>
              <p>
                The UAE has expanded a set of visas that don&apos;t require a company sponsor at all — the Golden Visa, Green Visa, Freelance Visa, and Virtual Working Program. These suit investors, highly skilled professionals, freelancers, and remote workers employed by companies outside the UAE.
              </p>
              <p>
                You cannot apply for a standard Employment Visa on your own initiative — it must originate from a job offer with a UAE-registered entity.
              </p>

              <h2>The Standard Employment Visa Process, Step by Step</h2>
              <ol>
                <li><strong>Job offer and signed contract.</strong> The process starts only once a UAE employer issues an official offer letter and employment contract.</li>
                <li><strong>Work permit (labour approval).</strong> Your employer submits your work permit application through MOHRE (mainland companies) or the relevant free zone authority.</li>
                <li><strong>Entry permit.</strong> Once approved, you receive an entry permit, typically valid for 60 days, allowing you to travel to the UAE to complete the remaining steps.</li>
                <li><strong>Medical fitness test.</strong> A mandatory health screening (including a blood test and chest X-ray) is required before residence visa issuance.</li>
                <li><strong>Emirates ID registration.</strong> Biometric data is captured and your Emirates ID application is filed alongside your residence visa.</li>
                <li><strong>Residence visa stamping.</strong> Your passport is stamped (or digitally linked, depending on emirate) with the residence visa, which is typically valid for two to three years and renewable while employment continues.
                </li>
              </ol>
              <p>
                Processing times vary by emirate and how quickly your employer submits paperwork, but most standard applications complete within two to six weeks from job offer to residence visa activation.
              </p>

              <h2>Documents You'll Typically Need</h2>
              <ul>
                <li>Passport valid for at least six months</li>
                <li>Recent passport-style photographs meeting UAE specifications</li>
                <li>Signed employment contract and official offer letter</li>
                <li>Attested educational certificates (equivalency certificate required for foreign degrees)</li>
                <li>Medical fitness certificate</li>
                <li>No Objection Certificate (NOC) from a previous UAE employer, if you're switching jobs within the country</li>
              </ul>
              <p>
                Small errors — a misspelled name, mismatched passport number, or an unattested degree — are the most common cause of delays, so it's worth double-checking every document before submission.
              </p>

              <h2>UAE Work Visa Costs in 2026</h2>
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-900">Item</th>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-900">Typical Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Standard Employment Visa (employer-paid)</td>
                      <td className="px-4 py-3 text-sm text-slate-700">4,000 – 7,500</td>
                    </tr>
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Medical fitness test</td>
                      <td className="px-4 py-3 text-sm text-slate-700">500 – 700</td>
                    </tr>
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Emirates ID issuance</td>
                      <td className="px-4 py-3 text-sm text-slate-700">370</td>
                    </tr>
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Typing / service centre fees</td>
                      <td className="px-4 py-3 text-sm text-slate-700">200 – 500</td>
                    </tr>
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Golden Visa government + Amer fees</td>
                      <td className="px-4 py-3 text-sm text-slate-700">4,695 – 10,140</td>
                    </tr>
                    <tr className="odd:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">Overstay fine</td>
                      <td className="px-4 py-3 text-sm text-slate-700">25 – 100 per day</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                By law, employers bear the core visa and work permit costs for sponsored employees. If a recruiter or "agent" asks you to personally pay standard employment visa fees, treat that as a red flag worth verifying directly with the employer or MOHRE.
              </p>

              <h2>UAE Golden Visa: Requirements for 2026</h2>
              <p>
                The Golden Visa is a self-sponsored, renewable long-term residence permit (5 or 10 years) that doesn't tie you to a single employer. As of 2026, the skilled-professional route — the category most working professionals pursue — requires:
              </p>
              <ul>
                <li>A <strong>minimum basic salary of AED 30,000 per month</strong>, verified against your MOHRE-registered labour contract. Housing, transport, and other allowances are explicitly excluded from this calculation; only the basic salary line counts.</li>
                <li>Two years of demonstrated salary history at that threshold, shown through bank statements.</li>
                <li><strong>MOHRE occupational classification Level 1 or Level 2</strong> (the skilled-tier professional categories).</li>
                <li>An attested bachelor's degree or higher, with equivalency certification for foreign degrees.</li>
                <li>A valid practising license for regulated professions such as medicine, pharmacy, teaching, or engineering.</li>
              </ul>
              <p>
                Other Golden Visa routes exist for investors (AED 2 million in property or an equivalent bank deposit or fund), entrepreneurs, and specialized talent nominated by government entities.
              </p>
              <p>
                Important nuance for employers and employees alike: <strong>the Golden Visa grants residence rights, not work authorization.</strong> Anyone who takes up employment while holding a Golden Visa still needs a separate MOHRE work permit or labour card tied to that job.
              </p>

              <h2>Green Visa and Other Self-Sponsored Categories</h2>
              <p>
                The Green Visa is a self-sponsored residence permit aimed at skilled employees, freelancers, and investors who don't want their status tied to a single company. As of 2026 it covers four main categories: skilled employees meeting income and qualification thresholds, freelancers, investors, and entrepreneurs. It has also been extended to allow durations of up to five years and broader family sponsorship rights for qualifying holders.
              </p>
              <p>
                The Freelance Visa and Virtual Working Program serve a similar self-sponsored function for independent contractors and remote employees working for companies based outside the UAE.
              </p>

              <h2>Switching Jobs on a UAE Work Visa</h2>
              <p>
                Changing employers within the UAE is possible under current labour and immigration rules, but it isn't automatic. In most cases you'll need a No Objection Certificate from your current sponsor, or you'll need to follow MOHRE's job-change procedures if your contract and notice period allow it. Trying to start a new role before your visa status is formally transferred can put both you and the new employer at risk of compliance penalties.
              </p>

              <h2>Common Mistakes That Delay Applications</h2>
              <ul>
                <li>Submitting educational documents without proper attestation</li>
                <li>Listing gross salary instead of basic salary on Golden Visa paperwork — allowances no longer count toward the AED 30,000 threshold</li>
                <li>Waiting until the last minute to start certificate attestation, which can take longer than the visa process itself</li>
                <li>Failing to obtain a NOC before switching employers</li>
                <li>Letting a visa lapse — overstay fines accrue daily and can affect future applications</li>
              </ul>

              <h2>FAQs</h2>
              <FAQAccordion items={faqItems} />

              <h2>Key Takeaways</h2>
              <ul>
                <li>Standard UAE work visas require employer sponsorship and cannot be self-initiated.</li>
                <li>Core costs (AED 4,000–7,500) are legally the employer's responsibility.</li>
                <li>Processing typically takes two to six weeks for standard employment visas.</li>
                <li>The Golden Visa (self-sponsored) requires a AED 30,000+ basic salary, MOHRE Level 1–2 classification, and an attested degree — but still requires a separate work permit if you take a job.</li>
                <li>Attestation delays and salary-documentation mismatches are the most common causes of rejection or delay.</li>
              </ul>

              <h2>Action Checklist Before You Apply</h2>
              <ul>
                <li>Confirm your employer holds a valid trade license and MOHRE establishment card</li>
                <li>Get educational certificates attested before your job search concludes</li>
                <li>Verify your passport has 6+ months validity</li>
                <li>Request a salary certificate that clearly separates basic salary from allowances</li>
                <li>Ask your employer directly which entity (MOHRE or free zone authority) will process your permit</li>
                <li>If switching jobs within the UAE, secure your NOC before resigning</li>
              </ul>
            </div>
          </div>
        </div>
          <aside className="space-y-8 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Suggested Internal Links</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {suggestedArticles.map((article) => (
                  <li key={article.href}>
                    <Link href={article.href} className="font-semibold text-slate-900 transition hover:text-cyan-700">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Note for readers</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Salary thresholds and attestation rules for the Golden Visa changed materially between 2024 and 2026. Verify current thresholds directly with MOHRE or ICP before applying, since rules can shift again.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Suggested external sources</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li><a href="https://www.mohre.gov.ae" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-cyan-700">MOHRE official portal</a></li>
                <li><a href="https://www.icp.gov.ae" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-cyan-700">ICP</a></li>
                <li><a href="https://u.ae" target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:text-cyan-700">UAE Government portal</a></li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">More related guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-900 transition hover:border-cyan-200 hover:shadow-md"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
