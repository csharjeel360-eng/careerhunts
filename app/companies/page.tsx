import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/seo'
import React from 'react'
import Link from 'next/link'
import { getCompanies } from '@/lib/api'

export const metadata: Metadata = getPageMetadata({
  title: 'Companies Hiring | CareerHunt',
  description: 'Explore top employers currently hiring on CareerHunt and view their open roles.',
  path: '/companies',
  keywords: ['companies hiring', 'employers', 'job openings', 'CareerHunt'],
})

export default async function CompaniesPage() {
  const companies = await getCompanies()

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Companies</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Explore hiring companies</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">See trusted employers that are actively hiring on the platform.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company: any) => (
          <Link key={company._id} href={`/companies/${company.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-slate-900">{company.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-4">{company.description || 'View company details and open jobs.'}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition">
              View profile
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
