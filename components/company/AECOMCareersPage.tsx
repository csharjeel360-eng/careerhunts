'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'vacancies', label: 'Vacancies' },
  { id: 'categories', label: 'Categories' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'process', label: 'Process' },
  { id: 'salary', label: 'Salary' },
  { id: 'faqs', label: 'FAQs' },
]

const jobCategories = [
  { title: 'Civil Engineering', description: 'Civil Engineer, Site Engineer, Structural Engineer, Highway Engineer', icon: '🏗️' },
  { title: 'Mechanical Engineering', description: 'Mechanical Engineer, HVAC Engineer, MEP Engineer', icon: '⚙️' },
  { title: 'Electrical Engineering', description: 'Electrical Inspector, Electrical Engineer, Street Lighting Engineer', icon: '🔌' },
  { title: 'Rail & Transportation', description: 'Track Engineer, Rail Inspector, Tunnel Inspector, Transport Planner', icon: '🚆' },
  { title: 'Architecture', description: 'Senior Architect, Urban Designer, Landscape Architect', icon: '🏛️' },
  { title: 'Construction Management', description: 'Planning Engineer, Project Controls Engineer, Project Manager', icon: '📋' },
  { title: 'BIM & Design', description: 'BIM Technician, Design Engineer, CAD Specialist', icon: '🧠' },
  { title: 'Quantity Surveying', description: 'Project Surveyor, Cost Management, Quantity Surveyor', icon: '📐' },
  { title: 'Health, Safety & Environment', description: 'HSE Advisor, Environmental Engineer, Safety Specialist', icon: '🦺' },
  { title: 'Corporate Careers', description: 'Administrative Assistant, HR, Finance, Proposal Specialist', icon: '💼' },
]

const featuredJobs = [
  { title: 'Senior Engineer – Track & Alignment', location: 'Dubai, UAE', type: 'Full-Time', level: 'Senior', description: 'Lead rail alignment design and infrastructure delivery for major transit programs.' },
  { title: 'Principal Engineer – Track & Alignment', location: 'Abu Dhabi, UAE', type: 'Full-Time', level: 'Principal', description: 'Guide technical strategy for transportation infrastructure and civil engineering projects.' },
  { title: 'Planning Engineer', location: 'Dubai, UAE', type: 'Full-Time', level: 'Mid', description: 'Coordinate schedules, cost controls, and progress reporting for large-scale developments.' },
  { title: 'Senior Project Controls Engineer', location: 'Abu Dhabi, UAE', type: 'Full-Time', level: 'Senior', description: 'Support critical project controls, forecasting, and performance analysis.' },
  { title: 'Rail Tunnel Inspector', location: 'Dubai, UAE', type: 'Full-Time', level: 'Mid', description: 'Inspect tunneling works and ensure compliance with safety and quality standards.' },
  { title: 'Electrical Inspector', location: 'Dubai, UAE', type: 'Full-Time', level: 'Mid', description: 'Oversee electrical installation quality and compliance across public infrastructure projects.' },
  { title: 'Project Surveyor II', location: 'Abu Dhabi, UAE', type: 'Full-Time', level: 'Mid', description: 'Support surveying, measurement, and project data management for engineering works.' },
  { title: 'Associate Cost Management', location: 'Dubai, UAE', type: 'Full-Time', level: 'Mid', description: 'Assist with cost planning, forecasting, and commercial reporting across portfolios.' },
  { title: 'Senior Architect', location: 'Dubai, UAE', type: 'Full-Time', level: 'Senior', description: 'Shape iconic developments through design leadership and multidisciplinary collaboration.' },
  { title: 'BIM Technician III', location: 'Abu Dhabi, UAE', type: 'Full-Time', level: 'Mid', description: 'Create and maintain digital models that support design coordination and project delivery.' },
]

const benefits = [
  'Tax-Free Salary', 'Competitive Compensation', 'Health Insurance', 'Annual Leave', 'Performance Bonuses', 'International Projects', 'Career Development', 'Global Mobility', 'Hybrid Work (Selected Roles)', 'Graduate Programs', 'Internship Programs', 'Training & Certifications', 'Professional Development', 'Diverse Workplace', 'Modern Engineering Technologies',
]

const salaryRows = [
  { role: 'Graduate Engineer', salary: 'AED 70,000 – 110,000 / year' },
  { role: 'Civil Engineer', salary: 'AED 180,000 – 220,000 / year' },
  { role: 'Mechanical Engineer', salary: 'AED 200,000 – 230,000 / year' },
  { role: 'Electrical Engineer', salary: 'AED 180,000 – 240,000 / year' },
  { role: 'Planning Engineer', salary: 'AED 200,000 – 260,000 / year' },
  { role: 'Senior Engineer', salary: 'AED 250,000 – 320,000 / year' },
  { role: 'Project Manager', salary: 'AED 280,000 – 400,000 / year' },
  { role: 'Senior Architect', salary: 'AED 220,000 – 350,000 / year' },
]

const requirementGroups = [
  { title: 'Education', items: ['Bachelor’s Degree', 'Master’s Degree (Preferred for Senior Roles)'] },
  { title: 'Technical Skills', items: ['AutoCAD', 'Civil 3D', 'Revit', 'BIM', 'Primavera P6', 'MS Project', 'SAP (where applicable)'] },
  { title: 'Soft Skills', items: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Time Management'] },
  { title: 'Experience', items: ['Entry Level', 'Mid-Level', 'Senior Professionals'] },
  { title: 'Languages', items: ['English (Required)', 'Arabic (Preferred)'] },
]

const timelineSteps = [
  'Online Application', 'Resume Screening', 'HR Interview', 'Technical Assessment', 'Hiring Manager Interview', 'Background Verification', 'Job Offer', 'Onboarding',
]

const faqItems = [
  { question: 'How can I apply for AECOM jobs?', answer: 'Submit your application through the official AECOM careers portal, upload your CV, and track your status online.' },
  { question: 'Is AECOM hiring in Dubai?', answer: 'Yes. AECOM regularly recruits for roles in Dubai, Abu Dhabi, and across the UAE across engineering, design, and corporate functions.' },
  { question: 'Does AECOM hire fresh graduates?', answer: 'Yes. AECOM offers graduate development programs, internships, and entry-level opportunities for early-career professionals.' },
  { question: 'What is the average salary at AECOM UAE?', answer: 'Salaries vary by experience and role, but typical ranges start from around AED 70,000 for graduates and can exceed AED 400,000 for senior leadership roles.' },
  { question: 'Are international applicants eligible?', answer: 'Yes. AECOM hires candidates from many nationalities, provided they meet the role requirements and local employment guidelines.' },
  { question: 'Does AECOM provide training?', answer: 'AECOM provides structured training, digital engineering development, mentorship, and internal learning opportunities.' },
  { question: 'What qualifications are required?', answer: 'Most roles require a relevant degree, professional experience, and strong technical or project delivery skills depending on the position.' },
  { question: 'Where are AECOM UAE offices located?', answer: 'AECOM operates in Dubai and Abu Dhabi and supports projects across the broader UAE.' },
  { question: 'How long does the hiring process take?', answer: 'The process typically takes several weeks, depending on screening, assessments, interviews, and verification steps.' },
  { question: 'Is experience mandatory for every role?', answer: 'Not always. AECOM offers entry-level, graduate, and experienced roles, and requirements vary by function.' },
]

const relatedPages = [
  { title: 'Parsons Careers UAE', href: 'https://careers.parsons.com/', description: 'Explore infrastructure, transportation, and engineering opportunities across the Middle East.' },
  { title: 'Jacobs Careers UAE', href: 'https://jobs.jacobs.com/', description: 'Find engineering, design, and project delivery roles in major regional markets.' },
  { title: 'WSP Careers UAE', href: 'https://careers.wsp.com/', description: 'Discover architecture, engineering, and sustainability career opportunities.' },
  { title: 'AtkinsRéalis Careers UAE', href: 'https://careers.atkinsrealis.com/', description: 'Browse global infrastructure and consulting career paths.' },
  { title: 'Bechtel Careers UAE', href: 'https://careers.bechtel.com/', description: 'View major project, engineering, and construction roles worldwide.' },
  { title: 'Emirates Group Careers', href: '/emirates-group-careers-uae-2026', description: 'See aviation, operations, and corporate opportunities in Dubai and the UAE.' },
  { title: 'Dubai Municipality Jobs', href: 'https://www.dm.gov.ae/', description: 'Review public-sector engineering and urban development opportunities.' },
  { title: 'Dubai Metro Careers', href: 'https://www.rta.ae/', description: 'Check transport, rail, and infrastructure career openings in Dubai.' },
]

export default function AECOMCareersPage() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.1 }
    )

    const elements = document.querySelectorAll<HTMLElement>('[data-section]')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <article className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src="/aecom-careers-uae-2026.png" alt="AECOM careers hero banner" fill priority sizes="100vw" className="object-cover object-center" quality={100} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002e4f]/90 via-[#004b7b]/70 to-[#005daa]/70" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 md:min-h-[620px] md:py-20 lg:px-10 xl:px-16">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Career Insights</Link>
            <span>/</span>
            <span className="text-white">AECOM Careers 2026</span>
          </div>

          <div className="max-w-4xl space-y-5">
            <span className="inline-flex rounded-full border border-[#f58220]/40 bg-[#f58220]/20 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#ffd9b8]">
              AECOM Careers UAE 2026
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              AECOM Careers in UAE 2026
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore the latest AECOM vacancies across Dubai, Abu Dhabi, and the UAE. Discover opportunities in engineering, architecture, project management, construction, environmental services, BIM, surveying, and corporate departments.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href="https://aecom.jobs" className="inline-flex items-center justify-center rounded-full bg-[#f58220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#de6d0f]">
                Apply Now
              </Link>
              <Link href="#vacancies" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View All Vacancies
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-300">
              <span>Published: July 15, 2026</span>
              <span>•</span>
              <span>Last updated: July 15, 2026</span>
              <span>•</span>
              <span>Reading time: 9 min</span>
              <span>•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-sm">
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://careerhunt.online/aecom-careers-uae-2026" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20">Share on LinkedIn</a>
              <a href="https://twitter.com/intent/tweet?text=AECOM%20Careers%20UAE%202026&url=https://careerhunt.online/aecom-careers-uae-2026" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20">Share on X</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-12 xl:px-16" id="overview" data-section>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Company overview</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['Company Name', 'AECOM'],
                ['Industry', 'Engineering, Infrastructure & Consulting'],
                ['Founded', '1990 (current AECOM Corporation)'],
                ['Headquarters', 'Dallas, Texas, USA'],
                ['UAE Offices', 'Dubai & Abu Dhabi'],
                ['Employment Type', 'Full-Time'],
                ['Eligible Nationalities', 'All Nationalities'],
                ['Number of Countries', '150+'],
                ['Employees Worldwide', '50,000+'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#005DAA]/20 bg-[#f4faff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#005DAA]">Official links</p>
              <Link href="https://aecom.com" className="mt-2 block text-lg font-semibold text-[#005DAA] underline">aecom.com</Link>
              <Link href="https://aecom.jobs" className="mt-2 block text-sm font-semibold text-[#f58220] underline">aecom.jobs</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">About AECOM</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              <p>AECOM is a globally recognized engineering and infrastructure consulting firm with a long history of delivering complex projects that shape cities, transportation networks, public services, and major industrial developments. From its roots in the United States and its evolution through decades of growth, AECOM has become one of the world’s most influential multidisciplinary design and engineering companies.</p>
              <p>Its global presence spans more than 150 countries and includes thousands of projects delivered for private and public sector clients. AECOM has built a reputation for combining technical excellence, project discipline, and innovation to solve the most demanding challenges in infrastructure, construction, environment, and digital engineering.</p>
              <p>In the UAE, AECOM has made a lasting contribution to major infrastructure and urban development initiatives. Its work has supported landmark projects such as Dubai Metro, Al Maktoum International Airport, highways, bridges, smart cities, residential communities, commercial towers, marine projects, urban development, and water infrastructure. These efforts underline the company’s role in helping shape the region’s future.</p>
              <p>The company’s culture is defined by diversity, collaboration, sustainability, and digital engineering. AECOM supports a safety-first workplace and invests in professional growth through training, mentorship, mobility, and leadership development. Employees benefit from a culture that values innovation, knowledge sharing, and continuous learning.</p>
              <p>For professionals, AECOM is a top employer because it offers international career opportunities, global mobility, internal promotions, learning programs, and access to advanced engineering technologies. It is particularly attractive for individuals who want to build long-term careers in infrastructure, transportation, design, sustainability, and major project delivery.</p>
              <p>AECOM’s reputation is strengthened by its ability to work across disciplines and deliver world-class outcomes at scale. Whether in design, consulting, operations, or project management, AECOM remains a leading destination for professionals seeking purpose-driven and globally relevant careers.</p>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
            <h3 className="text-xl font-semibold text-slate-900">Quick navigation</h3>
            <nav className="space-y-2 text-sm text-slate-700">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className={`block rounded-2xl px-3 py-2 transition ${activeSection === section.id ? 'bg-[#005DAA] text-white' : 'hover:bg-white'}`}>
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="rounded-2xl border border-[#005DAA]/15 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#005DAA]">Need help?</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Start with official AECOM careers pages or compare current openings on CareerHunt before applying.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="vacancies" data-section>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#005DAA] via-[#0c69ae] to-[#f58220] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">Current Open Positions</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">75+ Jobs Available in Dubai & UAE</h2>
              <p className="mt-4 text-base leading-8 text-slate-100">AECOM is hiring for engineering, planning, architecture, design, HSE, project controls, BIM, surveying, and corporate roles in the Middle East and beyond.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://aecom.jobs" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#005DAA] transition hover:bg-slate-100">View All Jobs</Link>
              <Link href="https://aecom.jobs" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Apply Now</Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[['Global Careers', 'https://aecom.jobs/'], ['Dubai Jobs', 'https://aecom.jobs/locations/dubai-are/jobs/'], ['Middle East Careers', 'https://middleeast.aecom.jobs/']].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="mt-2 text-sm text-slate-100">Explore current openings and apply directly through the official portal.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="categories" data-section>
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">Popular career paths</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Popular AECOM job categories</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Choose a discipline that matches your background, from civil and mechanical engineering to architecture, rail, BIM, HSE, and corporate support.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {jobCategories.map((card) => (
            <div key={card.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4faff] text-2xl">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              <Link href="https://aecom.jobs" className="mt-5 inline-flex rounded-full bg-[#005DAA] px-4 py-2 text-sm font-semibold text-white transition">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="benefits" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f58220]">Why work here</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Why professionals choose AECOM</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">AECOM offers a blend of global exposure, learning, strong benefits, and purposeful projects that support long-term career growth.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">{benefit}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="process" data-section>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">General requirements</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">What AECOM typically looks for</h2>
            <div className="mt-6 grid gap-4">
              {requirementGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f58220]">Hiring process</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Recruitment timeline</h2>
            <div className="mt-8 space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#005DAA] text-sm font-semibold text-white">{index + 1}</div>
                  <div className="text-sm font-medium text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="salary" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">Salary guide</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Typical salary ranges in the UAE</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Salaries vary depending on project, experience, department, and location, but these ranges provide a useful benchmark.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Position</th>
                  <th className="px-4 py-3 font-semibold">Estimated Salary</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map((row) => (
                  <tr key={row.role} className="border-t border-slate-200">
                    <td className="px-4 py-4 font-semibold text-slate-900">{row.role}</td>
                    <td className="px-4 py-4 text-slate-700">{row.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f8fbff] via-white to-[#fff8ef] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">Featured jobs</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Current openings at AECOM</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Browse current opportunities in infrastructure, engineering, project controls, design, rail, BIM, and corporate support.</p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {featuredJobs.map((job) => (
              <div key={job.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <span className="rounded-full bg-[#f4faff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#005DAA]">{job.level}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{job.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{job.location}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{job.type}</span>
                </div>
                <Link href="https://aecom.jobs" className="mt-5 inline-flex rounded-full bg-[#f58220] px-4 py-2 text-sm font-semibold text-white transition">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">Graduate & internship programs</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Launch your career with AECOM</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">AECOM offers young professionals structured pathways to grow through internships, mentorship, graduate development, and regional talent programs.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Graduate Development Program', 'Build technical expertise and professional skills through structured early-career learning.'],
              ['Internship Opportunities', 'Gain hands-on experience across engineering, design, planning, and corporate teams.'],
              ['UAE National Programs', 'Support local talent through national development and community-focused initiatives.'],
              ['Training & Mentorship', 'Benefit from coaching, networking, skill-building, and long-term development support.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="rounded-[2rem] border border-[#f58220]/20 bg-[#fff8f1] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f58220]">Recruitment fraud warning</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Important notice for applicants</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">AECOM never asks candidates to pay application fees, visa fees, interview fees, or recruitment charges. Always apply through the official AECOM careers website and verify recruiter communications.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="faqs" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005DAA]">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f58220]">Related employers</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Explore more engineering and infrastructure careers</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedPages.map((page) => (
            <div key={page.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl font-semibold text-slate-900">{page.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{page.description}</p>
              <a href={page.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#005DAA] underline-offset-4 hover:underline">View Jobs</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:pb-16 xl:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-10">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Ready to build your career with AECOM?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Join one of the world’s leading engineering and infrastructure companies. Explore exciting career opportunities across Dubai, Abu Dhabi, and the UAE today.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="https://aecom.jobs" className="inline-flex items-center justify-center rounded-full bg-[#f58220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#de6d0f]">Apply for AECOM Jobs</Link>
            <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">Browse Engineering Careers</Link>
          </div>
        </div>
      </section>
    </article>
  )
}
