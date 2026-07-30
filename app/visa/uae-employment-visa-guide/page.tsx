import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Employment Visa 2026: Full Process, Costs & Timeline Explained',
  description: 'A complete 2026 guide to the UAE employment visa — the entry permit, MOHRE work permit, and residence visa explained step-by-step, with real costs, processing times, and FAQs.',
  path: '/visa/uae-employment-visa-guide',
  keywords: ['UAE employment visa 2026', 'UAE work permit 2026', 'MOHRE work permit process', 'UAE residence visa cost', 'UAE work visa requirements', 'employment visa UAE for foreigners'],
})

const faqItems = [
  {
    question: 'Can I switch employers while on a UAE employment visa?',
    answer: 'Yes. The UAE allows employees to move between employers through a formal transfer process. The details depend on your current contract, notice obligations, and the employer’s sponsorship arrangements.',
  },
  {
    question: 'Does the employment visa let me sponsor my family?',
    answer: 'Generally yes, provided you meet the minimum salary threshold. Commonly this is around AED 4,000 per month, or AED 3,000 if employer-provided accommodation is included.',
  },
  {
    question: 'What happens to my visa if I lose my job?',
    answer: 'Your employer is responsible for cancelling the visa. You usually receive a grace period, often 30 to 60 days, to secure new sponsorship, change your status, or make arrangements to leave.',
  },
  {
    question: 'Do I need my educational certificates attested before applying?',
    answer: 'For many professional roles, yes. Attestation often involves notarization, embassy attestation, and final verification once you are in the UAE, so it is best to start early.',
  },
  {
    question: 'Is the process different for free zone jobs versus mainland jobs?',
    answer: 'Somewhat. Free zone employers often process visas through their own authority rather than directly through MOHRE, which can shift costs and timelines slightly. The core sequence remains the same.',
  },
  {
    question: 'How many work permit categories does MOHRE offer?',
    answer: 'MOHRE maintains 13 official work permit categories, covering situations from standard overseas recruitment to employer-to-employer transfers.',
  },
  {
    question: 'What is the Work Bundle initiative?',
    answer: 'It is MOHRE’s digital process designed to streamline labour approvals and related documentation so that applications move faster and with fewer manual steps.',
  },
  {
    question: 'Does the new AI screening system replace human review at MOHRE?',
    answer: 'No. The AI-assisted screening layer checks document consistency and qualification alignment before human review, mainly to flag issues early rather than replace the approval decision itself.',
  },
  {
    question: 'Can I work for a second employer on the same visa?',
    answer: 'Not without additional authorization. You generally cannot legally work for a second employer unless MOHRE issues separate approval that covers the second role.',
  },
  {
    question: 'Is a UAE work permit the same as an employment visa?',
    answer: 'No. The work permit authorizes you to do a specific job for a specific employer, while the employment visa is the residence status that allows you to live and stay in the UAE.',
  },
  {
    question: 'How long is the entry permit valid?',
    answer: 'Typically around 30 to 60 days, depending on the permit category, giving you time to complete medical testing and biometrics after arrival.',
  },
  {
    question: 'Do Golden Visa holders need a separate work permit?',
    answer: 'Yes, if they take up salaried employment with a UAE company. The Golden Visa removes the need for employer-sponsored residency, but a job still requires its own work permit.',
  },
  {
    question: 'What is the difference between a work permit and a labour card?',
    answer: 'In everyday use, they usually refer to the same MOHRE labour approval — the authorization tied to your specific role and sponsoring employer.',
  },
]

const costRows = [
  { item: 'Entry permit, labour approval, visa stamping (combined)', range: 'AED 2,000 – 9,000+', whoPays: 'Employer (standard practice)' },
  { item: 'Emirates ID issuance', range: 'AED 100 – 300 (often bundled above)', whoPays: 'Employer' },
  { item: 'Medical fitness test', range: 'AED 250 – 350 per person', whoPays: 'Employer or employee, per contract' },
  { item: 'Family sponsorship (per dependent)', range: 'AED 4,000 – 10,000+', whoPays: 'Employee' },
]

const visaTypeRows = [
  { type: 'Standard Employment Visa', sponsored: 'Yes', validity: '2–3 years', mohrePermit: 'N/A — this is the permit' },
  { type: 'Golden Visa (10-year)', sponsored: 'No (self-sponsored)', validity: '10 years', mohrePermit: 'Yes, if you take a salaried job' },
  { type: 'Green Visa (self-sponsored)', sponsored: 'No', validity: '5 years', mohrePermit: 'Yes, if employed by a third party' },
  { type: 'Family Sponsorship Visa', sponsored: 'Yes (via sponsoring resident)', validity: 'Tied to sponsor’s visa', mohrePermit: 'Yes, if the dependent starts working' },
  { type: 'Transfer Work Permit', sponsored: 'Yes (new employer)', validity: 'Matches new contract', mohrePermit: 'Yes — replaces the old one' },
]

const checklistItems = [
  'Confirm your employer holds a valid UAE trade license',
  'Gather passport copies, photos, and educational certificates',
  'Start certificate attestation early if your role requires it',
  'Confirm in writing who pays for the work permit, visa stamping, and medical test',
  'Ask your employer for your expected work permit category and processing timeline',
  'Once in the UAE, book your medical test and Emirates ID biometrics promptly',
  'If sponsoring family, confirm you meet the minimum salary threshold in advance',
]

export default function UAEEmploymentVisaGuidePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">Visa & Legal</span>
          <span className="text-slate-400">Guide</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          UAE Employment Visa 2026: The Complete Process, Costs and Timeline
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 9 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-30</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          A UAE employment visa is the residence permit that lets a foreign national live and work legally for a UAE-based employer. It is built from three linked stages: an entry permit, a MOHRE work permit, and a stamped residence visa. Most applications complete in two to four weeks and cost between AED 2,000 and AED 9,000, depending on the job category and free zone versus mainland status.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What is a UAE employment visa?</h2>
        <p className="mt-4 leading-8 text-slate-700">
          A UAE employment visa is a sponsored residence visa. Your employer applies for it, is recorded as your official sponsor with MOHRE and ICP, and takes on legal responsibility for your residency status while you are employed with them. It is not a single document — it is the end result of a three-stage government process involving multiple authorities.
        </p>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
          <p className="font-semibold text-slate-900">Takeaway</p>
          <p className="mt-2 leading-7">If someone says “employment visa,” they usually mean the whole journey, not one single paper.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">The three stages, defined separately</h2>
          <div className="mt-6 space-y-5 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Stage 1: Entry permit</p>
              <p className="mt-2 leading-7">The entry permit is a temporary authorization that lets you legally enter the UAE to complete medical testing and biometrics. It is issued once your employer’s work permit application is approved and is typically valid for 30 to 60 days.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Stage 2: Work permit (labour approval)</p>
              <p className="mt-2 leading-7">The work permit is issued by MOHRE and authorizes you to perform a specific role for your sponsoring employer. It is tied directly to your signed contract and the approved job category.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Stage 3: Residence visa</p>
              <p className="mt-2 leading-7">The residence visa is what is stamped or linked to your passport, granting legal residency in the UAE. Standard employment residence visas typically run for two to three years.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">What this means in practice</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            The entry permit gets you into the country, the work permit authorizes the job, and the residence visa gives you long-term legal status. They are linked, but they are not the same thing.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Since 2026, many MOHRE applications also move through a streamlined digital workflow called the Work Bundle initiative and an AI-assisted screening layer.
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">UAE employment visa process: step-by-step (2026)</h2>
        <ol className="mt-6 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
          <li>Accept a signed job offer and contract from a UAE-licensed employer, whether mainland or free zone.</li>
          <li>Your employer submits the work permit application to MOHRE through the Tasheel portal, including your passport copy, photo, and any required certificate attestations.</li>
          <li>MOHRE’s screening layer reviews the documents for consistency before labour approval is granted.</li>
          <li>An entry permit is issued, usually valid for about 30 to 60 days, allowing you to travel to the UAE if you are applying from abroad.</li>
          <li>You complete a medical fitness test at an approved health centre.</li>
          <li>You complete Emirates ID biometrics at an authorized typing or government service centre.</li>
          <li>The residence visa is stamped or linked digitally, making you an official UAE resident tied to your sponsoring employer.</li>
        </ol>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
          <p className="font-semibold text-slate-900">Takeaway</p>
          <p className="mt-2 leading-7">Steps 1–3 are mostly your employer’s responsibility, while steps 4–7 require your direct participation.</p>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">How much does a UAE employment visa cost in 2026?</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="px-3 py-3 font-semibold">Cost item</th>
                <th className="px-3 py-3 font-semibold">Approximate range (AED)</th>
                <th className="px-3 py-3 font-semibold">Who typically pays</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr key={row.item} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-3 py-3">{row.item}</td>
                  <td className="px-3 py-3">{row.range}</td>
                  <td className="px-3 py-3">{row.whoPays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-8 text-slate-700">
          Costs vary by nationality, mainland versus free zone status, and the job’s MOHRE skill-level classification. The employer is generally expected to cover the bulk of sponsorship-related costs, which is a standard labour-law expectation rather than a courtesy.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">How long does the process take?</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Most applications complete within 2 to 4 weeks when documents are ready and the employer’s HR or PRO team is organized. Some streamlined Work Bundle categories move faster, occasionally within about a week for certain permit types.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Missing or incomplete documents, especially attested educational certificates</li>
          <li>Pending or inconclusive medical test results</li>
          <li>An unresolved prior immigration issue that surfaces during screening</li>
          <li>Backlogs at typing centres or approved health facilities</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Employer obligations under UAE labour law</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Holding a valid, active trade license and meeting Emiratisation quotas where applicable</li>
          <li>Securing MOHRE’s approval for your work permit</li>
          <li>Providing compliant housing where required by law or contract</li>
          <li>Arranging mandatory health insurance from your first day of employment</li>
          <li>Managing visa renewal and eventual cancellation when employment ends</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">UAE employment visa vs. related visa types</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="px-3 py-3 font-semibold">Visa type</th>
                <th className="px-3 py-3 font-semibold">Employer-sponsored?</th>
                <th className="px-3 py-3 font-semibold">Typical validity</th>
                <th className="px-3 py-3 font-semibold">Needs separate MOHRE work permit?</th>
              </tr>
            </thead>
            <tbody>
              {visaTypeRows.map((row) => (
                <tr key={row.type} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-3 py-3">{row.type}</td>
                  <td className="px-3 py-3">{row.sponsored}</td>
                  <td className="px-3 py-3">{row.validity}</td>
                  <td className="px-3 py-3">{row.mohrePermit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>The “employment visa” is really three linked approvals: entry permit → work permit → residence visa.</li>
          <li>Budget AED 2,000–9,000+ depending on skill level and free zone or mainland status, mostly employer-paid.</li>
          <li>Expect 2–4 weeks in a well-organized case; document readiness is the main speed lever.</li>
          <li>Employers carry defined legal obligations, including housing, insurance, MOHRE approval, and eventual cancellation.</li>
          <li>Standard visas commonly run 2–3 years following the 2025 extension.</li>
          <li>Losing your job triggers a mandatory employer-led cancellation and a grace period, not immediate illegal status.</li>
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
          <li><Link href="/visa/uae-work-permit-guide" className="text-sky-700">UAE Work Permit vs. Employment Visa: What’s Actually the Difference</Link></li>
          <li><Link href="/visa/uae-golden-visa-guide" className="text-sky-700">UAE Golden Visa 2026: Eligibility and Application Guide</Link></li>
          <li><Link href="/visa/uae-family-sponsorship-guide" className="text-sky-700">UAE Family Sponsorship 2026: Salary Rules, Documents and Who Qualifies</Link></li>
          <li><Link href="/career-insights" className="text-sky-700">Career Insights</Link></li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Suggested external sources</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li><a href="https://u.ae" target="_blank" rel="noreferrer" className="text-sky-700">U.ae — The Official Portal of the UAE Government</a></li>
          <li><a href="https://www.mohre.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">MOHRE — Ministry of Human Resources and Emiratisation</a></li>
          <li><a href="https://icp.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">ICP — Federal Authority for Identity, Citizenship, Customs and Port Security</a></li>
          <li><a href="https://gdrfad.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">GDRFA — General Directorate of Residency and Foreigners Affairs</a></li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Author notes</h2>
        <p className="mt-4 leading-8 text-slate-700">
          This article deliberately separates the three visa stages in the first section because that confusion is the top user complaint in this content space. Every section is written to stand alone if extracted or quoted by another system, and costs and timelines are presented as ranges because both vary by nationality, emirate, and free zone or mainland status.
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">Future update suggestions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Re-verify entry permit validity windows and fee tiers each quarter.</li>
          <li>Track further rollout of the AI screening system for any changes to required documentation.</li>
          <li>Update the residence visa validity section if additional categories move from two years to three.</li>
          <li>Refresh family sponsorship salary thresholds if MOHRE or ICP revises minimum income requirements.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-8 text-slate-700">
          This guide reflects general 2026 process information and is not immigration legal advice. Requirements are updated periodically by UAE authorities — verify current rules directly with MOHRE or ICP before making decisions based on this article.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
