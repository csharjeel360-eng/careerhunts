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

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-[0.24em] text-white/80">
            <Link href="/" className="underline-offset-4 hover:text-white">Home</Link> /{' '}
            <Link href="/blog" className="underline-offset-4 hover:text-white">Blog</Link> /{' '}
            <span className="font-semibold">Emirates Group Careers</span>
          </div>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full bg-red-700/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">Emirates Careers 2026</span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Emirates Group Careers in UAE 2026</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore the latest Emirates Group jobs in Dubai and across the UAE. Find vacancies in Cabin Crew, Engineering, IT, Customer Service, Pilots, and Corporate departments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full bg-[#D71920] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
                Apply Now
              </Link>
              <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View All Vacancies
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200 sm:text-base">
              <span>Published: July 05, 2026</span>
              <span>•</span>
              <span>Reading time: 8 min</span>
              <span>•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.85fr] xl:items-start">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Emirates Group at a glance</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Company name</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Emirates Group</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Industry</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Aviation & Travel Services</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Founded</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">1985</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Headquarters</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Dubai, UAE</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Employment type</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Full-Time</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Eligible nationalities</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">All Nationalities</p>
                </div>
                <div className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Official website</p>
                  <Link href="https://www.emiratesgroupcareers.com/" className="mt-2 block text-lg font-semibold text-[#D71920] underline">
                    www.emiratesgroupcareers.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">About Emirates Group</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                  <p>Emirates Group has built a global aviation network since 1985, delivering award-winning service through Emirates airline, dnata, and a wide range of travel services. The company is recognized for innovation, premium passenger experiences, and strong operational excellence.</p>
                  <p>From Dubai to every major international hub, Emirates Group now operates a fleet of modern aircraft and supports a workforce of tens of thousands. Its global presence includes airline operations, airport logistics, catering, and travel technology across six continents.</p>
                  <p>The company culture blends high performance with an inclusive environment, welcoming colleagues from around the world. Emirates Group emphasizes professional development, mentoring, and multicultural teams where diverse perspectives are celebrated.</p>
                  <p>As a top employer in the UAE, Emirates Group attracts talent by offering world-class training, modern facilities, and a reputation for career growth in aviation, engineering, IT, customer service, and corporate functions.</p>
                  <p>Career growth opportunities at Emirates Group include structured development pathways, leadership programs, technical certifications, and internal mobility across operations, digital, and management roles.</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Current Vacancies</h2>
                    <p className="mt-2 text-sm text-slate-500">Official jobs page with the latest available opportunities.</p>
                  </div>
                  <div className="rounded-full bg-[#D71920] px-4 py-2 text-sm font-semibold text-white">Current Open Positions: 120+</div>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full bg-[#D71920] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
                    View All Jobs
                  </Link>
                  <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Official Jobs Page
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">Job Categories</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {jobCategories.map((category) => (
                    <div key={category.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D71920]/10 text-2xl">{category.icon}</div>
                      <h3 className="mt-5 text-xl font-semibold text-slate-900">{category.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                      <Link href={category.href} className="mt-5 inline-flex rounded-full bg-[#B4975A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8d7250]">
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">Why Work at Emirates Group?</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-semibold text-slate-900">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">Hiring Process Timeline</h2>
                <ol className="mt-6 space-y-4">
                  {[
                    'Online Application',
                    'Resume Screening',
                    'Assessment Test',
                    'Interview',
                    'Background Verification',
                    'Job Offer',
                    'Onboarding'
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#D71920] text-sm font-semibold text-white">{index + 1}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{step}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step === 'Interview' ? 'Prepare examples of customer service excellence and role-specific experience.' : 'Follow the process carefully and keep your documents ready for review.'}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">Salary Information</h2>
                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-5 py-4">Role</th>
                        <th className="px-5 py-4">Estimated Monthly Salary</th>
                        <th className="px-5 py-4">Benefits</th>
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
                          <td className="px-5 py-4 font-semibold text-slate-900">{item.role}</td>
                          <td className="px-5 py-4">{item.salary}</td>
                          <td className="px-5 py-4 text-slate-600">{item.benefit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">General Requirements</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Educational qualifications',
                    'English proficiency',
                    'Relevant experience',
                    'Customer service skills',
                    'Technical certifications',
                    'Teamwork and communication skills'
                  ].map((requirement) => (
                    <div key={requirement} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-900">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-[#FDF7F1] p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Quick navigation</h2>
                <nav className="mt-6 space-y-3 text-sm text-slate-700">
                  {['About Emirates Group', 'Current Vacancies', 'Job Categories', 'Why Work at Emirates Group?', 'Hiring Process Timeline', 'Salary Information', 'FAQs'].map((label) => (
                    <a key={label} href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block rounded-2xl px-4 py-3 hover:bg-slate-100">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Related careers</h2>
                <div className="mt-6 space-y-4">
                  {relatedJobs.map((job) => (
                    <Link key={job.title} href={job.href} className="block rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#D71920]">
                      <h3 className="font-semibold text-slate-900">{job.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{job.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm" id="faqs">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-12 rounded-[2rem] border border-slate-200 bg-[#FEF3F2] p-10 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-[#B4975A]">Ready to Join Emirates Group?</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Apply today and start your aviation career with one of the world&apos;s leading airlines.</h2>
          <Link href="https://www.emiratesgroupcareers.com/search-and-apply/" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D71920] px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-600">
            Apply for Emirates Jobs
          </Link>
        </section>
      </section>
    </article>
  )
}
