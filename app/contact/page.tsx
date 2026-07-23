import type { Metadata } from 'next'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact CareerHunt | Support for Job Seekers and Employers',
  description: 'Get in touch with CareerHunt for job support, employer inquiries, or general questions about our career platform.',
  alternates: {
    canonical: getCanonicalUrl('/contact')
  }
}

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Get in touch with the team</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">Have a question about hiring, job posting, or how the platform works? Reach out and we’ll respond quickly.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
          <p className="mt-4 text-slate-600">Use the details below for support, feedback, or employer inquiries.</p>
          <div className="mt-8 space-y-6 text-slate-700">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
              <a href="mailto:contact@careerhunt.online" className="mt-2 block text-base text-slate-900 hover:text-slate-700">
                contact@careerhunt.online
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
              <a href="tel:+923259579107" className="mt-2 block text-base text-slate-900 hover:text-slate-700">
                +92 325 9579107
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Office</p>
              <p className="mt-2 text-base">Islamabad, Pakistan</p>
              <p className="mt-1 text-sm text-slate-600">Serving Islamabad and nearby areas across the capital region.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Response time</p>
              <p className="mt-2 text-base">Within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Need help?</h2>
          <p className="mt-4 text-slate-600">If you're an employer or candidate with an urgent need, please contact us directly and we’ll prioritize your request.</p>
          <div className="mt-8 space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Support email</p>
              <a href="mailto:contact@careerhunt.online" className="mt-2 block text-base font-medium text-slate-900 hover:text-slate-700">
                contact@careerhunt.online
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
              <a href="tel:+923259579107" className="mt-2 block text-base font-medium text-slate-900 hover:text-slate-700">
                +92 325 9579107
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Address</p>
              <p className="mt-2 text-base text-slate-900">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
