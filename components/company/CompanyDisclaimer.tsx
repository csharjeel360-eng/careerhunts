'use client'

import Link from 'next/link'

interface CompanyDisclaimerProps {
  companyName: string
  officialUrl: string
}

export function CompanyDisclaimer({ companyName, officialUrl }: CompanyDisclaimerProps) {
  return (
    <div className="rounded-[1.5rem] border border-orange-200 bg-orange-50/80 p-4 shadow-sm sm:p-5">
      <p className="text-sm leading-7 text-slate-700">
        <span className="font-semibold text-slate-900">This page is independently published by Career Hunt</span> and is not affiliated with, endorsed by, or sponsored by {companyName}. All trademarks, logos, and brand names belong to their respective owners. For official vacancies, visit{' '}
        <Link href={officialUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#FF6B35] underline-offset-2 hover:underline">
          {companyName}'s official careers site
        </Link>
        .
      </p>
    </div>
  )
}
