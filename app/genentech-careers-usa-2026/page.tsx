import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NativeAd } from '@/components/ads/NativeAd'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  getCanonicalUrl
} from '@/lib/seo'

const pageTitle = 'Genentech Careers USA 2026 | Latest Biotechnology & Marketing Jobs Apply Online'
const pageDescription =
  'Explore the latest Genentech Careers USA 2026. Discover Biotechnology, Research, Marketing, Data Science, Engineering, Manufacturing, and Corporate jobs. Apply online today.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'Genentech Careers',
    'Genentech Jobs',
    'Genentech USA Jobs',
    'Biotechnology Jobs',
    'Pharmaceutical Careers',
    'Marketing Jobs USA',
    'Research Scientist Jobs',
    'Commercial Jobs',
    'Roche Careers',
    'Healthcare Jobs USA'
  ],
  alternates: {
    canonical: getCanonicalUrl('/genentech-careers-usa-2026')
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/genentech-careers-usa-2026',
    siteName: 'CareerHunt',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription
  }
}

const tocItems = [
  { id: 'about', label: 'About Genentech' },
  { id: 'positions', label: 'Current Open Positions' },
  { id: 'categories', label: 'Featured Categories' },
  { id: 'marketing', label: 'Marketing Spotlight' },
  { id: 'benefits', label: 'Why Work Here' },
  { id: 'skills', label: 'Skills Required' },
  { id: 'timeline', label: 'Hiring Process' },
  { id: 'salary', label: 'Salary Insights' },
  { id: 'locations', label: 'Locations' },
  { id: 'faq', label: 'FAQs' },
  { id: 'related', label: 'Related Jobs' }
]

const companyHighlights = [
  { label: 'Company Name', value: 'Genentech' },
  { label: 'Parent Company', value: 'Roche' },
  { label: 'Industry', value: 'Biotechnology & Pharmaceuticals' },
  { label: 'Founded', value: '1976' },
  { label: 'Headquarters', value: 'South San Francisco, California, USA' },
  { label: 'Employment Type', value: 'Full-Time' },
  { label: 'Eligible Nationalities', value: 'All Nationalities' }
]

const categories = [
  {
    title: 'Commercial, Sales & Marketing',
    description: 'Build high-impact campaigns, customer engagement strategies, and commercial excellence initiatives for global healthcare products.',
    icon: '📈',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Research & Development',
    description: 'Drive scientific discovery through modern drug development, lab innovation, and translational research across therapeutic areas.',
    icon: '🧪',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Manufacturing',
    description: 'Support high-quality biologics manufacturing operations and next-generation production systems with precision and speed.',
    icon: '🏭',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Engineering',
    description: 'Design scalable systems, digital solutions, and process innovations that strengthen research and manufacturing performance.',
    icon: '⚙️',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Data Science & AI',
    description: 'Apply advanced analytics, AI, and digital tools to accelerate decision-making across healthcare and life sciences operations.',
    icon: '🤖',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Regulatory & Quality',
    description: 'Ensure compliance, quality systems, and regulatory readiness for innovative drug development and manufacturing programs.',
    icon: '✅',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Medical Affairs',
    description: 'Translate evidence and scientific insights into meaningful patient, provider, and stakeholder engagement strategies.',
    icon: '🩺',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Business Strategy',
    description: 'Shape portfolio priorities, growth initiatives, and organization-wide execution in a fast-moving healthcare environment.',
    icon: '🎯',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Corporate Functions',
    description: 'Join finance, HR, legal, communications, and other essential teams that power the business globally.',
    icon: '🏢',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Finance',
    description: 'Advance strategic finance, planning, and business operations in a company at the forefront of biotech innovation.',
    icon: '💰',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Human Resources',
    description: 'Support talent strategy, employee experience, learning, and leadership development across a global workforce.',
    icon: '👥',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Information Technology',
    description: 'Build secure, scalable digital platforms that connect science, operations, and commercial teams worldwide.',
    icon: '💻',
    href: 'https://careers.gene.com'
  },
  {
    title: 'Students & Graduates',
    description: 'Launch your career through internships, graduate programs, and early-career opportunities in biotech and healthcare.',
    icon: '🎓',
    href: 'https://careers.gene.com'
  }
]

const marketingRoles = [
  {
    title: 'Executive Marketing Director',
    description:
      'Lead strategic portfolio marketing, drive brand vision, and guide high-impact campaigns across therapeutic areas and channels.'
  },
  {
    title: 'Senior Customer Marketing Manager',
    description:
      'Shape customer-centered programs, strengthen engagement, and deliver insight-rich experiences for healthcare professionals and partners.'
  },
  {
    title: 'Senior Manager, Media Partnerships & Innovation',
    description:
      'Develop new partnerships, optimize media strategy, and build modern engagement models that extend brand reach.'
  },
  {
    title: 'Senior Thought Leader Liaison',
    description:
      'Connect scientific and commercial teams with external experts to create meaningful thought leadership and relationship-driven growth.'
  }
]

const benefits = [
  'Competitive Salary',
  'Annual Bonus',
  'Health Insurance',
  'Retirement Plans',
  'Paid Time Off',
  'Flexible Work',
  'Hybrid Opportunities',
  'Learning & Development',
  'Tuition Assistance',
  'Inclusive Workplace',
  'Employee Wellness',
  'Career Growth',
  'Innovation Culture',
  'Global Collaboration'
]

const skills = [
  'Biotechnology Knowledge',
  'Marketing Strategy',
  'Commercial Excellence',
  'Customer Engagement',
  'Project Management',
  'Data Analysis',
  'Leadership',
  'Communication Skills',
  'Problem Solving',
  'Team Collaboration',
  'Digital Marketing',
  'AI & Analytics'
]

const requirements = [
  'Bachelor\'s Degree',
  'Master\'s Preferred',
  'MBA for Marketing roles',
  'Biotechnology experience',
  'Pharmaceutical experience',
  'Marketing experience',
  'Leadership experience',
  'Strong communication',
  'Teamwork',
  'Problem-solving',
  'Project management',
  'Customer-focused mindset'
]

const hiringTimeline = [
  'Online Application',
  'Resume Review',
  'Recruiter Screening',
  'Hiring Manager Interview',
  'Panel Interview',
  'Final Assessment',
  'Background Check',
  'Job Offer',
  'Onboarding'
]

const salaryData = [
  { role: 'Marketing Manager', range: '$120K - $160K' },
  { role: 'Senior Marketing Manager', range: '$150K - $200K' },
  { role: 'Executive Marketing Director', range: '$220K - $320K' },
  { role: 'Data Scientist', range: '$140K - $210K' },
  { role: 'Research Scientist', range: '$130K - $190K' },
  { role: 'Manufacturing Engineer', range: '$110K - $160K' },
  { role: 'Quality Specialist', range: '$95K - $135K' },
  { role: 'Software Engineer', range: '$130K - $190K' }
]

const locations = [
  'South San Francisco',
  'Boston',
  'New York',
  'Philadelphia',
  'Indianapolis',
  'Chicago'
]

const faqItems = [
  {
    question: 'How do I apply for Genentech jobs?',
    answer:
      'Visit the official Genentech careers portal, choose a role that matches your background, and submit your application with an updated CV and professional profile.'
  },
  {
    question: 'Does Genentech hire internationally?',
    answer:
      'Yes, Genentech recruits talent from many countries and supports global hiring for roles aligned with business needs and immigration eligibility.'
  },
  {
    question: 'What qualifications are required?',
    answer:
      'Most roles require a relevant bachelor\'s degree, while research and marketing positions often prefer advanced qualifications or specialized experience.'
  },
  {
    question: 'Are remote jobs available?',
    answer:
      'Some functions offer hybrid or remote-compatible arrangements, especially for corporate, digital, and data-focused roles.'
  },
  {
    question: 'What benefits are offered?',
    answer:
      'Employees typically receive health coverage, retirement plans, paid time off, bonus opportunities, learning support, and wellness programs.'
  },
  {
    question: 'What is the hiring process?',
    answer:
      'The process usually includes an online application, resume review, recruiter screening, interviews, assessments, and a final offer stage.'
  },
  {
    question: 'Does Genentech offer internships?',
    answer:
      'Yes, Genentech offers internships and graduate pathways for students and recent graduates interested in science, engineering, commercial, and corporate careers.'
  },
  {
    question: 'Is Genentech part of Roche?',
    answer:
      'Yes, Genentech is a biotechnology company and a member of the Roche Group, giving it access to global research and innovation networks.'
  },
  {
    question: 'What departments are currently hiring?',
    answer:
      'Genentech regularly hires across research, development, manufacturing, engineering, marketing, data science, finance, HR, and IT.'
  },
  {
    question: 'How long does recruitment take?',
    answer:
      'Recruitment timelines vary by role, but candidates can typically expect several weeks from application to final decision.'
  }
]

const relatedJobs = [
  {
    title: 'Roche Careers',
    href: '/emirates-group-careers-uae-2026',
    description: 'Discover global pharmaceutical careers and leadership opportunities across Roche Group operations.'
  },
  {
    title: 'Pfizer Careers',
    href: '/qatar-airways-careers-2026',
    description: 'Explore healthcare and commercial roles at Pfizer with strong innovation and patient-impact focus.'
  },
  {
    title: 'Johnson & Johnson Careers',
    href: '/jobs',
    description: 'Browse broad healthcare and life sciences openings across one of the world’s largest medtech companies.'
  },
  {
    title: 'Amgen Careers',
    href: '/jobs',
    description: 'Find biotech, research, and commercial career paths at Amgen in the United States and beyond.'
  }
]

export default function GenentechCareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Career Insights', item: '/blog' },
    { name: 'Genentech Careers USA 2026', item: '/genentech-careers-usa-2026' }
  ])

  const articleSchema = generateArticleSchema({
    title: pageTitle,
    description: pageDescription,
    url: 'https://careerhunt.online/genentech-careers-usa-2026',
    datePublished: '2026-07-08',
    authorName: 'CareerHunt Editorial Team',
    keywords: [
      'Genentech Careers',
      'Genentech Jobs',
      'Biotechnology Jobs',
      'Pharmaceutical Careers',
      'Marketing Jobs USA',
      'Roche Careers'
    ]
  })

  const faqSchema = generateFAQSchema(faqItems)

  return (
    <article className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/Genentech Careers USA 2026.png"
            alt="Genentech Careers USA 2026 hero banner"
            fill
            className="object-cover"
            priority
          />
          
        </div>

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-white">Career Insights</Link>
            <span>/</span>
            <span className="font-semibold text-white">Genentech Careers USA 2026</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
              Genentech Careers 2026
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Genentech Careers USA 2026
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Explore the latest Genentech job opportunities across the United States. Discover careers in Biotechnology, Research & Development, Marketing, Data Science, Engineering, Manufacturing, Commercial, Regulatory Affairs, and Corporate departments.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full bg-[#00A99D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00867a]">
                Apply Now
              </Link>
              <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View All Jobs
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-200">
              <span>Published: July 08, 2026</span>
              <span>•</span>
              <span>Reading time: 10 min</span>
              <span>•</span>
              <span>Author: CareerHunt Editorial Team</span>
              <span>•</span>
              <span>Updated: July 08, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8">
          <NativeAd className="mx-auto max-w-3xl" />
        </div>
        <div className="grid gap-8 xl:grid-cols-[1.25fr_0.5fr] xl:items-start">
          <div className="space-y-8">
            <div id="about" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Company overview</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Genentech at a glance</h2>
                  <div className="mt-5 grid gap-3">
                    {companyHighlights.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href="https://careers.gene.com" className="inline-flex text-sm font-semibold text-[#005EB8] underline-offset-4 transition hover:underline">
                      Official Website ↗
                    </Link>
                    <Link href="https://careers.gene.com" className="inline-flex rounded-full bg-[#005EB8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#004a96]">
                      Marketing Careers
                    </Link>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[#005EB8]/15 bg-gradient-to-br from-[#005EB8] to-[#00A99D] p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">Why professionals choose Genentech</p>
                  <h3 className="mt-3 text-2xl font-semibold">Science-backed careers with global healthcare impact</h3>
                  <p className="mt-4 text-sm leading-7 text-white/90">
                    Genentech combines scientific excellence, innovation culture, and purpose-driven work to create meaningful careers for researchers, marketers, engineers, analysts, and leaders.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Innovation', 'Purpose', 'Growth', 'Diversity'].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">About Genentech</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Genentech was founded in 1976 and grew from a bold vision to transform biotechnology into a powerful engine for medicine. Over the decades, the company has become a global leader in research-driven innovation, helping shape modern standards in oncology, immunology, neuroscience, and rare disease treatment.
                </p>
                <p>
                  As part of the Roche Group, Genentech benefits from a deeply connected international network that combines scientific capability, commercial reach, and patient-centered strategy. This partnership strengthens the company’s ability to bring breakthrough therapies to patients worldwide while fostering a culture of collaboration and excellence.
                </p>
                <p>
                  The company’s leadership in biotechnology is rooted in an unwavering commitment to scientific rigor, rigorous clinical development, and disciplined execution. Professionals across research, data, engineering, and marketing are empowered to contribute to life-changing advances that have a measurable impact on healthcare systems and patient care.
                </p>
                <p>
                  Genentech’s global impact extends beyond product innovation. It influences healthcare delivery through strategic partnerships, responsible commercialization, and a broad commitment to scientific education and community engagement. That breadth makes the organization attractive to professionals who want to work at the intersection of innovation and impact.
                </p>
                <p>
                  Innovation at Genentech is also defined by its culture of inclusion, employee development, and continuous learning. The company invests in leadership growth, mentorship, and diverse teams, creating a professional environment where individuals are encouraged to solve complex problems, explore new ideas, and build long-term careers in biotech and healthcare.
                </p>
              </div>
            </div>

            <div id="positions" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Current opportunities</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Current Open Positions</h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    Genentech is hiring across discovery, development, quality, commercial, digital, and corporate teams. Explore the latest openings and apply online at the official careers portal.
                  </p>
                </div>
                <div className="rounded-full bg-[#005EB8] px-4 py-2 text-sm font-semibold text-white">XX+ Open Roles</div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full bg-[#005EB8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#004a96]">
                  View All Jobs
                </Link>
                <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Official Careers Page
                </Link>
              </div>
            </div>

            <div id="categories" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Explore roles</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Featured Job Categories</h2>
                </div>
                <Link href="https://careers.gene.com" className="text-sm font-semibold text-[#00A99D] transition hover:underline">
                  Browse all categories
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => (
                  <div key={category.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005EB8]/10 text-2xl">
                      {category.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{category.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                    <div className="mt-5 flex gap-2">
                      <Link href={category.href} className="rounded-full bg-[#005EB8] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#004a96]">
                        Learn More
                      </Link>
                      <Link href={category.href} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                        Apply
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="marketing" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Marketing careers spotlight</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Marketing, Commercial Strategy & Customer Engagement</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Genentech’s marketing and commercial teams lead brand strategy, customer engagement, and high-value partnerships in a highly regulated environment. These roles combine scientific understanding with stakeholder influence and execution excellence.
              </p>
              <Link href="https://careers.gene.com" className="mt-5 inline-flex items-center rounded-full bg-[#00A99D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00867a]">
                Explore Marketing Careers
              </Link>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {marketingRoles.map((role) => (
                  <div key={role.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{role.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-[#005EB8]/15 bg-[#005EB8]/5 p-5">
                <h3 className="text-lg font-semibold text-slate-900">What these roles deliver</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                  <li>• Leadership across marketing strategy, brand growth, and cross-functional execution.</li>
                  <li>• Strong responsibility for commercial excellence, customer engagement, and market performance.</li>
                  <li>• Opportunities to influence product stories, partnership strategy, and scientific communications.</li>
                </ul>
              </div>
            </div>

            <div id="benefits" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">People-first workplace</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Why Work at Genentech</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div id="skills" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Core capabilities</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Skills Required</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Qualifications</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">General Requirements</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {requirements.map((item) => (
                  <li key={item} className="rounded-[1.15rem] border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="timeline" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Recruitment journey</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Hiring Process Timeline</h2>
              <div className="mt-6 space-y-4">
                {hiringTimeline.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#005EB8] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{step}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        A structured step in the Genentech hiring process designed to assess experience, fit, and readiness.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="salary" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Compensation overview</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Salary Information</h2>
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Role</th>
                      <th className="px-4 py-3 font-semibold">Estimated Salary (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {salaryData.map((row) => (
                      <tr key={row.role}>
                        <td className="px-4 py-3 font-medium text-slate-900">{row.role}</td>
                        <td className="px-4 py-3 text-slate-700">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="locations" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Global footprint</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Locations</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {locations.map((location) => (
                  <div key={location} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005EB8]/10 text-lg">📍</div>
                      <div>
                        <p className="font-semibold text-slate-900">{location}</p>
                        <p className="text-sm text-slate-600">Career opportunities available</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="faq" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Frequently asked questions</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-3">
                {faqItems.map((faq) => (
                  <details key={faq.question} className="group rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                      <span className="flex items-center justify-between gap-4">
                        {faq.question}
                        <span className="text-xl text-[#005EB8] transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div id="related" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Related employer pages</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Related Jobs</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedJobs.map((job) => (
                  <Link key={job.title} href={job.href} className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#005EB8] hover:shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                      <span className="rounded-full bg-[#005EB8]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#005EB8]">Read</span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{job.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-[#005EB8]">
                      Explore job page
                      <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-24">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">On this page</p>
              <nav aria-label="Table of contents" className="mt-4 space-y-2">
                {tocItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#005EB8] hover:text-[#005EB8]">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00A99D]">Share this page</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://careerhunt.online/genentech-careers-usa-2026" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">LinkedIn</a>
                <a href="https://twitter.com/intent/tweet?text=Genentech%20Careers%20USA%202026%20%7C%20CareerHunt&url=https://careerhunt.online/genentech-careers-usa-2026" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">X</a>
                <a href="https://wa.me/?text=Explore%20Genentech%20Careers%20USA%202026%20at%20https://careerhunt.online/genentech-careers-usa-2026" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">WhatsApp</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#005EB8]">Quick links</p>
              <div className="mt-4 space-y-2">
                <Link href="/jobs" className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#005EB8] hover:text-[#005EB8]">Browse jobs</Link>
                <Link href="/emirates-group-careers-uae-2026" className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#005EB8] hover:text-[#005EB8]">Emirates Group Careers</Link>
                <Link href="/qatar-airways-careers-2026" className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#005EB8] hover:text-[#005EB8]">Qatar Airways Careers</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-r from-[#005EB8] via-[#005EB8] to-[#00A99D] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Join Genentech?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
            Start your biotechnology career with one of the world’s leading pharmaceutical innovators and help shape the future of healthcare.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#005EB8] transition hover:bg-slate-100">
              Apply Now
            </Link>
            <Link href="https://careers.gene.com" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
