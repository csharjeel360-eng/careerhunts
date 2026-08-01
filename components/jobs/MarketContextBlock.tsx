interface MarketContextBlockProps {
  marketContext?: string | null
}

export default function MarketContextBlock({ marketContext }: MarketContextBlockProps) {
  if (!marketContext || !marketContext.trim()) return null

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Market Context
        </span>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-700">{marketContext}</p>
    </div>
  )
}
