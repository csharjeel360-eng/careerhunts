'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Crown,
  GraduationCap,
  HeartHandshake,
  Headphones,
  HeartPulse,
  Laptop2,
  Leaf,
  MonitorSmartphone,
  Package,
  Plane,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Truck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from '@/lib/seo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

type FAQItem = {
  question: string
  answer: string
}

type SectionCardItem = {
  title: string
  description: string
  icon: LucideIcon
}

type BenefitItem = {
  title: string
  description: string
  icon: LucideIcon
}

type TimelineStep = {
  title: string
  description: string
  icon: LucideIcon
}

type SalaryRow = {
  role: string
  salary: string
  experience: string
}

const tocItems = [
  { id: 'about', label: 'About FedEx' },
  { id: 'vacancies', label: 'Current Vacancies' },
  { id: 'categories', label: 'Job Categories' },
  { id: 'benefits', label: 'Why Work Here' },
  { id: 'salary', label: 'Salary Insights' },
  { id: 'faq', label: 'FAQs' },
]

const companyHighlights = [
  { label: 'Company Name', value: 'FedEx Corporation', icon: Building2 },
  { label: 'Industry', value: 'Logistics & Transportation', icon: Truck },
  { label: 'Founded', value: '1971', icon: CalendarDays },
  { label: 'Founder', value: 'Frederick W. Smith', icon: Crown },
  { label: 'Headquarters', value: 'Memphis, Tennessee, USA', icon: Building2 },
  { label: 'Employment Type', value: 'Full-Time / Part-Time', icon: Briefcase },
  { label: 'Eligible Nationalities', value: 'All Nationalities (Role Dependent)', icon: Users },
  { label: 'Company Size', value: '500,000+ Employees', icon: Users },
  { label: 'Official Website', value: 'https://careers.fedex.com', icon: SearchCheck },
]

const vacancies = [
  { title: 'Package Handler', location: 'Memphis, TN', type: 'Full-Time', department: 'Operations', description: 'Support sorting, loading, and movement of packages across distribution centers.' },
  { title: 'Delivery Driver', location: 'Chicago, IL', type: 'Full-Time', department: 'Operations', description: 'Deliver packages safely and maintain excellent customer service on the road.' },
  { title: 'Warehouse Associate', location: 'Dallas, TX', type: 'Full-Time', department: 'Warehouse', description: 'Manage inbound and outbound inventory with strong safety and efficiency focus.' },
  { title: 'Software Engineer', location: 'Plano, TX', type: 'Full-Time', department: 'Technology', description: 'Build software, automate workflows, and support digital logistics innovation.' },
  { title: 'Customer Service Representative', location: 'Remote', type: 'Full-Time', department: 'Customer Support', description: 'Respond to customer inquiries, resolve shipment issues, and support service excellence.' },
  { title: 'Operations Manager', location: 'Denver, CO', type: 'Full-Time', department: 'Operations', description: 'Lead teams, improve performance, and ensure smooth daily delivery execution.' },
]

const categories: SectionCardItem[] = [
  { title: 'Warehouse & Package Handling', description: 'Distribution center roles focused on sorting, loading, inventory control, and safety.', icon: Package },
  { title: 'Delivery Drivers', description: 'Road-based roles that keep shipments moving across local and regional routes.', icon: Truck },
  { title: 'Logistics & Supply Chain', description: 'Operations roles spanning transportation planning, optimization, and network support.', icon: Boxes },
  { title: 'Customer Service', description: 'Support teams that assist customers with tracking, delivery, and service needs.', icon: Headphones },
  { title: 'Information Technology', description: 'IT support, infrastructure, systems administration, and cybersecurity roles.', icon: MonitorSmartphone },
  { title: 'Software Engineering', description: 'Software, platform, and application engineering opportunities for digital innovation.', icon: Laptop2 },
  { title: 'Aviation', description: 'Ground support, flight operations, and air logistics career pathways.', icon: Plane },
  { title: 'Operations Management', description: 'Leadership roles that drive productivity, delivery quality, and team performance.', icon: Building2 },
  { title: 'Human Resources', description: 'Recruiting, talent support, employee development, and people operations positions.', icon: Users },
  { title: 'Finance', description: 'Finance, budgeting, reporting, and business planning opportunities.', icon: CircleDollarSign },
  { title: 'Sales & Marketing', description: 'Commercial and brand roles that help FedEx grow across markets.', icon: Briefcase },
  { title: 'Corporate Careers', description: 'Administrative and specialist roles across legal, compliance, analytics, and more.', icon: Briefcase },
]

const benefits: BenefitItem[] = [
  { title: 'Competitive Salary', description: 'Competitive pay structures for entry-level and experienced professionals.', icon: CircleDollarSign },
  { title: 'Medical Insurance', description: 'Health coverage for employees and qualifying family members.', icon: HeartPulse },
  { title: 'Dental Coverage', description: 'Coverage for preventive and restorative care.', icon: BadgeCheck },
  { title: 'Vision Insurance', description: 'Support for routine vision exams and eyewear needs.', icon: ShieldCheck },
  { title: '401(k)', description: 'Retirement savings plans with company support where available.', icon: Briefcase },
  { title: 'Paid Vacation', description: 'Vacation time to support work-life balance and recovery.', icon: CalendarDays },
  { title: 'Paid Holidays', description: 'Holiday pay and company-recognized days off.', icon: Star },
  { title: 'Tuition Assistance', description: 'Learning support for continuing education and career development.', icon: GraduationCap },
  { title: 'Career Development', description: 'Professional growth programs and internal advancement pathways.', icon: Sparkles },
  { title: 'Employee Discounts', description: 'Discount access to partner services and products.', icon: BadgeCheck },
  { title: 'Flexible Scheduling', description: 'Scheduling options in many operations and support roles.', icon: Clock3 },
  { title: 'Internal Promotions', description: 'Opportunities to grow and move into newer roles over time.', icon: Workflow },
]

const salaryData: SalaryRow[] = [
  { role: 'Package Handler', salary: '$35,000 - $50,000', experience: 'Entry-Level to 2 Years' },
  { role: 'Delivery Driver', salary: '$45,000 - $70,000', experience: '1 to 5 Years' },
  { role: 'Warehouse Associate', salary: '$38,000 - $55,000', experience: 'Entry-Level to 3 Years' },
  { role: 'Operations Manager', salary: '$70,000 - $110,000', experience: '4 to 8 Years' },
  { role: 'Software Engineer', salary: '$95,000 - $150,000', experience: '2 to 8 Years' },
  { role: 'Customer Service Representative', salary: '$40,000 - $60,000', experience: '1 to 4 Years' },
  { role: 'Data Analyst', salary: '$70,000 - $95,000', experience: '2 to 6 Years' },
  { role: 'HR Specialist', salary: '$55,000 - $80,000', experience: '2 to 5 Years' },
]

const timelineSteps: TimelineStep[] = [
  { title: 'Online Application', description: 'Submit your profile and role preferences through the FedEx careers portal.', icon: Briefcase },
  { title: 'Resume Screening', description: 'Recruiters review your experience, education, and fit for the role.', icon: SearchCheck },
  { title: 'Assessment', description: 'Some roles may require online assessments or practical screening.', icon: Target },
  { title: 'Interview', description: 'Meet with a hiring manager or regional team for a structured discussion.', icon: Sparkles },
  { title: 'Background Check', description: 'Verification of your history and required certifications is completed.', icon: ShieldCheck },
  { title: 'Job Offer', description: 'Successful candidates receive a formal offer and onboarding details.', icon: CircleDollarSign },
  { title: 'Onboarding', description: 'Begin your orientation, team integration, and role-specific training.', icon: Workflow },
]

const employeeBenefits = [
  'Health Insurance', 'Dental Insurance', 'Vision Insurance', 'Life Insurance', 'Retirement Plans', 'Employee Discounts', 'Career Development', 'Paid Time Off', 'Paid Holidays', 'Tuition Assistance', 'Wellness Programs', 'Flexible Work Opportunities',
]

const faqItems: FAQItem[] = [
  { question: 'Does FedEx hire without experience?', answer: 'Yes. Entry-level operations, warehouse, customer service, and support roles often accept candidates with little or no prior experience.' },
  { question: 'What is the minimum age to work at FedEx?', answer: 'Most positions require applicants to be at least 18 years old, although some roles may vary by location and legal requirements.' },
  { question: 'Does FedEx sponsor visas?', answer: 'Visa sponsorship is handled on a case-by-case basis and depends on role eligibility, legal requirements, and location.' },
  { question: 'Are remote jobs available?', answer: 'Yes. FedEx offers remote or hybrid options in some corporate, IT, customer support, and project roles.' },
  { question: 'How long does the hiring process take?', answer: 'The process can take several weeks depending on the role, hiring volume, assessments, and interview schedule.' },
  { question: 'What benefits are offered?', answer: 'FedEx provides health coverage, retirement plans, paid leave, tuition support, employee discounts, and career development options.' },
  { question: 'Can students apply?', answer: 'Yes. FedEx often hires students and recent graduates for seasonal, intern, and entry-level opportunities.' },
  { question: 'What shifts are available?', answer: 'Shift availability varies by location and role, including early, late, weekend, and overnight positions in operations.' },
  { question: 'Is FedEx a good company?', answer: 'FedEx is widely recognized for its stability, global reach, and strong growth opportunities across logistics and supply chain industries.' },
  { question: 'How can I check my application status?', answer: 'Applicants can check status through the FedEx careers portal after creating an account and submitting their application.' },
]

const relatedPages = [
  { title: 'UPS Careers', description: 'Explore parcel delivery, logistics, and transport opportunities.', image: '/fedex-careers-usa-2026.png', href: '/jobs' },
  { title: 'Amazon Careers', description: 'Discover warehouse, tech, and operations roles across the US.', image: '/amazon-careers-2026.png', href: '/amazon-careers-2026' },
  { title: 'DHL Careers', description: 'Learn about international logistics and transportation jobs.', image: '/DHL Careers UAE.png', href: '/dhl-careers-uae-2026' },
  { title: 'USPS Careers', description: 'Find postal, delivery, and administrative positions nationwide.', image: '/fedex-careers-usa-2026.png', href: '/jobs' },
  { title: 'Walmart Careers', description: 'Browse retail operations, supply chain, and e-commerce roles.', image: '/fedex-careers-usa-2026.png', href: '/jobs' },
  { title: 'Costco Careers', description: 'Explore warehouse, merchandising, and corporate opportunities.', image: '/fedex-careers-usa-2026.png', href: '/jobs' },
]

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <button type="button" className="flex w-full items-center justify-between gap-4 text-left" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span className={`${poppins.className} text-base font-semibold text-slate-900`}>{item.question}</span>
              <span className="rounded-full bg-[#FFF3E8] p-2 text-[#FF6600]">
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

function SectionCard({ title, description, icon: Icon }: SectionCardItem) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4ECFF] text-[#4D148C]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      <Link href="/jobs" className="mt-4 inline-flex items-center text-sm font-semibold text-[#4D148C] hover:text-[#FF6600]">
        Explore Jobs <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

function BenefitCard({ title, description, icon: Icon }: BenefitItem) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF3E8] text-[#FF6600]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function TimelineCard({ title, description, icon: Icon }: TimelineStep) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4ECFF] text-[#4D148C]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  )
}

export default function FedExCareersPage() {
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'FedEx Careers in USA 2026', item: '/fedex-careers-usa-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'FedEx Careers in USA 2026 | Latest Job Openings & Apply Online',
    description: 'Discover the latest FedEx Careers in USA. Explore warehouse jobs, delivery driver jobs, logistics careers, software engineering roles, salaries, employee benefits, hiring process, and apply online.',
    url: 'https://careerhunt.online/fedex-careers-usa-2026',
    datePublished: '2026-07-14',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['FedEx Careers', 'FedEx Jobs USA', 'FedEx Hiring', 'Warehouse Jobs USA', 'Delivery Driver Jobs', 'FedEx Careers 2026', 'Logistics Jobs USA', 'USA Jobs'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'FedEx Careers in USA 2026 | Latest Job Openings & Apply Online',
    description: 'Discover the latest FedEx Careers in USA. Explore warehouse jobs, delivery driver jobs, logistics careers, software engineering roles, salaries, employee benefits, hiring process, and apply online.',
    url: 'https://careerhunt.online/fedex-careers-usa-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'FedEx Careers in USA 2026', item: '/fedex-careers-usa-2026' },
    ],
  }), [])

  return (
    <article className={`${inter.className} bg-white text-slate-900`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/fedex-careers-usa-2026.png"
            alt="FedEx logistics operations and delivery vehicles"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.78),rgba(2,6,23,0.28),rgba(2,6,23,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,102,0,0.18),transparent_32%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">careerinsights</Link>
            <span>/</span>
            <span className="font-semibold text-white">FedEx Careers in USA 2026</span>
          </div>

          <div className="max-w-4xl rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8 lg:p-10">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-[#FF6600]/20 px-3 py-1 text-sm font-semibold text-[#FFD5B8]">
              <Briefcase className="mr-2 h-4 w-4" /> USA Jobs
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl`}>
              FedEx Careers in USA 2026
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Discover the latest FedEx job opportunities across the United States. Explore careers in logistics, warehouse operations, delivery, customer service, engineering, information technology, aviation, and corporate departments.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="https://careers.fedex.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#FF6600] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e65a00]">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Current Openings
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Published 2026-07-14</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> 8 min read</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section id="about" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">About FedEx</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Why FedEx remains one of America’s most trusted employers</h2>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                <p>FedEx Corporation is one of the world’s most recognized logistics brands, built on a network of transport, warehousing, delivery, and digital systems that keep commerce moving every day. Founded in 1971 by Frederick W. Smith, the company has grown into an international leader that connects businesses and consumers across continents.</p>
                <p>Its scale is impressive. FedEx operates a global ecosystem of air, ground, and freight services designed to support time-sensitive shipments and high-volume operations. This makes it a major employer for people seeking stable careers in logistics, technology, aviation, operations, customer support, and corporate functions.</p>
                <p>Innovation has remained central to FedEx’s success. The company continues to invest in smart transportation systems, digital service tools, data analytics, and automation to deliver faster and more reliable services. That creates strong career growth opportunities for professionals who enjoy technology, problem-solving, and teamwork.</p>
                <p>FedEx is also known for a strong employee culture built around service, safety, accountability, and continuous improvement. Whether you are interested in warehouse operations, delivery driving, engineering, or corporate leadership, the company offers a broad range of paths for long-term career development.</p>
              </div>
            </section>

            <section id="vacancies" className="rounded-[2rem] border border-slate-200 bg-[#FCFAFF] p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Current Vacancies</p>
                  <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900`}>Current open positions</h2>
                </div>
                <div className="rounded-2xl border border-[#E7D8FF] bg-white px-4 py-3 text-center shadow-sm">
                  <div className="text-3xl font-bold text-[#4D148C]">1000+</div>
                  <div className="text-sm text-slate-600">active openings</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="https://careers.fedex.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#4D148C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3c1071]">Official Careers</Link>
                <Link href="/jobs" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">View All Jobs</Link>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {vacancies.map((job) => (
                  <div key={job.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{job.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{job.description}</p>
                      </div>
                      <span className="rounded-full bg-[#FFF3E8] px-2.5 py-1 text-xs font-semibold text-[#FF6600]">{job.type}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1">{job.location}</span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1">{job.department}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="categories" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                  <Boxes className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Job Categories</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Choose a career path that fits your skills</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((item) => (
                  <SectionCard key={item.title} {...item} />
                ))}
              </div>
            </section>

            <section id="benefits" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Why Work at FedEx?</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Benefits that support your career and lifestyle</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {benefits.map((item) => (
                  <BenefitCard key={item.title} {...item} />
                ))}
              </div>
            </section>

            <section id="salary" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                  <CircleDollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Salary Insights</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Typical annual pay ranges in the USA</h2>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-[#FCFAFF]">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-900">Position</th>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-900">Average Salary</th>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-900">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {salaryData.map((row) => (
                      <tr key={row.role}>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">{row.role}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.salary}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Educational Requirements</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Common qualifications for FedEx careers</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  'High School Diploma for many entry-level operational roles',
                  'Associate Degree or Diploma for specialized logistics and support positions',
                  'Bachelor’s Degree for engineering, finance, HR, operations, and corporate roles',
                  'Technical Certifications for IT, systems, analytics, and maintenance roles',
                  'CDL License where required for heavy vehicle or transport positions',
                  'Customer Service Skills and strong verbal communication',
                  'Physical Requirements for warehouse, delivery, and package handling roles',
                  'Safety Awareness and teamwork ability for fast-paced operations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4D148C]" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Hiring Process Timeline</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>What to expect from application to offer</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {timelineSteps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <TimelineCard {...step} />
                    {index < timelineSteps.length - 1 && <div className="hidden xl:block absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-slate-200" />}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                  <Laptop2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Remote Careers</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Flexible career routes for modern professionals</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {['Remote customer support', 'IT', 'Software Engineering', 'Cybersecurity', 'Finance', 'Project Management', 'Data Analytics'].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">{item}</div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">How to Apply</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Follow these steps to submit your application</h2>
                </div>
              </div>
              <ol className="mt-6 space-y-3">
                {['Visit FedEx Careers', 'Search by keyword or job title', 'Choose a location and department', 'Create an account', 'Upload your resume', 'Submit your application', 'Track your application status'].map((step, index) => (
                  <li key={step} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#4D148C] text-sm font-semibold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link href="https://careers.fedex.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#4D148C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c1071]">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#E7D8FF] bg-[#FCFAFF] p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Tips to Get Hired</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Stand out in a competitive applicant pool</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {['ATS-friendly resume', 'Tailor your resume to the role', 'Prepare well for interviews', 'Show teamwork and reliability', 'Demonstrate safety awareness', 'Apply early for high-demand positions'].map((tip) => (
                  <div key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#4D148C]" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="faq" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Frequently Asked Questions</p>
                  <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Common questions about FedEx careers</h2>
                </div>
              </div>
              <div className="mt-6">
                <FAQAccordion items={faqItems} />
              </div>
            </section>
          </div>

          <aside className="lg:pl-2">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Quick Overview</p>
                    <h3 className={`${poppins.className} text-xl font-semibold text-slate-900`}>Company info</h3>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {companyHighlights.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mt-0.5 rounded-xl bg-[#FFF3E8] p-2 text-[#FF6600]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-600">{item.value}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">On this page</p>
                    <h3 className={`${poppins.className} text-xl font-semibold text-slate-900`}>Jump to a section</h3>
                  </div>
                </div>
                <nav className="mt-6 space-y-2">
                  {tocItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#4D148C] hover:text-[#4D148C]">
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#FCFAFF] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#F4ECFF] p-3 text-[#4D148C]">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Employee Benefits</p>
                    <h3 className={`${poppins.className} text-xl font-semibold text-slate-900`}>Popular perks at FedEx</h3>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {employeeBenefits.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#FFF3E8] p-3 text-[#FF6600]">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6600]">Related Careers</p>
              <h2 className={`${poppins.className} text-2xl font-semibold text-slate-900`}>Explore similar career guide pages</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedPages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
                <Image src={item.image} alt={item.title} width={600} height={320} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  <Link href={item.href} className="mt-4 inline-flex items-center text-sm font-semibold text-[#4D148C] hover:text-[#FF6600]">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#4D148C_0%,#6B1FA6_50%,#FF6600_100%)] p-8 text-white shadow-[0_25px_70px_-24px_rgba(77,20,140,0.45)] sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Start your journey</p>
            <h2 className={`${poppins.className} mt-3 text-3xl font-semibold sm:text-4xl`}>Start your career with FedEx today</h2>
            <p className="mt-4 text-base leading-8 text-white/90">Explore thousands of opportunities available across the United States and apply online through the official FedEx Careers portal.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://careers.fedex.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#4D148C] transition hover:bg-slate-100">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/jobs" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Browse More USA Jobs
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
