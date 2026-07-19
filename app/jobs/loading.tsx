import { DelayedRouteLoader } from '@/components/ui/DelayedRouteLoader'

export default function Loading() {
  return (
    <DelayedRouteLoader
      delayMs={250}
      className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <div className="mx-auto h-10 w-40 animate-pulse rounded-full bg-slate-200" />
          <div className="mx-auto h-12 w-3/4 animate-pulse rounded-full bg-slate-200" />
          <div className="mx-auto h-4 w-2/3 animate-pulse rounded-full bg-slate-200" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-32 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-sm" />
          <div className="h-32 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-sm" />
          <div className="h-32 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white/90 shadow-sm" />
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 h-8 w-48 animate-pulse rounded bg-slate-200" />
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
            <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
            <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
            <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-56 animate-pulse rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm" />
          ))}
        </div>
      </div>
    </DelayedRouteLoader>
  )
}
