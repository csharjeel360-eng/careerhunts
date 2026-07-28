import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Golden Visa 2026: Every Eligibility Route, Cost and What Changed',
  description: 'Every UAE Golden Visa eligibility category in 2026 — property, deposit, salary and talent routes — plus real fees and what recently changed.',
  path: '/visa/uae-golden-visa-guide',
  keywords: ['UAE Golden Visa', 'Golden Visa 2026', 'UAE residency', 'UAE investment visa'],
})

const faqItems = [
  {
    question: 'Do I need a UAE employer to get a Golden Visa?',
    answer: 'No. The Golden Visa is self-sponsored across every category, which is the core distinction from a standard residence visa.',
  },
  {
    question: 'Can I hold a Golden Visa and still work for a company?',
    answer: 'Yes. You can change employers freely without affecting your visa status because it is not tied to a single sponsor.',
  },
  {
    question: 'Does the Golden Visa exempt me from UAE tax residency rules?',
    answer: 'No. The visa and tax residency rules are separate systems, and a Tax Residency Certificate still requires meeting the FTA’s specific physical presence threshold.',
  },
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
          UAE Golden Visa 2026: Every Eligibility Route, Cost and What Changed
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-sky-600" /> By Layla Haddad</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 8 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-28</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          If you have read more than one article about the UAE Golden Visa, you have probably already hit conflicting numbers. Some of that is outdated information sitting on old pages; some is genuine confusion between different routes that have different thresholds.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">What the Golden Visa actually gives you</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Unlike a standard employment visa, the Golden Visa is self-sponsored — no employer or local sponsor required. That independence matters: you can change jobs, stop working, or spend extended periods outside the UAE without losing your residency. It is typically a 10-year renewable permit, with some categories running 5 years, and it removes the six-month physical presence rule that applies to standard residence visas.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            It also opens family sponsorship on more generous terms, allowing holders to sponsor a spouse, children of any age, and in some cases domestic staff, with no minimum salary requirement attached.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">What it actually costs</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Government fees typically run from roughly AED 4,695 for salary and talent routes up to AED 10,140 for the property route. The full cycle — medical fitness test, biometrics, and Emirates ID issuance — generally takes 2–3 weeks once the file is complete.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            If you use a visa consultancy or legal firm, their service fee sits on top and is quoted separately.
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">The main routes, and what each actually requires</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Real estate investment</p>
            <p className="mt-2 leading-7">You need property with a combined assessed value of AED 2 million or more. A significant change from February 2026 removed the old requirement to pay 50% of the property value upfront before qualifying.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Bank deposit / capital investment</p>
            <p className="mt-2 leading-7">An AED 2 million deposit held in a UAE-licensed investment fund or financial vehicle, retained for the duration of the visa. It generally cannot be fully loan-financed.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Salary route</p>
            <p className="mt-2 leading-7">Senior professionals earning at least AED 30,000 per month with an attested degree qualify — no managerial title required, just the salary and qualification.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Specialized talent</p>
            <p className="mt-2 leading-7">Doctors and medical specialists with significant published research, scientists holding active grants or patents, recognized creatives, and athletes with national or international standing qualify based on merit.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">Secondary categories</p>
            <p className="mt-2 leading-7">Business investors with company capital of AED 2 million or more, entrepreneurs with an accredited startup, outstanding students, and humanitarian pioneers recognized by international organizations.</p>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Categories added recently that many guides still miss</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>Nurses employed with Dubai Health for 15+ years of continuous service became eligible starting May 2025</li>
          <li>Exceptional teachers in Dubai’s private schools or Ras Al Khaimah government schools, assessed by KHDA or the Department of Knowledge respectively</li>
          <li>Content creators and digital media professionals with a formally recognized body of work</li>
          <li>Waqf donors, added as part of the programme’s broader expansion</li>
        </ul>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">The renewal detail almost nobody explains upfront</h2>
        <p className="mt-4 leading-8 text-slate-700">
          A 10-year Golden Visa is a renewable permit, not a permanent, unconditional status. At renewal, the qualifying basis that got you the visa in the first place needs to still be intact — a sold property, a liquidated investment, or a changed job classification can all affect your eligibility when the renewal window comes around.
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
          This guide reflects general 2026 eligibility information sourced from public UAE government guidance and is not legal or immigration advice. Categories and thresholds are revised periodically — confirm current requirements directly with ICP or your emirate’s GDRFA before applying.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
