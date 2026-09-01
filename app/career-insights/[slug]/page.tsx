import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getArticleSlugs, getArticlesByCategory } from '@/lib/articleData'
import { getCanonicalUrl } from '@/lib/seo'

function formatArticleDate(value?: string) {
  if (!value) return null

  const trimmed = value.trim()
  if (!trimmed) return null

  const parsed = new Date(trimmed)
  if (!Number.isNaN(parsed.getTime())) {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(parsed)
  }

  return trimmed
}

function renderInlineText(text: string) {
  const textClassName = 'break-words [overflow-wrap:anywhere]'
  const nodes: React.ReactNode[] = []
  const regex = /(\!\[([^\]]*)\]\(([^)]+)\)|\*\*[^*]+\*\*|\*[^*]+\*|\[([^\]]+)\]\(([^)]+)\))/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`text-${lastIndex}`} className={textClassName}>
          {text.slice(lastIndex, match.index)}
        </span>
      )
    }

    const [fullMatch] = match

    if (fullMatch.startsWith('![') && fullMatch.includes('](')) {
      const altText = match[2] || ''
      const imageSrc = match[3] || ''
      nodes.push(
        <img key={`image-${match.index}`} src={imageSrc} alt={altText} className="mt-4 h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm" />
      )
    } else if (fullMatch.startsWith('**') && fullMatch.endsWith('**')) {
      nodes.push(
        <strong key={`strong-${match.index}`} className={textClassName}>
          {fullMatch.slice(2, -2)}
        </strong>
      )
    } else if (fullMatch.startsWith('*') && fullMatch.endsWith('*')) {
      nodes.push(
        <em key={`em-${match.index}`} className={textClassName}>
          {fullMatch.slice(1, -1)}
        </em>
      )
    } else {
      const linkText = match[4] || match[2]
      const linkHref = match[5] || match[3]
      const isExternal = /^https?:\/\//i.test(linkHref) || /^mailto:/i.test(linkHref)

      nodes.push(
        isExternal ? (
          <a key={`link-${match.index}`} href={linkHref} target="_blank" rel="noreferrer noopener" className={`font-medium text-sky-700 underline-offset-4 hover:underline ${textClassName}`}>
            {linkText}
          </a>
        ) : (
          <Link key={`link-${match.index}`} href={linkHref} className={`font-medium text-sky-700 underline-offset-4 hover:underline ${textClassName}`}>
            {linkText}
          </Link>
        )
      )
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(
      <span key={`text-${lastIndex}`} className={textClassName}>
        {text.slice(lastIndex)}
      </span>
    )
  }

  return nodes
}

function renderMarkdownContent(content: string) {
  const lines = content.split(/\r?\n/)
  const elements: React.ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    if (/^#{1,3}\s+/.test(line)) {
      const level = line.match(/^#+/)?.[0].length ?? 2
      const text = line.replace(/^#{1,3}\s+/, '')
      const HeadingTag = `h${Math.min(level + 1, 3)}` as keyof JSX.IntrinsicElements
      elements.push(
        <HeadingTag key={`heading-${index}`} className={level === 2 ? 'mt-8 break-words text-2xl font-semibold leading-tight text-slate-900' : 'mt-6 break-words text-xl font-semibold leading-tight text-slate-900'}>
          {renderInlineText(text)}
        </HeadingTag>
      )
      index += 1
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, '').trim())
        index += 1
      }
      elements.push(
        <ul key={`ul-${index}`} className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:pl-6">
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`} className="break-words [overflow-wrap:anywhere]">{renderInlineText(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, '').trim())
        index += 1
      }
      elements.push(
        <ol key={`ol-${index}`} className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:pl-6">
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`} className="break-words [overflow-wrap:anywhere]">{renderInlineText(item)}</li>
          ))}
        </ol>
      )
      continue
    }

    if (line.startsWith('|') && lines[index + 1]?.trim().startsWith('|')) {
      const rows = []
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(lines[index].split('|').slice(1, -1).map((cell) => cell.trim()))
        index += 1
      }
      const [header, ...bodyRows] = rows
      elements.push(
        <div key={`table-${index}`} className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                {header.map((cell, cellIndex) => (
                  <th key={`${cell}-${cellIndex}`} className="px-4 py-3 text-left font-semibold text-slate-700">{renderInlineText(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {bodyRows.map((row, rowIndex) => (
                <tr key={`${row.join('-')}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-slate-600">{renderInlineText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    const paragraphLines: string[] = []
    while (index < lines.length && lines[index].trim() && !/^#{1,3}\s+/.test(lines[index]) && !/^[-*]\s+/.test(lines[index]) && !/^\d+\.\s+/.test(lines[index]) && !lines[index].trim().startsWith('|')) {
      paragraphLines.push(lines[index].trim())
      index += 1
    }

    if (paragraphLines.length) {
      elements.push(
        <p key={`paragraph-${index}`} className="mt-4 break-words text-sm leading-7 text-slate-600 [overflow-wrap:anywhere]">
          {renderInlineText(paragraphLines.join(' '))}
        </p>
      )
    }
  }

  return elements
}

type ArticlePageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const slug = `/career-insights/${params.slug}`
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Career Insight',
      description: 'Career guidance and hiring insights for job seekers in the UAE.'
    }
  }

  const canonicalUrl = getCanonicalUrl(article.frontmatter.slug)

  return {
    title: article.frontmatter.metaTitle,
    description: article.frontmatter.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.frontmatter.metaTitle,
      description: article.frontmatter.metaDescription,
      url: canonicalUrl,
      type: 'article',
      siteName: 'CareerHunt',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.metaTitle,
      description: article.frontmatter.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export function generateStaticParams() {
  return getArticleSlugs()
    .filter((slug) => typeof slug === 'string' && slug.startsWith('/career-insights/'))
    .map((slug) => ({ slug: slug.replace('/career-insights/', '').trim() }))
    .filter((entry) => Boolean(entry.slug))
}

export default function CareerInsightsSlugPage({ params }: ArticlePageProps) {
  const resolvedSlug = params?.slug ? String(params.slug).trim() : ''
  const article = getArticleBySlug(`/career-insights/${resolvedSlug}`)

  if (!article) {
    notFound()
  }

  const { frontmatter, content } = article
  const relatedGuides = getArticlesByCategory(frontmatter.category)
    .filter((entry) => entry.frontmatter.slug !== frontmatter.slug)
    .slice(0, 3)

  return (
    <section className="overflow-x-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)] py-6 sm:py-10 lg:py-14">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[24px] border border-slate-200 bg-white p-3 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/career-insights" className="font-medium text-sky-700 transition hover:text-sky-800">
              Career insights
            </Link>
            <span>/</span>
            <span>{frontmatter.primaryKeyword}</span>
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            {frontmatter.title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
            {frontmatter.metaDescription}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500 sm:mt-6">
            <span>Published {formatArticleDate(frontmatter.publishDate)}</span>
            {frontmatter.updatedDate ? <span>Updated {formatArticleDate(frontmatter.updatedDate)}</span> : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {frontmatter.secondaryKeywords.slice(0, 4).map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[2fr_1fr] lg:gap-8">
            <article className="prose prose-slate max-w-none w-full min-w-0 overflow-x-hidden prose-sm sm:prose-base">
              {renderMarkdownContent(content)}
            </article>

            <aside className="w-full min-w-0 space-y-4">
              <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
                <div className="mt-4 space-y-2">
                  <Link href={frontmatter.ctaLink} className="flex w-full items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                    <span>{frontmatter.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/jobs" className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <span>Browse latest jobs</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-slate-900">Related links</h2>
                <div className="mt-4 space-y-2">
                  {frontmatter.relatedLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-slate-50">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-slate-900">Frequently asked questions</h2>
                <div className="mt-4 space-y-3">
                  {frontmatter.faqs.map((faq, index) => (
                    <div key={`${faq.question}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-semibold text-slate-900">{faq.question}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {relatedGuides.length > 0 && (
            <div className="mt-12 border-t border-slate-200 pt-10">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Related guides</h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedGuides.map((entry) => (
                  <Link
                    key={entry.frontmatter.slug}
                    href={entry.frontmatter.slug}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50/40"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {entry.frontmatter.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-sky-700">
                      {entry.frontmatter.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{entry.frontmatter.metaDescription}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-sky-700">
                      <span>Read article</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
