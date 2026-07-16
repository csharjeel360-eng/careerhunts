'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import { Inter, Poppins } from 'next/font/google'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Store,
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

const tocItems = [
  { id: 'intro', label: 'Introduction' },
  { id: 'about', label: 'About Carrefour' },
  { id: 'why-work', label: 'Why Work Here' },
  { id: 'categories', label: 'Popular Roles' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'salary', label: 'Salary Guide' },
  { id: 'faq', label: 'FAQs' },
]

const whyWorkItems = [
  { title: 'Competitive Salary', description: 'Retail and operational roles are supported by structured pay scales and performance-driven incentives.', icon: CircleDollarSign },
  { title: 'Career Growth', description: 'Many team members move into supervisor, department lead, and store leadership positions over time.', icon: Workflow },
  { title: 'Training Programs', description: 'Onboarding, customer service coaching, and retail operations training help new hires adapt quickly.', icon: GraduationCap },
  { title: 'Medical Insurance', description: 'Eligible employees can access health and wellbeing support through company plans and regional benefits.', icon: HeartHandshake },
  { title: 'Employee Discounts', description: 'Staff often receive retail discounts and exclusive offers across store services and partner programs.', icon: BadgeCheck },
  { title: 'Paid Leave', description: 'Annual leave, sick leave, and public holiday support help employees maintain healthy work-life balance.', icon: Clock3 },
  { title: 'Flexible Shifts', description: 'Retail careers often offer shift-based schedules that suit students, parents, and early-career professionals.', icon: Clock3 },
  { title: 'International Career Opportunities', description: 'The business operates in many markets, creating pathways for employees to move across regions.', icon: Building2 },
  { title: 'Supportive Team Environment', description: 'Store teams thrive on collaboration, rapid learning, and shared customer-service standards.', icon: Users },
  { title: 'Performance Bonuses', description: 'High-performing teams may qualify for bonus programs linked to store delivery and customer satisfaction.', icon: Sparkles },
]

const categories = [
  { title: 'Cashier', description: 'Handle payments, customer queries, and smooth checkout operations.', icon: Store },
  { title: 'Sales Associate', description: 'Guide shoppers, support product displays, and provide friendly service.', icon: Users },
  { title: 'Customer Service', description: 'Resolve customer concerns and maintain strong after-sales support.', icon: Briefcase },
  { title: 'Storekeeper', description: 'Organize stock, manage inventory, and maintain tidy backroom systems.', icon: Layers3 },
  { title: 'Warehouse Assistant', description: 'Support receiving, sorting, storage, and order preparation.', icon: Workflow },
  { title: 'Merchandiser', description: 'Ensure shelves, displays, and product presentation stay attractive.', icon: Sparkles },
  { title: 'Inventory Controller', description: 'Monitor replenishment levels and align stock with demand.', icon: ShieldCheck },
  { title: 'Fresh Food Assistant', description: 'Maintain produce, deli, and fresh food sections with quality standards.', icon: Building2 },
  { title: 'Baker', description: 'Prepare bakery items, maintain presentation, and meet freshness targets.', icon: Store },
  { title: 'Butcher', description: 'Manage meat preparation and support hygiene-focused store operations.', icon: Briefcase },
  { title: 'Delivery Driver', description: 'Ensure timely, safe, and customer-friendly deliveries.', icon: Workflow },
  { title: 'Security Officer', description: 'Protect staff, customers, assets, and store premises.', icon: ShieldCheck },
  { title: 'Cleaner', description: 'Keep floors, restrooms, and public areas spotless and welcoming.', icon: Sparkles },
  { title: 'HR', description: 'Recruit, support, and develop team members across store operations.', icon: Users },
  { title: 'Finance', description: 'Support invoicing, reporting, budgeting, and control procedures.', icon: CircleDollarSign },
  { title: 'Marketing', description: 'Drive campaign planning, promotions, and customer engagement.', icon: Zap },
  { title: 'IT', description: 'Support systems, digital tools, and store technology.', icon: Laptop2 },
  { title: 'Supply Chain', description: 'Coordinate product movement, distribution, and logistics flow.', icon: Workflow },
  { title: 'Store Manager', description: 'Lead store performance, people management, and customer delivery.', icon: Building2 },
  { title: 'Assistant Store Manager', description: 'Support daily operations and management priorities across teams.', icon: Briefcase },
  { title: 'Department Supervisor', description: 'Oversee a specific area such as fresh food, electronics, or apparel.', icon: Store },
]

const eligibilityItems = [
  { title: 'Minimum Education', description: 'High school diploma or equivalent is commonly required for entry-level store roles, while managerial roles may prefer a university degree or relevant retail experience.' },
  { title: 'Experience', description: 'Experience in retail, hospitality, customer service, warehouse operations, or logistics can strengthen an application and improve interview chances.' },
  { title: 'Communication Skills', description: 'Clear verbal and written communication is essential for interacting with customers, colleagues, and supervisors.' },
  { title: 'Customer Service Skills', description: 'A friendly, calm, and solution-focused attitude is highly valued in fast-paced retail settings.' },
  { title: 'Teamwork', description: 'Employees are expected to contribute positively to store operations, support coworkers, and follow team standards.' },
  { title: 'Physical Fitness', description: 'Some roles, especially warehouse, delivery, and stocking positions, require stamina and the ability to handle physical tasks safely.' },
  { title: 'Computer Skills', description: 'Basic digital literacy, POS familiarity, inventory systems, and email usage are useful in many Carrefour positions.' },
  { title: 'Availability for Shift Work', description: 'Retail operations often run early mornings, evenings, weekends, and holidays, so flexibility is a major advantage.' },
  { title: 'Language Skills', description: 'Fluency in the local language plus English is often helpful for customer-facing roles in international markets.' },
]

const salaryData = [
  { role: 'Cashier', range: 'AED 2,500–3,500/month' },
  { role: 'Sales Associate', range: 'AED 2,800–4,000/month' },
  { role: 'Warehouse Assistant', range: 'AED 2,500–4,200/month' },
  { role: 'Customer Service', range: 'AED 3,000–5,000/month' },
  { role: 'Supervisor', range: 'AED 5,000–8,000/month' },
  { role: 'Store Manager', range: 'AED 12,000–25,000+/month' },
]

const benefits = [
  'Medical Insurance',
  'Paid Annual Leave',
  'Performance Bonus',
  'Employee Discounts',
  'Retirement Benefits',
  'Training',
  'Career Development',
  'Transportation Allowance',
  'Meal Allowance',
  'Annual Air Ticket',
]

const timelineSteps = [
  { title: 'Online Application', description: 'Submit your profile and choose a suitable role through the official Carrefour careers portal.', icon: Briefcase },
  { title: 'Application Review', description: 'Recruiters assess your background, experience, and fit for the role.', icon: Users },
  { title: 'HR Interview', description: 'A recruiter or HR representative discusses your experience and motivation.', icon: Sparkles },
  { title: 'Assessment', description: 'Some roles may require a skills-based evaluation or practical test.', icon: Layers3 },
  { title: 'Final Interview', description: 'Hiring managers review your customer service, teamwork, and leadership potential.', icon: BadgeCheck },
  { title: 'Job Offer', description: 'Successful candidates receive an offer and onboarding details.', icon: CircleDollarSign },
]

const howToApplySteps = [
  'Visit the Official Careers Website',
  'Search for your preferred position',
  'Read the job description carefully',
  'Prepare your CV and supporting documents',
  'Submit the application online',
  'Wait for recruiter response',
]

const tips = [
  'Use an ATS-friendly resume with clear section headings and relevant keywords.',
  'Create a professional CV that highlights retail service, inventory, and team experience.',
  'Show relevant experience in customer interactions, stock handling, or store operations.',
  'Prepare for interviews by practicing common retail and customer service questions.',
  'Apply early because retail hiring can move quickly during peak hiring periods.',
  'Keep your LinkedIn profile updated and aligned with your CV.',
  'Demonstrate customer service skills, reliability, and willingness to learn.',
  'Mention any retail experience, shift flexibility, or language abilities that add value.',
]

const faqItems: FAQItem[] = [
  { question: 'How do I apply for Carrefour jobs?', answer: 'Visit the official Carrefour careers portal, search for the role you want, and submit your application online. This page is designed to help you prepare, but applications should be completed through the official careers website.' },
  { question: 'Does Carrefour hire freshers?', answer: 'Yes, Carrefour often hires entry-level candidates for customer-facing and store support roles, especially when they show strong communication, reliability, and customer service potential.' },
  { question: 'What is the minimum qualification?', answer: 'Most entry-level roles require at least a high school diploma or equivalent. Some positions may prefer additional experience, certifications, or language skills.' },
  { question: 'What salary can I expect?', answer: 'Salary varies by country, department, and experience. Entry-level retail positions may start around local market ranges, while supervisors and managers can earn significantly more.' },
  { question: 'Are part-time jobs available?', answer: 'Some locations offer part-time or shift-based work, especially for cashier, sales, customer service, and support positions.' },
  { question: 'Can foreigners apply?', answer: 'Many Carrefour markets welcome international talent, but work authorization and local hiring regulations depend on the country and role.' },
  { question: 'How long does recruitment take?', answer: 'Recruitment timelines vary, but candidates can usually expect several days to a few weeks depending on the role and hiring volume.' },
  { question: 'Do they provide training?', answer: 'Yes, many positions include onboarding, role-specific training, and customer service guidance to help employees settle into the business quickly.' },
  { question: 'Are there warehouse or logistics opportunities?', answer: 'Yes. Carrefour also hires for warehouse, supply chain, inventory, delivery, and operations roles that support store performance.' },
  { question: 'Is retail experience required?', answer: 'Retail experience is helpful, but many employers also value customer service, teamwork, flexibility, and a positive attitude in candidates who are new to the industry.' },
]

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className={`${poppins.className} text-base font-semibold text-slate-900 dark:text-slate-100`}>{item.question}</span>
              <span className="rounded-full bg-orange-50 p-2 text-[#ff6b2c] dark:bg-orange-950/40">
                <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              </span>
            </button>
            {isOpen && <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default function CarrefourCareersPage() {
  const officialCareersUrl = 'https://www.carrefour.com/en/careers'

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'Carrefour Hypermarket Careers 2026', item: '/carrefour-hypermarket-careers-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'Carrefour Hypermarket Careers 2026 – Latest Job Vacancies & Apply Online',
    description: 'Explore Carrefour Hypermarket Careers 2026, discover retail, warehouse, customer service, supervisor, and store manager opportunities, learn about salaries, benefits, hiring steps, and apply through the official careers portal.',
    url: 'https://careerhunt.online/carrefour-hypermarket-careers-2026',
    datePublished: '2026-07-16',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['Carrefour Careers', 'Carrefour Jobs', 'Carrefour Hypermarket Careers 2026', 'Retail Jobs', 'Warehouse Jobs', 'UAE Jobs', 'Customer Service Jobs'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'Carrefour Hypermarket Careers 2026 – Latest Job Vacancies & Apply Online',
    description: 'Explore Carrefour Hypermarket Careers 2026, discover retail, warehouse, customer service, supervisor, and store manager opportunities, learn about salaries, benefits, hiring steps, and apply through the official careers portal.',
    url: 'https://careerhunt.online/carrefour-hypermarket-careers-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'Carrefour Hypermarket Careers 2026', item: '/carrefour-hypermarket-careers-2026' },
    ],
  }), [])

  const jobPostingSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Retail Sales Associate',
    description: 'Support customer service, merchandising, stock replenishment, and daily store operations in a modern hypermarket environment.',
    employmentType: 'FULL_TIME',
    datePosted: '2026-07-16',
    validThrough: '2026-12-31',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Carrefour',
      sameAs: 'https://www.carrefour.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'AED',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 2800,
        maxValue: 4000,
        unitText: 'MONTH',
      },
    },
    responsibilities: [
      'Help customers and maintain a friendly store experience',
      'Support product display and shelf organization',
      'Assist with stock replenishment and department housekeeping',
    ],
  }), [])

  return (
    <article className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/carrefour-hypermarket-careers.png"
            alt="Carrefour hypermarket employees assisting customers in a modern retail environment"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center brightness-110 contrast-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.82),rgba(2,6,23,0.35),rgba(2,6,23,0.7))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,44,0.24),transparent_32%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jobs" className="transition hover:text-white">Jobs</Link>
            <span>/</span>
            <span className="font-semibold text-white">Carrefour Hypermarket Careers 2026</span>
          </div>

          <div className="max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ff6b2c]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950">
              <Zap className="h-3.5 w-3.5" /> Carrefour Hypermarket Careers 2026
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}>
              Find the Latest Carrefour Job Openings & Apply Online
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Discover Carrefour career opportunities across retail, warehouse, customer service, leadership, and support functions. Learn how to meet eligibility requirements, understand salary expectations, and apply with confidence.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={officialCareersUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#ff6b2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f05a1d]">
                View Latest Jobs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Popular Roles
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><CheckCircle2 className="h-4 w-4" /> Freshers Welcome</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><CheckCircle2 className="h-4 w-4" /> Full-Time Jobs</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><CheckCircle2 className="h-4 w-4" /> Competitive Salary</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><CheckCircle2 className="h-4 w-4" /> Career Growth</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <NativeAd className="mx-auto mb-8 max-w-3xl" />
        <div className="mb-8 hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm lg:block dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-wrap gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:text-[#ff6b2c] dark:bg-slate-800 dark:text-slate-200">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <section id="intro" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr] dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Introduction</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>A career guide for job seekers exploring Carrefour opportunities</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Carrefour is one of the most recognizable retail and hypermarket brands in the world, with a presence in many countries and a reputation for serving millions of customers every day. The company has built its identity around strong store operations, disciplined supply chains, value-driven retail, and a commitment to customer convenience. For job seekers, this means opportunities are not limited to front-line sales work. Carrefour also relies on professionals in warehouse operations, logistics, customer support, finance, HR, technology, and store leadership.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              This guide is built for professionals and students who want to understand Carrefour careers in a practical way. Whether you are looking for a first job, a career switch, or a leadership path, you will find useful insights here about job categories, eligibility requirements, salary expectations, employee benefits, hiring steps, and application advice. The goal is simple: help you prepare for the application process and decide whether retail and hypermarket careers fit your long-term plans.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Applicants should always use the official Carrefour careers portal for submissions. This page is designed as a career guide and information resource, not a replacement for the company’s official application system. The official link is provided below so you can move from research to application with confidence.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#ff6b2c]/10 p-3 text-[#ff6b2c]">
                <Store className="h-6 w-6" />
              </div>
              <div>
                <p className={`${poppins.className} text-lg font-semibold text-slate-900 dark:text-slate-100`}>Official Application Note</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Apply only through the official Carrefour careers portal to protect your information and avoid unofficial job scams.</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a href={officialCareersUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#ff6b2c] hover:text-[#ff6b2c] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <span>Official Carrefour Careers Website</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="rounded-2xl bg-[#ff6b2c]/10 p-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Why this guide matters</p>
                <p className="mt-2">It helps you understand the hiring landscape, salary ranges, and role expectations before you apply so you can present yourself more effectively.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.05fr_0.95fr] dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>About Carrefour</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>A global retailer with a strong operational footprint and a growing talent base</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Carrefour is known for combining large-scale retail operations with everyday convenience. Its stores often focus on a mixture of groceries, fresh food, household goods, electronics, apparel, and specialized departments. The brand has built a strong reputation in markets where customers expect a well-organized environment, value for money, and dependable service. That combination makes retail operations highly important and creates a continuous need for motivated employees in both customer-facing and behind-the-scenes roles.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              The company’s success depends on coordination between people, products, logistics, and customer service. A great Carrefour store is shaped by attentive cashiers, efficient stock teams, well-informed supervisors, strong warehouse support, and leaders who understand how to keep operations running smoothly during busy periods. This makes the business attractive to people who want practical, people-focused careers rather than purely desk-based work.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              For many professionals, Carrefour stands out because it offers career development within a structured environment. Employees can grow from entry-level store roles into supervisory, department, and management responsibilities. The company also offers access to training, operating standards, and the chance to gain transferable retail experience that can open doors in other sectors such as logistics, hospitality, and supply chain management.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ['Company Overview', 'A large international retail group with strong store, logistics, and customer-service operations.'],
              ['Retail Industry', 'A people-driven business that depends on service quality, merchandising, and daily execution.'],
              ['Global Presence', 'Carrefour operates in multiple countries and continues to hire across diverse markets.'],
              ['Customer Service', 'The company emphasizes responsiveness, professionalism, and a welcoming customer experience.'],
              ['Career Development', 'Roles often provide long-term growth potential for employees who show reliability and leadership.'],
              ['Workplace Culture', 'Strong teamwork, operational discipline, and service standards are central to daily work.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <p className={`${poppins.className} text-base font-semibold text-slate-900 dark:text-slate-100`}>{title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-work" className="mt-8">
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Why Work at Carrefour?</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>A practical employer that supports people, performance, and career growth</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Carrefour careers are appealing because they combine structure, daily teamwork, and the chance to develop transferable skills. Whether you are aiming for customer service, warehouse operations, or leadership, the company provides an environment where performance, consistency, and adaptability are valued.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyWorkItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6b2c]/10 text-[#ff6b2c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="categories" className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Popular Job Categories</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>Roles that cover the full retail and operations ecosystem</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
                Carrefour hiring is broad, from front-of-house customer service and cashier roles to warehouse support, merchandising, finance, HR, IT, and store leadership. This variety makes Carrefour a strong option for job seekers with different backgrounds and career goals.
              </p>
            </div>
            <a href="#apply" className="inline-flex items-center text-sm font-semibold text-[#ff6b2c]">See how to apply <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-[#ff6b2c] dark:bg-slate-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="eligibility" className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Eligibility Requirements</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>What employers typically look for in Carrefour candidates</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Carrefour roles are not only about experience. Employers often value attitude, reliability, and the ability to work under pressure. A positive mindset, willingness to learn, and readiness to support customers or colleagues can make a significant difference during hiring.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Candidates with retail experience, hospitality experience, warehouse familiarity, or any customer-facing background are often viewed more favorably. For supervisors and managers, previous leadership or team coordination experience becomes especially valuable.
            </p>
          </div>
          <div className="grid gap-3">
            {eligibilityItems.map((item) => (
              <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <p className={`${poppins.className} text-base font-semibold text-slate-900 dark:text-slate-100`}>{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mt-8">
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Salary Information</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>Typical salary ranges across retail and operations roles</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Salaries vary significantly by country, experience, responsibilities, and local market conditions. The ranges below are indicative and should be used as a guide rather than a guarantee. In many markets, benefits, allowances, and overtime can add substantially to the total package.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {salaryData.map((item) => (
              <div key={item.role} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-[#fff7f2] to-white p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
                <p className={`${poppins.className} text-lg font-semibold text-slate-900 dark:text-slate-100`}>{item.role}</p>
                <p className="mt-3 text-2xl font-bold text-[#ff6b2c]">{item.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[1.25rem] border border-orange-200 bg-orange-50 p-4 text-sm leading-7 text-slate-700 dark:border-orange-900/50 dark:bg-orange-950/20 dark:text-slate-300">
            Salaries vary by country, experience, department, shift pattern, and local market conditions. Always review the specific job posting for the most accurate compensation details.
          </div>
        </section>

        <section className="mt-8">
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Employee Benefits</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>The value of working in a high-traffic retail environment</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#ff6b2c]" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Hiring Process</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>What to expect from application to onboarding</h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-[#ff6b2c]/10 p-3 text-[#ff6b2c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100`}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="apply" className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_0.9fr] dark:border-slate-800 dark:bg-slate-900">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>How to Apply</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>Follow a clear process to improve your chances of getting shortlisted</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              The application journey is straightforward, but preparation matters. A polished resume, a clear matching profile, and an understanding of the role will make you more competitive in a busy hiring cycle.
            </p>
            <div className="mt-6 grid gap-3">
              {howToApplySteps.map((step, index) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff6b2c] text-sm font-semibold text-white">{index + 1}</div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-[#fff7f2] to-white p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <p className={`${poppins.className} text-lg font-semibold text-slate-900 dark:text-slate-100`}>Application Reminder</p>
            <p className="mt-3 text-sm leading-8 text-slate-600 dark:text-slate-300">
              Make sure your CV reflects your job history clearly, highlights customer service experience, and includes any retail, warehouse, delivery, or leadership experience you have built. A short, well-organized resume often performs better than a long and unfocused one.
            </p>
            <a href={officialCareersUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-[#ff6b2c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f05a1d]">
              Apply on Official Careers Website <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Tips for Getting Hired</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>Improve your application and interview performance</h2>
            <div className="mt-6 grid gap-3">
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6b2c]" />
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="faq" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Frequently Asked Questions</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100`}>Answers to the most common Carrefour career questions</h2>
            <div className="mt-6">
              <FAQAccordion />
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#fff7f2] via-white to-[#fff8ef] p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Final CTA</p>
            <h2 className={`${poppins.className} mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100`}>Start your career with Carrefour today</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base dark:text-slate-300">
              Whether you are seeking an entry-level retail role, a warehouse position, or a future leadership opportunity, Carrefour offers a broad spectrum of possibilities for ambitious job seekers. Explore the latest vacancies, prepare your application carefully, and use the official careers portal to apply with confidence.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={officialCareersUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#ff6b2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f05a1d]">
                Apply on Official Careers Website <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#ff6b2c] hover:text-[#ff6b2c] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                Browse More Retail Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Related Career Pages</p>
              <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100`}>Explore more retail and logistics career guides</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/dhl-careers-uae-2026" className="rounded-[1.25rem] border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-[#ff6b2c] hover:shadow-md dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">DHL Careers UAE 2026</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Logistics, courier, and warehouse job opportunities across the UAE.</p>
            </Link>
            <Link href="/amazon-careers-2026" className="rounded-[1.25rem] border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-[#ff6b2c] hover:shadow-md dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Amazon Careers 2026</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Global roles in tech, operations, customer support, and logistics.</p>
            </Link>
            <Link href="/fedex-careers-usa-2026" className="rounded-[1.25rem] border border-slate-200 p-4 transition hover:-translate-y-1 hover:border-[#ff6b2c] hover:shadow-md dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">FedEx Careers USA 2026</p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Delivery, warehouse, and transport careers with strong growth potential.</p>
            </Link>
          </div>
        </section>
      </div>

      <aside className="mx-auto mb-10 hidden max-w-7xl px-4 lg:block lg:px-10">
        <div className="sticky top-24 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6b2c]`}>Sidebar</p>
          <div className="mt-4 space-y-2">
            <a href="#categories" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Job Categories</a>
            <Link href="/blog" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Latest Career Guides</Link>
            <Link href="/companies" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Popular Companies</Link>
            <a href="#categories" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Retail Jobs</a>
            <a href="#categories" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Warehouse Jobs</a>
            <a href="#salary" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">UAE Jobs</a>
            <a href="#faq" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Remote Jobs</a>
            <Link href="/blog" className="block rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#fff7f2] hover:text-[#ff6b2c] dark:bg-slate-950/70 dark:text-slate-300">Recent Posts</Link>
          </div>
        </div>
      </aside>
    </article>
  )
}
