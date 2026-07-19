import { DelayedRouteLoader } from '@/components/ui/DelayedRouteLoader'

export default function Loading() {
  return (
    <DelayedRouteLoader delayMs={250} className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="h-10 w-40 rounded-full bg-slate-200" />
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="h-6 w-48 rounded bg-slate-200" />
          <div className="mt-4 h-10 w-3/4 rounded bg-slate-200" />
          <div className="mt-4 h-4 w-full rounded bg-slate-200" />
          <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="h-80 rounded-[1.75rem] bg-white p-6 shadow-sm" />
          <div className="h-56 rounded-[1.75rem] bg-white p-6 shadow-sm" />
        </div>
      </div>
    </DelayedRouteLoader>
  )
}
