import React from 'react'
import Link from 'next/link'
import { getCountries } from '@/lib/api'

export default async function CountriesPage() {
  const countries = await getCountries()

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Locations</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Search jobs by country</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">Explore active openings across global locations and remote-friendly regions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country: any) => (
          <Link key={country._id} href={`/countries/${country.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-slate-900">{country.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{country.description || 'Browse jobs in this country.'}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
