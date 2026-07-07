import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema } from '@/lib/seo'

const pageTitle = 'Emirates Group Careers in UAE 2026 | Latest Job Vacancies & Apply Online'
const pageDescription = 'Discover the latest Emirates Group Careers in UAE. Explore vacancies, requirements, salary information, benefits, and apply online for Cabin Crew, Engineering, IT, Customer Service, Pilots, and Corporate jobs.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: 'https://careerhunt.online/emirates-group-careers-uae-2026'
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/emirates-group-careers-uae-2026',
    siteName: 'CareerHunt',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription
  }
}

const faqItems = [
  {
    question: 'How can I apply for Emirates Group jobs in the UAE?',
    answer: 'Visit the official Emirates Group careers portal and submit your application through the current job listing. Most roles require a complete CV, a cover letter, and a valid email address.'
  },
  {
    question: 'What qualifications are needed for Emirates Group cabin crew roles?',
    answer: 'Cabin crew candidates typically need a high school diploma or equivalent, strong English communication skills, customer service experience, and a professional appearance.'
  },
  {
    question: 'Does Emirates Group hire non-UAE nationals?',
    answer: 'Yes, Emirates Group hires candidates from all nationalities, especially for roles in Dubai that require international experience and language skills.'
  },
  {
    question: 'What is the typical Emirates hiring timeline?',
    answer: 'The hiring process usually includes online application, resume screening, assessment test, interview, background verification, and onboarding, and can take several weeks.'
  },
  {
    question: 'Are Emirates Group salaries tax-free in the UAE?',
    answer: 'Yes, salaries paid in the UAE are generally tax-free for most employees, making Emirates an attractive employer for international professionals.'
  },
  {
    question: 'Does Emirates Group offer training programs?',
    answer: 'Emirates Group offers a range of training and development programs for cabin crew, engineering, IT, customer service, and corporate teams.'
  },
  {
    question: 'Can I apply for Emirates Group graduate jobs?',
    answer: 'Yes, Emirates Group regularly hires graduates into entry-level roles in operations, IT, finance, and customer service through its graduate recruitment programs.'
  },
  {
    question: 'How do I find the latest Emirates Group job vacancies?',
    answer: 'Check the Emirates Group careers landing page regularly and sign up for alerts to stay updated on new vacancies across Dubai and the wider UAE.'
  }
]

const jobCategories = [
  {
    title: 'Airline & Airport Operations',
    href: 'https://www.emiratesgroupcareers.com/airline-airport-operations/',
    description: 'Join ground handling, ramp services, and airport operations teams across Emirates and dnata.',
    icon: '✈️'
  },
  {
    title: 'Cabin Crew',
    href: 'https://www.emiratesgroupcareers.com/cabin-crew/',
    description: 'Work onboard world-class aircraft delivering premium service in a truly global airline.',
    icon: '🛫'
  },
  {
    title: 'Commercial',
    href: 'https://www.emiratesgroupcareers.com/commercial/',
    description: 'Support revenue, marketing, sales, and network planning for one of the world’s leading aviation brands.',
    icon: '💼'
  },
  {
    title: 'Corporate',
    href: 'https://www.emiratesgroupcareers.com/corporate/',
    description: 'Explore roles in finance, HR, legal, and corporate strategy across Emirates Group companies.',
    icon: '🏢'
  },
  {
    title: 'Customer Services',
    href: 'https://www.emiratesgroupcareers.com/customer-services/',
    description: 'Deliver exceptional support for passengers, customers, and travel partners worldwide.',
    icon: '🎧'
  },
  {
    title: 'Engineering',
    href: 'https://www.emiratesgroupcareers.com/engineering/',
    description: 'Maintain world-class aircraft and technical systems with cutting-edge engineering teams.',
    icon: '🔧'
  },
  {
    title: 'Information Technology',
    href: 'https://www.emiratesgroupcareers.com/information-technology/',
    description: 'Build digital solutions for airline operations, customer experience, and global IT platforms.',
    icon: '💻'
  },
  {
    title: 'Pilots',
    href: 'https://www.emiratesgroupcareers.com/pilots/',
    description: 'Fly state-of-the-art aircraft on international routes with a world-renowned flight operations team.',
    icon: '🛩️'
  },
  {
    title: 'UAE Nationals',
    href: 'https://www.emiratesgroupcareers.com/uae-nationals/',
    description: 'Access specialized opportunities and Emiratisation programs for UAE national candidates.',
    icon: '🇦🇪'
  }
]

const benefits = [
  'Tax-Free Salary',
  'Health Insurance',
  'Flight Benefits',
  'Annual Leave',
  'International Work Environment',
  'Career Development',
  'Training Programs',
  'Employee Discounts'
]

const relatedJobs = [
  {
    title: 'Qatar Airways Careers',
    href: '/jobs/qatar-airways-careers',
    description: 'Explore airline jobs in Qatar with premium cabin crew, ground operations, and corporate roles.'
  },
  {
    title: 'Etihad Airways Careers',
    href: '/jobs/etihad-airways-careers',
    description: 'Find the latest Etihad vacancies in Dubai and Abu Dhabi across customer service and technical teams.'
  },
  {
    title: 'FlyDubai Careers',
    href: '/jobs/flydubai-careers',
    description: 'Browse FlyDubai openings for cabin crew, airport operations, and corporate support roles.'
  },
  {
    title: 'Dubai Airport Careers',
    href: '/jobs/dubai-airport-careers',
    description: 'Discover jobs at Dubai Airport in security, operations, retail, and passenger services.'
  }
]

export default function EmiratesGroupCareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: 'Emirates Group Careers in UAE 2026', item: '/emirates-group-careers-uae-2026' }
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/emirates-group-careers-uae-2026',
    datePublished: '2026-07-05',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['Emirates Careers', 'Emirates Jobs UAE', 'Dubai Jobs', 'Cabin Crew Jobs', 'Emirates Group Careers 2026', 'UAE Jobs']
  })

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <article className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-80">
          <Image
            src="/Emirates Group Careers.png"
            alt="Emirates Group Careers banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        <div className="relative mx-auto flex min-h-[400px] flex-col justify-end px-4 py-12 sm:min-h-[500px] sm:px-6 md:min-h-[600px] lg:min-h-[620px] lg:px-10 lg:py-20 xl:px-16 max-w-7xl">
          <div className="mb-4 rounded-full bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.24em] text-white/80 sm:mb-6 sm:px-4 sm:text-sm">
            <Link href="/" className="underline-offset-4 hover:text-white">Home</Link> /{' '}
            <Link href="/blog" className="underline-offset-4 hover:text-white">Blog</Link> /{' '}
            <span className="font-semibold">Emirates Group Careers</span>
          </div>
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <span className="inline-flex rounded-full bg-red-700/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:px-4 sm:py-2">Emirates Careers 2026</span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Emirates Group Careers in UAE 2026</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl lg:leading-8">
              Explore the latest Emirates Group jobs in Dubai and across the UAE. Find vacancies in Cabin Crew, Engineering, IT, Customer Service, Pilots, and Corporate departments.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center pt-2">
              <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full bg-[#D71920] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:py-3">
                Apply Now
              </Link>
              <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:py-3">
                View All Vacancies
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-200 sm:text-sm pt-2">
              <span>Published: July 05, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>Reading time: 8 min</span>
              <span className="hidden sm:inline">•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 md:py-12 lg:px-16">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.4fr_0.85fr] lg:items-start xl:grid-cols-[1.4fr_0.85fr]">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Emirates Group at a glance</h2>
              <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Company name</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Emirates Group</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Industry</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Aviation & Travel Services</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Founded</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">1985</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Headquarters</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Dubai, UAE</p>
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
                  <Link href="https://www.emiratesgroupcareers.com/" className="mt-2 block text-base sm:text-lg font-semibold text-[#D71920] underline break-words">
                    www.emiratesgroupcareers.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">About Emirates Group</h2>
                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-700">
                  <p>Emirates Group has built a global aviation network since 1985, delivering award-winning service through Emirates airline, dnata, and a wide range of travel services. The company is recognized for innovation, premium passenger experiences, and strong operational excellence.</p>
                  <p>From Dubai to every major international hub, Emirates Group now operates a fleet of modern aircraft and supports a workforce of tens of thousands. Its global presence includes airline operations, airport logistics, catering, and travel technology across six continents.</p>
                  <p>The company culture blends high performance with an inclusive environment, welcoming colleagues from around the world. Emirates Group emphasizes professional development, mentoring, and multicultural teams where diverse perspectives are celebrated.</p>
                  <p>As a top employer in the UAE, Emirates Group attracts talent by offering world-class training, modern facilities, and a reputation for career growth in aviation, engineering, IT, customer service, and corporate functions.</p>
                  <p>Career growth opportunities at Emirates Group include structured development pathways, leadership programs, technical certifications, and internal mobility across operations, digital, and management roles.</p>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Current Vacancies</h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500">Official jobs page with the latest available opportunities.</p>
                  </div>
                  <div className="rounded-full bg-[#D71920] px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">Current Open Positions: 120+</div>
                </div>
                <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
                  <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full bg-[#D71920] px-6 py-2.5 sm:py-3 text-sm font-semibold text-white transition hover:bg-red-600">
                    View All Jobs
                  </Link>
                  <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-2.5 sm:py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Official Jobs Page
                  </Link>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Job Categories</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {jobCategories.map((category) => (
                    <div key={category.title} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 sm:p-6">
                      <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#D71920]/10 text-xl sm:text-2xl">{category.icon}</div>
                      <h3 className="mt-4 sm:mt-5 text-base sm:text-xl font-semibold text-slate-900">{category.title}</h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{category.description}</p>
                      <Link href={category.href} className="mt-4 sm:mt-5 inline-flex rounded-full bg-[#B4975A] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#8d7250]">
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Why Work at Emirates Group?</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <p className="text-sm sm:text-base font-semibold text-slate-900">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Hiring Process Timeline</h2>
                <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  {[
                    'Online Application',
                    'Resume Screening',
                    'Assessment Test',
                    'Interview',
                    'Background Verification',
                    'Job Offer',
                    'Onboarding'
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 sm:gap-4">
                      <div className="mt-1 flex h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D71920] text-xs sm:text-sm font-semibold text-white">{index + 1}</div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{step}</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{step === 'Interview' ? 'Prepare examples of customer service excellence and role-specific experience.' : 'Follow the process carefully and keep your documents ready for review.'}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Salary Information</h2>
                <div className="mt-5 sm:mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-3 sm:px-5 py-3 sm:py-4">Role</th>
                        <th className="px-3 sm:px-5 py-3 sm:py-4">Salary</th>
                        <th className="px-3 sm:px-5 py-3 sm:py-4 hidden sm:table-cell">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      {[
                        { role: 'Cabin Crew', salary: 'AED 10,000 - AED 15,000', benefit: 'Flight benefits, training' },
                        { role: 'Engineering', salary: 'AED 14,000 - AED 22,000', benefit: 'Technical allowances' },
                        { role: 'IT Specialist', salary: 'AED 12,000 - AED 20,000', benefit: 'Digital development support' },
                        { role: 'Customer Service', salary: 'AED 9,000 - AED 13,000', benefit: 'Incentive programs' },
                        { role: 'Pilot', salary: 'AED 30,000 - AED 45,000+', benefit: 'Tax-free salary' },
                        { role: 'Corporate Analyst', salary: 'AED 13,000 - AED 18,000', benefit: 'Career growth opportunities' }
                      ].map((item) => (
                        <tr key={item.role}>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 font-semibold text-slate-900 text-xs sm:text-sm">{item.role}</td>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm whitespace-nowrap">{item.salary}</td>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 text-slate-600 hidden sm:table-cell text-xs sm:text-sm">{item.benefit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">General Requirements</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {[
                    'Educational qualifications',
                    'English proficiency',
                    'Relevant experience',
                    'Customer service skills',
                    'Technical certifications',
                    'Teamwork and communication skills'
                  ].map((requirement) => (
                    <div key={requirement} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-[#FDF7F1] p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Quick navigation</h2>
                <nav className="mt-5 lg:mt-6 space-y-2 text-xs lg:text-sm text-slate-700">
                  {['About Emirates Group', 'Current Vacancies', 'Job Categories', 'Why Work at Emirates Group?', 'Hiring Process Timeline', 'Salary Information', 'FAQs'].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block rounded-2xl px-3 lg:px-4 py-2 lg:py-3 hover:bg-slate-100 transition">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Related careers</h2>
                <div className="mt-5 lg:mt-6 space-y-4">
                  {relatedJobs.map((job) => (
                    <Link key={job.title} href={job.href} className="block rounded-2xl lg:rounded-3xl border border-slate-200 bg-slate-50 p-4 lg:p-5 transition hover:border-[#D71920]">
                      <h3 className="text-sm lg:text-base font-semibold text-slate-900">{job.title}</h3>
                      <p className="mt-2 text-xs lg:text-sm text-slate-600 line-clamp-2">{job.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm lg:hidden" id="related-careers-mobile">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Related Careers</h2>
          <div className="mt-5 sm:mt-6 space-y-4">
            {relatedJobs.map((job) => (
              <Link key={job.title} href={job.href} className="block rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 transition hover:border-[#D71920]">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">{job.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="faqs">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-[#FEF3F2] p-6 sm:p-8 lg:p-10 text-center shadow-sm">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#B4975A] font-medium">Ready to Join Emirates Group?</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">Apply today and start your aviation career with one of the world&apos;s leading airlines.</h2>
          <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-[#D71920] px-6 sm:px-8 py-2.5 sm:py-4 text-sm font-semibold text-white transition hover:bg-red-600">
            Apply for Emirates Jobs
          </Link>
        </section>
      </section>
    </article>
  )
}
