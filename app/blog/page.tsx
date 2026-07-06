import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Career Blog | Resume Tips, Interview Advice & Salary Insights',
  description: 'Read expert career advice, interview tips, resume guidance, and salary insights on the CareerHunt blog.',
  alternates: {
    canonical: 'https://careerhunt.com/blog'
  }
}

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Career advice and job search guides for 2026
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Explore detailed articles packed with practical guidance for remote work, interviews, salary growth, resumes, and AI careers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Link
            href="/emirates-group-careers-uae-2026"
            className="group rounded-[2rem] border border-[#D71920] bg-white p-8 shadow-[0_25px_70px_-24px_rgba(215,25,32,0.24)] transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#D71920] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-slate-500">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900 transition group-hover:text-[#D71920]">
              Emirates Group Careers in UAE 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Discover the latest Emirates Group jobs, salary insights, benefits, and how to apply online for cabin crew, engineering, IT, and airport careers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Emirates Careers', 'UAE Jobs', 'Cabin Crew', 'Engineering'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{post.category}</span>
                <span className="text-sm font-medium text-slate-500">Read article</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-900 transition group-hover:text-cyan-700">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                    {keyword}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
