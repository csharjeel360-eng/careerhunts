import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Family Sponsorship 2026: Salary Rules, Documents and Who Qualifies',
  description: 'UAE family visa sponsorship in 2026 — the real salary thresholds by relationship, required documents, and age rules for children.',
  path: '/visa/uae-family-sponsorship-guide',
  keywords: ['UAE family sponsorship', 'family visa UAE', 'sponsor spouse UAE', 'UAE parent visa'],
})

const faqItems = [
  {
    question: 'Does my basic salary or total package matter for sponsorship?',
    answer: 'Basic salary is what gets assessed. A generous total package built mostly on allowances can still fall short if the basic salary line item does not clear the threshold.',
  },
  {
    question: 'Can I sponsor my siblings?',
    answer: 'Yes, under specific conditions, generally requiring proof of income and adequate accommodation. This is not as commonly approved as spouse or child sponsorship.',
  },
  {
    question: 'How long does family visa processing take once documents are submitted?',
    answer: 'Timelines vary by emirate and application completeness, but well-prepared files with all attestations in order usually move faster.',
  },
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
          UAE Family Sponsorship 2026: Salary Rules, Documents and Who Qualifies
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 7 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Published Jul 7, 2026</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          The detail most family visa guides bury is that authorities assess the basic salary stated on your attested employment contract — not your total package. That distinction trips up more applicants than the paperwork itself.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Salary thresholds by relationship</h2>
          <div className="mt-6 space-y-4 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Spouse and children (standard male sponsor)</p>
              <p className="mt-2 leading-7">Minimum basic salary of AED 4,000 per month, or AED 3,000 if employer also provides accommodation. Job title is no longer a limiting factor — only income level matters.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Spouse and children (female sponsor)</p>
              <p className="mt-2 leading-7">The threshold is generally AED 8,000–10,000 per month. In Dubai, female sponsors may also need a notarized No Objection Certificate from the child’s father, depending on the case.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Parents</p>
              <p className="mt-2 leading-7">A meaningfully higher bar, typically AED 20,000 per month. Dubai’s GDRFA also offers a humanitarian route through Amer centres with a lower threshold of AED 10,000 per month for parent sponsorship.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Golden Visa and Green Visa holders</p>
              <p className="mt-2 leading-7">No minimum salary requirement at all to sponsor immediate family — one of the more significant practical advantages of holding either visa type over a standard employment visa.</p>
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
            <li>Registered tenancy contract or title deed</li>
            <li>Salary certificate and employment contract</li>
            <li>3–6 months of bank statements or WPS records</li>
            <li>Medical fitness test results for dependents aged 18 and above</li>
            <li>Passport copies valid for at least six months</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Age rules for sponsoring children</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Sons are sponsorable until age 18, or up to 25 if they are actively studying.</li>
          <li>Daughters are sponsorable regardless of age, as long as they remain unmarried.</li>
          <li>Stepchildren and adopted children are sponsorable with the correct legal documentation in place.</li>
          <li>Golden Visa holders get more flexibility here too; the standard 25-year age limit for sons does not apply under that category.</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Who can sponsor, and who cannot</h2>
        <p className="mt-4 leading-8 text-slate-700">
          You are eligible if you are an employed resident meeting the salary threshold, a business owner with a valid trade license, a Golden or Green Visa holder, or a freelancer with a valid permit and sufficient documented income. You are not eligible if you are on a visit visa, a student (unless married), below the applicable salary threshold, or without valid UAE residency.
        </p>
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
          This guide reflects general 2026 sponsorship rules sourced from public UAE government guidance and is not legal or immigration advice. Salary thresholds and document requirements are updated periodically — confirm current rules with GDRFA or ICP directly before applying.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
