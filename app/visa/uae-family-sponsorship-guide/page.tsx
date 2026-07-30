import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Family Sponsorship 2026: Salary Rules, Documents & Who Qualifies',
  description: 'A complete 2026 guide to UAE family sponsorship — exact salary thresholds by relationship, required documents, age rules for children, and who can and cannot sponsor.',
  path: '/visa/uae-family-sponsorship-guide',
  keywords: ['UAE family sponsorship 2026', 'UAE family visa salary requirement', 'sponsor spouse UAE', 'sponsor parents UAE salary', 'UAE family visa documents', 'female sponsor UAE family visa', 'Golden Visa family sponsorship'],
})

const faqItems = [
  {
    question: 'Does my basic salary or total package matter for sponsorship?',
    answer: 'Basic salary is what gets assessed. A generous total package built mostly on allowances can still fall short if the basic salary line item does not clear the applicable threshold.',
  },
  {
    question: 'Can I sponsor my siblings?',
    answer: 'Yes, under specific conditions, generally requiring proof of sufficient income and adequate accommodation. This is approved less commonly than spouse or child sponsorship and is assessed more individually.',
  },
  {
    question: 'How long does family visa processing take once documents are submitted?',
    answer: 'Timelines vary by emirate and application completeness, but well-prepared files with all attestations in order generally move faster than files with incomplete documentation.',
  },
  {
    question: 'What is the minimum salary to sponsor a spouse and children in the UAE?',
    answer: 'For a standard male sponsor, AED 4,000 per month, or AED 3,000 per month if the employer formally provides accommodation. Female sponsors generally face a higher threshold of AED 8,000–10,000 per month.',
  },
  {
    question: 'Can a woman sponsor her husband in the UAE?',
    answer: 'Yes, provided she meets the applicable salary threshold, generally in the AED 8,000–10,000 per month range, and satisfies any additional documentation requirements such as a No Objection Certificate where applicable.',
  },
  {
    question: 'How much salary do I need to sponsor my parents?',
    answer: 'Typically around AED 20,000 per month under the standard route. Dubai also offers a humanitarian route through Amer centres with a lower threshold of roughly AED 10,000 per month, alongside additional accommodation conditions.',
  },
  {
    question: 'Do Golden Visa holders need to meet any salary threshold to sponsor family?',
    answer: 'No. Golden and Green Visa holders can sponsor immediate family with no minimum salary requirement, regardless of current employment status.',
  },
  {
    question: 'Is there an age limit for sponsoring children?',
    answer: 'Sons are sponsorable until 18, or up to 25 if actively studying full-time. Daughters are sponsorable regardless of age as long as they remain unmarried. Golden Visa holders are not subject to the standard 25-year limit for sons.',
  },
  {
    question: 'Do I need to prove accommodation to sponsor family?',
    answer: 'Yes — a registered tenancy contract or title deed in the sponsor’s name is a standard required document, separate from any salary-related accommodation certification.',
  },
  {
    question: 'What happens if my basic salary does not meet the threshold but my spouse also works?',
    answer: 'In some cases, combined household income can be considered, particularly for parent sponsorship, though this varies by emirate and case. It is worth confirming directly with GDRFA or ICP rather than assuming it applies to your category.',
  },
  {
    question: 'Can visit visa holders sponsor family members?',
    answer: 'No. Sponsorship requires valid UAE residency; visit visa holders, students (unless married), and anyone below the applicable salary threshold are not eligible to sponsor.',
  },
  {
    question: 'Do stepchildren or adopted children qualify for sponsorship?',
    answer: 'Yes, provided the correct legal documentation establishing the relationship is in place and properly attested.',
  },
]

const thresholdRows = [
  { relationship: 'Male sponsor — spouse and children', minimum: 'AED 4,000/month', notes: 'AED 3,000 if employer provides certified accommodation' },
  { relationship: 'Female sponsor — spouse and children', minimum: 'AED 8,000–10,000/month', notes: 'May require an NOC from the child’s father in Dubai' },
  { relationship: 'Either sponsor — parents (standard route)', minimum: 'Around AED 20,000/month', notes: 'Annual visa renewal required' },
  { relationship: 'Either sponsor — parents (Dubai humanitarian route)', minimum: 'Around AED 10,000/month', notes: 'Via Amer centres; additional accommodation conditions apply' },
  { relationship: 'Golden or Green Visa holder — immediate family', minimum: 'None', notes: 'Applies regardless of current employment status' },
]

const checklistItems = [
  'Confirm your basic salary, not your total package, against the threshold for your sponsorship category',
  'If relying on the lower accommodation-linked threshold, get formal employer certification of provided housing',
  'Start attesting marriage certificates, birth certificates, and other foreign-issued documents as early as possible',
  'Gather 3–6 months of bank statements or WPS records showing consistent salary receipt',
  'If sponsoring parents, check both the standard threshold and the Dubai humanitarian Amer-centre route before ruling anything out',
  'If you are a female sponsor, confirm whether a No Objection Certificate from the child’s father applies to your case',
  'Schedule medical fitness tests promptly for dependents aged 18 and above',
  'If you hold or are considering a Golden or Green Visa, factor in the removed salary requirement when comparing your options',
]

export default function UAEFamilySponsorshipGuidePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">Visa & Legal</span>
          <span className="text-slate-400">Guide</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          UAE Family Sponsorship 2026: Salary Rules, Documents & Who Qualifies
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 8 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-30</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          UAE family sponsorship in 2026 requires a minimum basic salary of AED 4,000 per month for a standard male sponsor bringing a spouse and children, or AED 3,000 with employer-provided accommodation, AED 8,000–10,000 for female sponsors, roughly AED 20,000 for parents, and no minimum salary at all for Golden or Green Visa holders.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Why “basic salary” is the detail most guides bury</h2>
        <p className="mt-4 leading-8 text-slate-700">
          When immigration authorities review a sponsorship application, they look specifically at the basic salary figure written into your attested employment contract and salary certificate — not your allowances, bonuses, or total package. This matters because many UAE compensation structures are built with a relatively low basic salary and large housing or transport allowances layered on top for tax and structuring reasons.
        </p>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
          <p className="font-semibold text-slate-900">Takeaway</p>
          <p className="mt-2 leading-7">Before assuming you qualify, check the basic salary line on your contract specifically — not the number on your offer letter that sums everything together.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Salary thresholds by relationship</h2>
          <div className="mt-6 space-y-4 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Spouse and children (standard male sponsor)</p>
              <p className="mt-2 leading-7">A minimum basic salary of AED 4,000 per month, or AED 3,000 if your employer also provides accommodation. The accommodation needs to be formally documented by your employer — simply receiving a housing allowance does not qualify unless your employer certifies that housing itself is provided.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Spouse and children (female sponsor)</p>
              <p className="mt-2 leading-7">The threshold is generally AED 8,000–10,000 per month. In Dubai specifically, female sponsors may also need a notarized No Objection Certificate from the child’s father, depending on the case and custody circumstances.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Parents</p>
              <p className="mt-2 leading-7">A meaningfully higher bar, typically around AED 20,000 per month. Dubai’s GDRFA also runs a humanitarian route through Amer centres with a lower threshold of AED 10,000 per month for parent sponsorship, alongside additional accommodation requirements.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Golden Visa and Green Visa holders</p>
              <p className="mt-2 leading-7">No minimum salary requirement at all to sponsor immediate family. That is one of the more significant practical advantages of holding either visa type over a standard employment visa.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">Documents you will actually need</h2>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
            <li>Attested marriage certificate for a spouse</li>
            <li>Original birth certificates for children, attested if issued outside the UAE</li>
            <li>Registered tenancy contract or title deed in the sponsor’s name</li>
            <li>Salary certificate and employment contract, both attested where required</li>
            <li>3–6 months of bank statements or WPS records as proof of salary receipt</li>
            <li>Medical fitness test results for dependents aged 18 and above</li>
            <li>Passport copies valid for at least six months, for both sponsor and dependents</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Salary thresholds summary table</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="px-3 py-3 font-semibold">Sponsor / relationship</th>
                <th className="px-3 py-3 font-semibold">Minimum basic salary</th>
                <th className="px-3 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {thresholdRows.map((row) => (
                <tr key={row.relationship} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-3 py-3">{row.relationship}</td>
                  <td className="px-3 py-3">{row.minimum}</td>
                  <td className="px-3 py-3">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Age rules for sponsoring children</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Sons are sponsorable until age 18, or up to 25 if they are actively enrolled in full-time study.</li>
          <li>Daughters are sponsorable regardless of age, as long as they remain unmarried.</li>
          <li>Stepchildren and adopted children are sponsorable with the correct legal documentation establishing the relationship in place.</li>
          <li>Golden Visa holders get more flexibility here too — the standard 25-year age limit for sons does not apply under that category.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Who can sponsor, and who cannot</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Eligible to sponsor</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
              <li>Employed residents meeting the applicable salary threshold</li>
              <li>Business owners holding a valid trade license</li>
              <li>Golden or Green Visa holders</li>
              <li>Freelancers holding a valid permit and sufficient documented income</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Not eligible to sponsor</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
              <li>Visit visa holders</li>
              <li>Students, unless married</li>
              <li>Anyone below the applicable salary threshold for their sponsorship category</li>
              <li>Anyone without valid UAE residency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Can you combine incomes to meet the threshold?</h2>
        <p className="mt-4 leading-8 text-slate-700">
          In some cases, a sponsor who does not independently meet a given threshold can combine their salary with a spouse’s income to collectively reach it — this is more commonly cited in parent-sponsorship contexts than for spouse and child sponsorship. Rules on income combination can vary by emirate and case, so this is worth confirming directly with GDRFA or ICP rather than assuming it applies universally.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Authorities assess basic salary, not the total compensation package.</li>
          <li>Thresholds vary sharply by relationship and sponsor gender: AED 4,000 for a male sponsor bringing a spouse and children, AED 8,000–10,000 for a female sponsor, and around AED 20,000 for parents.</li>
          <li>Dubai’s Amer-centre humanitarian route can lower the parent threshold to around AED 10,000/month.</li>
          <li>Golden and Green Visa holders can sponsor immediate family with no minimum salary requirement at all.</li>
          <li>Document attestation is the most common cause of rejection or delay.</li>
          <li>Age rules for sons and daughters differ, and Golden Visa holders get additional flexibility on son age limits.</li>
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
          <li><Link href="/visa/uae-golden-visa-guide" className="text-sky-700">UAE Golden Visa 2026: Every Eligibility Route, Cost & What Changed</Link></li>
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
          <li><a href="https://amer.gov.ae" target="_blank" rel="noreferrer" className="text-sky-700">Amer Centres — Dubai’s government service centres</a></li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Author notes</h2>
        <p className="mt-4 leading-8 text-slate-700">
          The article leads with the basic-salary-versus-total-package distinction because it is the single most consequential detail in this topic — it silently disqualifies applicants who assume a strong total compensation package is sufficient. Each relationship category is written as an independent section with its own takeaway, since most readers only need one of these at a time. The female-sponsor and Golden Visa sections are kept explicitly separate rather than folded into general rules, since both carry meaningfully different thresholds that are easy to miss in a skim-read.
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">Future update suggestions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Re-verify salary thresholds each quarter, particularly the female-sponsor and parent-sponsorship figures.</li>
          <li>Confirm whether income-combination rules for meeting thresholds are formalized further or remain case-by-case.</li>
          <li>Track any expansion of the Dubai humanitarian Amer-centre route to other emirates.</li>
          <li>Update sibling-sponsorship guidance if GDRFA issues clearer criteria.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-8 text-slate-700">
          This guide reflects general 2026 process information and is not immigration legal advice. Requirements are updated periodically by UAE authorities and can vary by emirate — verify current rules directly with GDRFA or ICP before making decisions based on this article.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
