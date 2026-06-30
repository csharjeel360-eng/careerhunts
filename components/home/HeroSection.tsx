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
    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%),linear-gradient(135deg,_#0f172a_0%,_#0f766e_45%,_#2563eb_100%)] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_35%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-50 backdrop-blur">
                <Sparkles className="mr-2 h-4 w-4" />
                Trusted by professionals exploring better careers
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Discover a smarter way to find your next opportunity
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-100/90 lg:mx-0">
                Explore curated roles, compare salary expectations, and connect with companies that match your ambitions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
                <Button
                  type="button"
                  size="lg"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                  onClick={() => router.push('/jobs')}
                >
                  Explore jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
                >
                  <Link href="/salary-guide">View salary guides</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {['Remote-ready roles', 'Verified employers', 'Fast applications'].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-cyan-50 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-4 shadow-2xl shadow-slate-950/25 backdrop-blur sm:p-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                  <Briefcase className="h-4 w-4" />
                  Search the latest openings
                </div>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search jobs, titles, or keywords"
                    className="min-h-[54px] border border-slate-200 bg-white pl-12 text-slate-900 shadow-sm"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400">
                  Search jobs
                </Button>
              </form>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                    <TrendingUp className="h-4 w-4" />
                    Market insights
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Track salary trends and discover what employers are paying today.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                    <Briefcase className="h-4 w-4" />
                    Fresh listings
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Browse new opportunities across growth-focused companies and industries.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category._id}
                    type="button"
                    onClick={() => router.push(`/jobs?keyword=${encodeURIComponent(category.name)}`)}
                    className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-sm font-medium text-white transition hover:border-cyan-300 hover:bg-white/20"
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
