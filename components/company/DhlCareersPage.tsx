'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import { Inter, Poppins } from 'next/font/google'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gift,
  Globe2,
  GraduationCap,
  Users,
  Leaf,
  Layers3,
  Package,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Truck,
  Workflow,
  Zap,
} from 'lucide-react'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  getCanonicalUrl,
} from '@/lib/seo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

type FAQItem = {
  question: string
  answer: string
}

const tocItems = [
  { id: 'about', label: 'About DHL' },
  { id: 'vacancies', label: 'Open Vacancies' },
  { id: 'categories', label: 'Job Categories' },
  { id: 'benefits', label: 'Why Work Here' },
  { id: 'timeline', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary Guide' },
  { id: 'faq', label: 'FAQs' },
]

const companyHighlights = [
  { label: 'Company Name', value: 'DHL' },
  { label: 'Industry', value: 'Logistics & Supply Chain' },
  { label: 'Founded', value: '1969' },
  { label: 'Headquarters', value: 'Bonn, Germany' },
  { label: 'UAE Operations', value: 'Dubai, Abu Dhabi & Across UAE' },
  { label: 'Employment Type', value: 'Full-Time / Part-Time / Internship' },
  { label: 'Eligible Nationalities', value: 'All Nationalities' },
  { label: 'Official Website', value: 'https://www.dhl.com' },
  { label: 'Official Careers', value: 'https://careers.dhl.com' },
]

const vacancies = [
  { title: 'Courier – Meydan', location: 'Dubai', type: 'Full-Time', department: 'Courier Operations', description: 'Support fast last-mile delivery and customer service in high-volume urban routes.' },
  { title: 'Warehouse Assistant II', location: 'Dubai', type: 'Full-Time', department: 'Warehouse & Fulfillment', description: 'Handle shipment movement, sorting, inventory organization, and safe handling procedures.' },
  { title: 'Customs Data Entry', location: 'Abu Dhabi', type: 'Full-Time', department: 'Customs & Documentation', description: 'Process customs entries, validate shipment data, and maintain documentation accuracy.' },
  { title: 'Regional Air Freight Support Intern', location: 'Dubai', type: 'Internship', department: 'Air Freight', description: 'Assist with cargo coordination, reporting, and operational support for freight teams.' },
  { title: 'Receptionist – UAE National', location: 'Dubai', type: 'Full-Time', department: 'Corporate Services', description: 'Welcome visitors, manage correspondence, and support office operations.' },
  { title: 'Business Development Manager', location: 'Dubai', type: 'Full-Time', department: 'Sales & Business Development', description: 'Drive commercial growth, strengthen client relationships, and expand service offerings.' },
  { title: 'Sales Advisor', location: 'Abu Dhabi', type: 'Full-Time', department: 'Sales', description: 'Support customers with logistics solutions and guide them through service selection.' },
  { title: 'Customer Service Advisor', location: 'Dubai', type: 'Full-Time', department: 'Customer Service', description: 'Resolve shipment issues, respond to customer inquiries, and maintain service excellence.' },
  { title: 'Logistics Coordinator', location: 'Dubai', type: 'Full-Time', department: 'Logistics', description: 'Coordinate transport schedules, monitor shipments, and support cross-functional operations.' },
  { title: 'Supply Chain Executive', location: 'Sharjah', type: 'Full-Time', department: 'Supply Chain', description: 'Improve inventory flow, monitor KPIs, and support efficient supply chain execution.' },
  { title: 'Operations Supervisor', location: 'Dubai', type: 'Full-Time', department: 'Operations', description: 'Oversee daily teams, service quality, and process compliance in fast-paced operations.' },
  { title: 'Transport Planner', location: 'Dubai', type: 'Full-Time', department: 'Transport Planning', description: 'Plan routes, manage capacity, and support on-time delivery performance.' },
  { title: 'Freight Forwarding Executive', location: 'Dubai', type: 'Full-Time', department: 'Freight Forwarding', description: 'Coordinate international shipment movements and support documentation workflows.' },
  { title: 'Warehouse Operator', location: 'Abu Dhabi', type: 'Full-Time', department: 'Warehouse Operations', description: 'Handle loading, unloading, storage, and outbound processing with accuracy.' },
  { title: 'Inventory Controller', location: 'Dubai', type: 'Full-Time', department: 'Inventory Management', description: 'Maintain inventory records, reconcile stock movement, and support reporting.' },
]

const categories = [
  { title: 'Warehouse & Fulfillment', description: 'Order picking, inventory management, warehouse operations, and safe dispatch processes.', icon: Package },
  { title: 'Courier & Delivery', description: 'Parcel delivery, last-mile distribution, route support, and courier services.', icon: Truck },
  { title: 'Logistics & Supply Chain', description: 'Supply chain planning, transportation coordination, and distribution management.', icon: Boxes },
  { title: 'Air Freight', description: 'Air cargo operations, freight coordination, and international shipment handling.', icon: Plane },
  { title: 'Customs & Import/Export', description: 'Customs clearance, document review, and compliance support for trade shipments.', icon: ShieldCheck },
  { title: 'Sales & Business Development', description: 'Business growth, account management, and client-facing sales opportunities.', icon: Briefcase },
  { title: 'Customer Service', description: 'Customer support, order tracking, issue resolution, and shipment communication.', icon: Users },
  { title: 'Corporate', description: 'Finance, HR, legal, procurement, and internal support functions.', icon: Building2 },
  { title: 'Information Technology', description: 'Digital transformation, infrastructure, software, and cybersecurity roles.', icon: Globe2 },
  { title: 'Internship Programs', description: 'Graduate, trainee, and internship positions for early-career talent.', icon: GraduationCap },
]

const benefits = [
  { title: 'Competitive Salary', description: 'Attractive compensation aligned with industry standards.', icon: CircleDollarSign },
  { title: 'Health Insurance', description: 'Medical coverage and support for employees and families.', icon: ShieldCheck },
  { title: 'Annual Leave', description: 'Paid leave and holiday entitlements for work-life balance.', icon: BookOpen },
  { title: 'Paid Training', description: 'Structured onboarding and role-specific development programs.', icon: Sparkles },
  { title: 'International Career Growth', description: 'Opportunities to grow across regions and business units.', icon: Globe2 },
  { title: 'Employee Discounts', description: 'Access to product and service benefits through the company network.', icon: Gift },
  { title: 'Performance Bonuses', description: 'Reward programs tied to delivery and performance excellence.', icon: Star },
  { title: 'Retirement Benefits', description: 'Long-term financial security support where applicable.', icon: BadgeCheck },
  { title: 'Career Development Programs', description: 'Learning pathways for leadership and specialist roles.', icon: Workflow },
  { title: 'Inclusive Workplace', description: 'A diverse environment built on respect and collaboration.', icon: Users },
  { title: 'Modern Logistics Technology', description: 'Work with automation, tracking, and advanced operational systems.', icon: Zap },
  { title: 'Global Mobility Opportunities', description: 'Explore assignments across countries and business functions.', icon: Plane },
]

const timelineSteps = [
  { title: 'Online Application', description: 'Submit your profile and job preferences through the official DHL careers portal.', icon: Briefcase },
  { title: 'Resume Screening', description: 'Recruiters review your experience, qualifications, and role fit.', icon: Users },
  { title: 'HR Contact', description: 'A recruiter may reach out to discuss your background and availability.', icon: Layers3 },
  { title: 'Assessment', description: 'Some roles may include practical or online assessments to evaluate readiness.', icon: Target },
  { title: 'Interview', description: 'Meet the hiring manager or regional team for a structured interview.', icon: Sparkles },
  { title: 'Background Verification', description: 'Reference and document checks are completed before the final decision.', icon: ShieldCheck },
  { title: 'Offer Letter', description: 'Successful candidates receive a formal offer and onboarding details.', icon: CircleDollarSign },
  { title: 'Onboarding', description: 'Begin your induction, training, and role integration with DHL.', icon: Workflow },
]

const salaryData = [
  { role: 'Courier', monthly: 'AED 3,500 - 6,500', experience: 'Entry-Level to 3 Years' },
  { role: 'Warehouse Assistant', monthly: 'AED 3,000 - 5,500', experience: 'Entry-Level to 2 Years' },
  { role: 'Customer Service Advisor', monthly: 'AED 4,500 - 8,000', experience: '1 to 5 Years' },
  { role: 'Logistics Coordinator', monthly: 'AED 6,000 - 10,500', experience: '2 to 6 Years' },
  { role: 'Customs Executive', monthly: 'AED 7,000 - 12,000', experience: '3 to 7 Years' },
  { role: 'Operations Supervisor', monthly: 'AED 8,500 - 14,000', experience: '4 to 8 Years' },
  { role: 'Business Development Manager', monthly: 'AED 10,000 - 20,000', experience: '5+ Years' },
  { role: 'Supply Chain Manager', monthly: 'AED 12,000 - 24,000', experience: '7+ Years' },
  { role: 'Air Freight Specialist', monthly: 'AED 8,000 - 15,000', experience: '3 to 8 Years' },
]

const whyChoose = [
  { title: 'Global Brand', description: 'Join a recognized logistics leader with a strong international reputation.', icon: Globe2 },
  { title: 'Career Stability', description: 'Benefit from a resilient and essential industry with long-term demand.', icon: ShieldCheck },
  { title: 'Learning & Development', description: 'Access training and certification programs to enhance your skills.', icon: GraduationCap },
  { title: 'International Opportunities', description: 'Explore roles across regions, countries, and operating divisions.', icon: Plane },
  { title: 'Innovation', description: 'Work with modern systems, digital tools, and smart logistics infrastructure.', icon: Sparkles },
  { title: 'Diversity & Inclusion', description: 'Be part of a workplace that values different perspectives and backgrounds.', icon: Users },
  { title: 'Employee Recognition', description: 'Recognize achievements and be rewarded for strong performance.', icon: Star },
  { title: 'Sustainable Business Practices', description: 'Support responsible logistics and environmental initiatives.', icon: Leaf },
]

const faqItems: FAQItem[] = [
  { question: 'How do I apply for DHL jobs in UAE?', answer: 'Visit the official DHL Careers portal, search for your preferred role, and submit your application with your updated CV and relevant documents.' },
  { question: 'Does DHL hire fresh graduates?', answer: 'Yes, DHL regularly offers internship programs, graduate roles, and entry-level positions depending on business demand and location.' },
  { question: 'What qualifications are required?', answer: 'Requirements vary by role, but many positions need a high school diploma, diploma, bachelor’s degree, or relevant certifications alongside strong communication and teamwork skills.' },
  { question: 'Does DHL provide visa sponsorship?', answer: 'Visa and relocation support depend on the role, country, and employment policy. Candidates should confirm this directly with DHL HR during recruitment.' },
  { question: 'What is the salary of warehouse assistants?', answer: 'Warehouse assistant salaries in the UAE usually range from AED 3,000 to AED 5,500 per month, depending on experience and location.' },
  { question: 'Does DHL hire foreigners?', answer: 'Yes, DHL hires candidates from multiple nationalities, subject to UAE labor regulations and role eligibility requirements.' },
  { question: 'Is experience required?', answer: 'Some positions are entry-level, while others require previous experience in logistics, freight, sales, customer service, or operations.' },
  { question: 'Are internships available?', answer: 'Yes, DHL offers internships and trainee programs for students and recent graduates in several departments.' },
  { question: 'How long does recruitment take?', answer: 'The recruitment process can take several weeks depending on the role, assessment steps, and hiring volume.' },
  { question: 'Where can I find official DHL vacancies?', answer: 'You can find official vacancies on the DHL Careers website at careers.dhl.com under the Asia Pacific and Middle East section.' },
]

const relatedPages = [
  { title: 'Amazon Careers', description: 'Explore Amazon jobs in operations, tech, and global logistics.', href: '/amazon-careers-2026' },
  { title: 'Noon Careers UAE', description: 'Discover e-commerce, logistics, and regional growth opportunities.', href: '/noon-careers-uae-2026' },
  { title: 'Emirates Group Careers', description: 'Browse aviation, airport, and corporate careers in the UAE.', href: '/emirates-group-careers-uae-2026' },
  { title: 'DP World Careers', description: 'See port, logistics, and global supply chain roles.', href: '/dp-world-careers-2026' },
  { title: 'FedEx Careers USA', description: 'Compare warehouse, delivery, and logistics careers in the US.', href: '/fedex-careers-usa-2026' },
  { title: 'Qatar Airways Careers', description: 'Explore aviation and premium customer-service roles.', href: '/qatar-airways-careers-2026' },
]

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
              <span className="rounded-full bg-[#FFF4CC] p-2 text-[#D40511]">
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

export default function DhlCareersPage() {
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'DHL Careers in UAE 2026', item: '/dhl-careers-uae-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'DHL Careers UAE 2026 | Latest DHL Dubai Jobs & Apply Online',
    description: 'Explore the latest DHL careers in UAE. Discover DHL jobs in Dubai and Abu Dhabi, including warehouse assistant, courier, logistics, air freight, customer service, supply chain, sales, and corporate opportunities.',
    url: getCanonicalUrl('/dhl-careers-uae-2026'),
    datePublished: '2026-07-10',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['DHL Careers UAE', 'DHL Jobs Dubai', 'DHL Careers Dubai', 'DHL Warehouse Jobs', 'DHL Logistics Jobs UAE', 'DHL Courier Jobs', 'DHL Supply Chain Careers', 'DHL Express Careers', 'DHL Driver Jobs UAE', 'Logistics Jobs Dubai', 'Warehouse Jobs UAE', 'Air Freight Jobs Dubai', 'UAE Logistics Careers', 'DHL Careers 2026'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'DHL Careers UAE 2026 | Latest DHL Dubai Jobs & Apply Online',
    description: 'Explore the latest DHL careers in UAE. Discover DHL jobs in Dubai and Abu Dhabi, including warehouse assistant, courier, logistics, air freight, customer service, supply chain, sales, and corporate opportunities.',
    url: getCanonicalUrl('/dhl-careers-uae-2026'),
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'DHL Careers in UAE 2026', item: '/dhl-careers-uae-2026' },
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
            src="/DHL Careers UAE.png"
            alt="DHL warehouse and logistics operations in the UAE"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.78),rgba(2,6,23,0.3),rgba(2,6,23,0.68))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,204,0,0.2),transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">careerinsights</Link>
            <span>/</span>
            <span className="font-semibold text-white">DHL Careers UAE 2026</span>
          </div>

          <div className="max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950">
              <Zap className="h-3.5 w-3.5" /> DHL Careers in UAE 2026
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}>
              DHL Careers in UAE 2026
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore latest DHL job opportunities in Dubai, Abu Dhabi, and across the UAE. Discover openings in warehouse operations, logistics, courier services, air freight, customer service, sales, customs, and corporate departments.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="https://careers.dhl.com/apac/en/search-results" className="inline-flex items-center justify-center rounded-full bg-[#FFCC00] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f6c700]">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#vacancies" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Latest Jobs
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Published: July 10, 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Last updated: July 12, 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Users className="h-4 w-4" /> Reading time: 8 min</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Building2 className="h-4 w-4" /> Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-8 hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm lg:block">
          <div className="flex flex-wrap gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:text-[#D40511]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <section id="about" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>About DHL</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A global logistics leader powering trade and delivery across the UAE</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              DHL is one of the world’s most respected logistics companies, with a long history of connecting people, businesses, and markets through reliable express and supply chain services. Founded in 1969, the company has grown from a small courier operation into a global logistics powerhouse that helps move goods across borders, cities, and continents with speed and precision.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              DHL operates in more than 220 countries and territories and offers an extensive portfolio of services through DHL Express, DHL Supply Chain, DHL Global Forwarding, and DHL eCommerce. These divisions support international shipping, warehousing, freight forwarding, e-commerce logistics, and end-to-end supply chain solutions for businesses of all sizes.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              In the UAE, DHL is a major employer in the logistics sector, supporting commerce through warehousing, air freight, ground transport, customs clearance, customer service, and regional distribution services. The company has built a strong reputation for operational excellence, reliability, and customer-focused service in markets such as Dubai, Abu Dhabi, Sharjah, and beyond.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Innovation and sustainability are central to DHL’s business model. The company continues to invest in digital tracking, automation, green logistics solutions, climate-conscious operations, and modern fleet management tools. Its commitment to responsible growth and environmental stewardship has strengthened its reputation as a forward-thinking employer.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              DHL also places strong emphasis on employee development through structured training, leadership programs, internal mobility, and professional certifications. Whether a candidate is starting in warehouse operations, sales, customer support, or corporate functions, DHL offers long-term career growth potential across different departments and international locations.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              For professionals seeking stability, international opportunity, and the chance to work for one of the world’s best employers, DHL remains an attractive choice. Its culture of accountability, continuous improvement, and global collaboration creates excellent opportunities for ambitious individuals across the UAE and beyond.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <h3 className={`${poppins.className} text-xl font-semibold text-slate-900`}>Company snapshot</h3>
            <div className="mt-5 space-y-3">
              {companyHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vacancies" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <NativeAd className="mx-auto mb-8 max-w-3xl" />
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Current open vacancies</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Latest DHL UAE job openings</h2>
            </div>
            <a href="https://careers.dhl.com/apac/en/search-results" className="inline-flex items-center text-sm font-semibold text-[#D40511] hover:text-[#b30410]">
              Official Careers Page <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-[#FFF4CC] bg-[#FFFDF3] p-4 text-sm leading-7 text-slate-700">
            DHL vacancies change frequently. Always verify the latest openings through the official DHL Careers website before applying.
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {vacancies.map((job) => (
              <div key={job.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                      <span className="rounded-full bg-white px-2.5 py-1">{job.location}</span>
                      <span className="rounded-full bg-white px-2.5 py-1">{job.type}</span>
                      <span className="rounded-full bg-white px-2.5 py-1">{job.department}</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#FFCC00]/20 p-2 text-[#D40511]">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{job.description}</p>
                <a href="https://careers.dhl.com/apac/en/search-results" className="mt-5 inline-flex items-center rounded-full bg-[#D40511] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b30410]">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="categories" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Job categories</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Explore DHL’s key career tracks in the UAE</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4CC] text-[#D40511]"><Icon className="h-6 w-6" /></div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{category.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                  <a href="#vacancies" className="mt-4 inline-flex items-center text-sm font-semibold text-[#D40511] hover:text-[#b30410]">
                    Explore Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        <section id="benefits" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Why work at DHL?</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Professional benefits for ambitious logistics talent</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF4CC] text-[#D40511]"><Icon className="h-5 w-5" /></div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{benefit.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>General hiring requirements</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>What DHL commonly looks for in UAE candidates</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className={`${poppins.className} font-semibold text-slate-900`}>Education</h3>
                  <p className="mt-2">High school, diploma, bachelor’s degree, or relevant logistics certifications depending on the role.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className={`${poppins.className} font-semibold text-slate-900`}>Skills</h3>
                  <p className="mt-2">English communication, teamwork, customer service, computer literacy, time management, and attention to detail.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className={`${poppins.className} font-semibold text-slate-900`}>Experience</h3>
                  <p className="mt-2">Entry-level to experienced roles are available depending on the vacancy and team requirements.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className={`${poppins.className} font-semibold text-slate-900`}>Additional</h3>
                  <p className="mt-2">Valid UAE driving license for courier or driver roles where required, ability to work shifts, and physical fitness for warehouse positions.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Hiring process timeline</p>
              <h3 className={`${poppins.className} mt-3 text-xl font-semibold text-slate-900`}>A clear path from application to onboarding</h3>
              <div className="mt-6 space-y-4">
                {timelineSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4CC] text-[#D40511]"><Icon className="h-5 w-5" /></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className={`${poppins.className} font-semibold text-slate-900`}>{step.title}</p>
                          <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                        </div>
                        <p className="mt-1 text-sm leading-7 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="salary" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Estimated salary information</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Approximate monthly salaries in AED for key DHL roles</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Salaries vary by role, experience, location, and business unit. The ranges below provide a general market estimate for candidates exploring DHL careers in the UAE.</p>
          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Position</th>
                  <th className="px-4 py-3 font-semibold">Estimated Monthly Salary (AED)</th>
                  <th className="px-4 py-3 font-semibold">Experience Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {salaryData.map((item) => (
                  <tr key={item.role}>
                    <td className="px-4 py-3 font-medium text-slate-900">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600">{item.monthly}</td>
                    <td className="px-4 py-3 text-slate-600">{item.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Why choose DHL?</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A strong platform for long-term career growth</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF4CC] text-[#D40511]"><Icon className="h-5 w-5" /></div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="faq" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Frequently asked questions</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Helpful answers for professionals exploring DHL careers</h2>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D40511]`}>Related career pages</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Explore other major employer career pages</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedPages.map((page) => (
              <Link key={page.title} href={page.href} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <h3 className={`${poppins.className} text-lg font-semibold text-slate-900`}>{page.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{page.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#D40511]">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#FFCC00]`}>Ready to start your career with DHL?</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>Explore the latest DHL job opportunities across the UAE and apply directly through the official careers portal.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">Build your future with one of the world’s leading logistics companies and discover opportunities in operations, transport, warehousing, customer service, finance, and more.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://careers.dhl.com/apac/en/search-results" className="inline-flex items-center justify-center rounded-full bg-[#FFCC00] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f6c700]">Apply for DHL Jobs</a>
              <a href="#vacancies" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">View Latest Vacancies</a>
            </div>
          </div>
          <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-slate-300">
            Career Hunt is an independent job information platform and is not affiliated with DHL. We do not recruit on behalf of DHL or charge any application fees. Always submit applications through the official DHL Careers website and beware of recruitment scams requesting payment.
          </div>
        </section>
      </div>
    </article>
  )
}
