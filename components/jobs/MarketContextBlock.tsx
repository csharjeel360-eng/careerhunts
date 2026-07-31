interface MarketContextBlockProps {
  marketContext?: {
    averageSalaryRange?: string
    demandTrend?: string
    visaSponsorshipLikelihood?: string
  } | null
}

export default function MarketContextBlock({ marketContext }: MarketContextBlockProps) {
  if (!marketContext) return null

  const hasContent = Boolean(
    marketContext.averageSalaryRange || marketContext.demandTrend || marketContext.visaSponsorshipLikelihood
  )

  if (!hasContent) return null

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
      <h3 className="text-sm font-semibold text-slate-900">Market Context</h3>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
        {marketContext.averageSalaryRange ? <p><span className="font-semibold text-slate-800">Average salary:</span> {marketContext.averageSalaryRange}</p> : null}
        {marketContext.demandTrend ? <p><span className="font-semibold text-slate-800">Demand trend:</span> {marketContext.demandTrend}</p> : null}
        {marketContext.visaSponsorshipLikelihood ? <p><span className="font-semibold text-slate-800">Visa sponsorship:</span> {marketContext.visaSponsorshipLikelihood}</p> : null}
      </div>
    </div>
  )
}
