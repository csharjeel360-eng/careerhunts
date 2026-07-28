import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Briefcase, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { getPageMetadata } from '@/lib/seo'

export const metadata: Metadata = getPageMetadata({
  title: 'UAE Work Permit vs. Employment Visa: What’s Actually the Difference',
  description: 'The UAE work permit is not the same document as your employment visa — here is what each one actually authorizes and why the difference matters.',
  path: '/visa/uae-work-permit-guide',
  keywords: ['UAE work permit', 'UAE employment visa', 'UAE work visa', 'UAE labour approval'],
})

const faqItems = [
  {
    question: 'Can I start working before my work permit is fully approved?',
    answer: 'No. The work permit specifically authorizes you to perform the role. Starting work before it is issued, even with a valid entry permit or residence visa, falls outside the legal scope of your current approval.',
  },
  {
    question: 'Does changing job titles within the same company require a new work permit?',
    answer: 'Generally yes. Since the permit is tied to a defined role, significant changes often require MOHRE approval and an updated permit rather than just an internal HR update.',
  },
  {
    question: 'Is the work permit process different for free zone employers versus mainland companies?',
    answer: 'Yes. Free zone authorities often manage permit processing separately from MOHRE’s mainland process, which is one reason timelines and requirements can vary by employer location.',
  },
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
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-600" /> 6 min read</span>
          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4 text-sky-600" /> Updated 2026-07-28</span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Ask most people in the UAE what their “work permit” is and they will point to their residence visa. That is not quite right, and the distinction matters because the two documents authorize different parts of your legal status.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Two different documents, two different jobs</h2>
          <div className="mt-6 space-y-5 text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">The work permit</p>
              <p className="mt-2 leading-7">Issued by the Ministry of Human Resources and Emiratisation, this authorizes you to perform a specific role for a specific sponsoring employer. It is tied to your signed contract and defines the scope of what you are legally allowed to do for that company.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">The employment or residence visa</p>
              <p className="mt-2 leading-7">This is the immigration authorization that lets you enter, live, and remain in the UAE. It is typically issued as part of the wider process but is not the same thing as the work permit.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-xl font-semibold">Why the difference matters</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            You need both documents, but they serve different purposes. The work permit governs the employment relationship, while the residence visa governs your legal stay in the UAE.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Losing or invalidating one can impact the other, but they are issued and assessed through related but distinct channels.
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Who is actually eligible for a work permit</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Any foreign national intending to work in the UAE needs one, even if they are already in the country on another visa type. It is a common misconception that holding any valid UAE visa means you can work; you cannot until a work permit specific to that role is issued.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-900">
            <Briefcase className="h-5 w-5 text-sky-600" />
            <p className="font-semibold">Employers are responsible for applying</p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
            <li>A valid trade license</li>
            <li>An establishment card showing they are registered to sponsor foreign workers</li>
            <li>Sufficient visa quota tied to their license category and office size</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Timeline and cost</h2>
        <p className="mt-4 leading-8 text-slate-700">
          Work permit processing generally takes around 2–6 weeks from application to full residence visa activation, depending on the sponsoring entity, the quality of its documentation, and how quickly approvals move through the relevant authority.
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          Cost estimates for the employment visa category generally range from around $500 to $1,200 depending on skill level and sponsoring entity, though this varies enough by emirate and free zone that it is worth getting a specific quote from HR or the employer’s PRO team.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">What happens if you want to do extra work</h2>
        <p className="mt-4 leading-8 text-slate-700">
          A standard work permit legally binds you to the sponsoring employer for the specific role listed. If you want to take on consultancy work, freelance assignments, or a second job, you need a separate freelance visa or a part-time work permit specifically approved by MOHRE.
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
          This guide reflects general 2026 process information and is not legal or immigration advice. Requirements vary by emirate and free zone authority — confirm specifics with MOHRE or your employer’s PRO before making decisions based on this article.
        </p>
        <Link href="/career-insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
          Explore more career insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
