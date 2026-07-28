import Link from 'next/link'

interface BlogLinkCardProps {
  href: string
  title: string
  description: string
  keywords: string[]
  backgroundImage: string
  borderClass: string
  shadowClass: string
  labelText: string
  labelBgClass: string
  labelTextClass: string
  actionText: string
}

export default function BlogLinkCard({
  href,
  title,
  description,
  keywords,
  backgroundImage,
  borderClass,
  shadowClass,
  labelText,
  labelBgClass,
  labelTextClass,
  actionText
}: BlogLinkCardProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[2rem] border ${borderClass} bg-cover bg-center p-8 transition ${shadowClass}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-sm font-medium ${labelBgClass} ${labelTextClass}`}>
          {labelText}
        </span>
        <span className="text-sm font-medium text-white">{actionText}</span>
      </div>
      <h2 className="relative z-10 mt-5 text-2xl font-semibold text-white transition">{title}</h2>
      <p className="relative z-10 mt-4 text-base leading-7 text-white/90">{description}</p>
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span key={keyword} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90">
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  )
}
