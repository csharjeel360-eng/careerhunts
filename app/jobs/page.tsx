import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Briefcase, Filter, Search, Sparkles, TrendingUp } from 'lucide-react'
import { JobCard } from '@/components/jobs/JobCard'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { getCategories, getCountries, getCities, getJobs } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Find Jobs in Pakistan and Worldwide | CareerHunt',
  description: 'Browse live job opportunities, filter by category, location, and experience level, and discover your next career move with CareerHunt.',
  alternates: {
    canonical: 'https://careerhunt.com/jobs'
  },
  openGraph: {
    title: 'Find Jobs in Pakistan and Worldwide | CareerHunt',
    description: 'Browse live job opportunities, filter by category, location, and experience level, and discover your next career move with CareerHunt.',
    url: 'https://careerhunt.com/jobs',
    siteName: 'CareerHunt',
    type: 'website'
  }
}

type JobsPageProps = {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {}
  const keyword = Array.isArray(resolvedSearchParams.keyword) ? resolvedSearchParams.keyword[0] : resolvedSearchParams.keyword || ''
  const category = Array.isArray(resolvedSearchParams.category) ? resolvedSearchParams.category[0] : resolvedSearchParams.category || ''
  const country = Array.isArray(resolvedSearchParams.country) ? resolvedSearchParams.country[0] : resolvedSearchParams.country || ''
  const city = Array.isArray(resolvedSearchParams.city) ? resolvedSearchParams.city[0] : resolvedSearchParams.city || ''

  const [categories, countries, cities] = await Promise.all([
    getCategories(),
    getCountries(),
    getCities(),
  ])

  const response = await getJobs({
    limit: 24,
    sort: '-postedDate',
    ...(keyword ? { keyword } : {}),
    ...(category ? { category } : {}),
    ...(country ? { country } : {}),
    ...(city ? { city } : {}),
  })

  const jobs = response.data || []
  const jobCategories = Array.from(new Set(jobs.map((job: any) => job.category).filter(Boolean))).sort()
  const jobCountries = Array.from(new Set(jobs.map((job: any) => job.country).filter(Boolean))).sort()
  const jobCities = Array.from(new Set(jobs.map((job: any) => job.city).filter(Boolean))).sort()

  const categoryOptions = categories.length ? categories.map((item: any) => item.name) : jobCategories
  const countryOptions = countries.length ? countries.map((item: any) => item.name) : jobCountries
  const cityOptions = cities.length ? cities.map((item: any) => item.name) : jobCities

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_100%)]" />
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4 text-cyan-600" />
            Curated opportunities for modern careers
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Browse open roles from trusted employers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Search by title, category, country, or city to discover roles that match your ambitions and experience.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Briefcase className="h-4 w-4 text-cyan-600" />
              Active openings
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{jobs.length}+ roles</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <TrendingUp className="h-4 w-4 text-cyan-600" />
              Growing companies
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">Verified teams</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Filter className="h-4 w-4 text-cyan-600" />
              Smart filters
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">Refine your search</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.28)]">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Refine your search</p>
              <p className="text-sm text-slate-500">Use one or more filters to narrow the results quickly.</p>
            </div>
            <Link href="/jobs" className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Clear filters
            </Link>
          </div>

          <form action="/jobs" method="get" className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,220px)_minmax(0,220px)_minmax(0,220px)]">
            <div className="space-y-2">
              <label htmlFor="keyword" className="block text-sm font-medium text-slate-700">Job title</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="keyword"
                  name="keyword"
                  defaultValue={keyword}
                  placeholder="Search job title or keyword"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-slate-700">Category</label>
              <Select id="category" name="category" defaultValue={category}>
                <option value="">All categories</option>
                {categoryOptions.map((name: string, index: number) => (
                  <option key={`${name}-${index}`} value={name}>{name}</option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country</label>
              <Select id="country" name="country" defaultValue={country}>
                <option value="">All countries</option>
                {countryOptions.map((name: string, index: number) => (
                  <option key={`${name}-${index}`} value={name}>{name}</option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
              <Select id="city" name="city" defaultValue={city}>
                <option value="">All cities</option>
                {cityOptions.map((name: string, index: number) => (
                  <option key={`${name}-${index}`} value={name}>{name}</option>
                ))}
              </Select>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="inline-flex justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Apply filters
              </button>
              <p className="text-sm text-slate-500">Showing {jobs.length} job{jobs.length === 1 ? '' : 's'}.</p>
            </div>
          </form>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {jobs.length > 0 ? (
            jobs.map((job: any) => (
              <JobCard key={job._id} job={job} />
            ))
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-700 md:col-span-2">
              <p className="text-lg font-medium">No jobs match your filters.</p>
              <p className="mt-2">Try adjusting the search criteria or clear filters to see more openings.</p>
              <Link href="/jobs" className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Clear filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
