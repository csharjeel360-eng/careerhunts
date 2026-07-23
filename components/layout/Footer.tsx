import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
              <Image src="/icon.svg" alt="CareerHunt logo" width={40} height={40} className="h-10 w-10" />
            </div>
            <h2 className="text-lg font-semibold text-white">CareerHunt</h2>
          </div>
          <p className="text-sm text-slate-300">
            Discover modern career opportunities, skill-driven jobs, and practical growth resources.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-slate-400">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">Career Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-slate-400">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookies" aria-label="Cookie Policy — CareerHunt" className="hover:text-white">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-slate-200">Support</h3>
          <p className="text-sm text-slate-300">
            Need help? Email us at{' '}
            <a href="mailto:contact@careerhunt.online" className="text-cyan-100 underline underline-offset-2 hover:text-white">
              contact@careerhunt.online
            </a>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800/70 py-5 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} CareerHunt. All rights reserved.
      </div>
    </footer>
  )
}
