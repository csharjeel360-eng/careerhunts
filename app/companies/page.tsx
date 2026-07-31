import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/seo'
import React from 'react'
import Link from 'next/link'
import { getCompanies } from '@/lib/api'

export const metadata: Metadata = getPageMetadata({
  title: 'Top UAE Companies Hiring in 2026 | Careers & Reviews',
  description: 'Explore hiring processes, salary ranges, and interview insights for leading UAE employers like Emirates, ADNOC, and Careem.',
  path: '/companies',
  keywords: ['companies hiring', 'employers', 'job openings', 'CareerHunt'],
})

export default async function CompaniesPage() {
  const companies = await getCompanies()
  const uniqueCompanies = companies.reduce((acc: any[], company: any) => {
    const name = (company?.name || '').trim().toLowerCase()
    if (!name) return acc
    if (!acc.some((item: any) => (item?.name || '').trim().toLowerCase() === name)) {
      acc.push(company)
    }
    return acc
  }, [])

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Companies</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Explore hiring companies</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">See trusted employers that are actively hiring on the platform.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uniqueCompanies.map((company: any) => {
          const companyName = company?.name || 'Company'
          const companyId = company?._id || companyName
          const href = `/jobs?company=${encodeURIComponent(companyId)}`

          return (
            <Link key={companyId} href={href} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-slate-900">{companyName}</h2>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition">
                View jobs
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
