import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { BLOG_POSTS } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Career Advice & Job Search Guides 2026 | Resume, Interviews & AI Careers',
  description:
    'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.',
  alternates: {
    canonical: 'https://careerhunt.online/blog'
  },
  openGraph: {
    title: 'Career Advice & Job Search Guides 2026 | Resume, Interviews & AI Careers',
    description:
      'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.',
    url: 'https://careerhunt.online/blog',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Advice & Job Search Guides 2026 | Resume, Interviews & AI Careers',
    description:
      'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.'
  }
}

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <Script id="blog-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Career Advice & Job Search Guides 2026 | Resume, Interviews & AI Careers",
        "description": "Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.",
        "url": "https://careerhunt.online/blog",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": BLOG_POSTS.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://careerhunt.online/blog/${p.slug}`,
            "name": p.title
          }))
        }
      }) }} />
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Career Advice & Job Search Guides 2026
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Discover expert career advice, resume tips, interview strategies, salary negotiation guidance, remote work best practices, and insights into AI career trends to help you find the right job and grow your career in 2026.
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

          <Link
            href="/qatar-airways-careers-2026"
            className="group rounded-[2rem] border border-[#5C0E62] bg-white p-8 shadow-[0_25px_70px_-24px_rgba(92,14,98,0.24)] transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#5C0E62] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-slate-500">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900 transition group-hover:text-[#5C0E62]">
              Qatar Airways Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore Qatar Airways job vacancies across cabin crew, pilots, engineering, IT, customer services, cargo, and corporate roles with competitive benefits.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Qatar Airways', 'Doha Jobs', 'Pilots', 'Cabin Crew'].map((keyword) => (
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
