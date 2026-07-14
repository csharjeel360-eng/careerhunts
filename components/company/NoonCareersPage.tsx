'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Inter, Poppins } from 'next/font/google'
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  Briefcase,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Cpu,
  GraduationCap,
  HandIcon,
  HeartHandshake,
  Layers3,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateJobSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from '@/lib/seo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

type FAQItem = {
  question: string
  answer: string
}

type JobCardItem = {
  title: string
  location: string
  type: string
  experience: string
}

type CategoryItem = {
  title: string
  description: string
  roles: string[]
  icon: typeof Briefcase
}

type BenefitItem = {
  title: string
  description: string
  icon: typeof HeartHandshake
}

type TimelineItem = {
  title: string
  description: string
  icon: typeof Briefcase
}

const tocItems = [
  { id: 'about', label: 'About Noon' },
  { id: 'positions', label: 'Open Positions' },
  { id: 'categories', label: 'Hiring Categories' },
  { id: 'featured', label: 'Featured Jobs' },
  { id: 'benefits', label: 'Why Noon' },
  { id: 'salary', label: 'Salary Guide' },
  { id: 'faq', label: 'FAQs' },
]

const companyHighlights = [
  { label: 'Company Name', value: 'Noon' },
  { label: 'Industry', value: 'E-commerce & Technology' },
  { label: 'Founded', value: '2017' },
  { label: 'Headquarters', value: 'Dubai, United Arab Emirates' },
  { label: 'Employment Type', value: 'Full-Time' },
  { label: 'Eligible Nationalities', value: 'All Nationalities' },
  { label: 'Company Size', value: '10,000+ Employees' },
  { label: 'Official Website', value: 'https://www.noon.com' },
  { label: 'Careers Page', value: 'https://careers.noon.com' },
]

const categoryItems: CategoryItem[] = [
  {
    title: 'Delivery & Last Mile',
    description: 'Support fast, reliable doorstep delivery across the UAE with technology-led logistics operations.',
    roles: ['Motorcycle Riders', 'Delivery Drivers', 'Fleet Operations', 'Courier Jobs'],
    icon: Zap,
  },
  {
    title: 'Warehouse & Fulfillment',
    description: 'Join high-volume fulfillment teams that keep inventory moving accurately and efficiently.',
    roles: ['Warehouse Associate', 'Picker', 'Packer', 'Inventory Controller', 'Sorting Staff', 'Forklift Operator'],
    icon: Layers3,
  },
  {
    title: 'Technology',
    description: 'Build digital products and platform tools that power Noon’s marketplace, logistics, and payments services.',
    roles: ['Software Engineer', 'Backend Engineer', 'Frontend Engineer', 'QA Engineer', 'DevOps Engineer', 'Cloud Engineer', 'Mobile Developer', 'UI/UX Designer', 'AI Engineer', 'Data Scientist'],
    icon: Cpu,
  },
  {
    title: 'Customer Experience',
    description: 'Deliver seamless support for customers, sellers, and operations partners.',
    roles: ['Customer Service', 'Call Center', 'Support Executive', 'Chat Support'],
    icon: Users,
  },
  {
    title: 'Marketplace Operations',
    description: 'Help scale trust, catalog quality, pricing, and seller performance in Noon’s marketplace.',
    roles: ['Catalog Specialist', 'Marketplace Executive', 'Seller Success', 'Content Operations', 'Pricing Analyst'],
    icon: Workflow,
  },
  {
    title: 'Buying & Merchandising',
    description: 'Shape product selection, category growth, and seller relationships for a leading regional marketplace.',
    roles: ['Buyer', 'Category Manager', 'Vendor Management', 'Merchandising Specialist'],
    icon: Briefcase,
  },
  {
    title: 'Human Resources',
    description: 'Support talent acquisition, onboarding, employee experience, and HR operations across the business.',
    roles: ['HR Associate', 'HR Operations', 'Talent Acquisition', 'Recruiter', 'Payroll'],
    icon: ShieldCheck,
  },
  {
    title: 'Finance',
    description: 'Drive financial planning, controls, analytics, and reporting for a rapid-growth company.',
    roles: ['Finance Executive', 'Accounting', 'Auditing', 'Financial Analyst'],
    icon: CircleDollarSign,
  },
  {
    title: 'Marketing',
    description: 'Create campaigns and customer journeys that strengthen Noon’s regional reach and brand presence.',
    roles: ['Digital Marketing', 'Performance Marketing', 'Brand Marketing', 'Growth Marketing', 'Content Marketing', 'Social Media'],
    icon: Sparkles,
  },
]

const featuredJobs: JobCardItem[] = [
  { title: 'Senior Software Engineer', location: 'Dubai', type: 'Full-Time', experience: '5+ Years' },
  { title: 'Software Engineer', location: 'Abu Dhabi', type: 'Full-Time', experience: '2+ Years' },
  { title: 'Warehouse Associate', location: 'Sharjah', type: 'Full-Time', experience: '1+ Years' },
  { title: 'Delivery Rider', location: 'Dubai', type: 'Full-Time', experience: '1+ Years' },
  { title: 'Marketplace Operations Executive', location: 'Remote', type: 'Full-Time', experience: '2+ Years' },
  { title: 'Customer Service Executive', location: 'Dubai', type: 'Full-Time', experience: '1+ Years' },
  { title: 'Category Manager', location: 'Abu Dhabi', type: 'Full-Time', experience: '4+ Years' },
  { title: 'HR Associate', location: 'Dubai', type: 'Full-Time', experience: '2+ Years' },
  { title: 'Data Analyst', location: 'Remote', type: 'Full-Time', experience: '2+ Years' },
  { title: 'Business Development Executive', location: 'Dubai', type: 'Full-Time', experience: '3+ Years' },
]

const benefits: BenefitItem[] = [
  { title: 'Competitive Salary', description: 'Attractive compensation packages aligned with market benchmarks.', icon: BadgeDollarSign },
  { title: 'Health Insurance', description: 'Comprehensive medical coverage for employees and families.', icon: ShieldCheck },
  { title: 'Visa Sponsorship', description: 'Support for eligible roles and relocation needs.', icon: BadgeCheck },
  { title: 'Annual Leave', description: 'Generous paid leave for well-being and work-life balance.', icon: LifeBuoy },
  { title: 'Flexible Working', description: 'Hybrid and flexible work arrangements in many corporate functions.', icon: Workflow },
  { title: 'Learning Programs', description: 'Training and development plans for professional growth.', icon: GraduationCap },
  { title: 'Career Growth', description: 'Internal mobility and promotion pathways across the company.', icon: Sparkles },
  { title: 'Performance Bonus', description: 'Reward structures tied to delivery, growth, and contribution.', icon: CircleDollarSign },
  { title: 'Employee Discounts', description: 'Benefit from exclusive offers and services within the Noon ecosystem.', icon: Users },
  { title: 'International Team', description: 'Work with professionals from diverse geographies and functions.', icon: Users },
  { title: 'Modern Technology Stack', description: 'Build on scalable systems used by millions of customers.', icon: Cpu },
  { title: 'Innovation Culture', description: 'Join a business that values experimentation and continuous improvement.', icon: Zap },
]

const salaryData = [
  { role: 'Delivery Rider', range: 'AED 2,500–4,500' },
  { role: 'Warehouse Associate', range: 'AED 2,500–5,000' },
  { role: 'Customer Support', range: 'AED 4,000–7,000' },
  { role: 'Software Engineer', range: 'AED 12,000–30,000' },
  { role: 'HR Associate', range: 'AED 6,000–12,000' },
  { role: 'Category Manager', range: 'AED 12,000–25,000' },
  { role: 'Business Development', range: 'AED 8,000–18,000' },
  { role: 'Data Analyst', range: 'AED 10,000–18,000' },
]

const requirements = [
  "Bachelor's Degree (role dependent)",
  'Relevant work experience',
  'Good communication skills',
  'English proficiency',
  'Arabic is an advantage',
  'Customer service skills',
  'Problem-solving ability',
  'Technical certifications where applicable',
  'Computer literacy',
  'Teamwork',
  'Ability to work under pressure',
  'Valid UAE Driving License for delivery roles',
  'Valid UAE Motorcycle License for rider positions',
]

const timelineSteps: TimelineItem[] = [
  { title: 'Online Application', description: 'Submit your CV and details through the Noon careers portal.', icon: Briefcase },
  { title: 'Resume Screening', description: 'Recruiters shortlist candidates based on experience and fit.', icon: Users },
  { title: 'HR Interview', description: 'Discuss your background, alignment, and motivation.', icon: ShieldCheck },
  { title: 'Technical Interview', description: 'Demonstrate the technical skills required for your role.', icon: Cpu },
  { title: 'Final Interview', description: 'Meet key stakeholders and hiring managers for a final assessment.', icon: BadgeCheck },
  { title: 'Background Verification', description: 'Complete verification checks and document review.', icon: Building2 },
  { title: 'Offer Letter', description: 'Receive your offer and review employment terms.', icon: CircleDollarSign },
  { title: 'Visa Process', description: 'Support is provided for eligible relocation and visa steps.', icon: MapPin },
  { title: 'Onboarding', description: 'Start your journey with orientation, team access, and training.', icon: Sparkles },
]

const lifeHighlights = [
  'Innovation-led teams shaping digital commerce experiences',
  'Fast-growing company with clear career advancement pathways',
  'Multicultural workplace with operations across the Middle East',
  'Modern offices and fulfillment centers designed for efficiency',
  'Employee training and development programs across departments',
  'Internal promotions and cross-functional mobility',
  'Collaborative teams that combine technology and operations',
  'Technology-driven environment where data, automation, and customer focus matter',
]

const faqItems: FAQItem[] = [
  { question: 'How do I apply for Noon jobs?', answer: 'Visit the official Noon careers portal, select a relevant role, and submit your application online with your updated CV and supporting details.' },
  { question: 'Does Noon hire foreigners?', answer: 'Yes, Noon recruits candidates from multiple nationalities, though some roles may have eligibility or visa requirements depending on the position and location.' },
  { question: 'What qualifications are required?', answer: 'Requirements vary by role, but most positions value a relevant degree, work experience, strong communication skills, English proficiency, and problem-solving ability.' },
  { question: 'Does Noon provide visa sponsorship?', answer: 'Visa support is available for eligible roles and qualifying candidates, but this depends on the specific position and business requirements.' },
  { question: 'What is the salary of a Noon warehouse associate?', answer: 'Warehouse associate salaries in the UAE often range from AED 2,500 to AED 5,000 per month depending on experience, shift type, and location.' },
  { question: 'Does Noon provide accommodation?', answer: 'Accommodation support may be available for certain operational roles or through company-specific arrangements, depending on the job scope and location.' },
  { question: 'Can fresh graduates apply?', answer: 'Yes. Noon offers entry-level and graduate opportunities in operations, support, technology, merchandising, and other corporate functions.' },
  { question: 'Where are Noon offices located?', answer: 'Noon operates across the UAE, Saudi Arabia, and Egypt, with major offices and hubs in Dubai and other key regional markets.' },
  { question: 'How long does hiring take?', answer: 'The hiring process generally takes several weeks, depending on screening, interviews, document verification, and offer finalization.' },
  { question: 'Is Noon a good company to work for?', answer: 'Yes. Noon is widely viewed as an attractive employer in the Middle East for professionals interested in e-commerce, logistics, technology, and fast-paced growth.' },
]

const relatedJobs = [
  { title: 'Amazon Careers', href: '/amazon-careers-2026', description: 'Explore global opportunities in technology, operations, and customer experience.' },
  { title: 'DHL Careers UAE', href: '/dhl-careers-uae-2026', description: 'Discover logistics, warehouse, and transport roles across the UAE.' },
  { title: 'DP World Careers', href: '/dp-world-careers-2026', description: 'View logistics, port, engineering, and supply chain roles across global hubs.' },
  { title: 'Emirates Group Careers', href: '/emirates-group-careers-uae-2026', description: 'Browse aviation, customer service, engineering, and corporate roles.' },
  { title: 'FedEx Careers USA', href: '/fedex-careers-usa-2026', description: 'Compare delivery, warehouse, and operations roles in the U.S. market.' },
  { title: 'Qatar Airways Careers', href: '/qatar-airways-careers-2026', description: 'Explore aviation and corporate job openings in the region.' },
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

  return <span className={`${poppins.className} text-4xl font-semibold text-slate-900 sm:text-5xl`}>{count}+</span>
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
              <span className="rounded-full bg-yellow-50 p-2 text-[#FFD500]">
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

export default function NoonCareersPage() {
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'Noon Careers UAE 2026', item: '/noon-careers-uae-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'Noon Careers UAE 2026 | Latest Noon Jobs in Dubai, Abu Dhabi & Across UAE – Apply Online',
    description: 'Explore the latest Noon Careers UAE 2026. Find jobs in Dubai, Abu Dhabi, Sharjah, and across the UAE in warehouse, delivery, technology, customer support, HR, marketing, logistics, and corporate roles.',
    url: 'https://careerhunt.online/noon-careers-uae-2026',
    datePublished: '2026-07-12',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['Noon Careers', 'Noon Jobs UAE', 'Dubai Jobs', 'Warehouse Jobs UAE', 'Delivery Rider Jobs UAE', 'Software Engineer Jobs Dubai', 'Customer Service Jobs UAE', 'Noon Delivery Jobs', 'Noon Warehouse Jobs', 'Noon Careers Dubai', 'Noon Careers Abu Dhabi', 'Noon Hiring 2026', 'Jobs in UAE', 'Career Hunt'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'Noon Careers UAE 2026 | Latest Noon Jobs in Dubai & Abu Dhabi – Apply Online',
    description: 'Explore the latest Noon Careers UAE 2026. Find jobs in Dubai, Abu Dhabi, and across the UAE including warehouse, delivery, software engineering, customer service, HR, marketing, logistics, and corporate roles. Apply online today.',
    url: 'https://careerhunt.online/noon-careers-uae-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'Noon Careers UAE 2026', item: '/noon-careers-uae-2026' },
    ],
  }), [])

  const jobPostingSchemas = useMemo(() => [
    generateJobSchema({
      title: 'Senior Software Engineer',
      summary: 'Build scalable products for Noon’s marketplace and technology platforms.',
      description: 'Lead engineering initiatives, mentor teams, and deliver impactful platform features.',
      postedDate: '2026-07-10',
      expiryDate: '2026-08-10',
      employmentType: 'FULL_TIME',
      companyId: { name: 'Noon', website: 'https://www.noon.com', logo: 'https://careerhunt.online/icon.svg' },
      city: 'Dubai',
      country: 'AE',
      salaryCurrency: 'AED',
      salaryMin: 18000,
      salaryMax: 30000,
      requiredSkills: ['JavaScript', 'TypeScript', 'System Design', 'Backend Engineering'],
      requirements: ['Bachelor\'s degree', '5+ years experience'],
      responsibilities: ['Build and maintain services', 'Collaborate across teams'],
      benefits: ['Health insurance', 'Learning budget'],
      educationLevel: 'Bachelor\'s Degree',
      experienceLevel: 'Mid-Senior Level',
      category: 'Software Engineering',
      slug: 'senior-software-engineer-noon',
      _id: '1',
    }),
    generateJobSchema({
      title: 'Warehouse Associate',
      summary: 'Support fulfillment and inventory operations in Noon’s UAE warehouses.',
      description: 'Pick, pack, sort, and ensure orders move smoothly through Noon’s fulfillment network.',
      postedDate: '2026-07-08',
      expiryDate: '2026-08-08',
      employmentType: 'FULL_TIME',
      companyId: { name: 'Noon', website: 'https://www.noon.com', logo: 'https://careerhunt.online/icon.svg' },
      city: 'Sharjah',
      country: 'AE',
      salaryCurrency: 'AED',
      salaryMin: 2500,
      salaryMax: 5000,
      requiredSkills: ['Inventory handling', 'Teamwork', 'Basic computer literacy'],
      requirements: ['High school diploma or equivalent', 'Ability to work under pressure'],
      responsibilities: ['Handle stock movement', 'Maintain warehouse organization'],
      benefits: ['Shift allowances', 'Health benefits'],
      educationLevel: 'High School',
      experienceLevel: 'Entry Level',
      category: 'Warehouse Operations',
      slug: 'warehouse-associate-noon',
      _id: '2',
    }),
  ], [])

  return (
    <article className={`${inter.className} bg-white text-slate-900`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {jobPostingSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Noon%20Careers%20UAE.png"
            alt="Noon warehouse and logistics hero banner"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center brightness-110 contrast-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(17,17,17,0.82),rgba(17,17,17,0.38),rgba(17,17,17,0.7))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,213,0,0.26),transparent_40%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">careerinsights</Link>
            <span>/</span>
            <span className="font-semibold text-white">Noon Careers UAE 2026</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD500] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950">
              <Zap className="h-3.5 w-3.5" /> Noon Careers UAE 2026
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}>
              Noon Careers UAE 2026
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore the latest Noon jobs in Dubai, Abu Dhabi, Sharjah, and across the UAE. Discover opportunities in logistics, delivery, warehouse operations, technology, customer service, e-commerce, buying, HR, and corporate departments.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="https://careers.noon.com" className="inline-flex items-center justify-center rounded-full bg-[#FFD500] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f2cf00]">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#positions" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Latest Vacancies
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Published yesterday</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Reading time: 8 min</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Users className="h-4 w-4" /> Author: CareerHunt Editorial Team</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD500]/20 px-3 py-1.5 text-[#FFD500]"><BadgeCheck className="h-4 w-4" /> Updated today</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-8 hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm lg:block">
          <div className="flex flex-wrap gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:text-[#111111]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>About Noon</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A regionally rooted technology and logistics platform built for scale</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Noon is a fast-growing e-commerce and technology company that has become one of the most influential digital marketplaces in the Middle East. Founded in 2017, the business began with a clear ambition: to make online shopping simpler, faster, and more rewarding for customers across the region. Over time, Noon expanded from a marketplace platform into a broad ecosystem that blends retail, logistics, payments, quick commerce, and digital services.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              The company’s journey reflects a strong commitment to innovation and customer experience. Noon set out to become the Middle East’s leading digital marketplace by combining advanced technology with a focus on reliability, affordability, and convenience. Its growth has been powered by deep investments in logistics infrastructure, warehousing, supply chain automation, and data-driven decision-making that help it serve millions of customers with speed and precision.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Noon has built a powerful regional presence across the UAE, Saudi Arabia, and Egypt, creating a strong base for cross-border commerce and operational excellence. Its business extends beyond traditional retail through Noon Food, a food delivery service that offers fast delivery and restaurant partnerships, and Noon Minutes, a quick-commerce model designed for convenience-led shopping in short time windows. Noon Pay adds digital payments and financial services capabilities, while the company’s logistics network and warehousing operations support seamless movement from supplier to customer.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              A major part of Noon’s success comes from its technology innovation. The company uses automation, smart fulfillment systems, analytics, and modern software engineering to improve customer service, inventory accuracy, and operational performance. With thousands of employees spanning operations, technology, customer care, merchandising, and corporate functions, Noon has created a dynamic workplace that encourages collaboration, ownership, and continuous improvement.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Noon is also known for nurturing employee development. The company offers learning opportunities, internal mobility, and exposure to large-scale growth initiatives that allow professionals to build long-term careers. Employees are encouraged to contribute ideas, solve problems, and grow through the company’s fast-moving environment, where internal promotions and skill expansion are common. That combination of scale, energy, and opportunity is one reason so many people choose Noon for their next career move.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              With a strong focus on diversity, inclusion, and people development, Noon continues to attract professionals from across the globe. The company’s culture celebrates teamwork, resilience, and customer obsession while creating a platform where ambitious talent can grow across logistics, technology, operations, and business leadership. Whether you are entering the workforce or building a senior career, Noon offers a compelling path in one of the region’s most exciting employers.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#FFD500] p-3 text-slate-950">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>Company Snapshot</p>
                <p className="text-sm text-slate-600">Noon at a glance</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {companyHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="positions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#111111_0%,#1f2937_100%)] p-6 text-white shadow-sm sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#FFD500]`}>Current Vacancies</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>Current Open Positions: 100+ Jobs</h2>
              <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                Noon regularly posts new roles across delivery, warehouse operations, technology, customer support, HR, buying, and corporate functions. Explore the latest openings and apply online through the official careers portal.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://careers.noon.com" className="inline-flex items-center justify-center rounded-full bg-[#FFD500] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f2cf00]">
                View All Noon Jobs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="https://careers.noon.com" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Official Careers Page
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 rounded-[1.5rem] bg-white/10 p-4 backdrop-blur sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm text-slate-300">Open Roles</p>
              <div className="mt-2 flex items-end gap-2">
                <AnimatedCounter to={100} />
                <span className="pb-1 text-sm text-slate-300">+</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm text-slate-300">Featured Locations</p>
              <p className="mt-2 text-xl font-semibold text-white">Dubai, Abu Dhabi, Sharjah</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm text-slate-300">Hiring Focus</p>
              <p className="mt-2 text-xl font-semibold text-white">Logistics, Tech, Operations</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Popular Hiring Categories</p>
              <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Find the right role for your skills and experience</h2>
            </div>
            <Link href="https://careers.noon.com" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
              Explore all roles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD500] text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`${poppins.className} mt-5 text-xl font-semibold text-slate-900`}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFD500]" /> {role}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://careers.noon.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Featured Jobs</p>
              <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Popular roles currently attracting strong interest</h2>
            </div>
            <Link href="https://careers.noon.com" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
              View all jobs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {featuredJobs.map((job) => (
              <div key={job.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{job.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">Noon • UAE Operations</p>
                  </div>
                  <span className="rounded-full bg-[#FFD500]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">Hot</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1"><GraduationCap className="h-4 w-4" /> {job.experience}</span>
                </div>
                <div className="mt-5 flex justify-end">
                  <Link href="https://careers.noon.com" className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="benefits"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Why Work at Noon?</p>
            <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A career that grows with you</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFD500] text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="salary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Salary Information</p>
            <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Compensation aligned with role, location, and experience</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Noon offers competitive compensation packages for operational, corporate, and technology roles. Actual salary levels vary by experience, location, shift pattern, and qualifications. Below is a practical salary range guide for common UAE positions.
            </p>
            <div className="mt-5 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-slate-900">Note:</p>
              <p>Salaries vary by experience, level, location, and role scope. Candidates should review the specific job posting for the most up-to-date package details.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#111111] text-left text-sm font-semibold text-white">
                <tr>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Typical Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                {salaryData.map((row) => (
                  <tr key={row.role}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.role}</td>
                    <td className="px-4 py-3">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>General Requirements</p>
            <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>What Noon looks for in applicants</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {requirements.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#111111]" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className={`${poppins.className} text-lg font-semibold text-slate-900`}>Hiring Process Timeline</p>
            <div className="mt-5 space-y-3">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#FFD500] text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{index + 1}. {step.title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Life at Noon</p>
              <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A high-energy workplace built for ambitious people</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lifeHighlights.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="faq"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Frequently Asked Questions</p>
            <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Everything you need to know before applying</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              From application steps and eligibility to salary expectations and visa support, these FAQs cover the most common questions candidates ask about Noon careers in the UAE.
            </p>
          </div>
          <FAQAccordion />
        </motion.section>

        <motion.section
          id="related"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]`}>Related Career Pages</p>
              <h2 className={`${poppins.className} mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Explore similar UAE and regional career opportunities</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedJobs.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
                  View careers <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#FFD500_0%,#ffec80_100%)] p-8 text-slate-950 shadow-sm sm:p-10"
        >
          <div className="max-w-3xl">
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-slate-700`}>Ready to Join Noon?</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>Explore the latest Noon careers in the UAE and apply online for exciting opportunities in logistics, technology, warehouse operations, customer support, and corporate departments.</h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="https://careers.noon.com" className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Apply for Noon Jobs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#positions" className="inline-flex items-center justify-center rounded-full border border-slate-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white">
                Browse Current Openings
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  )
}
