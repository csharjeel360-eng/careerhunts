import Link from 'next/link'

interface SalaryCardProps {
  title: string
  excerpt?: string
  href: string
  image?: string
  badge?: string
}

export function SalaryCard({ title, excerpt = '', href, image, badge }: SalaryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.4)),url('${image || '/salary-guide-default.png'}')` }} />
      <div className="p-5 md:p-6">
        {badge && (
          <div className="mb-3 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {badge}
          </div>
        )}
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {excerpt && <p className="mt-3 text-sm leading-6 text-slate-600">{excerpt}</p>}
        <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-900">
          <span>View guide</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:bg-slate-700">→</span>
        </div>
      </div>
    </Link>
  )
}

export default SalaryCard
