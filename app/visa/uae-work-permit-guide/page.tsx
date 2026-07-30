import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Briefcase, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Work Permit vs. Employment Visa: What’s Actually the Difference',
  description: 'Most people in the UAE point to their residence visa when asked about their “work permit.” Here is the actual 2026 difference — what each document does, who needs one, and what it costs.',
  path: '/visa/uae-work-permit-guide',
  keywords: ['UAE work permit vs employment visa', 'UAE labour card meaning', 'MOHRE work permit requirements', 'UAE employment visa vs residence visa', 'work permit cost UAE 2026', 'freelance visa vs work permit UAE'],
})

const faqItems = [
  {
    question: 'Can I start working before my work permit is fully approved?',
    answer: 'No. The work permit specifically authorizes you to perform the role. Starting work before it is issued — even with a valid entry permit or residence visa already in hand — falls outside the legal scope of your current approval.',
  },
  {
    question: 'Does changing job titles within the same company require a new work permit?',
    answer: 'Generally yes. Since the permit is tied to a defined role, significant changes often require MOHRE approval and an updated permit rather than just an internal HR update.',
  },
  {
    question: 'Is the work permit process different for free zone employers versus mainland companies?',
    answer: 'Yes. Free zone authorities often manage permit processing separately from MOHRE’s mainland process, which is one reason timelines and requirements can vary depending on where your employer is registered.',
  },
  {
    question: 'Is a work permit the same thing as an employment visa?',
    answer: 'No. The work permit authorizes a specific role for a specific employer and is issued by MOHRE. The employment or residence visa authorizes your legal stay in the UAE and is issued through ICP or GDRFA.',
  },
  {
    question: 'What happens to my work permit if I lose my job?',
    answer: 'It is typically cancelled alongside your residence visa, since the permit is tied to that specific employer relationship. You would need a new work permit under a new sponsoring employer, or a transfer arrangement where applicable, to work again legally.',
  },
  {
    question: 'Do I need a new work permit if I switch employers?',
    answer: 'Yes, in most cases — either through cancellation of the current permit and issuance of a new one, or through a transfer process that some categories allow directly.',
  },
  {
    question: 'Can I hold work permits with more than one employer at the same time?',
    answer: 'Not under a standard work permit. This generally requires a separate part-time or temporary permit specifically approved by MOHRE covering the second employer.',
  },
  {
    question: 'What is the minimum age for a UAE work permit?',
    answer: 'Workers generally need to be at least 18, with limited exceptions such as juvenile work permits or training permits under specific conditions.',
  },
  {
    question: 'How much does a UAE work permit and employment visa cost in total?',
    answer: 'Estimates commonly range from roughly $500 to $1,200, or approximately AED 2,000–9,000+, depending on skill level, emirate, and whether the sponsoring entity is a free zone or mainland company.',
  },
  {
    question: 'Do regulated professions need extra approvals beyond the standard work permit?',
    answer: 'Yes. Certain regulated roles — healthcare workers, teachers, and similar professions — typically need additional approval from the relevant licensing authority alongside the standard MOHRE work permit.',
  },
  {
    question: 'Does the residence visa automatically renew when the work permit renews?',
    answer: 'Not automatically — the two are processed through related but separate channels, so each generally needs its own renewal action even though they are tied to the same underlying employment relationship.',
  },
]

const comparisonRows = [
  { feature: 'Issuing authority', workPermit: 'MOHRE', employmentVisa: 'ICP / GDRFA' },
  { feature: 'What it authorizes', workPermit: 'A specific role for a specific employer', employmentVisa: 'Legal entry, residency, and stay in the UAE' },
  { feature: 'Tied to', workPermit: 'Your signed employment contract', employmentVisa: 'Your overall immigration status' },
  { feature: 'Typical validity', workPermit: 'Around 2 years, matching the contract term', employmentVisa: '2–3 years, depending on the category' },
  { feature: 'Required before', workPermit: 'Employment can legally begin', employmentVisa: 'Long-term residency is finalized' },
  { feature: 'Changing employer', workPermit: 'Requires a new permit or transfer approval', employmentVisa: 'May require a new sponsorship or status change' },
]

const checklistItems = [
  'Confirm your work permit has actually been issued before your first day',
  'Ask your employer to confirm the trade license, establishment card, and available visa quota are current',
  'If your job title or role changes significantly, check whether a new or updated work permit is required',
  'If you are already in the UAE on another visa type and are offered a job, confirm that a role-specific work permit is being issued',
  'If you want to take on freelance or consultancy work alongside your main role, apply for the correct additional permit before starting',
  'For free zone employment, confirm whether your permit is processed through the free zone authority or MOHRE directly',
  'Get a specific written cost quote from HR or a PRO team rather than budgeting from a general published range',
]

export default function UAEWorkPermitGuidePage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">Visa & Legal</span>
          <span className="text-slate-400">Guide</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          UAE Work Permit vs. Employment Visa: What’s Actually the Difference
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 7 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-30</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          A UAE work permit and an employment or residence visa are two separate documents that authorize two separate things: the work permit gives you the legal right to perform a specific role for a specific employer, while the residence visa gives you the legal right to enter, live, and remain in the UAE. You need both, but losing or invalidating one does not automatically mean you have lost the other.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Two documents, two different jobs</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">The work permit</p>
            <p className="mt-2 leading-7 text-slate-700">Issued by the Ministry of Human Resources and Emiratisation (MOHRE), the work permit authorizes you to perform a specific role for a specific sponsoring employer. It is tied directly to your signed employment contract and defines the scope of what you are legally allowed to do for that company. MOHRE issues 13 distinct work permit categories, covering situations from standard overseas recruitment to inter-company transfers.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">The employment or residence visa</p>
            <p className="mt-2 leading-7 text-slate-700">This is the immigration authorization that lets you enter, live, and remain in the UAE, issued through ICP or the emirate-specific GDRFA. It is typically issued as part of the same overall process, but it is not the same document, and it is assessed by a different authority.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Why the difference matters</h2>
          <p className="mt-4 leading-8 text-slate-700">
            You need both documents to work legally in the UAE, but they serve genuinely different purposes and are governed by different rules. The work permit governs the employment relationship — your role, your employer, and the scope of what you are authorized to do. The residence visa governs your legal stay — your right to enter, exit, and remain in the country.
          </p>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
            <p className="font-semibold text-slate-900">Takeaway</p>
            <p className="mt-2 leading-7">If your job situation changes — a new employer, a new role, a dispute over your contract — it is worth asking specifically which document is affected, rather than assuming your visa covers everything.</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">Why this confusion happens</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Ask most people in the UAE what their “work permit” is, and they will point to their residence visa. That is understandable because both arrive as part of the same hiring process and most people never need to think about them separately until something changes.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Who is actually eligible for a work permit</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Any foreign national intending to work in the UAE needs a work permit, even if they are already in the country on another valid visa type. Holding any valid UAE visa does not mean you are automatically authorized to work. You cannot legally start a role until a work permit specific to that role has been issued — this applies even to people already resident in the UAE on a family visa, Golden Visa, or another status who then take up employment.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-900">
            <Briefcase className="h-5 w-5 text-sky-600" />
            <p className="font-semibold">Employers carry the responsibility for the work permit application</p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
            <li>A valid, active trade license</li>
            <li>An establishment card confirming they are registered to sponsor foreign workers</li>
            <li>Sufficient visa quota tied to their license category and office size</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Timeline and cost</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Work permit processing generally takes around 2 to 6 weeks from application to full residence visa activation, depending on the sponsoring entity, the quality of its documentation, and how quickly approvals move through MOHRE and ICP/GDRFA. Free zone employers and mainland companies are processed through somewhat different channels, which is part of why timelines vary.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          Cost estimates for the employment visa category generally range from roughly $500 to $1,200, or approximately AED 2,000–9,000+, depending on skill level and sponsoring entity. This varies enough by emirate, free zone versus mainland status, and skill classification that it is worth getting a specific quote from HR or the employer’s PRO team rather than relying on a single published figure.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Work permit vs. employment visa: side-by-side comparison</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900">
                <th className="px-3 py-3 font-semibold">Feature</th>
                <th className="px-3 py-3 font-semibold">Work permit</th>
                <th className="px-3 py-3 font-semibold">Employment / residence visa</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-3 py-3">{row.feature}</td>
                  <td className="px-3 py-3">{row.workPermit}</td>
                  <td className="px-3 py-3">{row.employmentVisa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What happens if you want to do extra work</h2>
        <p className="mt-4 leading-8 text-slate-700">
          A standard work permit legally binds you to the sponsoring employer for the specific role listed on it. If you want to take on consultancy work, freelance assignments, or a second job, you need either a separate freelance permit or a part-time work permit specifically approved by MOHRE. Simply having spare time and a willing second employer is not sufficient authorization on its own.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Key takeaways</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>The work permit and residence visa are two separate documents issued by two separate authorities.</li>
          <li>Holding any valid UAE visa does not automatically authorize you to work — a role-specific work permit is still required.</li>
          <li>Employers need a valid trade license, an establishment card, and sufficient visa quota before they can even apply.</li>
          <li>Processing generally runs 2–6 weeks from application to full residence visa activation.</li>
          <li>Costs commonly fall in the $500–$1,200 or approximately AED 2,000–9,000+ range, varying by skill level, emirate, and sponsoring entity.</li>
          <li>Extra work such as freelance or consultancy work needs its own separate permit.</li>
          <li>Free zone and mainland processing run through different channels, which is part of why timelines and requirements vary by employer location.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Action checklist before you start work</h2>
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
          <li><Link href="/visa/uae-family-sponsorship-guide" className="text-sky-700">UAE Family Sponsorship 2026: Salary Rules, Documents & Who Qualifies</Link></li>
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
          The framing here deliberately opens with the most common misconception — that the residence visa is the work permit — because that is the exact confusion driving search intent on this topic. Each document gets its own standalone section so either can be extracted independently by a reader or an AI system without losing meaning. The comparison table is placed after both sections are explained individually, so it functions as a recap rather than the reader’s only exposure to the distinction.
        </p>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">Future update suggestions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Re-verify processing timelines periodically, especially as MOHRE’s Work Bundle streamlining initiative continues to roll out further categories.</li>
          <li>Confirm whether additional work permit categories beyond the current 13 are introduced.</li>
          <li>Track any changes to free zone versus mainland processing channels that affect timeline guidance.</li>
          <li>Update cost ranges if MOHRE or ICP/GDRFA fee schedules are revised.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-8 text-slate-700">
          This guide reflects general 2026 process information and is not immigration legal advice. Requirements are updated periodically by UAE authorities and can vary by emirate or free zone — verify current rules directly with MOHRE, ICP, or GDRFA before making decisions based on this article.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
