'use client'

import Image from 'next/image'
import Link from 'next/link'

const salaryRows = [
  ['Retail Sales Associate (IKEA/ACE/M&S)', 'AED 2,500 – 3,500', '0–2 years'],
  ['Automotive Sales Executive', 'AED 4,000 – 7,000 + commission', '1–3 years'],
  ['Service Advisor', 'AED 4,500 – 6,500', '2–4 years'],
  ['Technician (automotive/engineering)', 'AED 3,000 – 5,000', '1–3 years'],
  ['Spare Parts Advisor', 'AED 3,000 – 4,500', '1–2 years'],
  ['HR/Finance Executive', 'AED 6,000 – 10,000', '3–5 years'],
  ['Department/Store Manager', 'AED 10,000 – 18,000+', '5+ years'],
]

const internalLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Difference', href: '#difference' },
  { label: 'Roles', href: '#roles' },
  { label: 'Salary', href: '#salary' },
  { label: 'Apply', href: '#apply' },
  { label: 'FAQ', href: '#faq' },
]

const relatedArticles = [
  { title: 'DHL Careers UAE 2026', href: '/dhl-careers-uae-2026' },
  { title: 'Emirates Group Careers UAE 2026', href: '/emirates-group-careers-uae-2026' },
  { title: 'Carrefour Hypermarket Careers 2026', href: '/carrefour-hypermarket-careers-2026' },
  { title: 'Amazon Careers 2026', href: '/amazon-careers-2026' },
  { title: 'Noon Careers UAE 2026', href: '/noon-careers-uae-2026' },
  { title: 'UAE Work Visa Sponsorship Guide 2026', href: '/uae-work-visa-sponsorship-guide-2026' },
]

const externalLinks = [
  { title: 'A Future With Us — Official Al-Futtaim Group Careers Portal', url: 'https://www.afuturewithus.com/', description: 'Primary destination link for the full article and application journey.' },
  { title: 'View All Open Jobs — A Future With Us', url: 'https://www.afuturewithus.com/viewalljobs/', description: 'Direct link to live jobs listing and role search.' },
  { title: 'Careers at Al-Futtaim — Corporate Overview', url: 'https://www.alfuttaim.com/en/careers/', description: 'Secondary authority page for company career information.' },
  { title: 'Fraudulent Employment Opportunities — Al-Futtaim Official Warning', url: 'https://www.alfuttaim.com/en/fraudulent-employment-opportunities/', description: 'Official company guidance on scam prevention and genuine recruiter emails.' },
  { title: 'Al-Futtaim on LinkedIn', url: 'https://www.linkedin.com/company/al-futtaim', description: 'Verified company profile for additional source context.' },
]

const faqItems = [
  {
    question: 'What is Al Futtaim official careers website?',
    answer: 'Al-Futtaim Group official careers portal is A Future With Us at afuturewithus.com. This is separate from Majid Al Futtaim, which runs a different careers portal.',
  },
  {
    question: 'Is Al Futtaim the same company as Majid Al Futtaim?',
    answer: 'No. They are separate companies with different portfolios and different careers portals. Al-Futtaim Group operates Toyota, IKEA, and ACE; Majid Al Futtaim operates Carrefour and Mall of the Emirates.',
  },
  {
    question: 'What industries does Al Futtaim Group hire for?',
    answer: 'The group hires across automotive, retail, real estate, financial services, and healthcare, with roles spanning sales, service, engineering, and corporate support.',
  },
  {
    question: 'Does Al Futtaim hire freshers with no experience?',
    answer: 'Yes, particularly for retail floor roles at IKEA, ACE, and Marks & Spencer. Automotive sales and technical roles usually prefer some prior experience.',
  },
  {
    question: 'How long does the Al Futtaim hiring process take?',
    answer: 'Entry-level retail roles can move within weeks. Corporate, engineering, and management roles typically take longer due to multiple interview rounds.',
  },
  {
    question: 'Do I need a UAE driving license to work in Al Futtaim Motors?',
    answer: 'For most automotive sales and service roles, yes — a valid UAE driving license is typically required even at entry level, since the role often involves test drives or vehicle handling.',
  },
]

export default function AlFuttaimCareersPage() {
  return (
    <article className="mx-auto max-w-6xl px-3 py-6 text-slate-800 dark:text-slate-100 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <header className="mb-6 sm:mb-8">
        <div className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-300 sm:px-4 sm:text-xs">
          Career Insights • UAE Jobs 2026
        </div>

        <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Al Futtaim Careers UAE 2026: Jobs, Divisions & How to Apply
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300 sm:mt-6 sm:gap-4 sm:text-sm">
          <span>Updated: 2026</span>
          <span className="hidden sm:inline">•</span>
          <span className="break-words">Primary keyword: al futtaim careers</span>
        </div>
      </header>

      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:mb-10 sm:rounded-3xl">
        <Image
          src="/Al Futtaim Careers UAE 2026.webp"
          alt="Al Futtaim Careers UAE 2026"
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <nav aria-label="Article sections" className="mb-8 flex flex-wrap gap-2">
        {internalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-orange-900 dark:hover:bg-orange-950/20 dark:hover:text-orange-300 sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
        <div className="space-y-6 sm:space-y-8">
          <section id="overview" className="prose prose-sm max-w-none prose-headings:scroll-mt-28 prose-p:text-slate-700 prose-li:text-slate-700 dark:prose-p:text-slate-300 dark:prose-li:text-slate-300 sm:prose-lg">
            <p>
              Al Futtaim Group hires across five divisions — automotive, retail, real estate, financial services, and healthcare — through its official careers portal, <strong>A Future With Us</strong> (<a href="https://www.afuturewithus.com/" target="_blank" rel="noreferrer">afuturewithus.com</a>), with roles ranging from showroom sales to engineering and management across more than 35,000 employees regionally.
            </p>

            <p>
              For a quick jump, see <a href="#difference">Al-Futtaim vs. Majid Al Futtaim</a>, <a href="#roles">available roles</a>, <a href="#salary">salary ranges</a>, and <a href="#apply">application steps</a>.
            </p>
            <p>
              Looking for more UAE career opportunities? Explore <Link href="/dhl-careers-uae-2026">DHL Careers UAE 2026</Link>, <Link href="/emirates-group-careers-uae-2026">Emirates Group Careers UAE 2026</Link>, and <Link href="/carrefour-hypermarket-careers-2026">Carrefour Hypermarket Careers 2026</Link> for similar employer guides and application tips.
            </p>

            <p>
              If you searched “al futtaim careers” or “a future with us careers,” this guide walks through exactly what the group hires for, how the application actually works, and — importantly — clears up the mix-up between Al-Futtaim Group and Majid Al Futtaim, since these are two different companies that get confused constantly.
            </p>

            <h2 id="difference">Al-Futtaim Group vs. Majid Al Futtaim: Know the Difference First</h2>
            <p>
              This trips up a lot of job seekers, so it’s worth sorting out before you apply anywhere.
            </p>
            <p>
              <strong>Al-Futtaim Group</strong> is the automotive and diversified conglomerate founded by the Al-Futtaim family. It runs Toyota, Lexus, Honda, and Jeep dealerships in the UAE (through Al-Futtaim Motors), plus IKEA, ACE Hardware, Marks &amp; Spencer, Al-Futtaim Engineering, and its Automall used-car business. Its careers portal is <strong>A Future With Us</strong> at <a href="https://www.afuturewithus.com/" target="_blank" rel="noreferrer">afuturewithus.com</a>.
            </p>
            <p>
              <strong>Majid Al Futtaim (MAF)</strong> is a separate company built by a different branch of the family. It operates Carrefour Middle East, Mall of the Emirates, VOX Cinemas, and several lifestyle retail brands. Its careers portal runs through <a href="https://www.majidalfuttaim.com/careers" target="_blank" rel="noreferrer">majidalfuttaim.com/careers</a>, not afuturewithus.com.
            </p>
            <p>
              If you’re specifically hunting for a Carrefour job, you want Majid Al Futtaim’s site — not Al-Futtaim Group’s. Applying to the wrong portal is one of the more common (and avoidable) mistakes in this job search.
            </p>

            <h2 id="roles">What Roles Does Al-Futtaim Group Actually Hire For</h2>
            <p>Because the group spans several industries, “Al Futtaim jobs” covers a wider mix than most single-company listings.</p>

            <h3>Automotive division</h3>
            <ul>
              <li>Sales Executive / Showroom Sales Consultant (Toyota, Lexus, Honda, Jeep)</li>
              <li>Service Advisor / Technician</li>
              <li>Spare Parts Advisor</li>
              <li>Automall Used Car Sales Executive</li>
            </ul>

            <h3>Retail division</h3>
            <ul>
              <li>IKEA Store Associate / Co-worker</li>
              <li>ACE Hardware Sales Staff</li>
              <li>Marks &amp; Spencer Retail Assistant</li>
            </ul>

            <h3>Engineering &amp; real estate</h3>
            <ul>
              <li>Al-Futtaim Engineering technical roles (mechanical, electrical, HVAC)</li>
              <li>Real Estate leasing and property management roles</li>
            </ul>

            <h3>Corporate &amp; support functions</h3>
            <ul>
              <li>HR, finance, and IT roles across the group’s shared services</li>
              <li>Emiratisation-track graduate programmes for UAE nationals</li>
            </ul>

            <p>
              Automotive and retail floor roles make up the bulk of ongoing vacancies. Corporate and engineering roles open less frequently and usually ask for specific prior experience.
            </p>

            <h2 id="salary">Al Futtaim Salary Guide (2026 Estimates)</h2>
            <p>
              These are planning ranges based on publicly available market data, not official pay scales — always confirm the real number in your offer letter.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <table className="w-full table-fixed border-collapse text-left text-[11px] sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-2 py-3 font-semibold text-slate-900 dark:text-white sm:px-4">Role</th>
                    <th className="px-2 py-3 font-semibold text-slate-900 dark:text-white sm:px-4">Salary (AED)</th>
                    <th className="px-2 py-3 font-semibold text-slate-900 dark:text-white sm:px-4">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRows.map(([role, salary, experience]) => (
                    <tr key={role} className="border-t border-slate-200 dark:border-slate-800">
                      <td className="px-2 py-3 align-top text-slate-700 break-words dark:text-slate-200 sm:px-4">{role}</td>
                      <td className="px-2 py-3 align-top text-slate-700 break-words dark:text-slate-200 sm:px-4">{salary}</td>
                      <td className="px-2 py-3 align-top text-slate-700 break-words dark:text-slate-200 sm:px-4">{experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Sales-driven roles, particularly automotive, usually pay a lower base with commission on top — so the real take-home depends heavily on performance, not just the listed salary band.
            </p>

            <h2>Who Can Apply: Requirements</h2>
            <ul>
              <li>Minimum age of 18; most corporate roles prefer candidates with a relevant diploma or bachelor’s degree</li>
              <li>Automotive sales and technical roles often ask for prior dealership or workshop experience</li>
              <li>Fluent English is expected across nearly all customer-facing roles; Arabic is a strong plus</li>
              <li>UAE nationals are prioritized for graduate and Emiratisation programmes</li>
              <li>A valid UAE driving license is often required for automotive sales and service roles</li>
            </ul>

            <h2 id="apply">How to Apply Through A Future With Us</h2>
            <ol>
              <li><strong>Go to afuturewithus.com</strong>, Al-Futtaim Group’s official careers site. Don’t confuse this with majidalfuttaim.com — check the URL before you register.</li>
              <li><strong>Create a candidate profile.</strong> You’ll need an email address, phone number, and a CV ready to upload.</li>
              <li><strong>Search open roles by division.</strong> Filter by Automotive, Retail, Real Estate, or Corporate to narrow down to what fits your background.</li>
              <li><strong>Tailor your CV per division.</strong> A CV aimed at an automotive sales role should lead with sales numbers and customer targets; a retail CV should lead with customer service and stock handling experience.</li>
              <li><strong>Submit and track your application.</strong> The portal lets you check application status under your candidate profile rather than leaving you guessing.</li>
              <li><strong>Prepare for a multi-stage interview.</strong> Corporate and management roles typically involve 2–3 rounds; retail and entry-level roles are usually quicker.</li>
              <li><strong>Never pay any fee.</strong> Al-Futtaim Group does not charge job seekers for applications, interviews, or placement. Treat any such request as a scam.</li>
            </ol>

            <h2>Common Mistakes to Avoid</h2>
            <ul>
              <li>Applying to Majid Al Futtaim roles through the Al-Futtaim portal, or vice versa — they don’t share a candidate database.</li>
              <li>Skipping the division filter and mass-applying to unrelated roles.</li>
              <li>Leaving out a UAE driving license status on automotive applications.</li>
              <li>Not following up. A polite status check after 2–3 weeks is normal practice.</li>
            </ul>

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{item.question}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Al-Futtaim Group and Majid Al Futtaim are different companies with separate careers portals — check which one matches the role you want.</li>
              <li>Al-Futtaim Group’s official portal is A Future With Us (afuturewithus.com).</li>
              <li>The bulk of ongoing hiring sits in automotive sales/service and retail floor roles.</li>
              <li>Salaries range from roughly AED 2,500 for entry-level retail to AED 18,000+ for management.</li>
              <li>Never pay any fee to apply, interview, or get placed — legitimate Al-Futtaim recruitment is always free.</li>
            </ul>

            <p className="italic text-slate-600 dark:text-slate-400">
              This guide is updated periodically to reflect current UAE hiring trends. Salary figures are estimates based on publicly available market data and can vary by role, division, and negotiation — always confirm final terms directly with Al-Futtaim Group before accepting an offer.
            </p>
          </section>
        </div>

        <aside className="space-y-4 sm:space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl sm:p-5">
            <h3 className="mb-3 text-base font-black text-slate-900 dark:text-white sm:text-lg">Quick Apply</h3>
            <Link
              href="https://www.afuturewithus.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Apply on A Future With Us
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl sm:p-5">
            <h3 className="mb-4 text-base font-black text-slate-900 dark:text-white sm:text-lg">Related Articles</h3>
            <div className="space-y-2">
              {relatedArticles.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-orange-900 dark:hover:bg-orange-950/20 dark:hover:text-orange-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl sm:p-5">
            <h3 className="mb-4 text-base font-black text-slate-900 dark:text-white sm:text-lg">External Links</h3>
            <div className="space-y-3">
              {externalLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-orange-200 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-orange-900 dark:hover:bg-orange-950/20"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{link.title}</div>
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">{link.description}</div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
