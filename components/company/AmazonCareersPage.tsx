'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Poppins } from 'next/font/google'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  GraduationCap,
  Laptop2,
  Layers3,
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
  { id: 'about', label: 'About Amazon' },
  { id: 'categories', label: 'Job Categories' },
  { id: 'benefits', label: 'Why Work Here' },
  { id: 'timeline', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary Insights' },
  { id: 'faq', label: 'FAQs' },
]

const highlights = [
  { label: 'Company', value: 'Amazon' },
  { label: 'Industry', value: 'Technology, E-commerce, Cloud Computing' },
  { label: 'Founded', value: '1994' },
  { label: 'Founder', value: 'Jeff Bezos' },
  { label: 'CEO', value: 'Andy Jassy' },
  { label: 'Headquarters', value: 'Seattle, Washington, USA' },
  { label: 'Employment Type', value: 'Full-Time, Part-Time, Internship, Remote' },
  { label: 'Official Website', value: 'https://www.amazon.jobs' },
]

const categories = [
  { title: 'Software Development', description: 'Build products and internal platforms that power Amazon’s global ecosystem.', icon: '💻' },
  { title: 'AWS', description: 'Join cloud teams shaping secure, scalable infrastructure for global customers.', icon: '☁️' },
  { title: 'Data Science', description: 'Apply analytics and ML to solve meaningful customer and business problems.', icon: '📊' },
  { title: 'Operations', description: 'Support supply chain, warehousing, and fulfillment at massive scale.', icon: '📦' },
  { title: 'Customer Service', description: 'Help customers and partners with high-quality support and problem solving.', icon: '🎧' },
  { title: 'Marketing', description: 'Create compelling campaigns and content for customers worldwide.', icon: '📣' },
]

const benefits = [
  'Competitive Salary',
  'Performance Bonuses',
  'Health Insurance',
  'Paid Time Off',
  'Paid Parental Leave',
  'Career Growth',
  'Learning Programs',
  'Flexible Work Options',
]

const timelineSteps = [
  { title: 'Online Application', description: 'Submit your profile and role preferences through Amazon Jobs.', icon: Briefcase },
  { title: 'Resume Review', description: 'Recruiters evaluate your experience and fit for the role.', icon: Users },
  { title: 'Online Assessment', description: 'Complete short evaluations where applicable.', icon: Layers3 },
  { title: 'Recruiter Interview', description: 'Discuss your background and motivation with a recruiter.', icon: Sparkles },
  { title: 'Technical / Behavioral Interviews', description: 'Meet the team and hiring managers for deeper evaluation.', icon: BadgeCheck },
  { title: 'Offer & Onboarding', description: 'Receive the offer and start your first week with support.', icon: CircleDollarSign },
]

const salaryData = [
  { role: 'Software Engineer', range: '$120K - $220K' },
  { role: 'Data Scientist', range: '$135K - $240K' },
  { role: 'Product Manager', range: '$150K - $260K' },
  { role: 'Operations Manager', range: '$90K - $170K' },
  { role: 'Warehouse Associate', range: '$35K - $65K' },
  { role: 'Customer Service Associate', range: '$38K - $70K' },
]

const faqItems: FAQItem[] = [
  { question: 'How do I apply for Amazon jobs?', answer: 'Visit the official Amazon Jobs portal, choose a role that fits your profile, and submit your application online.' },
  { question: 'Does Amazon hire internationally?', answer: 'Yes, Amazon hires across many countries, although some roles may have location-specific eligibility requirements.' },
  { question: 'Are remote jobs available?', answer: 'Yes, Amazon offers remote and hybrid work in multiple functions including technology, customer service, HR, and marketing.' },
  { question: 'What qualifications does Amazon look for?', answer: 'Requirements vary by role, but many positions value a relevant degree, experience, communication, teamwork, problem solving, and technical skills.' },
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
              <span className="rounded-full bg-orange-50 p-2 text-[#FF9900]">
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

export default function AmazonCareersPage() {
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'Amazon Careers 2026', item: '/amazon-careers-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'Amazon Careers 2026 | Latest Amazon Jobs Worldwide & Apply Online',
    description: 'Explore the latest Amazon Careers 2026. Discover Amazon jobs worldwide, salary information, hiring process, employee benefits, remote opportunities, internships, and apply online.',
    url: 'https://careerhunt.online/amazon-careers-2026',
    datePublished: '2026-07-10',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['Amazon Careers', 'Amazon Jobs', 'Amazon Careers 2026', 'Amazon Remote Jobs', 'Amazon AWS Careers', 'Amazon Software Engineer Jobs'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'Amazon Careers 2026 | Latest Amazon Jobs Worldwide & Apply Online',
    description: 'Explore the latest Amazon Careers 2026. Discover Amazon jobs worldwide, salary information, hiring process, employee benefits, remote opportunities, internships, and apply online.',
    url: 'https://careerhunt.online/amazon-careers-2026',
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'Amazon Careers 2026', item: '/amazon-careers-2026' },
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
            src="/amazon-careers-2026.png"
            alt="Amazon Careers hero banner"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center brightness-110 contrast-110 saturate-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.72),rgba(2,6,23,0.26),rgba(2,6,23,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,153,0,0.22),transparent_36%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[620px] sm:px-6 sm:py-14 lg:min-h-[700px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jobs" className="transition hover:text-white">Jobs</Link>
            <span>/</span>
            <span className="font-semibold text-white">Amazon Careers 2026</span>
          </div>

          <div className="max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF9900]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950">
              <Zap className="h-3.5 w-3.5" /> Amazon Careers 2026
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}>
              Amazon Careers 2026
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore the latest Amazon job openings across the world. Discover exciting careers in software development, AWS, operations, customer service, corporate, marketing, logistics, data science, and more.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="https://www.amazon.jobs/" className="inline-flex items-center justify-center rounded-full bg-[#FF9900] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f08b00]">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#categories" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View All Jobs
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Published: July 10, 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Reading time: 8 min</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Users className="h-4 w-4" /> Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-8 hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm lg:block">
          <div className="flex flex-wrap gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:text-[#146EB4]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <section id="about" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>About Amazon</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Building customer-focused careers at global scale</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Amazon is one of the world’s largest technology companies, transforming the way people shop, work, and access digital services. Founded in 1994 by Jeff Bezos as an online bookstore, the company has expanded into a global leader in e-commerce, cloud computing, artificial intelligence, digital entertainment, logistics, consumer electronics, and enterprise technology. Today, Amazon serves millions of customers across more than 100 countries while operating fulfillment centers, corporate offices, data centers, and research facilities around the world.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              At the heart of Amazon’s success is its mission to be Earth’s most customer-centric company. Every product, service, and innovation is designed with the customer in mind. Whether it’s fast delivery through Amazon Prime, cloud solutions powered by Amazon Web Services (AWS), AI innovations, smart home devices, or digital entertainment platforms, Amazon continuously invests in technology that simplifies everyday life and improves customer experiences.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Amazon offers career opportunities across a wide range of industries and professional disciplines. The company hires software engineers, cloud architects, data scientists, machine learning specialists, cybersecurity professionals, UX designers, product managers, project managers, operations leaders, warehouse associates, HR professionals, finance experts, marketing specialists, legal advisors, healthcare professionals, and customer service representatives. With thousands of new positions posted regularly, professionals at every stage of their careers can find opportunities that match their skills and ambitions.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Innovation is deeply embedded in Amazon’s culture. Employees are encouraged to think creatively, solve complex problems, experiment with new ideas, and make decisions that have a meaningful impact on millions of customers worldwide. The company’s renowned Leadership Principles—including Customer Obsession, Ownership, Invent and Simplify, Learn and Be Curious, Think Big, Bias for Action, and Deliver Results—shape everyday decision-making and help teams move quickly while maintaining high standards.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Amazon is also committed to employee growth and long-term career development. Team members have access to extensive learning resources, technical training, leadership development programs, mentorship opportunities, certifications, and internal career mobility. Employees are encouraged to explore new roles across different business units, allowing them to build diverse skills and advance their careers within the organization.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              As a global employer, Amazon fosters an inclusive and diverse workplace where people from different backgrounds, cultures, and experiences collaborate to solve challenging problems. The company promotes equal opportunity, supports employee resource groups, invests in workplace safety, and strives to create an environment where every employee feels respected, valued, and empowered to contribute.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Beyond its business operations, Amazon continues to invest heavily in sustainability, renewable energy, responsible logistics, and community initiatives. Through programs focused on reducing carbon emissions, advancing clean energy, supporting education, and driving technological innovation, Amazon aims to create a positive impact for customers, employees, communities, and future generations.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Whether you’re an experienced professional, a recent graduate, a student seeking an internship, or someone looking to transition into a new career, Amazon provides opportunities to work on products and services that reach millions of people every day. With competitive compensation, comprehensive benefits, continuous learning opportunities, and the chance to solve real-world challenges at global scale, Amazon remains one of the most sought-after employers for ambitious professionals worldwide.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <h3 className={`${poppins.className} text-xl font-semibold text-slate-900`}>Company snapshot</h3>
            <div className="mt-5 space-y-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>Job categories</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Explore Amazon’s broad range of career paths</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF9900]/10 text-2xl">{category.icon}</div>
                <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{category.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                <Link href="https://www.amazon.jobs/" className="mt-4 inline-flex items-center text-sm font-semibold text-[#146EB4] hover:text-[#0f5c95]">
                  View Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>Why work at Amazon</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Premium benefits for ambitious professionals</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FF9900]/10 text-[#FF9900]"><BadgeCheck className="h-5 w-5" /></div>
                <p className="mt-4 text-sm font-semibold text-slate-900">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>Hiring process</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>A clear journey from application to onboarding</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF9900]/10 text-[#FF9900]"><Icon className="h-5 w-5" /></div>
                    <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className={`${poppins.className} mt-4 text-lg font-semibold text-slate-900`}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="salary" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>Salary insights</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Estimated salary ranges for key Amazon roles</h2>
          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Estimated annual range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {salaryData.map((item) => (
                  <tr key={item.role}>
                    <td className="px-4 py-3 font-medium text-slate-900">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#146EB4]`}>FAQs</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>Helpful answers for candidates exploring Amazon careers</h2>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#FF9900]`}>Ready to join Amazon?</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>Discover thousands of career opportunities and apply today through Amazon’s official careers portal.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://www.amazon.jobs/" className="inline-flex items-center justify-center rounded-full bg-[#FF9900] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f08b00]">Apply for Amazon Jobs</Link>
              <Link href="#categories" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">View Latest Vacancies</Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
