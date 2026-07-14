'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'vacancies', label: 'Vacancies' },
  { id: 'categories', label: 'Categories' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'process', label: 'Process' },
  { id: 'salary', label: 'Salary' },
  { id: 'faqs', label: 'FAQs' },
]

const categoryCards = [
  {
    title: 'Port Operations',
    description: 'Support vessel operations, terminal throughput, berth planning, crane handling, and safe cargo movement across global ports.',
    icon: '⚓',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Shape efficient freight movement, route planning, inventory control, and customer-centric supply chain solutions.',
    icon: '🚚',
  },
  {
    title: 'Warehouse Operations',
    description: 'Drive inventory accuracy, distribution flow, storage optimization, and fulfillment excellence in high-volume settings.',
    icon: '🏭',
  },
  {
    title: 'Engineering',
    description: 'Join mechanical, electrical, civil, and marine teams delivering resilient infrastructure and next-generation port systems.',
    icon: '🛠️',
  },
  {
    title: 'Technology',
    description: 'Build software, cloud, cybersecurity, AI, and data platforms that power intelligent logistics worldwide.',
    icon: '💻',
  },
  {
    title: 'Finance & Accounting',
    description: 'Advance commercial performance, reporting, controls, and strategic planning in a truly international business.',
    icon: '📊',
  },
  {
    title: 'Human Resources',
    description: 'Support talent acquisition, employee experience, workforce planning, and people development across the network.',
    icon: '🤝',
  },
  {
    title: 'Sales & Commercial',
    description: 'Grow long-term customer relationships, trade opportunities, and cross-border business across key markets.',
    icon: '💼',
  },
  {
    title: 'Procurement',
    description: 'Source strategic suppliers, manage contracts, and help secure resilient, sustainable operations at scale.',
    icon: '🧾',
  },
  {
    title: 'Legal & Compliance',
    description: 'Guide governance, risk, regulatory matters, and high-standard compliance across the organization.',
    icon: '⚖️',
  },
  {
    title: 'Customer Service',
    description: 'Deliver outstanding support to customers, partners, and stakeholders across complex global logistics flows.',
    icon: '🎧',
  },
  {
    title: 'Graduate Program',
    description: 'Offer a launchpad for ambitious graduates to grow through training, mentorship, and real project ownership.',
    icon: '🎓',
  },
  {
    title: 'Internship Program',
    description: 'Gain practical experience in operations, technology, finance, and commercial teams while building your future career.',
    icon: '🌍',
  },
]

const benefits = [
  'Competitive Salary',
  'Health Insurance',
  'Paid Annual Leave',
  'Retirement Benefits',
  'Performance Bonuses',
  'Learning & Development',
  'Global Career Opportunities',
  'International Work Environment',
  'Leadership Programs',
  'Employee Wellbeing',
  'Career Growth',
  'Flexible Working (where applicable)',
]

const requirements = [
  'Relevant degree or diploma',
  'English communication skills',
  'Technical certifications (if applicable)',
  'Previous experience (role dependent)',
  'Computer proficiency',
  'Teamwork',
  'Leadership skills',
  'Problem-solving ability',
  'Customer-focused mindset',
  'Safety awareness',
]

const timelineSteps = [
  {
    title: 'Online Application',
    description: 'Submit your CV and submit a tailored application through the official DP World careers portal.',
  },
  {
    title: 'Resume Screening',
    description: 'Recruiters review your profile for experience, qualifications, and alignment to the role.',
  },
  {
    title: 'Recruiter Review',
    description: 'A recruiter may reach out to confirm your fit and explain the next stage of the process.',
  },
  {
    title: 'Assessment Test',
    description: 'Some roles require aptitude, technical, or situational assessments to validate core capabilities.',
  },
  {
    title: 'Interview',
    description: 'Candidates often meet with hiring managers and functional teams to explore experience and potential.',
  },
  {
    title: 'Background Verification',
    description: 'Reference checks and identity verification help ensure a safe and compliant onboarding process.',
  },
  {
    title: 'Medical Examination',
    description: 'Certain operational and safety-critical roles may require a medical evaluation before joining.',
  },
  {
    title: 'Offer Letter',
    description: 'Successful candidates receive an offer detailing compensation, benefits, start dates, and conditions.',
  },
  {
    title: 'Onboarding',
    description: 'New hires complete onboarding, orientation, and essential learning before stepping into their role.',
  },
]

const salaryRows = [
  { role: 'Warehouse Associate', salary: 'AED 7,000 - AED 12,000', note: 'Varies by location and shift pattern' },
  { role: 'Logistics Coordinator', salary: 'AED 9,000 - AED 16,000', note: 'Based on experience and operating environment' },
  { role: 'Port Operator', salary: 'AED 8,000 - AED 14,000', note: 'Often includes overtime and shift allowances' },
  { role: 'Mechanical Engineer', salary: 'AED 14,000 - AED 24,000', note: 'Seniority and project scope affect pay' },
  { role: 'Software Engineer', salary: 'AED 16,000 - AED 30,000', note: 'Depends on technical stack and experience' },
  { role: 'Finance Analyst', salary: 'AED 12,000 - AED 20,000', note: 'Linked to qualifications and business scope' },
  { role: 'Supply Chain Manager', salary: 'AED 18,000 - AED 35,000', note: 'Reflects leadership and regional exposure' },
  { role: 'Operations Supervisor', salary: 'AED 13,000 - AED 22,000', note: 'Role complexity and team size influence range' },
  { role: 'Project Manager', salary: 'AED 20,000 - AED 38,000', note: 'Typically higher for international delivery programs' },
  { role: 'Commercial Manager', salary: 'AED 22,000 - AED 40,000', note: 'Compensation reflects market and account portfolio' },
]

const faqItems = [
  {
    question: 'How do I apply for DP World jobs?',
    answer: 'Visit the official careers portal, select a suitable vacancy, and complete the online application with your updated CV and supporting materials.',
  },
  {
    question: 'Does DP World hire international candidates?',
    answer: 'Yes. DP World recruits talent from many nationalities and supports roles across regional and global operations.',
  },
  {
    question: 'What qualifications are required?',
    answer: 'Requirements vary by role, but many positions ask for a relevant qualification, English fluency, technical knowledge, and prior industry experience.',
  },
  {
    question: 'Are remote jobs available?',
    answer: 'Remote opportunities are limited and mostly focused on corporate, technical, and support functions, while many operational roles are location-based.',
  },
  {
    question: 'What benefits does DP World provide?',
    answer: 'Employees often receive competitive salary packages, medical coverage, leave benefits, retirement support, bonuses, and professional development opportunities.',
  },
  {
    question: 'Does DP World offer internships?',
    answer: 'Yes. DP World runs internship and early-career opportunities for students and recent graduates in operations, technology, finance, and commercial functions.',
  },
  {
    question: 'How long does the recruitment process take?',
    answer: 'The timeline depends on role complexity, but candidates can expect several weeks from application to offer, depending on screening and interview stages.',
  },
  {
    question: 'What countries does DP World hire in?',
    answer: 'DP World employs people across more than 75 countries and offers positions in the Middle East, Europe, Africa, Asia, and the Americas.',
  },
  {
    question: 'Are fresh graduates eligible?',
    answer: 'Yes. DP World welcomes graduates through trainee, graduate, and early career programs across multiple business functions.',
  },
  {
    question: 'Where can I check current vacancies?',
    answer: 'The best source is the official DP World careers portal and CareerHunt’s updated logistics career listings for current openings.',
  },
]

const relatedPages = [
  {
    title: 'DHL Careers',
    description: 'Explore global logistics and supply chain roles with one of the world’s leading express delivery networks.',
    href: '/dhl-careers-uae-2026',
  },
  {
    title: 'Emirates Group Careers',
    description: 'Find aviation, airport, operations, and corporate careers across the UAE and beyond.',
    href: '/emirates-group-careers-uae-2026',
  },
  {
    title: 'Qatar Airways Careers',
    description: 'Browse premium aviation, customer service, operations, and corporate roles in Qatar.',
    href: '/qatar-airways-careers-2026',
  },
  {
    title: 'Amazon Careers',
    description: 'Review global opportunities in technology, operations, customer service, and logistics.',
    href: '/amazon-careers-2026',
  },
  {
    title: 'FedEx Careers',
    description: 'See current roles in transport, operations, engineering, and customer-facing logistics teams.',
    href: '/fedex-careers-usa-2026',
  },
  {
    title: 'Noon Careers UAE',
    description: 'Discover regional e-commerce and logistics career growth opportunities.',
    href: '/noon-careers-uae-2026',
  },
]

export default function DPWorldCareersPage() {
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
          <Image
            src="/DP World Careers.png"
            alt="DP World Careers hero banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center"
            quality={100}
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,166,81,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(0,90,135,0.22),_transparent_35%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 md:min-h-[620px] md:py-20 lg:px-10 xl:px-16">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">careerinsights</Link>
            <span>/</span>
            <span className="text-white">DP World Careers 2026</span>
          </div>

          <div className="max-w-4xl space-y-5">
            <span className="inline-flex rounded-full border border-[#00A651]/40 bg-[#00A651]/20 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#9BE9B7]">
              DP World Careers 2026
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              DP World Careers 2026
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore the latest DP World careers across the UAE and worldwide. Discover opportunities in logistics, ports, shipping, technology, engineering, finance, warehouse operations, and supply chain management.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full bg-[#00A651] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#008b3f]">
                Apply Now
              </Link>
              <Link href="#vacancies" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Current Vacancies
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-300">
              <span>Published: July 11, 2026</span>
              <span>•</span>
              <span>Last updated: July 11, 2026</span>
              <span>•</span>
              <span>Reading time: 10 min</span>
              <span>•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-12 xl:px-16" id="overview" data-section>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Company at a glance</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['Company Name', 'DP World'],
                ['Industry', 'Logistics, Ports & Supply Chain'],
                ['Founded', '2005'],
                ['Headquarters', 'Dubai, United Arab Emirates'],
                ['Employment Type', 'Full-Time'],
                ['Eligible Nationalities', 'All Nationalities'],
                ['Company Size', '115,000+ Employees'],
                ['Countries Served', '75+ Countries'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#00A651]/20 bg-[#f4fff8] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#007a3d]">Official website</p>
              <Link href="https://www.dpworld.com" className="mt-2 block text-lg font-semibold text-[#005A87] underline">
                dpworld.com
              </Link>
              <Link href="https://careers.dpworld.com" className="mt-2 block text-sm font-semibold text-[#00A651] underline">
                careers.dpworld.com
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">About DP World</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              <p>
                DP World is one of the world’s most influential logistics and port operators, with a long heritage in connecting trade, commerce, and supply chain ecosystems across continents. Founded in 2005 and headquartered in Dubai, the company has grown from a regional operator into a global gateway for shipping, warehousing, inland logistics, and industrial services.
              </p>
              <p>
                Its global logistics network reaches more than 75 countries and includes ports, terminals, free zones, logistics parks, and digital trade solutions. The company’s scale matters because it handles millions of containers and large volumes of cargo every year, making it a central engine for global commerce and international business growth.
              </p>
              <p>
                In ports and terminals, DP World plays an essential role in enabling efficient vessel berthing, cargo handling, customs flows, and integrated transport services. Its operations are designed to keep supply chains resilient and competitive, whether supporting consumer goods, industrial equipment, or high-value commodities moving through major trade routes.
              </p>
              <p>
                Innovation is a major differentiator. DP World has invested heavily in digital transformation, automation, data analytics, and predictive operations that improve visibility, reduce delays, and strengthen the performance of its terminals and logistics networks. The company increasingly blends advanced engineering with real-time tracking and smart modernization initiatives.
              </p>
              <p>
                Sustainability is also deeply embedded in its strategy. Through cleaner energy initiatives, emissions reduction targets, responsible operations, and environmental stewardship, DP World continues to align business growth with long-term climate action and efficient infrastructure development.
              </p>
              <p>
                Professionals are drawn to DP World because it combines global reach with an international culture of collaboration, accountability, and continuous improvement. The company is especially attractive to those seeking careers in logistics, port operations, engineering, finance, technology, and commercial roles with a strong emphasis on performance and long-term development.
              </p>
              <p>
                In addition to its scale, DP World offers meaningful career development pathways through training, leadership programs, technical learning, and internal mobility. Employees benefit from a culture that values safety, teamwork, problem solving, and the ability to contribute to operations that matter at a global scale.
              </p>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
            <h3 className="text-xl font-semibold text-slate-900">Quick navigation</h3>
            <nav className="space-y-2 text-sm text-slate-700">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className={`block rounded-2xl px-3 py-2 transition ${activeSection === section.id ? 'bg-[#00A651] text-white' : 'hover:bg-white'}`}>
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="rounded-2xl border border-[#005A87]/15 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#005A87]">Need help?</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Start with the official careers portal or explore current vacancies on CareerHunt to compare roles by sector and location.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="vacancies" data-section>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#005A87] via-[#0c5579] to-[#00A651] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">Current Open Positions</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">100+ Jobs Available</h2>
              <p className="mt-4 text-base leading-8 text-slate-100">
                DP World regularly posts jobs across ports, terminals, logistics operations, engineering, supply chain, finance, technology, sales, and senior leadership. Explore the latest openings and apply directly through the official careers portal.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#005A87] transition hover:bg-slate-100">
                View All Jobs
              </Link>
              <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Official Careers Website
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="categories" data-section>
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005A87]">Career paths</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Popular DP World job categories</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Choose a functional area that matches your experience, from frontline operations and engineering to technology, finance, procurement, and graduate development.</p>
          </div>
          <Link href="https://careers.dpworld.com" className="inline-flex items-center text-sm font-semibold text-[#00A651] underline-offset-4 hover:underline">Explore all opportunities</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((card) => (
            <div key={card.title} className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4fff8] text-2xl">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              <Link href="https://careers.dpworld.com" className="mt-5 inline-flex rounded-full bg-[#005A87] px-4 py-2 text-sm font-semibold text-white transition">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="benefits" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">Why work here</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Why professionals choose DP World</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">DP World offers a compelling mix of stability, growth, international exposure, and purpose-driven work in a sector that keeps the global economy moving.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="process" data-section>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005A87]">General requirements</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">What employers typically look for</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Requirements vary by role, location, and business function. However, most DP World opportunities value a strong combination of education, communication, practical experience, and a safety-first mindset.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {requirements.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">Hiring process</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Recruitment timeline</h2>
            <div className="mt-8 space-y-5">
              {timelineSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#00A651] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="salary" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005A87]">Salary guide</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Typical compensation ranges</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">Salaries at DP World vary by country, experience, role seniority, and operational requirements. The examples below provide a useful benchmark for planning your application.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Position</th>
                  <th className="px-4 py-3 font-semibold">Estimated Salary</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map((row) => (
                  <tr key={row.role} className="border-t border-slate-200">
                    <td className="px-4 py-4 font-semibold text-slate-900">{row.role}</td>
                    <td className="px-4 py-4 text-slate-700">{row.salary}</td>
                    <td className="px-4 py-4 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">Life at DP World</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">A global workplace built on diversity, innovation, and collaboration</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              <p>DP World is known for its inclusive culture, commitment to safety, and emphasis on teamwork across diverse geographies. Employees work alongside colleagues from many backgrounds and bring different perspectives to solving complex operational challenges.</p>
              <p>The company’s culture is shaped by innovation, sustainability, and accountability. From engineering and digital transformation to customer service and commercial management, the organization supports initiatives that keep operations resilient, efficient, and future-ready.</p>
              <p>Its community impact is also significant. Through education, local development, environmental stewardship, and employee volunteering, DP World builds long-term value beyond the workplace and strengthens the communities it serves.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Diversity', 'Inclusive and multicultural teams'],
              ['Innovation', 'Digital platforms and automation'],
              ['Sustainability', 'Environmental and social responsibility'],
              ['Safety Culture', 'Risk-first operations and standards'],
              ['Global Collaboration', 'Cross-border teamwork and shared goals'],
              ['Employee Development', 'Training, mentoring, and growth pathways'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f8fffa] via-white to-[#f4f8fb] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005A87]">Early careers</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Graduate and internship programs</h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">DP World invests in future leaders through graduate development programmes, internships, leadership pathways, and early-career opportunities that help ambitious professionals grow.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full bg-[#00A651] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#008b3f]">
                Explore Graduate Roles
              </Link>
              <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
                View Internships
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ['Graduate Development Programme', 'Structured learning, mentorship, and project-based exposure for early-career professionals.'],
              ['Internship Opportunities', 'Hands-on experiences for students and recent graduates in operations and support functions.'],
              ['Leadership Programs', 'Opportunities to develop management capabilities and future-ready leadership skills.'],
              ['Student Opportunities', 'Flexible entry points for students looking to build experience before graduation.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-16" id="faqs" data-section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005A87]">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">These questions cover the most common hiring questions for DP World careers, including application steps, qualifications, benefits, internships, and the recruitment timeframe.</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00A651]">Related careers</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Explore more logistics and global employer pages</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedPages.map((page) => (
            <div key={page.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4fff8] text-xl">📦</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{page.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{page.description}</p>
              <Link href={page.href} className="mt-5 inline-flex text-sm font-semibold text-[#005A87] underline-offset-4 hover:underline">
                View Jobs
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:pb-16 xl:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-10">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Ready to build your career with DP World?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">Join one of the world’s leading logistics and supply chain companies. Explore current vacancies and take the next step toward a rewarding international career.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="https://careers.dpworld.com" className="inline-flex items-center justify-center rounded-full bg-[#00A651] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#008b3f]">
              Apply for DP World Jobs
            </Link>
            <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
              Browse More Logistics Careers
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
