import React from 'react'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

export function CareerResources({ items = [] }: any) {
  return (
    <section className="container mx-auto py-16 bg-slate-50">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Career growth</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Career Resources for a modern job search
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Expert-led guides, interview strategies, and resume best practices to help you land the right role faster.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.slice(0, 6).map((item: any) => (
          <Card
            key={item._id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                Resource
              </div>
              <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
              <CardDescription className="text-sm leading-6 text-slate-600">
                {item.description ?? 'Practical tools and expert advice to help you prepare, apply, and interview with confidence.'}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default CareerResources
