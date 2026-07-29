import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Employment Visa 2026: The Complete Process, Costs and Timeline',
  description: 'How the UAE employment visa process actually works in 2026 — entry permit, work permit, residence visa stamping, costs, and who pays for what.',
  path: '/visa/uae-employment-visa-guide',
  keywords: ['UAE employment visa', 'UAE work permit', 'UAE residence visa', 'employment visa 2026'],
})

const faqItems = [
  {
    question: 'Can I switch employers while on an employment visa?',
    answer: 'Yes. Employees can change employers by following the standard UAE labour and immigration transfer procedures, though the specifics depend on the current contract and notice period.',
  },
  {
    question: 'Does the employment visa let me sponsor my family?',
    answer: 'Yes, provided you meet the minimum salary threshold — generally AED 4,000 per month, or AED 3,000 with employer-provided accommodation.',
  },
  {
    question: 'What happens to my visa if I lose my job?',
    answer: 'The employer is responsible for cancelling the visa, and you typically receive a grace period to secure new sponsorship, change status, or exit the country.',
  },
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
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 7 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Published Jul 3, 2026</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Most guides blur together “employment visa,” “work permit,” and “labour card.” They are different steps in the same journey, and mixing them up can leave candidates confused right when they need clarity most.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">The three-stage process, explained properly</h2>
          <div className="mt-6 space-y-5 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">1. Entry permit</p>
              <p className="mt-2 leading-7">Once you accept a job offer from a UAE-licensed employer, they sponsor an entry permit that lets you legally enter the country to complete medical testing and biometrics. It is usually valid for about 60 days.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">2. Work permit (labour approval)</p>
              <p className="mt-2 leading-7">Issued by MOHRE, this authorizes you to perform a specific role for the sponsoring employer. It is tied directly to your contract and the employer’s approval.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">3. Residence visa</p>
              <p className="mt-2 leading-7">This is the visa stamped or linked to your passport, granting legal residency. It typically runs for 2–3 years and renews while your employment continues.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">What it costs</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Rough 2026 figures for the full process, including entry permit, stamping, and Emirates ID, typically sit between AED 2,000 and AED 5,000. The employer is generally expected to cover most of these sponsorship costs.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Add roughly AED 250–350 per person for the mandatory medical fitness test before the residence visa is issued.
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">How long it actually takes</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Most applications complete within 2–4 weeks when the documents are ready and the employer’s HR or PRO team is organized. Delays usually come from missing documents, pending medical results, or an immigration issue that should have been checked earlier.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What your employer is on the hook for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Holding a valid trade license and meeting Emiratisation quotas where applicable</li>
          <li>Securing MOHRE approvals for the work permit</li>
          <li>Providing compliant housing where required</li>
          <li>Arranging mandatory health insurance from day one</li>
          <li>Managing renewal and eventual cancellation of the visa</li>
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
