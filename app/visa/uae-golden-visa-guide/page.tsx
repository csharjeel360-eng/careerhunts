import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Golden Visa 2026: Every Eligibility Route, Cost & What Changed',
  description: 'A complete 2026 guide to the UAE Golden Visa — every eligibility route, real government fees, renewal conditions, and the newly added categories most guides still miss.',
  path: '/visa/uae-golden-visa-guide',
  keywords: ['UAE Golden Visa 2026', 'UAE Golden Visa eligibility', 'UAE Golden Visa cost', 'UAE Golden Visa real estate route', 'UAE Golden Visa salary requirement', 'UAE Golden Visa renewal', 'self-sponsored UAE residency'],
})

const faqItems = [
  {
    question: 'Do I need a UAE employer to get a Golden Visa?',
    answer: 'No. The Golden Visa is self-sponsored across every category, which is the core distinction from a standard employment visa that requires a sponsoring employer.',
  },
  {
    question: 'Can I hold a Golden Visa and still work for a company?',
    answer: 'Yes. You can change employers freely without affecting your visa status because it is not tied to a single sponsor the way a standard employment visa is.',
  },
  {
    question: 'Does the Golden Visa exempt me from UAE tax residency rules?',
    answer: 'No. The visa and tax residency rules are separate systems. A Tax Residency Certificate still requires meeting the Federal Tax Authority’s specific physical presence threshold, independent of your visa status.',
  },
  {
    question: 'How much property do I need for the real estate route?',
    answer: 'A combined assessed value of AED 2 million or more, confirmed by a title deed or current valuation. Since February 2026, mortgaged and off-plan properties can count as long as the certified value reaches AED 2 million and the required no-objection certificate is issued.',
  },
  {
    question: 'What salary do I need for the employment route?',
    answer: 'At least AED 30,000 per month, along with an attested degree. No specific managerial title is required.',
  },
  {
    question: 'Is the Golden Visa really valid for 10 years?',
    answer: 'Most categories, including the standard real estate and investment routes, run for 10 years. A small number of categories — such as certain entrepreneur pathways and outstanding high-school students — are issued for 5 years instead.',
  },
  {
    question: 'What happens if I sell my qualifying property before renewal?',
    answer: 'If you sell the property that qualified you and do not replace it with another qualifying asset before the renewal window, the visa cannot be renewed on that original basis. You would need to restore a qualifying asset or qualify under a different route.',
  },
  {
    question: 'Can multiple properties be combined to meet the AED 2 million threshold?',
    answer: 'Yes. Current guidance allows combining more than one property to reach the required combined value rather than requiring a single property to meet the full threshold alone.',
  },
  {
    question: 'Are nurses really eligible for the Golden Visa now?',
    answer: 'Yes — nurses employed with Dubai Health for 15 or more years of continuous service became eligible starting in May 2025, a category many older guides do not mention.',
  },
  {
    question: 'Does the deposit route allow fully loan-financed capital?',
    answer: 'Generally no. The AED 2 million deposit or investment generally needs to be genuine capital rather than fully borrowed funds, though specifics can vary by the licensed fund or financial vehicle used.',
  },
  {
    question: 'Do I need to physically live in the UAE to keep my Golden Visa active?',
    answer: 'No — this is one of the visa’s core advantages. It removes the six-month physical presence rule that applies to standard UAE residence visas, so extended time outside the country does not put the visa at risk.',
  },
  {
    question: 'What is the difference between the entrepreneur and business investor secondary categories?',
    answer: 'Business investors qualify based on company capital typically at or above AED 2 million, while entrepreneurs generally qualify through an accredited or incubator-endorsed startup, sometimes at a lower project-value threshold.',
  },
]

const routeCards = [
  {
    title: 'Real estate investment route',
    description: 'You need UAE property with a combined assessed value of AED 2 million or more, confirmed by a title deed or current valuation from the relevant land department. A significant change from February 2026 removed the old requirement to have paid 50% of the property value upfront before qualifying.',
  },
  {
    title: 'Bank deposit / capital investment route',
    description: 'This route requires an AED 2 million deposit held in a UAE-licensed investment fund or approved financial vehicle, generally retained for the duration tied to the visa. It generally cannot be fully loan-financed.',
  },
  {
    title: 'Salary route',
    description: 'Senior professionals earning at least AED 30,000 per month and holding an attested degree qualify under this route. No managerial title is required — the salary figure and qualification attestation are what matter.',
  },
  {
    title: 'Specialized talent route',
    description: 'This route qualifies people based on merit rather than money: doctors and medical specialists with a significant body of published research, scientists holding active grants or patents, recognized creatives, and athletes with national or international standing.',
  },
  {
    title: 'Secondary categories',
    description: 'Business investors with company capital of AED 2 million or more, entrepreneurs with an accredited or endorsed startup, outstanding students, and humanitarian pioneers recognized by international organizations.',
  },
]

const recentCategories = [
  'Nurses employed with Dubai Health for 15+ years of continuous service, eligible from May 2025',
  'Exceptional teachers in Dubai’s private schools or Ras Al Khaimah’s government schools, assessed by KHDA or the Department of Knowledge',
  'Content creators and digital media professionals with a formally recognized body of work',
  'Waqf donors, added as part of the programme’s broader expansion',
]

const costRows = [
  { route: 'Salary / talent routes', fee: 'Approximately AED 4,695', timing: '2–3 weeks' },
  { route: 'Property / investment routes', fee: 'Approximately AED 10,140', timing: '2–3 weeks' },
]

const comparisonRows = [
  { feature: 'Sponsorship', goldenVisa: 'Self-sponsored', standardVisa: 'Employer-sponsored' },
  { feature: 'Typical validity', goldenVisa: '10 years (5 years for some categories)', standardVisa: '2–3 years' },
  { feature: 'Physical presence rule', goldenVisa: 'None', standardVisa: 'Six-month rule generally applies' },
  { feature: 'Job changes', goldenVisa: 'No effect on visa status', standardVisa: 'May require new sponsorship or transfer' },
  { feature: 'Family sponsorship', goldenVisa: 'Broader — children of any age, generally no minimum salary tied to sponsorship itself', standardVisa: 'Tied to the visa holder’s salary threshold' },
  { feature: 'Requires a UAE job?', goldenVisa: 'No', standardVisa: 'Yes, by definition' },
]

const checklistItems = [
  'Identify which route fits your profile before you apply',
  'For the property route, get a current certified valuation from the relevant land department before assuming you meet AED 2 million',
  'For the salary route, confirm your degree attestation is complete',
  'For the talent route, gather evidence of recognition such as publications, patents, awards, or endorsements',
  'Decide whether you are applying independently or through a consultancy, and get fees in writing',
  'If family sponsorship is a priority, confirm which dependents qualify under your specific route',
  'Calendar your renewal window well in advance and reconfirm your qualifying basis is still intact',
  'Separate your visa planning from your UAE tax residency planning and confirm the FTA position if needed',
]

export default function UAEGoldenVisaGuidePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">Visa & Legal</span>
          <span className="text-slate-400">Guide</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          UAE Golden Visa 2026: Every Eligibility Route, Cost & What Changed
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 10 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-30</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          A UAE Golden Visa is a self-sponsored, typically 10-year renewable residency permit that removes the need for a local employer or sponsor, drops the six-month physical presence requirement, and opens family sponsorship on more generous terms. In 2026, the main qualifying routes sit at AED 2 million for real estate or capital investment, AED 30,000 per month for senior salaried professionals, or merit-based nomination for specialized talent — with government fees ranging from roughly AED 4,695 to AED 10,140 depending on the route.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What the Golden Visa actually gives you</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Unlike a standard employment visa, the Golden Visa is self-sponsored. No employer or local UAE sponsor is required to hold it. That independence is the whole point: you can change jobs, stop working entirely, or spend extended periods outside the UAE without putting your residency at risk.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          It is typically issued for 10 years and renewable, though a small number of categories — including certain entrepreneurs and outstanding high-school students — run on a 5-year cycle instead. It also removes the six-month physical presence rule that applies to standard UAE residence visas, meaning holders can stay outside the country for extended periods without the visa lapsing.
        </p>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
          <p className="font-semibold text-slate-900">Takeaway</p>
          <p className="mt-2 leading-7">The Golden Visa’s core value is not just the 10-year term — it is the independence from any single employer or sponsor.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Family sponsorship: what is actually more generous</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Golden Visa holders can sponsor a spouse and children of any age, and in some cases domestic staff, generally without a minimum salary requirement attached to the sponsorship itself. This is a meaningful difference from standard employment visas, where family sponsorship depends on the visa holder’s salary clearing a specific threshold.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">What it actually costs</h2>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900">
                  <th className="px-3 py-3 font-semibold">Route</th>
                  <th className="px-3 py-3 font-semibold">Government fee</th>
                  <th className="px-3 py-3 font-semibold">Processing time</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.route} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-3 py-3">{row.route}</td>
                    <td className="px-3 py-3">{row.fee}</td>
                    <td className="px-3 py-3">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This government fee covers the core application; it does not include the medical fitness test, biometrics, and Emirates ID issuance, which run through the standard residency process alongside it. If you engage a visa consultancy or legal firm, their service fee is quoted separately and sits on top of the government cost.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">The main eligibility routes, explained separately</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          {routeCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{card.title}</p>
              <p className="mt-2 leading-7">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Categories added recently that many guides still miss</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          {recentCategories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">The renewal detail almost nobody explains upfront</h2>
        <p className="mt-4 leading-8 text-slate-700">
          A 10-year Golden Visa is a renewable permit, not a permanent, unconditional status. At renewal, the qualifying basis that got you the visa in the first place needs to still be intact.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li><strong>Real estate route:</strong> the qualifying property must still be in your name at a certified value of AED 2 million or more at renewal time.</li>
          <li><strong>Investment route:</strong> a liquidated deposit or fund position before renewal similarly breaks the qualifying basis.</li>
          <li><strong>Employment route:</strong> a changed job classification, salary drop below the threshold, or employment gap can affect eligibility at renewal.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">UAE Golden Visa vs. standard employment visa</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="px-3 py-3 font-semibold">Feature</th>
                <th className="px-3 py-3 font-semibold">Golden Visa</th>
                <th className="px-3 py-3 font-semibold">Standard employment visa</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-3 py-3">{row.feature}</td>
                  <td className="px-3 py-3">{row.goldenVisa}</td>
                  <td className="px-3 py-3">{row.standardVisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>The Golden Visa is self-sponsored across every category — no employer or local sponsor needed at any point.</li>
          <li>Four main financial or merit routes exist in 2026: real estate, capital/deposit, salary, and specialized talent.</li>
          <li>Government fees run roughly AED 4,695 to AED 10,140 depending on route; consultancy fees are separate and additional.</li>
          <li>February 2026 removed the old 50%-paid-upfront property rule — certified value is now what counts.</li>
          <li>Newer categories such as nurses, teachers, content creators, and Waqf donors exist and are frequently missed by older guides.</li>
          <li>Renewal is not automatic — your original qualifying basis needs to still be intact.</li>
          <li>The Golden Visa and UAE tax residency are separate systems; holding one does not automatically grant the other.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Action checklist before you apply</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          {checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{item.question}</p>
              <p className="mt-2 leading-7 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Suggested internal links</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li><Link href="/visa/uae-employment-visa-guide" className="text-sky-700">UAE Employment Visa 2026: The Complete Process, Costs and Timeline</Link></li>
          <li><Link href="/visa/uae-family-sponsorship-guide" className="text-sky-700">UAE Family Sponsorship 2026: Salary Rules, Documents and Who Qualifies</Link></li>
          <li><Link href="/career-insights" className="text-sky-700">Career Insights</Link></li>
          <li><Link href="/visa/uae-work-permit-guide" className="text-sky-700">UAE Work Permit vs. Employment Visa: What’s Actually the Difference</Link></li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Suggested external sources</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li><a href="https://u.ae" target="_blank" rel="noreferrer" className="text-sky-700">U.ae — The Official Portal of the UAE Government</a></li>
          <li><a href="https://icp.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">ICP — Federal Authority for Identity, Citizenship, Customs and Port Security</a></li>
          <li><a href="https://gdrfad.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">GDRFA — General Directorate of Residency and Foreigners Affairs</a></li>
          <li><a href="https://dubailand.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">Dubai Land Department (DLD)</a></li>
          <li><a href="https://tax.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">Federal Tax Authority (FTA)</a></li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Author notes</h2>
        <p className="mt-4 leading-8 text-slate-700">
          The framing choice here — separating “what changed” from “what is always true” — directly addresses the top complaint in this content space: conflicting numbers across articles. Costs, thresholds, and validity periods are presented with their effective dates, specifically the February 2026 property rule change and May 2025 nurse category, so readers and AI systems can tell current rules apart from legacy ones. Every route section is written to stand alone if extracted, since readers typically care about only one route rather than all of them.
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">Future update suggestions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Re-check government fee figures each quarter; these are adjusted periodically.</li>
          <li>Monitor for further category additions beyond nurses, teachers, content creators, and Waqf donors.</li>
          <li>Confirm whether the bank deposit route’s minimum hold period changes from the commonly cited 2-year figure.</li>
          <li>Track any further easing of the real estate route’s financing rules beyond the February 2026 change.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-8 text-slate-700">
          This guide reflects general 2026 process information and is not immigration or tax advice. Requirements are updated periodically by UAE authorities — verify current rules directly with ICP, GDRFA, or a licensed advisor before making decisions based on this article.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
