'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Inter, Poppins } from 'next/font/google'
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Copy,
  GraduationCap,
  BadgeDollarSign,
  HeartHandshake,
  Linkedin,
  MessageSquare,
  Network,
  Rocket,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Workflow
} from 'lucide-react'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

type FAQItem = {
  question: string
  answer: string
}

const tocItems = [
  { id: 'about', label: 'About Shopify' },
  { id: 'positions', label: 'Current Open Positions' },
  { id: 'categories', label: 'Job Categories' },
  { id: 'digital', label: 'Digital by Design' },
  { id: 'benefits', label: 'Why Work Here' },
  { id: 'hiring', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary Insights' },
  { id: 'internships', label: 'Internships' },
  { id: 'faq', label: 'FAQs' },
  { id: 'related', label: 'Related Jobs' }
]

const companyHighlights = [
  { label: 'Company Name', value: 'Shopify' },
  { label: 'Industry', value: 'E-commerce Technology' },
  { label: 'Founded', value: '2006' },
  { label: 'Founder', value: 'Tobias Lütke' },
  { label: 'Headquarters', value: 'Ottawa, Ontario, Canada' },
  { label: 'Company Size', value: '8,000+ Employees' },
  { label: 'Business', value: 'Commerce Platform' },
  { label: 'Employment Type', value: 'Full-Time' },
  { label: 'Internships', value: 'Remote Opportunities' },
  { label: 'Eligible Nationalities', value: 'All Nationalities' },
  { label: 'Work Model', value: 'Digital by Design' },
  { label: 'Official Website', value: 'https://www.shopify.com/' }
]

const aboutParagraphs = [
  'Shopify began in 2006 as a small commerce startup and quickly became one of the world’s most influential commerce technology companies. What started as a platform for entrepreneurs has grown into a global ecosystem that powers millions of merchants, creators, and brands across more than 175 countries.',
  'The company’s mission is to make commerce better for everyone. Shopify brings together tools for payments, logistics, marketing, storefront design, analytics, and AI-driven commerce experiences so retailers of every size can thrive in a digital-first economy.',
  'Shopify’s impact stretches far beyond software. Its merchant community includes independent businesses, global enterprises, and emerging creators who rely on the platform to build, operate, and scale modern commerce experiences with speed and flexibility.',
  'The company has also become a leading force in AI innovation, with intelligent tools that simplify product discovery, customer support, content creation, and store operations. Its engineering and product teams are building the future of commerce with a strong emphasis on developer experience and merchant outcomes.',
  'Shopify’s remote-first culture, flexible work philosophy, and global talent strategy make it one of the most attractive employers in the technology sector. The company combines the scale of a Silicon Valley platform company with the humanity of a distributed, mission-driven team.',
  'For professionals, Shopify offers meaningful growth opportunities in engineering, product, design, operations, sales, data, and customer success. With a culture rooted in curiosity, craftsmanship, and ownership, the business continues to attract top talent who want to shape the next era of digital trade.',
  'Its Digital by Design philosophy is central to how the company collaborates across time zones and disciplines. Teams work in a highly connected environment supported by remote-first practices, office hubs, annual meetups, and AI-powered systems that keep work flowing smoothly and creatively.',
  'That combination of innovation, global scale, and employee empowerment makes Shopify a standout employer for professionals who want to build products that matter and grow their careers in a purpose-led organization.'
]

const timelineItems = [
  { year: '2006', title: 'Founded', description: 'Shopify launches as a commerce platform for merchants and entrepreneurs.' },
  { year: '2015', title: 'IPO', description: 'Shopify lists publicly and expands into a global technology brand.' },
  { year: '2020', title: 'Rapid Global Growth', description: 'The company accelerates across retail, logistics, and digital commerce markets.' },
  { year: '2023', title: 'AI Expansion', description: 'Shopify grows its AI and automation capabilities for merchants and teams.' },
  { year: '2026', title: 'Future of Commerce', description: 'The company continues to redefine how commerce, creativity, and technology work together.' }
]

const categories = [
  { title: 'Engineering & Data', description: 'Build scalable systems and modern data platforms for the next generation of commerce.', icon: '⚙️', href: 'https://www.shopify.com/careers' },
  { title: 'Software Engineering', description: 'Create high-impact software for merchants, developers, and internal teams.', icon: '💻', href: 'https://www.shopify.com/careers' },
  { title: 'Infrastructure', description: 'Improve reliability, security, and observability across Shopify’s services.', icon: '🛠️', href: 'https://www.shopify.com/careers' },
  { title: 'Security', description: 'Protect products, customers, and infrastructure with world-class security practices.', icon: '🔐', href: 'https://www.shopify.com/careers' },
  { title: 'Machine Learning', description: 'Shape AI products and intelligent workflows for global commerce.', icon: '🤖', href: 'https://www.shopify.com/careers' },
  { title: 'Data Engineering', description: 'Design data pipelines and analytics systems that support decision-making at scale.', icon: '📊', href: 'https://www.shopify.com/careers' },
  { title: 'Product', description: 'Lead product strategy, roadmaps, and customer-focused innovation.', icon: '🎯', href: 'https://www.shopify.com/careers' },
  { title: 'Design', description: 'Create thoughtful experiences for merchants and end users alike.', icon: '🎨', href: 'https://www.shopify.com/careers' },
  { title: 'Commercial', description: 'Drive growth, partnerships, and customer success in global markets.', icon: '📈', href: 'https://www.shopify.com/careers' },
  { title: 'Support', description: 'Deliver excellent customer support and merchant enablement.', icon: '💬', href: 'https://www.shopify.com/careers' },
  { title: 'Operations', description: 'Help run the company with operational excellence and calm execution.', icon: '🧭', href: 'https://www.shopify.com/careers' },
  { title: 'Internships', description: 'Launch your career through student and graduate opportunities.', icon: '🎓', href: 'https://www.shopify.com/careers' }
]

const benefits = [
  'Remote Work',
  'Competitive Salary',
  'Stock Options',
  'Health Insurance',
  'Learning Budget',
  'Career Growth',
  'Global Team',
  'Flexible Hours',
  'Wellness Programs',
  'Paid Time Off',
  'Parental Leave',
  'Employee Discounts',
  'Professional Development',
  'AI-Powered Workplace'
]

const hiringSteps = [
  'Online Application',
  'Resume Review',
  'Recruiter Interview',
  'Technical Assessment',
  'Hiring Manager Interview',
  'Team Interview',
  'Final Decision',
  'Offer Letter',
  'Onboarding'
]

const salaryData = [
  { role: 'Software Engineer', range: '$140K - $210K' },
  { role: 'Product Manager', range: '$150K - $220K' },
  { role: 'UX Designer', range: '$120K - $180K' },
  { role: 'Marketing Manager', range: '$110K - $170K' },
  { role: 'Data Scientist', range: '$135K - $200K' },
  { role: 'Support Advisor', range: '$65K - $95K' },
  { role: 'Sales Representative', range: '$80K - $125K' },
  { role: 'Engineering Manager', range: '$190K - $270K' }
]

const skills = [
  'Programming',
  'Communication',
  'Problem Solving',
  'Leadership',
  'Teamwork',
  'Product Thinking',
  'AI Literacy',
  'Customer Focus',
  'Innovation',
  'Adaptability',
  'Analytical Thinking',
  'Time Management'
]

const lifeHighlights = [
  { title: 'Innovation', description: 'Build products used by millions of merchants globally.' },
  { title: 'Remote Teams', description: 'Distributed collaboration across time zones and cultures.' },
  { title: 'Hackathons', description: 'Create, test, and ship bold ideas with your team.' },
  { title: 'Product Development', description: 'Ship features that directly support merchants and creators.' },
  { title: 'Engineering Culture', description: 'Learn from ambitious peers and experienced engineering leaders.' },
  { title: 'Learning', description: 'Grow through mentorship, workshops, and development budgets.' },
  { title: 'Merchant Success', description: 'Support the communities that power the Shopify ecosystem.' },
  { title: 'AI', description: 'Explore intelligent tools that elevate everyday work.' }
]

const faqItems: FAQItem[] = [
  { question: 'How do I apply for Shopify jobs?', answer: 'Visit the official Shopify Careers portal, select a role that matches your background, and submit your application online with an updated CV and supporting details.' },
  { question: 'Does Shopify hire internationally?', answer: 'Yes. Shopify hires globally and supports remote-first roles across many regions. Some positions may be tied to specific countries or work authorization requirements.' },
  { question: 'Are Shopify jobs remote?', answer: 'Many Shopify roles are remote-friendly, and the company is known for its digital-by-design remote-first approach with strong global collaboration.' },
  { question: 'Does Shopify sponsor visas?', answer: 'Visa sponsorship varies by role, location, and business need. Candidates should review the role details and eligibility requirements before applying.' },
  { question: 'What is Digital by Design?', answer: 'Digital by Design is Shopify’s philosophy for building a modern, flexible, remote-first workplace that values distributed collaboration, thoughtful communication, and global teamwork.' },
  { question: 'How long is the hiring process?', answer: 'The hiring timeline can vary, but candidates usually move through application review, recruiter conversations, assessments, interviews, and an offer stage over several weeks.' },
  { question: 'Does Shopify hire fresh graduates?', answer: 'Yes. Shopify offers internships, graduate opportunities, and entry-level roles for early-career professionals across multiple functions.' },
  { question: 'What benefits does Shopify offer?', answer: 'Benefits often include competitive compensation, stock options, health coverage, paid time off, learning budgets, flexible work arrangements, and wellness programs.' },
  { question: 'Does Shopify have internships?', answer: 'Yes. Shopify offers internships and early-career programs for students and recent graduates interested in engineering, design, product, operations, and business functions.' },
  { question: 'What skills are required?', answer: 'Core skills include product thinking, communication, problem solving, leadership, AI literacy, adaptability, and strong collaboration across cross-functional teams.' },
  { question: 'Can I work remotely?', answer: 'Many roles are remote-first or hybrid depending on the team, function, and location. Review each posting carefully for work model details.' },
  { question: 'How often are new jobs posted?', answer: 'Shopify posts new opportunities regularly across engineering, product, design, operations, support, finance, and commercial teams.' }
]

const relatedJobs = [
  { title: 'Google Careers', href: 'https://careers.google.com', description: 'Explore global engineering, product, and operations opportunities.' },
  { title: 'Microsoft Careers', href: 'https://careers.microsoft.com', description: 'Discover roles across cloud, AI, product, and enterprise technology.' },
  { title: 'Amazon Careers', href: 'https://www.amazon.jobs', description: 'Find innovation-focused roles in e-commerce, operations, and technology.' },
  { title: 'Apple Careers', href: 'https://jobs.apple.com', description: 'Search roles in design, engineering, operations, and services.' },
  { title: 'Meta Careers', href: 'https://www.metacareers.com', description: 'Join teams shaping social platforms, AI, and the future of connection.' },
  { title: 'Stripe Careers', href: 'https://stripe.com/jobs', description: 'Browse opportunities across payments, infrastructure, and fintech.' }
]

function AnimatedCounter({ to }: { to: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(to * eased))
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [to])

  return <span className={`${poppins.className} text-5xl font-semibold text-slate-900 sm:text-6xl`}>{count}+</span>
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className={`${poppins.className} text-base font-semibold text-slate-900`}>{item.question}</span>
              <span className="rounded-full bg-emerald-50 p-2 text-emerald-700">
                <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              </span>
            </button>
            {isOpen && <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default function ShopifyCareersPage() {
  return (
    <article className={`${inter.className} bg-white text-slate-900`}>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/shopify-careers-2026.png"
            alt="Shopify Careers hero banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.82),rgba(0,0,0,0.45),rgba(0,0,0,0.7))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(149,191,71,0.24),transparent_42%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[640px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">Career Insights</Link>
            <span>/</span>
            <span className="font-semibold text-white">Shopify Careers 2026</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Shopify Careers 2026
            </div>
            <h1 className={`${poppins.className} text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl`}>
              Shopify Careers 2026
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Join Shopify and build the future of commerce. Explore remote jobs, internships, engineering careers, product roles, support opportunities, and global corporate positions.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#95BF47] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#86ad3f]">
                Apply Now
              </Link>
              <Link href="#positions" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">
                View Open Positions
              </Link>
              <Link href="#categories" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Explore Remote Jobs
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-3 text-sm text-slate-300">
              <span>Published: July 09, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>Reading time: 10 min</span>
              <span className="hidden sm:inline">•</span>
              <span>Author: CareerHunt Editorial Team</span>
              <span className="hidden sm:inline">•</span>
              <span>Last updated: July 09, 2026</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm font-medium text-slate-200">Share:</span>
              <Link href="https://www.linkedin.com" aria-label="Share on LinkedIn" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 p-2.5 transition hover:bg-white/20"><Linkedin className="h-4 w-4" /></Link>
              <Link href="https://twitter.com" aria-label="Share on X" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 p-2.5 transition hover:bg-white/20"><Send className="h-4 w-4" /></Link>
              <button type="button" aria-label="Copy link" className="rounded-full border border-white/20 bg-white/10 p-2.5 transition hover:bg-white/20"><Copy className="h-4 w-4" /></button>
              <button type="button" aria-label="Share via message" className="rounded-full border border-white/20 bg-white/10 p-2.5 transition hover:bg-white/20"><MessageSquare className="h-4 w-4" /></button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:px-8 lg:grid-cols-[1.15fr_0.55fr] lg:gap-10 lg:px-10 lg:py-12 xl:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.3)] sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Building2 className="h-6 w-6" /></div>
            <div>
              <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>Company overview</p>
              <p className="text-sm text-slate-500">What makes Shopify a standout employer</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {companyHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                {item.label === 'Official Website' ? (
                  <Link href={item.value} target="_blank" rel="noreferrer" className="mt-2 block break-all text-sm font-semibold text-emerald-700 underline-offset-4 hover:underline">
                    {item.value}
                  </Link>
                ) : (
                  <p className={`${poppins.className} mt-2 text-sm font-semibold text-slate-900`}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_80px_-30px_rgba(15,23,42,0.65)] sm:p-8">
          <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-emerald-300"><Briefcase className="h-6 w-6" /></div>
            <div>
              <p className={`${poppins.className} text-lg font-semibold`}>Why professionals choose Shopify</p>
              <p className="text-sm text-slate-300">Global impact, flexible work, and strong growth paths</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Mission-driven organization with an ecosystem of millions of merchants</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Premium compensation, equity, and benefits for high-performing talent</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Strong remote culture with office hubs and annual team gatherings</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" /> Product and engineering work that directly shapes the future of commerce</li>
          </ul>
          <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#95BF47] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#86ad3f]">
            Explore Careers <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-4 sm:px-6 lg:grid-cols-[0.33fr_1fr] lg:px-10 xl:px-16 lg:py-6">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>On this page</p>
            <nav className="mt-4 space-y-2 text-sm text-slate-600" aria-label="Table of contents">
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-white hover:text-slate-900">
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-8">
          <section id="about" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Users className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>About Shopify</p>
                <p className="text-sm text-slate-500">A modern commerce platform shaping global entrepreneurship</p>
              </div>
            </div>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="positions" className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f6fbeb] via-white to-[#eef7e1] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Current open positions</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Shopify is hiring across engineering, product, design, operations, sales, and customer success, with roles for ambitious professionals and early-career talent.</p>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-white/80 px-6 py-4 text-center shadow-sm">
                <AnimatedCounter to={320} />
                <p className="mt-2 text-sm font-medium text-slate-500">roles available worldwide</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#95BF47] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#86ad3f]">Browse All Jobs</Link>
              <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Apply Online</Link>
              <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Official Jobs</Link>
            </div>
          </section>

          <section id="categories" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Job categories</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Premium roles across product, engineering, design, operations, support, and growth.</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category, index) => (
                <motion.div key={category.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.03 }} className="group rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-2xl bg-emerald-50 p-3 text-xl">{category.icon}</div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Apply</span>
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{category.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                  <Link href={category.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:gap-3">
                    View opportunities <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="digital" className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-emerald-300"><Workflow className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold`}>Digital by Design</p>
                <p className="text-sm text-slate-300">Shopify’s operating philosophy for a flexible, global, AI-enabled workforce</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {['Remote-first culture', 'Flexible work', 'Global hiring', 'Office hubs', 'Annual meetups', 'AI-powered collaboration'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className={`${poppins.className} text-base font-semibold`}>{item}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">Shopify organizes teams around clarity, autonomy, and modern collaboration practices to help people do their best work.</p>
                </div>
              ))}
            </div>
          </section>

          <section id="benefits" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><HeartHandshake className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Why work at Shopify?</p>
                <p className="text-sm text-slate-500">Benefits, flexibility, and opportunities that support long-term growth</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-emerald-700"><CheckCircle2 className="h-4 w-4" /><span className={`${poppins.className} text-sm font-semibold text-slate-900`}>{benefit}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section id="hiring" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Network className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Hiring process</p>
                <p className="text-sm text-slate-500">A thoughtful, modern process designed to evaluate product, collaboration, and impact</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hiringSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Step {index + 1}</p>
                  <p className={`${poppins.className} mt-2 text-base font-semibold text-slate-900`}>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="salary" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><BadgeDollarSign className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Salary information</p>
                <p className="text-sm text-slate-500">Average compensation ranges for key roles</p>
              </div>
            </div>
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-700">Role</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-700">Average salary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {salaryData.map((item) => (
                    <tr key={item.role}>
                      <td className="px-4 py-3 text-sm font-semibold text-slate-900">{item.role}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{item.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Rocket className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Skills required</p>
                <p className="text-sm text-slate-500">The capabilities that matter most for Shopify teams</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">{skill}</span>
              ))}
            </div>
          </section>

          <section id="internships" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><GraduationCap className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Internship program</p>
                <p className="text-sm text-slate-500">Student internships, graduate opportunities, and remote experiences</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>Programs available</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Student internships for university and college learners</li>
                  <li>• Graduate opportunities for recent university graduates</li>
                  <li>• Remote internships across engineering, design, product, and business</li>
                  <li>• Specialized placements in engineering, AI, finance, and customer support</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#f7fbed] to-white p-5">
                <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>Benefits and eligibility</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Mentorship from experienced leaders and cross-functional teams</li>
                  <li>• Learning budget and development opportunities</li>
                  <li>• Flexible remote work options where supported by the team</li>
                  <li>• Eligibility often includes current students, recent graduates, and candidates with relevant academic backgrounds</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><TrendingUp className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Life at Shopify</p>
                <p className="text-sm text-slate-500">A modern workplace shaped by innovation, learning, and global collaboration</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {lifeHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className={`${poppins.className} text-base font-semibold text-slate-900`}>{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Sparkles className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Frequently asked questions</p>
                <p className="text-sm text-slate-500">Everything you need to know before applying</p>
              </div>
            </div>
            <div className="mt-7">
              <FAQAccordion />
            </div>
          </section>

          <section id="related" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Briefcase className="h-6 w-6" /></div>
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Related jobs</p>
                <p className="text-sm text-slate-500">Explore other leading global careers</p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedJobs.map((job) => (
                <div key={job.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className={`${poppins.className} text-base font-semibold text-slate-900`}>{job.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{job.description}</p>
                  <Link href={job.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-emerald-200 bg-gradient-to-r from-[#f5fceb] to-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Ready to join Shopify?</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Explore the latest Shopify jobs and become part of one of the world’s most influential commerce technology companies.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#95BF47] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#86ad3f]">Apply Now</Link>
                <Link href="#positions" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Browse Jobs</Link>
                <Link href="https://www.shopify.com/careers" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Visit Official Careers</Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}
