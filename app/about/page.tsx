import type { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About CareerHunt | UAE Job Search & Career Guidance Platform',
  description: 'CareerHunt helps job seekers navigate the UAE job market with verified listings, visa guidance, and salary insights for Dubai, Abu Dhabi and beyond.',
  alternates: {
    canonical: getCanonicalUrl('/about')
  }
}

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About us</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">About CareerHunt</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          CareerHunt is a job search and career guidance platform focused entirely on the United Arab Emirates. We help people find real, current job openings across Dubai, Abu Dhabi, Sharjah, and the rest of the Emirates — and just as importantly, we help them understand the practical side of working here: visa sponsorship, salary expectations, and what it actually takes to get hired.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why we started CareerHunt</h2>
          <p className="mt-4 text-slate-600 leading-8">
            I’m Sharjeel, the founder of CareerHunt. I built this site after watching how much confusing, contradictory, and outdated information exists around working in the UAE. Job seekers get bounced between generic global job boards that bury UAE listings under thousands of irrelevant results, and visa and immigration content that is either overly legalistic or written by consultancies mainly trying to sell their services.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            CareerHunt exists to close that gap: a UAE-specific job board paired with plain-language guides on the things that actually determine whether a job offer works out — visa eligibility, salary benchmarks by emirate, and what different companies are actually like to work for.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What we actually do</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li><span className="font-semibold text-slate-900">Job listings</span> — current openings across the UAE, organized by emirate and sector, refreshed regularly so you are not applying to positions that have already closed.</li>
            <li><span className="font-semibold text-slate-900">Salary guides</span> — real ranges by role and emirate, so you can walk into a negotiation knowing what the market actually pays.</li>
            <li><span className="font-semibold text-slate-900">Visa & legal guidance</span> — plain-language explainers on employment visas, the Golden Visa, family sponsorship, and work permits.</li>
            <li><span className="font-semibold text-slate-900">Company & career guides</span> — practical breakdowns of hiring processes at major UAE employers.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Our approach</h2>
        <p className="mt-4 text-slate-600 leading-8">
          We don’t just republish job postings and call it content. Every listing on CareerHunt is paired with context that adds real value — and our guides are written and reviewed by people who follow the UAE job market closely, not generated and left unchecked. We’d rather have fewer, better pages than thousands of thin ones.
        </p>
        <p className="mt-4 text-slate-600 leading-8">
          We also believe in being upfront: salary figures are shown as ranges with context on what drives variance, not oversold as guarantees, and every guide includes a “last updated” date because visa and salary information changes and we’d rather you know when ours was last checked than pretend it is permanently accurate.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
        <p className="mt-4 text-slate-600 leading-8">
          Have feedback, a correction, or a job you’d like listed? Reach us at <a href="mailto:contact@careerhunt.online" className="font-semibold text-sky-700 underline underline-offset-2">contact@careerhunt.online</a>. We read everything that comes in.
        </p>
        <p className="mt-4 text-slate-600 leading-8">
          — Sharjeel, Founder, CareerHunt
        </p>
      </div>
    </section>
  )
}
