import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.slice(0, 6).map((item: any) => {
          const href = item.slug ? `/career-resources/${item.slug}` : '#'

          return (
            <Link key={item._id ?? item.slug} href={href} className="group block h-full">
              <Card className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">
                <div className="h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />
                <CardContent className="flex h-full flex-col space-y-4 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                    <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                    Resource
                  </div>
                  <CardTitle className="text-lg leading-6 text-slate-900 sm:text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex-1 text-sm leading-6 text-slate-600">
                    {item.excerpt ?? item.description ?? 'Practical tools and expert advice to help you prepare, apply, and interview with confidence.'}
                  </CardDescription>
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm font-medium text-slate-700">
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition duration-300 group-hover:translate-x-1" />
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

export default CareerResources
