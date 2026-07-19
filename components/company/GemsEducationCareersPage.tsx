'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import { CompanyDisclaimer } from '@/components/company/CompanyDisclaimer'
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
  Landmark,
  Layers3,
  Sparkles,
  Users,
  Workflow,
  Zap,
  Globe2,
  ShieldCheck,
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
  { id: 'about', label: 'About GEMS' },
  { id: 'tracks', label: 'Role Tracks' },
  { id: 'skills', label: 'Skills & Responsibilities' },
  { id: 'why-join', label: 'Why Work Here' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'process', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary Info' },
  { id: 'faq', label: 'FAQs' },
]

const companyHighlights = [
  { label: 'Company', value: 'GEMS Education' },
  { label: 'Founded', value: '1959' },
  { label: 'Headquarters', value: 'Dubai, UAE' },
  { label: 'Schools', value: '40+ across UAE' },
  { label: 'Industry', value: 'K-12 Private Education' },
  { label: 'Employee Count', value: '10,000+ teaching + corporate' },
  { label: 'Hiring For', value: 'Teachers, School Leaders, HR, IT, Marketing, Facilities, Admissions' },
  { label: 'Official Careers', value: 'https://careers.gemseducation.com' },
]

const teachingTrack = [
  {
    title: 'Subject & Grade Teaching',
    description: 'Teach primary, secondary, or specialist subjects across the British, American, and IB curriculum landscape.',
  },
  {
    title: 'School Leadership',
    description: 'Lead departments, pastoral teams, or whole-school improvement initiatives in a high-growth network.',
  },
  {
    title: 'Student Support & Inclusion',
    description: 'Support learners with differentiated instruction, inclusion planning, and student wellbeing.',
  },
]

const corporateTrack = [
  {
    title: 'HR & Talent',
    description: 'Shape recruitment, onboarding, people operations, and workforce planning for a large school network.',
  },
  {
    title: 'IT & Digital Operations',
    description: 'Drive school systems, learning platforms, support tools, and operational technology.',
  },
  {
    title: 'Marketing & Admissions',
    description: 'Support admissions growth, parent engagement, school brand positioning, and campaign execution.',
  },
]

const teachingSkills = [
  'Classroom management and positive learning culture',
  'Curriculum delivery across British, American, or IB pathways',
  'Lesson planning, assessment, and learner progress tracking',
  'Cross-cultural communication with students and families',
  'Professional collaboration with school leaders and peers',
]

const corporateSkills = [
  'Stakeholder management across school and regional teams',
  'Process ownership, reporting, and operational coordination',
  'Cross-functional collaboration with HR, finance, and school leadership',
  'Customer service, data interpretation, and continuous improvement',
  'Digital literacy and service delivery in a multi-site network',
]

const whyWorkCards = [
  'Career progression across 40+ schools',
  'Professional development programs',
  'Multicultural environment',
  'Tax-free salary',
  'Relocation support for teachers',
  'Established employer since 1959',
  'Diverse curriculum exposure',
  'Strong support network for new hires',
]

const benefits = [
  'Visa sponsorship support',
  'Tax-free salary',
  'Housing allowance where applicable',
  'Professional development',
  'Multicultural team',
  'Career mobility across schools',
]

const teachingProcess = [
  'Application',
  'Screening',
  'Demo lesson or interview',
  'Reference check',
  'Offer',
  'Visa processing',
  'Onboarding',
]

const corporateProcess = [
  'Application',
  'Recruiter screen',
  'Hiring manager interview',
  'Panel or technical round',
  'Offer',
  'Onboarding',
]

const salaryCards = [
  { label: 'Teaching roles', value: 'AED 10,000–18,000+ monthly', note: 'Typical private school ranges vary by qualification, subject specialism, and school level.' },
  { label: 'Corporate roles', value: 'AED 12,000–25,000+ monthly', note: 'Corporate salaries vary by function, seniority, and experience in HR, IT, operations, and admissions.' },
]

const faqItems: FAQItem[] = [
  {
    question: 'What qualifications do I need to teach at GEMS Education?',
    answer: 'Most teaching roles require a recognised bachelor’s degree, teaching qualification or PGCE equivalent, and relevant licensing or ministry recognition where required for the UAE.',
  },
  {
    question: 'Does GEMS Education sponsor UAE work visas?',
    answer: 'Yes, GEMS Education typically supports the UAE work visa process for eligible hired employees, particularly for teaching and some corporate roles.',
  },
  {
    question: 'When does GEMS Education usually open teacher recruitment?',
    answer: 'Teacher recruitment is often strongest ahead of the September academic year, while additional openings can appear throughout the year depending on school needs and enrolment.',
  },
  {
    question: 'What curriculum do GEMS schools follow?',
    answer: 'GEMS schools operate across British, American, and IB curricula, so hiring needs vary by school, phase, and subject area.',
  },
  {
    question: 'Are there corporate roles beyond teaching?',
    answer: 'Yes. GEMS regularly recruits for HR, IT, marketing, facilities, admissions, operations, and school support functions.',
  },
  {
    question: 'Is relocation support provided for international teachers?',
    answer: 'Relocation support is commonly available for international hires, including visa guidance, documentation support, and onboarding assistance where applicable.',
  },
  {
    question: 'What is the typical teaching salary at GEMS?',
    answer: 'Teacher salaries in the UAE private education sector commonly fall in the AED 10,000–18,000 monthly range, depending on experience, subject expertise, and school level.',
  },
  {
    question: 'How does the corporate hiring process work?',
    answer: 'Corporate hiring usually follows application review, recruiter screening, manager interviews, a panel or technical round, and a formal offer stage.',
  },
  {
    question: 'Can I apply for roles in more than one emirate?',
    answer: 'Yes. GEMS has schools across Dubai, Abu Dhabi, Sharjah, and other emirates, so applicants may be considered for roles across the network.',
  },
  {
    question: 'Is GEMS Education a good employer for career growth?',
    answer: 'Yes. The group’s large network of schools and support functions creates multiple opportunities for career mobility and professional development.',
  },
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
              <span className="rounded-full bg-orange-50 p-2 text-[#FF6B35]">
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

export default function GemsEducationCareersPage() {
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Jobs', item: '/jobs' },
    { name: 'GEMS Education Careers UAE 2026', item: '/gems-education-careers-uae-2026' },
  ]), [])

  const articleSchema = useMemo(() => generateArticleSchema({
    title: 'GEMS Education Careers UAE 2026 | Teaching & Corporate Jobs | Apply Online',
    description: 'Explore GEMS Education careers in the UAE. Discover teaching roles, school leadership, corporate jobs, salary range, visa sponsorship information, and how to apply.',
    url: getCanonicalUrl('/gems-education-careers-uae-2026'),
    datePublished: '2026-07-19',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['GEMS Education Careers', 'GEMS Education Jobs UAE', 'Teaching Jobs Dubai', 'GEMS teacher salary', 'UAE education jobs', 'GEMS Education recruitment', 'Career Hunt'],
  }), [])

  const faqSchema = useMemo(() => generateFAQSchema(faqItems), [])
  const webPageSchema = useMemo(() => generateWebPageSchema({
    title: 'GEMS Education Careers UAE 2026 | Teaching & Corporate Jobs | Apply Online',
    description: 'Explore GEMS Education careers in the UAE. Discover teaching roles, school leadership, corporate jobs, salary range, visa sponsorship information, and how to apply.',
    url: getCanonicalUrl('/gems-education-careers-uae-2026'),
    breadcrumbItems: [
      { name: 'Home', item: '/' },
      { name: 'Jobs', item: '/jobs' },
      { name: 'GEMS Education Careers UAE 2026', item: '/gems-education-careers-uae-2026' },
    ],
  }), [])

  return (
    <article className={`${inter.className} bg-white text-slate-900`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/UAE education careers (1).png"
            alt="GEMS Education careers banner with classrooms, school leadership, and education teams"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.8),rgba(2,6,23,0.3),rgba(2,6,23,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.24),transparent_36%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-4 py-10 sm:min-h-[640px] sm:px-6 sm:py-14 lg:min-h-[720px] lg:px-10 lg:py-20 xl:px-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur sm:text-sm">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jobs" className="transition hover:text-white">Jobs</Link>
            <span>/</span>
            <span className="font-semibold text-white">GEMS Education Careers UAE 2026</span>
          </div>

          <div className="max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white">
              <Sparkles className="h-3.5 w-3.5" /> GEMS Education Careers UAE 2026
            </div>
            <h1 className={`${poppins.className} mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}>
              GEMS Education Careers UAE 2026
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Teach, lead, or support one of the UAE’s most established education networks across Dubai, Abu Dhabi, Sharjah, and beyond.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#tracks" className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e85b2d]">
                View Open Roles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="https://careers.gemseducation.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Learn About GEMS
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Published: Jul 19, 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock3 className="h-4 w-4" /> Updated: Jul 19, 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Users className="h-4 w-4" /> Reading time: 9 min</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/15 px-3 py-1.5 text-[#D1FAE5]">Multiple Roles</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/15 px-3 py-1.5 text-[#FFE4D8]">Visa Sponsorship</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <NativeAd className="mx-auto mb-8 max-w-3xl" />

        <div className="mb-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:text-[#FF6B35]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <CompanyDisclaimer companyName="GEMS Education" officialUrl="https://careers.gemseducation.com" />
        </div>

        <section id="about" className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className={`${poppins.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]`}>About GEMS Education</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl`}>One of the UAE’s most established K-12 education operators</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              GEMS Education grew from a family-led education business into one of the largest private school operators in the UAE, building a network that now spans multiple emirates and serves families seeking a wide range of international curricula. Its expansion over the past decades has been shaped by a strong focus on school quality, student outcomes, and steady investment in people.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              The group is known for offering a broad educational mix, including British, American, and International Baccalaureate pathways, which gives educators and school leaders the chance to work in different learning environments rather than a single curriculum model. That breadth is part of what makes recruitment at GEMS especially varied for teachers, subject specialists, and school leadership candidates.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              With schools across Dubai, Abu Dhabi, Sharjah, and other parts of the UAE, GEMS operates at a scale that requires strong coordination across school teams, support functions, and regional leadership. The organisation’s reach means careers here can be both mission-driven and operationally complex, giving employees the chance to work in large, professional settings with clear growth potential.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Its reputation is shaped by a long presence in the region, a large professional workforce, and a strong emphasis on standards, student wellbeing, and academic innovation. For many applicants, GEMS is attractive not only because it is a sizeable employer but because it combines educational impact with the structure and development opportunities of a large multi-campus network.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#FF6B35]/10 p-3 text-[#FF6B35]">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company Snapshot</p>
                <p className="text-lg font-semibold text-slate-900">GEMS Education at a glance</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {companyHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tracks" className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Two career tracks</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>Teaching and corporate roles, each with a different hiring rhythm</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              GEMS recruits for both education delivery and school support functions, so applicants should think in two lanes: teaching roles that are tied to academic calendars, and corporate roles that follow more standard business hiring cycles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-[#FF6B35]">
                <GraduationCap className="h-4 w-4" /> Teaching roles
              </div>
              <h3 className={`${poppins.className} mt-4 text-xl font-semibold text-slate-900`}>School-based positions</h3>
              <div className="mt-5 space-y-4">
                {teachingTrack.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                <Landmark className="h-4 w-4" /> Corporate & support roles
              </div>
              <h3 className={`${poppins.className} mt-4 text-xl font-semibold text-slate-900`}>Non-teaching career paths</h3>
              <div className="mt-5 space-y-4">
                {corporateTrack.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Teaching strengths</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>What strong teaching candidates usually bring</h2>
            <div className="mt-6 grid gap-3">
              {teachingSkills.map((skill) => (
                <div key={skill} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#10B981]" />
                  <p className="text-sm leading-7 text-slate-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Corporate strengths</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>What corporate candidates usually bring</h2>
            <div className="mt-6 grid gap-3">
              {corporateSkills.map((skill) => (
                <div key={skill} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#10B981]" />
                  <p className="text-sm leading-7 text-slate-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-join" className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Why join GEMS</p>
              <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>A wide platform for professional growth in education</h2>
            </div>
            <Link href="https://careers.gemseducation.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-[#FF6B35] hover:underline">
              Explore official careers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyWorkCards.map((card) => (
              <div key={card} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm leading-7 text-slate-200">{card}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Benefits</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>Support that matters for international and local hires</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Hiring process</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>Different paths for teaching and corporate talent</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Teaching track</p>
              <div className="mt-5 space-y-3">
                {teachingProcess.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35] text-sm font-semibold text-white">{index + 1}</div>
                    <p className="text-sm text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-lg font-semibold text-slate-900">Corporate track</p>
              <div className="mt-5 space-y-3">
                {corporateProcess.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981] text-sm font-semibold text-white">{index + 1}</div>
                    <p className="text-sm text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="salary" className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Salary information</p>
            <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>Separate expectations for teaching and corporate talent</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Salaries vary by qualification, experience, subject specialization for teachers, and school location. The figures below reflect typical ranges seen across the UAE private education sector.
            </p>
            <div className="mt-6 grid gap-4">
              {salaryCards.map((card) => (
                <div key={card.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">{card.label}</p>
                  <p className="mt-2 text-xl font-semibold text-[#FF6B35]">{card.value}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#FF6B35]/10 p-3 text-[#FF6B35]">
                <CircleDollarSign className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What to know</p>
                <p className="text-lg font-semibold text-slate-900">Salary planning for UAE education roles</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>Teachers often receive tax-free salaries plus housing or relocation support depending on the school and contract package.</p>
              <p>Corporate roles may offer compensation tied to function, seniority, and specialist expertise in HR, IT, operations, or admissions.</p>
              <p>UAE education hiring can be especially competitive for teachers with strong curriculum experience and international qualifications.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">FAQs</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold text-slate-900`}>Frequently asked questions about GEMS Education careers</h2>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Related pages</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/jobs?keyword=teacher" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-[#FF6B35]">
              <p className="text-lg font-semibold text-slate-900">Teaching jobs in UAE</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Discover teaching and academic leadership roles across the region.</p>
            </Link>
            <Link href="/salary-guide" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-[#FF6B35]">
              <p className="text-lg font-semibold text-slate-900">UAE salary guide</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Compare compensation expectations for education and corporate roles.</p>
            </Link>
            <Link href="/dhl-careers-uae-2026" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-[#FF6B35]">
              <p className="text-lg font-semibold text-slate-900">DHL careers UAE</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Explore logistics and supply chain opportunities in the UAE.</p>
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF6B35]">Ready to build your career?</p>
          <h2 className={`${poppins.className} mt-3 text-2xl font-semibold sm:text-3xl`}>Ready to build a career in UAE education?</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="https://careers.gemseducation.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e85b2d]">
              View Official GEMS Careers Page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Explore More UAE Jobs
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
