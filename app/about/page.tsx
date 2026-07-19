import type { Metadata } from 'next'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About CareerHunt | Trusted Job Board & Career Platform',
  description: 'Learn about CareerHunt, our mission, values, and how we help job seekers and employers connect with confidence.',
  alternates: {
    canonical: getCanonicalUrl('/about')
  }
}

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About us</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">A modern job board built for talent and hiring teams</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">We help candidates discover meaningful career opportunities and empower employers with the tools to hire faster, smarter, and more inclusively.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-4 text-slate-600">To create a fast, modern hiring experience that connects great companies with great people.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-4 text-slate-600">A career marketplace where every job seeker can find their ideal role and every employer can build high-performing teams.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Values</h2>
          <p className="mt-4 text-slate-600">Transparency, inclusion, speed, and quality are at the heart of our platform.</p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Why choose this job board?</h2>
        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Curated employer listings and rich job details.</li>
          <li>• Fast job discovery with location, category, and company filters.</li>
          <li>• Employer-facing tools for posting and managing openings.</li>
          <li>• Built with scalable modern Next.js architecture and a secure backend.</li>
        </ul>
      </div>
    </section>
  )
}
