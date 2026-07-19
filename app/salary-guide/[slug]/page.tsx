import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Briefcase, Sparkles } from 'lucide-react'
import { notFound } from 'next/navigation'
import { salaryGuides } from '@/lib/salaryGuideData'
import { getCanonicalUrl } from '@/lib/seo'

interface SalaryGuideDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: SalaryGuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = salaryGuides.find((item) => item.slug === slug)

  if (!guide) {
    return {
      title: 'Salary Guide',
      description: 'Explore salary trends and career growth insights for today’s most in-demand roles.'
    }
  }

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: getCanonicalUrl(`/salary-guide/${guide.slug}`)
    },
    keywords: [guide.category, 'salary guide', '2026 salary', 'career growth', 'salary insights'],
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: getCanonicalUrl(`/salary-guide/${guide.slug}`),
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.excerpt
    }
  }
}

export default async function SalaryGuideDetailPage({ params }: SalaryGuideDetailPageProps) {
  const { slug } = await params
  const guide = salaryGuides.find((item) => item.slug === slug)

  if (!guide) {
    notFound()
  }

  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/salary-guide" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" />
          Back to salary guides
        </Link>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">{guide.category}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{guide.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{guide.excerpt}</p>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm text-cyan-800">
              <div className="flex items-center gap-2 font-semibold">
                <TrendingUp className="h-4 w-4" />
                Updated for 2026 market trends
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guide.featuredStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-8 text-white">
            <div className="flex items-center gap-2 text-cyan-300">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Key takeaway</span>
            </div>
            <p className="mt-4 text-xl leading-8 text-slate-200">{guide.summary}</p>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-cyan-600" />
              <h2 className="text-2xl font-semibold text-slate-900">Salary ranges by role</h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              These ranges reflect current market expectations for professionals with strong skills, solid experience, and measurable results.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {guide.salaryBands.map((band) => (
                <div key={band.role} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-900">
                    <Briefcase className="h-4 w-4 text-cyan-600" />
                    <h3 className="text-lg font-semibold">{band.role}</h3>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">{band.range}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{band.insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {guide.sections.map((section) => (
              <div key={section.heading} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
                <div className="mt-4 space-y-3 text-base leading-8 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
