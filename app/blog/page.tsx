import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { BLOG_POSTS } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Career Advice & Job Search Guides 2026',
  description:
    'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.',
  keywords: [
    'career advice',
    'job search guides',
    'resume tips',
    'interview tips',
    'salary negotiation',
    'remote work advice',
    'AI careers',
    'job opportunities 2026'
  ],
  alternates: {
    canonical: 'https://careerhunt.online/blog'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Career Advice & Job Search Guides 2026',
    description:
      'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.',
    url: 'https://careerhunt.online/blog',
    siteName: 'CareerHunt',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Advice & Job Search Guides 2026',
    description:
      'Discover expert career advice, job search guides, resume tips, interview strategies, salary negotiation insights, remote work advice, AI career trends, and the latest job opportunities for 2026.'
  }
}

export default function BlogPage() {
  const blogJsonLd = {
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
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <Script id="blog-jsonld" type="application/ld+json">
        {JSON.stringify(blogJsonLd)}
      </Script>
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
            href="/dhl-careers-uae-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#F2C94C] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(242,201,76,0.24)] transition"
            style={{ backgroundImage: `url('/DHL%20Careers%20UAE.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#F2C94C] px-3 py-1 text-sm font-medium text-slate-900">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              DHL Careers UAE 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore DHL jobs in Dubai, Abu Dhabi, and across the UAE with salary insights, warehouse and logistics roles, benefits, hiring requirements, and direct application links.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['DHL Careers', 'Logistics Jobs', 'Warehouse Jobs', 'Courier Jobs'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/noon-careers-uae-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#F2C94C] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(242,201,76,0.24)] transition"
            style={{ backgroundImage: `url('/Noon%20Careers%20UAE.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#F2C94C] px-3 py-1 text-sm font-medium text-slate-900">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Noon Careers UAE 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore the latest Noon careers in UAE with insights into e-commerce, technology, operations, logistics, customer service, and growth opportunities at one of the region’s fastest-growing companies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Noon Careers', 'UAE Jobs', 'Ecommerce Jobs', 'Logistics Careers'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/dp-world-careers-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#00A651] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(0,166,81,0.24)] transition"
            style={{ backgroundImage: `url('/DP%20World%20Careers.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#00A651] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              DP World Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore the latest DP World jobs in logistics, ports, supply chain, engineering, technology, warehouse operations, finance, and global operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['DP World Careers', 'Logistics Jobs', 'Port Jobs', 'Supply Chain'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/emirates-group-careers-uae-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#D71920] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(215,25,32,0.24)] transition"
            style={{ backgroundImage: `url('/Emirates%20Group%20Careers.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#D71920] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Emirates Group Careers in UAE 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Discover the latest Emirates Group jobs, salary insights, benefits, and how to apply online for cabin crew, engineering, IT, and airport careers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Emirates Careers', 'UAE Jobs', 'Cabin Crew', 'Engineering'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/qatar-airways-careers-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#5C0E62] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(92,14,98,0.24)] transition"
            style={{ backgroundImage: `url('/Qatar%20Airways%20Careers.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#5C0E62] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Qatar Airways Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore Qatar Airways job vacancies across cabin crew, pilots, engineering, IT, customer services, cargo, and corporate roles with competitive benefits.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Qatar Airways', 'Doha Jobs', 'Pilots', 'Cabin Crew'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/genentech-careers-usa-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#005EB8] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(0,94,184,0.24)] transition"
            style={{ backgroundImage: `url('/Genentech%20Careers%20USA%202026.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#005EB8] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Genentech Careers USA 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Discover the latest Genentech biotech, research, marketing, engineering, and commercial roles across the United States with salary insights and application guidance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Genentech Careers', 'Biotechnology Jobs', 'Marketing Jobs USA', 'Roche Careers'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/shopify-careers-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#95BF47] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(149,191,71,0.24)] transition"
            style={{ backgroundImage: `url('/shopify-careers-2026.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#95BF47] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Shopify Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore Shopify remote jobs, internships, engineering roles, product opportunities, customer support positions, salaries, benefits, and the hiring process in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Shopify Careers', 'Remote Jobs', 'Internships', 'Ecommerce Jobs'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/aecom-careers-uae-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#005DAA] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(0,93,170,0.24)] transition"
            style={{ backgroundImage: `url('/aecom-careers-uae-2026.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#005DAA] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              AECOM Careers in UAE 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore the latest AECOM vacancies in Dubai, Abu Dhabi, and across the UAE with engineering, architecture, BIM, project management, HSE, and corporate career insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['AECOM Careers', 'Engineering Jobs', 'Architecture Jobs', 'Infrastructure Jobs'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/amazon-careers-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#FF9900] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(255,153,0,0.24)] transition"
            style={{ backgroundImage: `url('/amazon-careers-2026.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#FF9900] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Amazon Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Discover Amazon jobs worldwide, salary insights, hiring process details, remote opportunities, internship programs, leadership principles, and benefits in one premium guide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Amazon Careers', 'Amazon Jobs', 'AWS Careers', 'Remote Jobs'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/fedex-careers-usa-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#FF6600] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(255,102,0,0.24)] transition"
            style={{ backgroundImage: `url('/fedex-careers-usa-2026.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#FF6600] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              FedEx Careers USA 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Explore FedEx warehouse jobs, delivery driver opportunities, logistics careers, benefits, salaries, hiring process tips, and direct application guidance in one guide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['FedEx Careers', 'Logistics Jobs', 'Warehouse Jobs', 'Delivery Driver'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/carrefour-hypermarket-careers-2026"
            className="group relative overflow-hidden rounded-[2rem] border border-[#ff6b2c] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(255,107,44,0.24)] transition"
            style={{ backgroundImage: `url('/carrefour-hypermarket-careers.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#ff6b2c] px-3 py-1 text-sm font-medium text-white">Featured</span>
              <span className="text-sm font-medium text-white">Read article</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white transition">
              Carrefour Hypermarket Careers 2026
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              Discover Carrefour retail, warehouse, customer service, supervisor, and store management opportunities with salary guidance, benefits, hiring requirements, and application tips.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Carrefour Careers', 'Retail Jobs', 'Warehouse Jobs', 'Customer Service Jobs'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href="/jobs/numero-senior-software-engineer-backend-remote-usa"
            className="group relative overflow-hidden rounded-[2rem] border border-[#FF6B35] bg-cover bg-center p-8 shadow-[0_25px_70px_-24px_rgba(255,107,53,0.24)] transition"
            style={{ backgroundImage: `url('/jobsNumero.png')` }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#FF6B35] px-3 py-1 text-sm font-medium text-white">Featured Job</span>
              <span className="text-sm font-medium text-white">Apply now</span>
            </div>
            <h2 className="relative z-10 mt-5 text-2xl font-semibold text-white transition">
              Senior Software Engineer (Backend) at Numero
            </h2>
            <p className="relative z-10 mt-4 text-base leading-7 text-white/90">
              Explore a remote U.S. backend engineering role at Numero, a YC-backed startup building fundraising technology for campaigns and nonprofits.
            </p>
            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
              {['Numero Careers', 'Remote Backend Jobs', 'YC Startup', 'US Remote'].map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-cover bg-center p-8 shadow-sm transition"
              style={{ backgroundImage: `url('${post.image ?? '/jobsNumero.png'}')` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{post.category}</span>
                  <span className="text-sm font-medium text-white">Read article</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white transition-colors">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-white/90">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.keywords.slice(0, 4).map((keyword) => (
                    <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/80">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
