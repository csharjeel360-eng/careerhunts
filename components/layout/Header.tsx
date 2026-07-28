import Link from 'next/link'
import Image from 'next/image'
import HeaderAuth from '@/components/layout/HeaderAuth'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Career Insights', href: '/career-insights' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 shadow-lg shadow-slate-900/20">
            <Image src="/icon.svg" alt="CareerHunt logo" width={40} height={40} className="h-10 w-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-slate-900">CareerHunt</span>
            <span className="text-xs text-slate-500">Find your next move</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <HeaderAuth navItems={NAV_ITEMS} />
      </div>
    </header>
  )
}
