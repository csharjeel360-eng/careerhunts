import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

export function SalaryGuides({ guides = [] }: any) {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Salary intelligence</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Salary Guides that help you benchmark pay
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Compare compensation trends, role-specific pay ranges, and industry benchmarks with confidence.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.slice(0, 6).map((guide: any) => {
          const href = guide.slug ? `/salary-guide/${guide.slug}` : '#'

          return (
            <Link key={guide._id ?? guide.slug} href={href} className="group block h-full">
              <Card className="h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />
                <CardContent className="flex h-full flex-col space-y-4 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                      Salary guide
                    </span>
                    <span className="rounded-full border border-slate-200 px-2 py-1 font-medium uppercase text-slate-500">
                      {guide.category ?? 'Market insight'}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-7 text-slate-900 sm:text-xl">{guide.title}</CardTitle>
                  <CardDescription className="flex-1 text-sm leading-6 text-slate-600">
                    {guide.excerpt ?? guide.description ?? 'Understand pay ranges, bonus structures, and growth expectations for this role.'}
                  </CardDescription>
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-slate-900">
                    <span>View full guide</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-0.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SalaryGuides
