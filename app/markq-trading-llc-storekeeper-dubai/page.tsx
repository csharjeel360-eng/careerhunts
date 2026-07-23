import type { Metadata } from 'next'
import { NativeAd } from '@/components/ads/NativeAd'
import { getPageMetadata, generateJobSchema } from '@/lib/seo'

const pageTitle = 'MARKQ Trading LLC Careers: Storekeeper – Warehouse Operations (Dubai, 2026)'
const pageDescription = 'MARKQ Trading LLC is hiring a Storekeeper for its e-commerce warehouse in Dubai Investments Park. Salary AED 2,200–2,700. See requirements, duties, and how to apply.'

export const metadata: Metadata = getPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/markq-trading-llc-storekeeper-dubai',
  keywords: [
    'MARKQ Trading',
    'Storekeeper',
    'Warehouse Jobs Dubai',
    'Dubai Jobs',
    'DIP 1',
    'warehouse operations',
  ],
})

const job = {
  title: 'Storekeeper – Warehouse Operations',
  summary:
    "MARKQ Trading LLC is hiring a Storekeeper for its e-commerce warehouse in Dubai Investments Park (DIP 1).",
  description:
    "MARKQ Trading LLC is a general trading company established in 2021 and based in Warehouse No. 10, Dubai Investments Park 1 (DIP 1). The Storekeeper role supports receiving, verification, and day-to-day warehouse organization. Responsibilities include following warehouse procedures, receiving shipments, maintaining stock locations, and assisting with stock counts.",
  postedDate: '2026-07-23',
  updatedAt: '2026-07-23',
  employmentType: 'Full-time',
  companyId: {
    name: 'MARKQ Trading LLC',
    website: '',
    logo: '/icon.svg',
  },
  city: 'Dubai',
  country: 'AE',
  salaryCurrency: 'AED',
  salaryMin: 2200,
  salaryMax: 2700,
  slug: 'markq-trading-llc-storekeeper-dubai',
  _id: 'markq-markq-storekeeper-2026',
}

export default function MarkqStorekeeperPage() {
  const jobSchema = generateJobSchema(job)

  return (
    <article className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />

      <header className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-600">MARKQ Trading LLC Careers</p>
          <h1 className="mt-3 text-2xl font-bold">MARKQ Trading LLC is Hiring a Storekeeper in Dubai</h1>
          <p className="mt-4 text-sm text-slate-600">Published: July 23, 2026 • Last updated: July 23, 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
        <NativeAd className="mx-auto mb-8 max-w-3xl" />

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Quick Facts</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-auto text-sm text-slate-700">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold w-1/3">Job Title</td>
                  <td className="py-2">Storekeeper – Warehouse Operations</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-2 font-semibold">Company</td>
                  <td className="py-2">MARKQ Trading LLC (MTL)</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Location</td>
                  <td className="py-2">Dubai Investments Park 1 (DIP 1), Dubai, UAE</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-2 font-semibold">Salary</td>
                  <td className="py-2">AED 2,200 – AED 2,700 / month (employer-provided range)</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Employment Type</td>
                  <td className="py-2">Full-time</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-2 font-semibold">Industry</td>
                  <td className="py-2">General trading / e-commerce warehousing</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Application Method</td>
                  <td className="py-2">Easy Apply (Glassdoor)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">About MARKQ Trading LLC</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">MARKQ Trading LLC is a general trading company established in 2021 and based in Warehouse No. 10, Dubai Investments Park 1 (DIP 1). The company operates across import/export, procurement, e-commerce, ownership of retail brands, corporate services, and investments in startups and business ventures. Its warehouse operations in DIP 1 support growing e-commerce and distribution activity.</p>
          <p className="mt-3 text-sm text-slate-500 italic">Note: Public data on the company is limited to directory listings and job postings — MARKQ Trading LLC does not appear to maintain extensive public-facing corporate materials beyond Glassdoor and UAE business directories.</p>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Role Overview</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">The Storekeeper will support day-to-day warehouse operations at MARKQ Trading LLC's DIP 1 facility. Based on the employer's published listing, the core responsibilities include receiving and verifying incoming shipments, maintaining stock organization, and keeping warehouse areas clean and safe while following supervisor instructions.</p>

          <h3 className="mt-6 text-sm font-semibold">Core responsibilities</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
            <li>Follow warehouse procedures and supervisor instructions.</li>
            <li>Receive and verify incoming shipments against delivery notes and packing lists.</li>
            <li>Store goods in assigned locations and maintain organized stock areas (location codes such as A1, B2, C3 may be used).</li>
            <li>Maintain warehouse cleanliness and adhere to health & safety procedures.</li>
            <li>Assist with periodic stock counts and basic inventory reconciliation.</li>
            <li>Report damaged or missing items to the supervisor promptly.</li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold">Related roles mentioned</h3>
          <p className="mt-3 text-sm text-slate-600">The employer has also advertised a related <strong>Team Leader / Storekeeper – E-Commerce Warehouse</strong> role (AED 2,000–3,000/month) that includes leadership responsibilities such as updating stock daily, coordinating order schedules with the admin team, leading a small team of warehouse helpers, and maintaining detailed location codes.</p>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Who This Role Suits</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
            <li>Comfortable with physical, hands-on warehouse work.</li>
            <li>Has basic inventory handling and stock-tracking experience.</li>
            <li>Able to follow safety and organizational procedures under supervision.</li>
            <li>Holds or can obtain UAE work eligibility (visa status should be confirmed with the employer).</li>
          </ul>
          <p className="mt-3 text-sm text-slate-500">Note: MARKQ's listing doesn't specify minimum years of experience or education — candidates should confirm eligibility criteria directly with the employer.</p>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Salary & What It Means</h2>
          <p className="mt-4 text-sm text-slate-600">At AED 2,200–2,700/month, this position is consistent with entry-level storekeeper roles in Dubai. Supervisory or inventory officer roles in the market are typically higher (AED 4,000–6,000). Candidates should confirm whether the package includes visa sponsorship, accommodation, transport, or medical insurance — these details are not specified in the public listing.</p>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">How to Apply</h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-slate-600">
            <li>Search "MARKQ TRADING LLC Storekeeper" on Glassdoor.</li>
            <li>Use the Easy Apply option on the Glassdoor listing, or submit your CV directly through the platform.</li>
            <li>Highlight any prior warehouse, stock-handling, or storekeeping experience and confirm your visa/work-eligibility status.</li>
          </ol>
          <p className="mt-4">
            <a href="https://www.glassdoor.com/job-listing/storekeeper-warehouse-operations-markq-trading-llc-JV_IC2204498_KO0,32_KE33,50.htm?jl=1010142118019" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Apply here: Storekeeper – Warehouse Operations (Glassdoor)</a>
          </p>
          <p className="mt-4 text-sm text-slate-500">Safety note: Never pay a fee for a job application, interview, or job offer. A legitimate employer will not ask for payment at any stage.</p>
        </section>

        <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">FAQs</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold">Is MARKQ Trading LLC a real, verifiable company?</p>
              <p className="mt-1">Yes — it's listed across multiple UAE business directories (Yello.ae, HiDubai, Dubai Local, ExportersDubai) and job postings such as Glassdoor. Public information is limited.</p>
            </div>
            <div>
              <p className="font-semibold">What does the Storekeeper role pay?</p>
              <p className="mt-1">The employer-listed range is AED 2,200–2,700 per month.</p>
            </div>
            <div>
              <p className="font-semibold">Is this a warehouse job or an office job?</p>
              <p className="mt-1">It's a hands-on warehouse role based at MARKQ's DIP 1 facility, focused on receiving shipments, stock organization, and warehouse cleanliness.</p>
            </div>
            <div>
              <p className="font-semibold">Does MARKQ Trading LLC have other openings?</p>
              <p className="mt-1">Yes — the company has advertised related roles such as Team Leader/Storekeeper, E-commerce & Purchasing Executive, and Data Entry Operator in past listings.</p>
            </div>
            <div>
              <p className="font-semibold">Do I need prior experience?</p>
              <p className="mt-1">The public listing doesn't specify a minimum experience requirement; confirm directly with the employer during application.</p>
            </div>
            <div>
              <p className="font-semibold">How do I apply?</p>
              <p className="mt-1">Via Glassdoor's Easy Apply feature on the listing, or by submitting a CV directly through the platform.</p>
            </div>
          </div>
        </section>

          <section className="mb-8 rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Related careers</h2>
            <p className="mt-3 text-sm text-slate-600">You may also be interested in these similar vacancies and company career pages:</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm">
              <li><a href="/amazon-careers-2026" className="text-blue-600 hover:underline">Amazon Careers 2026 — UAE & Global openings</a></li>
              <li><a href="/noon-careers-uae-2026" className="text-blue-600 hover:underline">Noon Careers UAE 2026 — E-commerce roles</a></li>
              <li><a href="/shopify-careers-2026" className="text-blue-600 hover:underline">Shopify Careers 2026 — Remote & local roles</a></li>
              <li><a href="/fedex-careers-usa-2026" className="text-blue-600 hover:underline">FedEx Careers USA 2026 — Logistics & operations</a></li>
              <li><a href="/dp-world-careers-2026" className="text-blue-600 hover:underline">DP World Careers 2026 — Port & warehouse roles</a></li>
              <li><a href="/emirates-group-careers-uae-2026" className="text-blue-600 hover:underline">Emirates Group Careers UAE 2026 — Aviation & services</a></li>
            </ul>
          </section>

          <footer className="rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Job details in this article are based on the employer's published Glassdoor listing as of July 2026. Salary, requirements, and availability can change — always verify current details directly with the employer before applying.</p>
          </footer>
      </div>
    </article>
  )
}
