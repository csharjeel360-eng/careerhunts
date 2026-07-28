'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Briefcase, Search, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

interface HeroSectionProps {
  categories: any[]
}

export function HeroSection({ categories }: HeroSectionProps) {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (keyword) params.append('keyword', keyword)
    const searchPath = params.toString() ? `/jobs?${params.toString()}` : '/jobs'
    router.push(searchPath)
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_16%),radial-gradient(circle_at_72%_20%,rgba(56,189,248,0.14),transparent_18%),linear-gradient(135deg,#020617_0%,#052f53_45%,#0f172a_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle,rgba(148,163,184,0.16),transparent_48%)] blur-3xl" />
      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Trusted by professionals exploring better careers
            </div>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover a smarter way to find your next opportunity
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg lg:mx-0">
              Explore curated roles, compare salary expectations, and connect with companies that match your ambitions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
              <Button
                type="button"
                size="lg"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/20 hover:bg-slate-100"
                onClick={() => router.push('/jobs')}
              >
                Explore jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
              >
                <Link href="/career-insights">View career insights</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Remote-ready roles', 'Verified employers', 'Fast applications'].map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-center text-sm font-medium text-cyan-50 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <div className="border-b border-white/10 bg-slate-950/90 px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">UAE job search</p>
                <p className="mt-2 text-sm text-slate-300">
                  Search the latest openings with salary and location filters.
                </p>
              </div>
              <form onSubmit={handleSearch} className="space-y-4 px-6 py-6">
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                  <Briefcase className="h-4 w-4" />
                  Search the latest openings
                </div>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search jobs, titles, or keywords"
                    className="min-h-[50px] sm:min-h-[56px] border border-slate-200 bg-white pl-12 text-slate-900 shadow-sm"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 sm:px-6">
                  Search jobs
                </Button>
              </form>

              <div className="space-y-4 border-t border-white/10 px-6 py-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                    <TrendingUp className="h-4 w-4" />
                    Market insights
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Track salary trends and discover what employers are paying today.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                    <Briefcase className="h-4 w-4" />
                    Fresh listings
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Browse new opportunities across growth-focused companies and industries.</p>
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/10 px-6 py-6 sm:grid-cols-3">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category._id}
                    type="button"
                    onClick={() => router.push(`/jobs?keyword=${encodeURIComponent(category.name)}`)}
                    className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/20"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
