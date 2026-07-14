import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema } from '@/lib/seo'

const pageTitle = 'Qatar Airways Careers 2026 | Latest Job Vacancies & Apply Online'
const pageDescription = 'Explore the latest Qatar Airways Careers in 2026. Find Cabin Crew, Engineering, Pilots, IT, Airport Operations, Customer Services, Cargo, and Corporate job vacancies. Learn about eligibility, salary, employee benefits, hiring process, and apply online.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['Qatar Airways Careers', 'Qatar Airways Jobs', 'Qatar Jobs', 'Doha Jobs', 'Cabin Crew Jobs', 'Pilot Jobs', 'Engineering Jobs Qatar', 'Airport Jobs Qatar', 'Aviation Jobs 2026', 'Customer Service Jobs Qatar'],
  alternates: {
    canonical: 'https://careerhunt.online/qatar-airways-careers-2026'
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/qatar-airways-careers-2026',
    type: 'article',
    siteName: 'CareerHunt',
    images: [
      {
        url: 'https://careerhunt.online/Qatar Airways Careers.png',
        width: 1200,
        height: 630,
        alt: 'Qatar Airways Careers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['https://careerhunt.online/Qatar Airways Careers.png']
  }
}

const faqItems = [
  {
    question: 'How can I apply for Qatar Airways jobs?',
    answer: 'Visit the official Qatar Airways Careers portal at careers.qatarairways.com and browse available positions. Create an account, submit your complete resume, cover letter, and other required documents through their online application system.'
  },
  {
    question: 'Does Qatar Airways hire international applicants?',
    answer: 'Yes, Qatar Airways actively recruits talented professionals from around the world. They welcome applications from all nationalities and provide visa sponsorship for successful candidates.'
  },
  {
    question: 'What qualifications are required for Cabin Crew positions?',
    answer: 'Cabin Crew candidates typically need a high school diploma or equivalent, excellent English communication skills, customer service experience, professional appearance, and a valid passport for international travel.'
  },
  {
    question: 'What is the Qatar Airways hiring process?',
    answer: 'The process includes online application, resume screening, online assessment, HR interview, technical interview (if applicable), background verification, medical examination, offer letter, visa processing, and onboarding.'
  },
  {
    question: 'Are accommodation benefits provided?',
    answer: 'Yes, Qatar Airways provides housing allowances and accommodation assistance for eligible employees, particularly for expatriate staff relocating to Doha.'
  },
  {
    question: 'Do Cabin Crew receive training?',
    answer: 'Absolutely. Qatar Airways provides comprehensive initial training programs, regular recurrent training, and ongoing professional development for all cabin crew members.'
  },
  {
    question: 'Can fresh graduates apply for Qatar Airways jobs?',
    answer: 'Yes, Qatar Airways offers graduate recruitment programs and entry-level positions across various departments including customer service, IT, finance, and operations.'
  },
  {
    question: 'What are the salary ranges at Qatar Airways?',
    answer: 'Salaries vary by role, experience, and location. Cabin Crew typically earn 8,000-13,000 QAR monthly, while Pilots can earn 25,000-50,000 QAR or more. IT and Engineering roles offer competitive packages between 12,000-22,000 QAR.'
  },
  {
    question: 'Is previous airline experience required?',
    answer: 'While airline experience is beneficial, it\'s not always required. Qatar Airways trains candidates with relevant customer service or technical backgrounds. Some specialized roles (like pilots) require specific certifications.'
  },
  {
    question: 'How long does the Qatar Airways recruitment process take?',
    answer: 'The entire recruitment process typically takes 4-8 weeks, depending on the role and position level. This includes application review, interviews, medical checks, background verification, and visa processing.'
  }
]

const jobCategories = [
  {
    title: 'Cabin Crew & Cabin Services',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57889&listFilterMode=1',
    description: 'Help deliver Qatar Airways\' award-winning onboard hospitality and passenger experience.',
    icon: '✈️'
  },
  {
    title: 'Cargo & Airport Operations',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57890&listFilterMode=1',
    description: 'Join airport operations, cargo logistics, baggage handling, and ground support teams.',
    icon: '📦'
  },
  {
    title: 'Corporate & Commercial',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57891&listFilterMode=1',
    description: 'Explore careers in Finance, HR, Sales, Marketing, Procurement, Administration, Legal, and Business Development.',
    icon: '💼'
  },
  {
    title: 'Engineering',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57892&listFilterMode=1',
    description: 'Aircraft maintenance, avionics, quality assurance, maintenance planning, and engineering support.',
    icon: '🔧'
  },
  {
    title: 'Pilots & Flight Operations',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57893&listFilterMode=1',
    description: 'Captain, First Officer, Flight Operations, Flight Dispatch, Simulator, and Flight Safety careers.',
    icon: '🛩️'
  },
  {
    title: 'Information Technology',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57894&listFilterMode=1',
    description: 'Software Engineering, Cyber Security, AI, Cloud Computing, Data Analytics, DevOps, Infrastructure, and Enterprise Systems.',
    icon: '💻'
  },
  {
    title: 'Customer Services',
    href: 'https://careers.qatarairways.com/global/SearchJobs?7330=57895&listFilterMode=1',
    description: 'Airport customer service, reservations, travel support, and passenger assistance.',
    icon: '🎧'
  }
]

const benefits = [
  'Tax-Free Salary',
  'Competitive Compensation',
  'Health Insurance',
  'Annual Leave',
  'Staff Travel Benefits',
  'Career Development',
  'International Work Environment',
  'Learning & Training Programs',
  'Employee Discounts',
  'Modern Fleet Experience',
  'Global Career Opportunities',
  'Performance-Based Growth'
]

const requirements = [
  'Relevant educational qualifications',
  'English communication skills',
  'Valid passport',
  'Customer service skills',
  'Technical certifications (where applicable)',
  'Relevant work experience',
  'Professional attitude',
  'Teamwork',
  'Medical fitness (role dependent)',
  'Ability to relocate when required'
]

const recruitmentSteps = [
  'Online Application',
  'Resume Screening',
  'Online Assessment',
  'HR Interview',
  'Technical Interview',
  'Background Verification',
  'Medical Examination',
  'Offer Letter',
  'Visa Processing',
  'Onboarding'
]

const salaryData = [
  { role: 'Cabin Crew', salary: 'QAR 8,000 - QAR 13,000', benefits: 'Flight benefits, training' },
  { role: 'Customer Services', salary: 'QAR 7,000 - QAR 11,000', benefits: 'Performance incentives' },
  { role: 'Cargo Operations', salary: 'QAR 8,500 - QAR 12,500', benefits: 'Operational allowances' },
  { role: 'Airport Operations', salary: 'QAR 8,000 - QAR 12,000', benefits: 'Shift allowances' },
  { role: 'Engineering', salary: 'QAR 13,000 - QAR 22,000', benefits: 'Technical allowances' },
  { role: 'Information Technology', salary: 'QAR 12,000 - QAR 20,000', benefits: 'Digital development support' },
  { role: 'Corporate', salary: 'QAR 12,000 - QAR 18,000', benefits: 'Career growth opportunities' },
  { role: 'Pilot', salary: 'QAR 25,000 - QAR 50,000+', benefits: 'Tax-free salary, housing' }
]

const hiringTips = [
  'Build an ATS-friendly resume',
  'Tailor your CV for each role',
  'Highlight measurable achievements',
  'Prepare for behavioural interviews',
  'Improve English communication skills',
  'Keep professional certifications updated',
  'Apply only through the official careers website'
]

const relatedJobs = [
  {
    title: 'Emirates Group Careers',
    href: '/emirates-group-careers-uae-2026',
    description: 'Explore airline jobs in Dubai with premium cabin crew, ground operations, and corporate roles.'
  },
  {
    title: 'Etihad Airways Careers',
    href: '/etihad-airways-careers-2026',
    description: 'Find the latest Etihad vacancies in Abu Dhabi across customer service and technical teams.'
  },
  {
    title: 'FlyDubai Careers',
    href: '/flydubai-careers-2026',
    description: 'Browse FlyDubai openings for cabin crew, airport operations, and corporate support roles.'
  },
  {
    title: 'Air Arabia Careers',
    href: '/air-arabia-careers-2026',
    description: 'Discover Air Arabia jobs across UAE, Egypt, Morocco, and international destinations.'
  },
  {
    title: 'Saudi Airlines Careers',
    href: '/saudi-airlines-careers-2026',
    description: 'Explore Saudia airline careers in Riyadh and across the Middle East region.'
  },
  {
    title: 'Oman Air Careers',
    href: '/oman-air-careers-2026',
    description: 'Find career opportunities with Oman Air in Muscat and international airports.'
  }
]

export default function QatarAirwaysCareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'Qatar Airways Careers 2026', item: '/qatar-airways-careers-2026' }
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/qatar-airways-careers-2026',
    datePublished: '2026-07-05',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['Qatar Airways Careers', 'Qatar Airways Jobs', 'Qatar Jobs', 'Doha Jobs', 'Cabin Crew Jobs', 'Pilot Jobs', 'Engineering Jobs Qatar', 'Airport Jobs Qatar', 'Aviation Jobs 2026']
  })

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <article className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <NativeAd className="mx-auto my-10 max-w-3xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="/Qatar Airways Careers.png"
            alt="Qatar Airways Careers banner"
            fill
            className="object-cover"
            priority
          />
          
        </div>

        <div className="relative mx-auto flex min-h-[400px] flex-col justify-end px-4 py-12 sm:min-h-[500px] sm:px-6 md:min-h-[600px] lg:min-h-[620px] lg:px-10 lg:py-20 xl:px-16 max-w-7xl">
          <div className="mb-4 rounded-full bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.24em] text-white/80 sm:mb-6 sm:px-4 sm:text-sm">
            <Link href="/" className="underline-offset-4 hover:text-white">Home</Link> /{' '}
            <Link href="/blog" className="underline-offset-4 hover:text-white">Career Insights</Link> /{' '}
            <span className="font-semibold">Qatar Airways Careers</span>
          </div>
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <span className="inline-flex rounded-full bg-[#5C0E62]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:px-4 sm:py-2">Qatar Airways 2026</span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Qatar Airways Careers 2026</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl lg:leading-8">
              Explore the latest Qatar Airways job vacancies across Cabin Crew, Engineering, Pilots, Customer Services, Cargo, Airport Operations, Corporate, Commercial, and Information Technology. Discover exciting career opportunities with one of the world's leading airlines.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center pt-2">
              <Link href="https://careers.qatarairways.com/" className="inline-flex items-center justify-center rounded-full bg-[#5C0E62] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8E2157] sm:py-3">
                Apply Now
              </Link>
              <Link href="https://careers.qatarairways.com/" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:py-3">
                View All Vacancies
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-200 sm:text-sm pt-2">
              <span>Published: July 05, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>Reading time: 12 min</span>
              <span className="hidden sm:inline">•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 sm:px-6 md:py-12 lg:px-16">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.4fr_0.85fr] lg:items-start">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Company at a Glance */}
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Qatar Airways at a glance</h2>
              <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Company name</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Qatar Airways</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Industry</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Aviation & Airline</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Founded</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">1993</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Headquarters</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Doha, Qatar</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Employment type</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Full-Time</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Eligible nationalities</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">All Nationalities</p>
                </div>
                <div className="col-span-1 sm:col-span-2 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Official website</p>
                  <Link href="https://careers.qatarairways.com/" className="mt-2 block text-base sm:text-lg font-semibold text-[#5C0E62] underline break-words">
                    careers.qatarairways.com
                  </Link>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">About Qatar Airways</h2>
                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-700">
                  <p>Qatar Airways, founded in 1993, has transformed from a regional carrier into one of the world's most respected and awarded airlines. Headquartered in Doha, the airline operates a modern fleet of more than 250 state-of-the-art aircraft, connecting over 150 destinations across the globe with unmatched service excellence and operational reliability.</p>
                  <p>As the national carrier of Qatar, the airline is a symbol of innovation and premium aviation. Qatar Airways operates one of the youngest and most technologically advanced fleets in the industry, featuring aircraft such as the Boeing 787 Dreamliner and the Airbus A350. The airline's hub at Hamad International Airport in Doha serves as a strategic gateway connecting East and West.</p>
                  <p>The company is renowned for its award-winning service, world-class amenities, and commitment to customer satisfaction. Qatar Airways has consistently ranked among the top three airlines globally by independent aviation organizations, receiving accolades for cabin service, business class, and overall operations.</p>
                  <p>Qatar Airways maintains a diverse and talented workforce of over 35,000 employees from more than 140 countries. The airline fosters a multicultural work environment that celebrates diversity, inclusivity, and professional growth. The company invests significantly in employee training, development programs, and career advancement opportunities.</p>
                </div>
              </div>

              {/* Current Vacancies */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Current Vacancies</h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500">Official jobs page with the latest available opportunities.</p>
                  </div>
                  <div className="rounded-full bg-[#5C0E62] px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">Current Open Positions: 150+</div>
                </div>
                <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
                  <Link href="https://careers.qatarairways.com/" className="inline-flex items-center justify-center rounded-full bg-[#5C0E62] px-6 py-2.5 sm:py-3 text-sm font-semibold text-white transition hover:bg-[#8E2157]">
                    View All Jobs
                  </Link>
                  <Link href="https://careers.qatarairways.com/" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-2.5 sm:py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Official Careers Portal
                  </Link>
                </div>
              </div>

              {/* Job Categories */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Job Categories</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {jobCategories.map((category) => (
                    <div key={category.title} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 sm:p-6 hover:shadow-md transition">
                      <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#5C0E62]/10 text-xl sm:text-2xl">{category.icon}</div>
                      <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-slate-900">{category.title}</h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{category.description}</p>
                      <Link href={category.href} className="mt-4 sm:mt-5 inline-flex rounded-full bg-[#C9A227] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#b8942b]">
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Work at Qatar Airways */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Why Work at Qatar Airways?</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <p className="text-sm sm:text-base font-semibold text-slate-900">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Requirements */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">General Job Requirements</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {requirements.map((requirement) => (
                    <div key={requirement} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruitment Timeline */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Recruitment Process Timeline</h2>
                <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  {recruitmentSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 sm:gap-4">
                      <div className="mt-1 flex h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#5C0E62] text-xs sm:text-sm font-semibold text-white">{index + 1}</div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{step}</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">Follow the process carefully and keep your documents ready for review.</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Salary Information */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Salary Information</h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">Salaries vary based on experience, location, and role. All figures are estimated monthly salaries.</p>
                <div className="mt-5 sm:mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-3 sm:px-5 py-3 sm:py-4 font-semibold">Role</th>
                        <th className="px-3 sm:px-5 py-3 sm:py-4 font-semibold">Salary Range</th>
                        <th className="px-3 sm:px-5 py-3 sm:py-4 font-semibold hidden sm:table-cell">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      {salaryData.map((item) => (
                        <tr key={item.role}>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 font-semibold text-slate-900 text-xs sm:text-sm">{item.role}</td>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap font-medium text-[#5C0E62]">{item.salary}</td>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 text-slate-600 hidden sm:table-cell text-xs sm:text-sm">{item.benefits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tips to Increase Hiring Chances */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-2 border-[#C9A227] bg-gradient-to-br from-[#FDF8F0] to-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Tips to Increase Your Hiring Chances</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {hiringTips.map((tip, index) => (
                    <div key={tip} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A227]/20 text-sm font-bold text-[#C9A227]">{index + 1}</div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900">{tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Related Careers */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm lg:hidden" id="related-careers-mobile">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Related Careers</h2>
                <div className="mt-5 sm:mt-6 space-y-4">
                  {relatedJobs.map((job) => (
                    <Link key={job.title} href={job.href} className="block rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 transition hover:border-[#5C0E62]">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">{job.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">{job.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="faqs">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                  {faqItems.map((faq) => (
                    <div key={faq.question} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 hover:border-[#5C0E62] transition">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">{faq.question}</h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Quick Navigation */}
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-[#FDF8F0] p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Quick Navigation</h2>
                <nav className="mt-5 lg:mt-6 space-y-2 text-xs lg:text-sm text-slate-700">
                  {['About Qatar Airways', 'Current Vacancies', 'Job Categories', 'Why Work at Qatar Airways?', 'General Job Requirements', 'Salary Information', 'FAQs'].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block rounded-2xl px-3 lg:px-4 py-2 lg:py-3 hover:bg-[#5C0E62]/10 transition font-medium text-slate-800">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Careers */}
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Related Careers</h2>
                <div className="mt-5 lg:mt-6 space-y-4">
                  {relatedJobs.map((job) => (
                    <Link key={job.title} href={job.href} className="block rounded-2xl lg:rounded-3xl border border-slate-200 bg-slate-50 p-4 lg:p-5 transition hover:border-[#5C0E62] hover:bg-slate-100">
                      <h3 className="text-sm lg:text-base font-semibold text-slate-900">{job.title}</h3>
                      <p className="mt-2 text-xs lg:text-sm text-slate-600 line-clamp-2">{job.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
        <section className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-gradient-to-r from-[#5C0E62]/5 via-[#8E2157]/5 to-[#C9A227]/5 p-6 sm:p-8 lg:p-10 text-center shadow-sm">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#5C0E62] font-bold">Ready to Start Your Career?</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">Join Qatar Airways and Explore Exciting Career Opportunities</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">Discover positions across aviation, engineering, customer services, technology, and corporate functions at one of the world's leading airlines.</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="https://careers.qatarairways.com/" className="inline-flex items-center justify-center rounded-full bg-[#5C0E62] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white transition hover:bg-[#8E2157]">
              Apply for Qatar Airways Jobs
            </Link>
            <Link href="/jobs" className="inline-flex items-center justify-center rounded-full border-2 border-[#5C0E62]/30 bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-[#5C0E62] transition hover:bg-slate-50">
              Browse All Aviation Jobs
            </Link>
          </div>
        </section>
      </section>
    </article>
  )
}
