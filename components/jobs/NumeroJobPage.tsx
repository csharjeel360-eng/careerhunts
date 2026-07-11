'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock3,
  Copy,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About Numero' },
  { id: 'responsibilities', label: 'Responsibilities' },
  { id: 'skills', label: 'Skills' },
  { id: 'why-join', label: 'Why Join' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'process', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary' },
  { id: 'remote', label: 'Remote Work' },
  { id: 'faq', label: 'FAQ' },
]

const responsibilities = [
  'Design scalable backend services that power fundraising workflows and donor engagement systems.',
  'Build and evolve APIs for integrations with payment processors, CRMs, and messaging platforms.',
  'Improve system architecture for high-volume donation processing and real-time reliability.',
  'Optimize performance, observability, and cloud infrastructure for low-latency experiences.',
  'Collaborate closely with founders to ship production-ready features with measurable product impact.',
  'Review code, mentor engineers, and raise the bar for quality across the engineering organization.',
]

const skills = [
  'Backend Development',
  'API Design',
  'Distributed Systems',
  'Databases',
  'Cloud Infrastructure',
  'Performance Optimization',
  'Software Architecture',
  'Git',
  'CI/CD',
  'Testing',
  'Problem Solving',
  'Communication',
]

const preferredQualifications = [
  'Senior backend engineering experience building mission-critical products at scale.',
  'Experience creating robust products for high-growth startups or demanding technical environments.',
  'Comfort with cloud platforms, modern frameworks, and database optimization techniques.',
  'A high ownership mindset with strong collaboration, communication, and shipping discipline.',
]

const whyJoin = [
  ['Competitive Salary', 'Compensation designed to reward senior technical leadership and impact.'],
  ['Fully Remote', 'Work from anywhere in the U.S. with a high-trust remote-first culture.'],
  ['Small Team', 'Join a lean, collaborative team where your ideas move quickly from concept to launch.'],
  ['High Ownership', 'Take ownership of architecture and product decisions from day one.'],
  ['YC-backed Startup', 'Build with a company backed by Y Combinator and experienced operators.'],
  ['Direct Founder Collaboration', 'Partner directly with founders on key technical and product decisions.'],
  ['Modern Tech Stack', 'Work with modern tooling and infrastructure used to support high-traffic products.'],
  ['Real Product Impact', 'Your work shapes the experience of campaigns and nonprofits nationwide.'],
  ['Fast Career Growth', 'Grow quickly as the company expands its platform and customer footprint.'],
  ['Flexible Work Environment', 'Work on a schedule that supports focus, balance, and sustainable delivery.'],
]

const benefits = [
  'Remote Work',
  'Competitive Compensation',
  'Flexible Schedule',
  'Learning Opportunities',
  'Startup Equity (if applicable)',
  'Modern Engineering Culture',
  'Career Development',
  'Small Collaborative Team',
]

const hiringSteps = [
  'Submit Application',
  'Resume Review',
  'Recruiter Call',
  'Technical Interview',
  'Coding Assessment',
  'Final Interview',
  'Offer',
  'Onboarding',
]

const faqs = [
  {
    question: 'Is this position fully remote?',
    answer: 'Yes. This role is fully remote within the United States, with a remote-first operating model built around asynchronous collaboration and clear ownership.',
  },
  {
    question: 'What is the salary?',
    answer: 'The salary range is $160,000–$200,000 USD per year, depending on experience, interview performance, and the final offer.',
  },
  {
    question: 'Who can apply?',
    answer: 'We welcome applicants with strong backend engineering experience, a history of shipping reliable systems, and a willingness to work in a fast-moving startup environment.',
  },
  {
    question: 'What technologies are used?',
    answer: 'The company works with modern backend systems, cloud infrastructure, and tools designed for reliability, scale, and product velocity.',
  },
  {
    question: 'Is sponsorship available?',
    answer: 'Visa sponsorship availability may vary based on timing and business needs. Please contact the hiring team for the latest guidance.',
  },
  {
    question: 'Does Numero hire internationally?',
    answer: 'The role is focused on the United States, but the company may consider broader talent needs across future opportunities depending on the hiring plan.',
  },
  {
    question: 'What experience is required?',
    answer: 'Candidates should bring senior-level backend experience, strong systems thinking, and a track record of building software that powers high-growth products.',
  },
  {
    question: 'How long does hiring take?',
    answer: 'The process typically spans several weeks, including application review, recruiter outreach, technical interviews, and a final discussion with the team.',
  },
  {
    question: 'What benefits are offered?',
    answer: 'Benefits include remote-first work, competitive compensation, learning opportunities, and the chance to join a highly collaborative startup team.',
  },
  {
    question: 'How do I apply?',
    answer: 'Use the official Y Combinator application link at the top of this page to submit your application directly.',
  },
]

const relatedJobs = [
  ['Senior Backend Engineer', '/jobs?keyword=backend engineer'],
  ['Full Stack Engineer', '/jobs?keyword=full stack engineer'],
  ['Software Engineer (Remote)', '/jobs?keyword=software engineer'],
  ['Platform Engineer', '/jobs?keyword=platform engineer'],
  ['DevOps Engineer', '/jobs?keyword=devops engineer'],
  ['Staff Software Engineer', '/jobs?keyword=staff software engineer'],
]

export default function NumeroJobPage() {
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(typeof window !== 'undefined' ? window.location.href : '')

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.4, 0.6] }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleCopy = async () => {
    if (!currentUrl) return
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#1F2937]" style={{ fontFamily: 'var(--font-inter)' }}>
      <section className="border-b border-[#F3F4F6] bg-[#FFFFFF]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="font-medium text-[#111827] transition hover:text-[#FF6B35]">
              Home
            </Link>
            <span>/</span>
            <Link href="/jobs" className="transition hover:text-[#FF6B35]">
              Jobs
            </Link>
            <span>/</span>
            <span className="text-[#111827]">Numero Senior Software Engineer</span>
          </nav>

          <div className="relative overflow-hidden rounded-[32px] border border-[#F3F4F6] shadow-[0_30px_80px_-25px_rgba(17,24,39,0.45)]">
            <img
              src="/jobsNumero.png"
              alt="Numero backend engineering team and software platform"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(17,24,39,0.92)_0%,_rgba(17,24,39,0.7)_45%,_rgba(17,24,39,0.35)_100%)]" />
            <div className="relative z-10 flex min-h-[520px] items-center px-6 py-10 sm:px-8 lg:px-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-[#FF6B35]" />
                  Career Hunt • Featured Remote Role
                </div>
                <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Senior Software Engineer (Backend)
                </h1>
                <p className="mt-4 text-lg font-semibold text-[#F3F4F6]">Numero</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/85">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <MapPin className="h-4 w-4" /> Remote • United States
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <Briefcase className="h-4 w-4" /> Full-Time
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.ycombinator.com/companies/numero/jobs/bLIP9PG-senior-software-engineer-backend"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85b2d]"
                  >
                    Apply Now
                  </a>
                  <a
                    href="https://www.ycombinator.com/companies/numero"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    View Company
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">Published: Jul 11, 2026</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">Updated: Jul 11, 2026</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">Reading time: 8 min</span>
                  <span className="rounded-full border border-[#10B981]/30 bg-[#10B981]/15 px-3 py-1.5 text-[#D1FAE5]">Remote</span>
                  <span className="rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/15 px-3 py-1.5 text-[#FFE4D8]">High Salary</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">YC Startup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-[0_20px_70px_-28px_rgba(17,24,39,0.25)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F3F4F6] pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Quick Navigation</p>
                  <h2 className="mt-2 text-xl font-semibold text-[#111827]">Jump to what matters</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F3F4F6] bg-[#F9FAFB] px-3 py-2 text-sm font-medium text-[#111827] transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
                  >
                    {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy Link'}
                  </button>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://careerhunt.com/numero-senior-software-engineer-backend-remote-usa"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#F3F4F6] bg-[#F9FAFB] px-3 py-2 text-sm font-medium text-[#111827] transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
                  >
                    <Share2 className="h-4 w-4" /> Share
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {sections.map((sectionItem) => (
                  <a
                    key={sectionItem.id}
                    href={`#${sectionItem.id}`}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      activeSection === sectionItem.id
                        ? 'bg-[#FF6B35] text-white shadow-sm'
                        : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {sectionItem.label}
                  </a>
                ))}
              </div>
            </div>

            <section id="overview" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">About this role</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Build the backend that powers modern political fundraising infrastructure</h2>
                  <p className="mt-4 text-base leading-8 text-[#4B5563]">
                    Numero is building a modern platform for political fundraising, donor engagement, and campaign communications. As a Senior Software Engineer (Backend), you will help design and scale the systems that power donations, outreach, and automation for campaigns and nonprofits that need dependable technology.
                  </p>
                  <p className="mt-4 text-base leading-8 text-[#4B5563]">
                    This role sits at the intersection of backend infrastructure, product experience, and real-world impact. You will build scalable APIs, improve distributed systems, and create the reliability needed to support high-volume donation processing and time-sensitive communication flows.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">At a glance</p>
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-[#F3F4F6] bg-white p-4">
                      <p className="text-sm text-[#6B7280]">Salary</p>
                      <p className="mt-1 text-lg font-semibold text-[#111827]">$160k–$200k</p>
                    </div>
                    <div className="rounded-2xl border border-[#F3F4F6] bg-white p-4">
                      <p className="text-sm text-[#6B7280]">Workplace</p>
                      <p className="mt-1 text-lg font-semibold text-[#111827]">Remote (United States)</p>
                    </div>
                    <div className="rounded-2xl border border-[#F3F4F6] bg-white p-4">
                      <p className="text-sm text-[#6B7280]">Experience</p>
                      <p className="mt-1 text-lg font-semibold text-[#111827]">Senior Level</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">About Numero</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">A startup building software that helps campaigns and nonprofits move faster</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#4B5563]">
                <p>
                  Numero is a small but ambitious startup building a fundraising technology platform for modern political organizations and nonprofits. The company was founded by operators who understood the pain points of grassroots fundraising, donor engagement, and campaign communication work.
                </p>
                <p>
                  The mission is straightforward: create software that helps organizations raise money and communicate more effectively without relying on fragmented tools or outdated workflows. The team combines product thinking with technical depth to create a cohesive experience for fundraising teams.
                </p>
                <p>
                  At the center of the platform is a donor CRM, a communications layer for email and SMS outreach, and a payments stack that helps organizations process contributions securely and at scale. The engineering work is deeply connected to product reliability and the speed of everyday fundraising campaigns.
                </p>
                <p>
                  Numero operates with a remote-first culture that favors clear communication, thoughtful ownership, and fast execution. Its small startup environment means every engineer has real influence over architecture, product choices, and the company’s technical direction.
                </p>
                <p>
                  The company is backed by Y Combinator and has the support of experienced investors who believe in the long-term opportunity to reshape how organizations engage supporters. That backing creates room for growth while preserving a thoughtful, mission-driven team culture.
                </p>
                <p>
                  For engineers, Numero represents a chance to join early, contribute broadly, and build software that directly supports democratic participation, advocacy, and community-led action.
                </p>
              </div>
            </section>

            <section id="responsibilities" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Core responsibilities</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Own critical backend systems and help the product scale</h2>
                </div>
                <div className="hidden rounded-full border border-[#FF6B35]/20 bg-[#FFF4ED] px-3 py-2 text-sm font-semibold text-[#FF6B35] sm:block">
                  High impact
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {responsibilities.map((item, index) => (
                  <div key={item} className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-[#374151]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Required skills</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Technical breadth that matches a high-growth startup</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[#F3F4F6] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#374151]">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-[#F3F4F6] bg-[#F9FAFB] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Preferred qualifications</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#374151]">
                  {preferredQualifications.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#10B981]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="why-join" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Why join Numero?</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">A rare opportunity to shape a real product from the inside</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {whyJoin.map(([title, description]) => (
                  <div key={title} className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                    <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4B5563]">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="benefits" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Benefits</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">The environment is designed for focused engineering and growth</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-5 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B35]/10 text-[#FF6B35]">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#111827]">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="process" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Hiring process</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">A thoughtful, modern hiring experience</h2>
              <div className="mt-8 space-y-5">
                {hiringSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B35] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      {index < hiringSteps.length - 1 ? <div className="mt-2 h-full w-px bg-[#F3F4F6]" /> : null}
                    </div>
                    <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] px-5 py-4">
                      <p className="text-sm font-semibold text-[#111827]">{step}</p>
                      <p className="mt-2 text-sm leading-7 text-[#4B5563]">
                        {index === 0 && 'Submit your application and share your experience with the team.'}
                        {index === 1 && 'The team reviews your background and experience for a strong fit.'}
                        {index === 2 && 'A recruiter conversation helps clarify the mission, scope, and expectations.'}
                        {index === 3 && 'A technical screen evaluates your systems thinking and engineering depth.'}
                        {index === 4 && 'A coding assessment highlights how you approach design and execution.'}
                        {index === 5 && 'A final discussion covers product thinking, ownership, and long-term fit.'}
                        {index === 6 && 'Successful candidates receive a thoughtful offer and next steps.'}
                        {index === 7 && 'You join the team and start contributing with clarity, support, and momentum.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="salary" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Salary information</p>
              <div className="mt-6 rounded-[24px] border border-[#F3F4F6] bg-[#F9FAFB] p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Position</p>
                    <p className="mt-2 text-xl font-semibold text-[#111827]">Senior Software Engineer (Backend)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Salary</p>
                    <p className="mt-2 text-xl font-semibold text-[#111827]">$160,000–$200,000/year</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-[#4B5563]">
                  Salary may vary depending on experience, interview performance, and final offer.
                </p>
              </div>
            </section>

            <section id="remote" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">About remote work</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">A remote-first engineering culture built on trust and momentum</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-[#FF6B35]" />
                    <h3 className="text-lg font-semibold text-[#111827]">Remote-first culture</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4B5563]">The company operates with a remote-first mindset that values thoughtful communication, documentation, and shared accountability.</p>
                </div>
                <div className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#FF6B35]" />
                    <h3 className="text-lg font-semibold text-[#111827]">Collaboration</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4B5563]">The team uses asynchronous collaboration to keep work moving while staying connected through regular planning and feedback loops.</p>
                </div>
                <div className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-[#FF6B35]" />
                    <h3 className="text-lg font-semibold text-[#111827]">Ownership</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4B5563]">Engineers are trusted to own delivery from planning through deployment, which creates room for initiative and growth.</p>
                </div>
                <div className="rounded-[22px] border border-[#F3F4F6] bg-[#F9FAFB] p-5">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-[#FF6B35]" />
                    <h3 className="text-lg font-semibold text-[#111827]">Work-life balance</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#4B5563]">A flexible environment helps engineers stay productive while maintaining healthy schedules and sustainable focus.</p>
                </div>
              </div>
            </section>

            <section id="faq" className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Frequently asked questions</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Everything you need to know before applying</h2>
              <div className="mt-6 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-[#111827]">
                      <span className="flex items-center justify-between gap-3">
                        {faq.question}
                        <span className="text-[#FF6B35] transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#4B5563]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-sm sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Related jobs</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Explore more roles on Career Hunt</h2>
                </div>
                <Link href="/jobs" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#FF6B35]">
                  Browse all jobs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedJobs.map(([title, href]) => (
                  <Link key={title} href={href} className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-5 transition hover:-translate-y-0.5 hover:border-[#FF6B35]">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-[#111827]">{title}</h3>
                      <ExternalLink className="h-4 w-4 text-[#FF6B35]" />
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#4B5563]">Related remote and backend engineering opportunities tailored for modern software teams.</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#FF6B35]/20 bg-[#FFF4ED] p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Ready to build</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#111827] sm:text-3xl">Ready to build software that makes an impact?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4B5563]">
                Join Numero and help build modern fundraising technology used by thousands of political campaigns and nonprofits.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="https://www.ycombinator.com/companies/numero/jobs/bLIP9PG-senior-software-engineer-backend"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85b2d]"
                >
                  Apply Now
                </a>
                <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-[#FF6B35]/20 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#FFF4ED]">
                  View More Remote Jobs
                </Link>
              </div>
            </section>
          </div>

          <aside className="xl:sticky xl:top-6 xl:self-start">
            <div className="rounded-[28px] border border-[#F3F4F6] bg-[#FFFFFF] p-5 shadow-[0_20px_70px_-32px_rgba(17,24,39,0.35)] sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Job summary</p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">Senior Software Engineer (Backend)</h2>
              <div className="mt-6 space-y-4 text-sm text-[#4B5563]">
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Company</p>
                  <p className="mt-2 font-semibold text-[#111827]">Numero</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Position</p>
                  <p className="mt-2 font-semibold text-[#111827]">Senior Software Engineer (Backend)</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Location</p>
                  <p className="mt-2 font-semibold text-[#111827]">Remote (United States)</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Workplace</p>
                  <p className="mt-2 font-semibold text-[#111827]">Remote</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Employment Type</p>
                  <p className="mt-2 font-semibold text-[#111827]">Full-Time</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Salary</p>
                  <p className="mt-2 font-semibold text-[#111827]">$160,000–$200,000/year</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Experience</p>
                  <p className="mt-2 font-semibold text-[#111827]">Senior Level</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Industry</p>
                  <p className="mt-2 font-semibold text-[#111827]">Political Technology / SaaS</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Company Size</p>
                  <p className="mt-2 font-semibold text-[#111827]">Approximately 14 employees</p>
                </div>
                <div className="rounded-[20px] border border-[#F3F4F6] bg-[#F9FAFB] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">Funding</p>
                  <p className="mt-2 font-semibold text-[#111827]">Y Combinator, 776, Initialized Capital</p>
                </div>
              </div>

              <a
                href="https://www.ycombinator.com/companies/numero/jobs/bLIP9PG-senior-software-engineer-backend"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e85b2d]"
              >
                Apply on Y Combinator
              </a>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href="https://www.ycombinator.com/companies/numero" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#111827] transition hover:text-[#FF6B35]">
                  <ExternalLink className="h-4 w-4" /> Company page
                </a>
                <a href="https://www.workatastartup.com/companies/numero" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#111827] transition hover:text-[#FF6B35]">
                  <ExternalLink className="h-4 w-4" /> Alternative apply link
                </a>
                <a href="mailto:careers@numero.example" className="inline-flex items-center gap-2 text-[#111827] transition hover:text-[#FF6B35]">
                  <Mail className="h-4 w-4" /> Contact team
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
