import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Briefcase, Sparkles } from 'lucide-react'
import { salaryGuides } from '@/lib/salaryGuideData'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Salary Guide 2026 | CareerHunt',
  description: 'Explore salary trends, compensation benchmarks, and career growth insights for in-demand roles in 2026.',
  alternates: {
    canonical: getCanonicalUrl('/salary-guide')
  }
}

export default function SalaryGuidePage() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Salary guide</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Modern salary insights for ambitious professionals</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Compare market expectations, learn which roles are growing fastest, and see how to strengthen your earning potential in 2026.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center gap-2 text-cyan-700">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Career growth</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">What top employers are rewarding right now</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Salary growth is strongest in roles that combine technical skill, leadership, and measurable impact. This guide helps you focus on the opportunities that move your career forward.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">Remote opportunities</span>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">AI-ready skills</span>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">High-growth industries</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:p-10">
            <div className="flex items-center gap-2 text-cyan-300">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">What to expect</span>
            </div>
            <ul className="mt-6 space-y-4 text-base text-slate-300">
              <li className="flex gap-3"><Briefcase className="mt-1 h-4 w-4 text-cyan-300" />Detailed salary ranges for high-demand roles</li>
              <li className="flex gap-3"><Briefcase className="mt-1 h-4 w-4 text-cyan-300" />Insights into the jobs increasing fastest in 2026</li>
              <li className="flex gap-3"><Briefcase className="mt-1 h-4 w-4 text-cyan-300" />Practical advice to maximize your earning potential</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {salaryGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/salary-guide/${guide.slug}`}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{guide.category}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-slate-900">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
