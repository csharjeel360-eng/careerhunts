import React from 'react'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

export function SalaryGuides({ guides = [] }: any) {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Salary intelligence</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Salary Guides that help you benchmark pay
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Compare compensation trends, role-specific pay ranges, and industry benchmarks with confidence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {guides.slice(0, 6).map((guide: any) => (
          <Card
            key={guide._id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
                  Salary guide
                </span>
                <span className="rounded-full border border-slate-200 px-2 py-1 text-[11px] font-medium uppercase text-slate-500">
                  Market insight
                </span>
              </div>
              <CardTitle className="text-xl text-slate-900">{guide.title}</CardTitle>
              <CardDescription className="text-sm leading-6 text-slate-600">
                {guide.description ?? 'Understand pay ranges, bonus structures, and growth expectations for this role.'}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default SalaryGuides
