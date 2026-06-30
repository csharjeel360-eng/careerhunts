import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: '404 | Page Not Found',
  description: 'CareerHunt page not found. Return to the homepage or explore job listings.',
}

export default function NotFoundPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-cyan-300">
            404 error
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Page not found.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The page you are looking for does not exist or has been moved. Let&rsquo;s get you back on track with relevant career resources.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-primary/90">
              <Link href="/">Go back home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-8 text-white transition duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <Link href="/jobs">Browse jobs</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl gap-8 sm:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why this happened</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              It may be a broken link, mistyped address, or a page that no longer exists. CareerHunt keeps your search moving forward.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">What to do next</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Visit the homepage to explore top jobs and salary guides.</li>
              <li>• Search jobs directly and filter by category or location.</li>
              <li>• Contact support if you think this is an error.</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}
