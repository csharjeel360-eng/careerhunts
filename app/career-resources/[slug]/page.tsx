import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react'
import { notFound } from 'next/navigation'
import { careerResources } from '@/lib/careerResourceData'

interface CareerResourceDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function CareerResourceDetailPage({ params }: CareerResourceDetailPageProps) {
  const { slug } = await params
  const resource = careerResources.find((item) => item.slug === slug)

  if (!resource) {
    notFound()
  }

  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">{resource.category}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{resource.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{resource.excerpt}</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-sm text-sky-800">
              <div className="flex items-center gap-2 font-semibold">
                <Sparkles className="h-4 w-4" />
                Practical career guidance
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-8 text-white">
            <div className="flex items-center gap-2 text-sky-300">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">Quick overview</span>
            </div>
            <p className="mt-4 text-xl leading-8 text-slate-200">{resource.summary}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {resource.highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Focus area</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">How to get started</h2>
            <ol className="mt-6 space-y-4">
              {resource.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-slate-600">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 space-y-8">
            {resource.sections.map((section) => (
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
