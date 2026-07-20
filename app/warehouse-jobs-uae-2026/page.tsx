import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateOrganizationSchema } from '@/lib/seo'

const pageTitle = 'Warehouse Jobs in UAE 2026 | Top Companies Hiring & Salaries | CareerHunt'
const pageDescription = 'Discover warehouse jobs in UAE 2026. Explore vacancies at DP World, Aramex, DHL, Agility and more with salaries and application tips.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: 'https://careerhunt.online/warehouse-jobs-uae-2026'
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/warehouse-jobs-uae-2026',
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
    question: 'Do I need experience to get a warehouse job in the UAE?',
    answer: 'Not always. Entry-level roles such as warehouse helper, loader, and picker/packer often accept candidates with little to no prior experience, especially at high-volume employers.'
  },
  {
    question: 'Is accommodation usually included?',
    answer: 'Many larger employers include accommodation, transport, or food allowances, but it depends on the company and the role. Always ask for the full package before accepting an offer.'
  },
  {
    question: 'How long does the visa process take?',
    answer: 'The visa and work permit process usually takes a few weeks after an offer is accepted, though timing varies by employer and documentation requirements.'
  },
  {
    question: 'Which company offers the best career growth?',
    answer: 'DP World and DHL are often strong for structured training and promotion paths, while Aramex and Transguard can offer faster entry points for candidates with fewer formal qualifications.'
  },
  {
    question: 'Is it safe to apply for these jobs online?',
    answer: 'Yes, when you apply through official company portals or verified recruiters. Avoid paying any fee for a job application or visa processing, and verify agencies through MOHRE.'
  }
]

const employerCards = [
  {
    title: 'DP World',
    href: 'https://www.dpworld.com/en/careers/uae/emiratisation',
    description: 'Jebel Ali Port operator hiring forklift, cargo, and supervisor roles for high-volume port logistics operations.',
    icon: '🚢'
  },
  {
    title: 'Aramex',
    href: 'https://www.aramex.com/ae/en/careers',
    description: 'Storekeepers, sorters, loaders, and operations staff for warehouse and e-commerce fulfillment hubs.',
    icon: '📦'
  },
  {
    title: 'DHL Supply Chain',
    href: 'https://careers.dhl.com/global/en',
    description: 'Warehouse operatives and team leaders across JAFZA and Dubai Industrial City for retail and pharma logistics.',
    icon: '✈️'
  },
  {
    title: 'Agility Logistics',
    href: 'https://careers.agility.com/',
    description: '3PL warehouse and customs roles in JAFZA, supporting FMCG, cold chain, and industrial clients.',
    icon: '🏭'
  },
  {
    title: 'Amazon.ae',
    href: 'https://www.amazon.jobs/en/locations/dubai-united-arab-emirates',
    description: 'Fulfillment center associates, pickers, and packers for fast-moving e-commerce operations.',
    icon: '🛒'
  },
  {
    title: 'Transguard Group',
    href: 'https://www.transguardgroup.com/careers',
    description: 'Loaders, general labor, and warehouse staffing roles supplied across retail, logistics, and construction sites.',
    icon: '👷'
  },
  {
    title: 'dnata',
    href: 'https://careers.dnata.com/',
    description: 'Cargo and ground handling warehousing jobs tied to aviation, airport, and air freight operations.',
    icon: '🛫'
  },
  {
    title: 'Emirates Logistics LLC',
    href: 'https://www.emirateslogistics.com/',
    description: 'FMCG, fashion, electronics, and heavy-lift warehousing roles in a well-established Dubai operator.',
    icon: '📋'
  }
]

const jobTypes = [
  {
    title: 'Warehouse Helper',
    description: 'The entry point for most candidates, covering loading, unloading, organizing stock, and keeping the floor safe and operational.'
  },
  {
    title: 'Picker / Packer',
    description: 'Fast-paced, target-driven roles focused on pulling orders, packing goods, and dispatching shipments for e-commerce and retail clients.'
  },
  {
    title: 'Forklift Operator',
    description: 'Higher-paying roles that require safe equipment handling, basic logistics discipline, and often a forklift certification.'
  },
  {
    title: 'Storekeeper',
    description: 'Inventory-focused positions that involve maintaining accurate stock records, reconciling counts, and supporting warehouse operations.'
  },
  {
    title: 'Warehouse Supervisor',
    description: 'Shift leadership roles that combine team coordination, safety compliance, productivity targets, and operational reporting.'
  },
  {
    title: 'Loader / Cargo Handler',
    description: 'Physically demanding roles at ports and freight hubs, commonly found at DP World, Aramex, and airport-linked logistics sites.'
  }
]

const salaryRows = [
  { role: 'Warehouse Helper', salary: 'AED 1,200 - 2,500/month (+ accommodation or food allowance)' },
  { role: 'Picker / Packer', salary: 'AED 2,000 - 4,000/month' },
  { role: 'Storekeeper', salary: 'AED 3,000 - 5,500/month' },
  { role: 'Forklift Operator', salary: 'AED 2,500 - 4,500/month' },
  { role: 'Warehouse Supervisor', salary: 'AED 5,000 - 9,000/month' }
]

const requirements = [
  'Basic English',
  'Physical fitness',
  'Safety awareness',
  'UAE driving license (preferred)',
  'Forklift certification (for operator roles)',
  'WMS familiarity (for storekeeper roles)'
]

const quickNavItems = [
  { label: 'About Warehouse Jobs', href: '#about-warehouse-jobs' },
  { label: 'At a Glance', href: '#at-a-glance' },
  { label: 'Why Hiring Is Booming', href: '#why-hiring-is-booming' },
  { label: 'Who\'s Hiring', href: '#whos-hiring' },
  { label: 'Job Types', href: '#job-types' },
  { label: 'Salary Table', href: '#salary-table' },
  { label: 'General Requirements', href: '#general-requirements' },
  { label: 'Visa & Safety', href: '#visa-safety' },
  { label: 'Hiring Process Timeline', href: '#hiring-process-timeline' },
  { label: 'FAQs', href: '#faqs' }
]

const relatedJobs = [
  {
    title: 'Emirates Group Careers UAE 2026',
    href: '/emirates-group-careers-uae-2026',
    description: 'Explore aviation, airport, and corporate roles across Dubai and the wider UAE.'
  },
  {
    title: 'DP World Careers 2026',
    href: '/dp-world-careers-2026',
    description: 'See how port and logistics careers at DP World are structured across the UAE.'
  },
  {
    title: 'DHL Careers UAE 2026',
    href: '/dhl-careers-uae-2026',
    description: 'Learn about DHL logistics, warehouse, and supply chain opportunities in the region.'
  },
  {
    title: 'Amazon Careers 2026',
    href: '/amazon-careers-2026',
    description: 'Browse the latest Amazon jobs in the UAE and understand the hiring process.'
  }
]

export default function WarehouseJobsUaePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'Warehouse Jobs UAE', item: '/warehouse-jobs-uae-2026' }
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/warehouse-jobs-uae-2026',
    datePublished: '2026-07-20',
    authorName: 'CareerHunt Editorial Team',
    keywords: ['warehouse jobs UAE', 'warehouse jobs 2026', 'logistics jobs UAE', 'DP World careers', 'DHL UAE careers']
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
            src="/Warehouse Jobs in UAE 2026.png"
            alt="Warehouse Jobs in UAE 2026 banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative mx-auto flex min-h-[400px] flex-col justify-end px-4 py-12 sm:min-h-[500px] sm:px-6 md:min-h-[600px] lg:min-h-[620px] lg:px-10 lg:py-20 xl:px-16 max-w-7xl">
          <div className="mb-4 rounded-full bg-white/10 px-3 py-2 text-xs font-medium tracking-[0.24em] text-white/80 sm:mb-6 sm:px-4 sm:text-sm">
            <Link href="/" className="underline-offset-4 hover:text-white">Home</Link> /{' '}
            <Link href="/blog" className="underline-offset-4 hover:text-white">Career Insights</Link> /{' '}
            <span className="font-semibold">Warehouse Jobs UAE</span>
          </div>
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <span className="inline-flex rounded-full bg-[#0f766e]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:px-4 sm:py-2">UAE Jobs 2026</span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Warehouse Jobs in UAE 2026: Who&apos;s Hiring, What They Pay, and How to Get In</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl lg:leading-8">
              Explore the top companies hiring warehouse and logistics staff across Dubai, Abu Dhabi, and the UAE — with salaries, requirements, and direct application links.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center pt-2">
              <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-[#0f766e] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#115e59] sm:py-3">
                Browse Warehouse Jobs
              </Link>
              <Link href="/salary-guide/next-gen-salary-guide-2026" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:py-3">
                View Salary Guide
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-200 sm:text-sm pt-2">
              <span>Published: July 20, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>Reading time: 9 min</span>
              <span className="hidden sm:inline">•</span>
              <span>Author: CareerHunt Editorial Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:px-6 md:py-12 lg:px-16">
        <NativeAd className="mx-auto mb-8 max-w-3xl" />
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.4fr_0.85fr] lg:items-start xl:grid-cols-[1.4fr_0.85fr]">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="at-a-glance">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Warehouse jobs at a glance</h2>
              <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Industry</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Logistics & Warehousing</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Hiring hotspots</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Dubai, Abu Dhabi, Sharjah</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Employment type</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">Full-Time</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Eligible nationalities</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">All Nationalities</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Salary range</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">AED 1,200 - 9,000/month</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">Key employers</p>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-slate-900">DP World, Aramex, DHL, Agility, Amazon.ae</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8" id="about-warehouse-jobs">
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Why warehouse hiring is booming in the UAE</h2>
                <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-700">
                  <p>Warehouse demand in the UAE is rising because e-commerce, industrial expansion, and free zone growth are all pulling in more goods, more storage, and more workers at the same time. Platforms like Amazon.ae, Noon.com, and Carrefour UAE have turned online shopping into a daily habit, creating constant pressure on fulfillment centers and distribution hubs.</p>
                  <p>JAFZA and Dubai South are also fueling the surge. Their expansion is attracting new logistics tenants, customs operators, and port-linked businesses, while Abu Dhabi continues to grow its industrial and manufacturing base through government-backed strategy initiatives.</p>
                  <p>Cold chain logistics is another major engine of hiring. The need for refrigerated storage, food handling, and pharmaceutical movement is pushing demand for staff who can work in fast-paced, safety-focused environments.</p>
                  <p>That combination means warehouse roles are not just widely available; they are spread across multiple cities and sectors, giving jobseekers options from entry-level helpers to supervisor and inventory roles.</p>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="whos-hiring">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Who&apos;s hiring</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {employerCards.map((company) => (
                    <div key={company.title} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 sm:p-6">
                      <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0f766e]/10 text-xl sm:text-2xl">{company.icon}</div>
                      <h3 className="mt-4 sm:mt-5 text-base sm:text-xl font-semibold text-slate-900">{company.title}</h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{company.description}</p>
                      <Link href={company.href} className="mt-4 sm:mt-5 inline-flex rounded-full bg-[#0f766e] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#115e59]">
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="job-types">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Job types you will see most often</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {jobTypes.map((type) => (
                    <div key={type.title} className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">{type.title}</h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="salary-table">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Salary expectations</h2>
                <div className="mt-5 sm:mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-3 sm:px-5 py-3 sm:py-4">Role</th>
                        <th className="px-3 sm:px-5 py-3 sm:py-4">Salary (AED/month)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      {salaryRows.map((row) => (
                        <tr key={row.role}>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 font-semibold text-slate-900 text-xs sm:text-sm">{row.role}</td>
                          <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm">{row.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="general-requirements">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">General requirements</h2>
                <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {requirements.map((requirement) => (
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
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Quick navigation</h2>
                <nav className="mt-5 lg:mt-6 space-y-2 text-xs lg:text-sm text-slate-700">
                  {quickNavItems.map((item) => (
                    <a key={item.label} href={item.href} className="block rounded-2xl px-3 lg:px-4 py-2 lg:py-3 hover:bg-slate-100 transition">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Related careers</h2>
                <div className="mt-5 lg:mt-6 space-y-4">
                  {relatedJobs.map((job) => (
                    <Link key={job.title} href={job.href} className="group flex flex-col rounded-2xl lg:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 lg:p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0f766e] hover:shadow-lg">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm lg:text-base font-semibold text-slate-900">{job.title}</h3>
                        <span className="rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Read</span>
                      </div>
                      <p className="mt-2 text-xs lg:text-sm text-slate-600 line-clamp-2">{job.description}</p>
                      <span className="mt-3 inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-slate-700 transition group-hover:text-[#0f766e]">
                        Explore guide
                        <span className="transition group-hover:translate-x-1">→</span>
                      </span>
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
              <Link key={job.title} href={job.href} className="group flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 sm:p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0f766e] hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">{job.title}</h3>
                  <span className="rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0f766e]">Read</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">{job.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 transition group-hover:text-[#0f766e]">
                  Explore guide
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="visa-safety">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Visa & safe application guidance</h2>
          <div className="mt-5 sm:mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-3 text-sm sm:text-base leading-7 sm:leading-8 text-slate-700">
              <p>For genuine warehouse and logistics jobs in the UAE, employers usually sponsor the work visa once an offer is made. The process normally includes an entry permit, medical test, Emirates ID registration, and labor card filing through MOHRE.</p>
              <p>Legitimate employers cover the recruitment and visa costs, so any request for a payment before your appointment or arrival should be treated as a red flag.</p>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-base sm:text-lg font-semibold text-amber-900">Scam warning signs</h3>
              </div>
              <ul className="mt-3 sm:mt-4 space-y-2 text-sm text-amber-900">
                <li>• Never pay for a job application or visa processing.</li>
                <li>• Verify agencies through MOHRE before sharing documents.</li>
                <li>• Avoid unrealistic salary offers for entry-level labor roles.</li>
                <li>• Apply only through official company career pages or verified recruiters.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm" id="hiring-process-timeline">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Hiring process timeline</h2>
          <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
            {[
              { title: 'Choose a company and role', description: 'Shortlist employers based on your skill level, location, and salary expectations.' },
              { title: 'Apply via the official career page', description: 'Use the verified job portal and keep your CV clear, concise, and tailored to warehouse work.' },
              { title: 'Resume screening', description: 'Employers check your experience, availability, and basic eligibility before moving forward.' },
              { title: 'Interview', description: 'Expect questions about reliability, safety awareness, and your ability to work in a fast-paced environment.' },
              { title: 'Document and visa processing', description: 'Your employer handles the paperwork, work permit, and coordination with MOHRE.' },
              { title: 'Medical test and Emirates ID', description: 'These requirements are standard for legal employment in the UAE.' },
              { title: 'Onboarding', description: 'You will receive your start date, uniform instructions, and site-specific safety briefing.' }
            ].map((step, index) => (
              <li key={step.title} className="flex gap-3 sm:gap-4">
                <div className="mt-1 flex h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-xs sm:text-sm font-semibold text-white">{index + 1}</div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
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

        <section className="mt-8 sm:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-slate-200 bg-[#f0fdfa] p-6 sm:p-8 lg:p-10 text-center shadow-sm">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#0f766e] font-medium">Ready to Start Your Warehouse Career?</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">Find the right warehouse role in the UAE and apply with confidence.</h2>
          <Link href="/blog" className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-[#0f766e] px-6 sm:px-8 py-2.5 sm:py-4 text-sm font-semibold text-white transition hover:bg-[#115e59]">
            Browse Warehouse Jobs
          </Link>
        </section>
      </section>
    </article>
  )
}
