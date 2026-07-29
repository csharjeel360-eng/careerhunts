import Link from 'next/link'
import Script from 'next/script'
import { BookOpen, ExternalLink, Sparkles, CheckCircle2, AlertTriangle, ListChecks } from 'lucide-react'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, getCanonicalUrl } from '@/lib/seo'
import { ArticleContent } from '@/lib/articleData'

interface ArticleTemplateProps {
  article: ArticleContent
  relatedArticles: ArticleContent[]
}

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

function renderInlineMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, (_match, label, href) => {
      const isExternal = /^https?:\/\//.test(href)
      const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${href}" class="text-sky-700 underline decoration-sky-300 underline-offset-2 transition hover:text-sky-800"${target}>${label}</a>`
    })
}

function renderMarkdownHtml(text: string) {
  const normalized = text.replace(/\r\n/g, '\n').trim()
  if (!normalized) return ''

  const withHeadings = normalized
    .replace(/^######\s+(.*)$/gm, '<h6>$1</h6>')
    .replace(/^#####\s+(.*)$/gm, '<h5>$1</h5>')
    .replace(/^####\s+(.*)$/gm, '<h4>$1</h4>')
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')

  return withHeadings
    .split(/\n\s*\n/)
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (/^<h[1-6]>/.test(trimmed)) {
        return trimmed
      }
      return `<p>${renderInlineMarkdown(trimmed.replace(/\n/g, ' '))}</p>`
    })
    .join('')
}

function renderMarkdownBody(content: string) {
  const lines = content.split('\n').filter(Boolean)
  const blocks: Array<{ type: 'paragraph' | 'list' | 'note'; content: string[] }> = []

  let currentBlock: { type: 'paragraph' | 'list' | 'note'; content: string[] } | null = null

  lines.forEach((line) => {
    if (/^#{1,6}\s/.test(line)) {
      if (currentBlock) {
        blocks.push(currentBlock)
      }
      currentBlock = { type: 'paragraph', content: [line] }
      return
    }

    if (/^[-*]\s/.test(line)) {
      if (!currentBlock || currentBlock.type !== 'list') {
        if (currentBlock) blocks.push(currentBlock)
        currentBlock = { type: 'list', content: [] }
      }
      currentBlock.content.push(line.replace(/^[-*]\s/, ''))
      return
    }

    if (/^(Alert|Data Note)/i.test(line)) {
      if (currentBlock) blocks.push(currentBlock)
      currentBlock = { type: 'note', content: [line] }
      return
    }

    if (!currentBlock || currentBlock.type !== 'paragraph') {
      if (currentBlock) blocks.push(currentBlock)
      currentBlock = { type: 'paragraph', content: [] }
    }

    currentBlock.content.push(line)
  })

  if (currentBlock) blocks.push(currentBlock)

  return blocks
}

function renderContent(content: string) {
  const sections = content.split(/\n(?=## )/).filter(Boolean)
  return sections.map((section, index) => {
    const lines = section.trim().split('\n')
    const heading = lines[0].replace(/^##\s*/, '')
    const body = lines.slice(1).join('\n').trim()

    if (!body) {
      return null
    }

    if (heading.toLowerCase().includes('data note')) {
      const noteParagraphs = body.split(/\n\n/).filter(Boolean)
      return (
        <div key={`${heading}-${index}`} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-4 w-4" />
            Important note
          </div>
          <div className="mt-2 space-y-2">
            {noteParagraphs.map((paragraph, paragraphIndex) => (
              <p key={`${paragraphIndex}`} className="leading-7" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(paragraph) }} />
            ))}
          </div>
        </div>
      )
    }

    const paragraphs = body.split(/\n\n/).filter(Boolean)

    return (
      <section key={`${heading}-${index}`} className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">{heading}</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          {paragraphs.map((paragraph, paragraphIndex) => {
            if (paragraph.startsWith('|')) {
              const rows = paragraph.split('\n').map((row) => row.split('|').filter(Boolean).map((cell) => cell.trim()))
              const headers = rows[0]
              const bodyRows = rows.slice(1)
                return (
                <div key={`${paragraphIndex}`} className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full table-auto border-collapse bg-white text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        {headers.map((header, headerIndex) => (
                          <th key={`${header}-${headerIndex}`} className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900 whitespace-normal break-words">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((row, rowIndex) => (
                        <tr key={`${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`${cell}-${cellIndex}`} className="border-b border-slate-200 px-4 py-3 text-slate-700 whitespace-normal break-words">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }

            if (paragraph.startsWith('- [ ]')) {
              const items = paragraph.split('\n').filter(Boolean)
              return (
                <div key={`${paragraphIndex}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
                    <ListChecks className="h-4 w-4 text-sky-700" />
                    Action checklist
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-700" />
                        <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item.replace('- [ ] ', '')) }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }

            if (paragraph.toLowerCase().includes('alert') || paragraph.toLowerCase().includes('data note')) {
              return (
                <div key={`${paragraphIndex}`} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertTriangle className="h-4 w-4" />
                    Important note
                  </div>
                  <p className="mt-2" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(paragraph.replace(/^(Alert|Data Note.*?)/i, '').trim()) }} />
                </div>
              )
            }

            const headingMatch = paragraph.match(/^(#{2,6})\s+(.*)$/)
            if (headingMatch) {
              const level = headingMatch[1].length
              const text = headingMatch[2]
              const qaMatch = text.match(/^(.*?\?)\s+(.*)$/)
              const headingText = qaMatch ? qaMatch[1] : text
              const answerText = qaMatch ? qaMatch[2] : ''

              if (level === 3) {
                return (
                  <div key={`${paragraphIndex}`}>
                    <h3 className="text-xl font-semibold text-slate-900">{headingText}</h3>
                    {answerText ? <p className="mt-3 text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(answerText) }} /> : null}
                  </div>
                )
              }
              if (level === 4) {
                return (
                  <div key={`${paragraphIndex}`}>
                    <h4 className="text-lg font-semibold text-slate-900">{headingText}</h4>
                    {answerText ? <p className="mt-3 text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(answerText) }} /> : null}
                  </div>
                )
              }
              if (level === 5) {
                return (
                  <div key={`${paragraphIndex}`}>
                    <h5 className="text-base font-semibold text-slate-900">{headingText}</h5>
                    {answerText ? <p className="mt-3 text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(answerText) }} /> : null}
                  </div>
                )
              }
              if (level === 6) {
                return (
                  <div key={`${paragraphIndex}`}>
                    <h6 className="text-sm font-semibold text-slate-900">{headingText}</h6>
                    {answerText ? <p className="mt-3 text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(answerText) }} /> : null}
                  </div>
                )
              }
            }

            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
              const listItems = paragraph.split('\n').filter(Boolean)
              return (
                <ol className="list-decimal space-y-3 pl-6" key={`${paragraphIndex}`}>
                  {listItems.map((item) => (
                    <li key={item} className="text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item.replace(/^\d+\.\s*/, '')) }} />
                  ))}
                </ol>
              )
            }

            if (paragraph.startsWith('- ')) {
              const listItems = paragraph.split('\n').filter(Boolean)
              return (
                <ul className="list-disc space-y-2 pl-6" key={`${paragraphIndex}`}>
                  {listItems.map((item) => (
                    <li key={item} className="text-slate-700" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item.replace(/^-\s*/, '')) }} />
                  ))}
                </ul>
              )
            }

            return <p key={`${paragraphIndex}`} dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(paragraph) }} />
          })}
        </div>
      </section>
    )
  })
}

export default function ArticleTemplate({ article, relatedArticles }: ArticleTemplateProps) {
  const { frontmatter, content } = article
  const canonicalUrl = getCanonicalUrl(frontmatter.slug || '/career-resources')
  const publishedDate = formatArticleDate(frontmatter.publishDate)
  const verifiedDate = formatArticleDate(frontmatter.lastVerified)
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Career Resources', item: '/career-resources' },
    { name: frontmatter.title || 'Article', item: frontmatter.slug || '/career-resources' },
  ]
  const faqSchema = generateFAQSchema((frontmatter.faqs || []).filter((faq) => faq?.question && faq?.answer))
  const articleSchema = generateArticleSchema({
    title: frontmatter.metaTitle || frontmatter.title || 'Career Guide',
    description: frontmatter.metaDescription || 'Career guide',
    url: canonicalUrl,
    datePublished: frontmatter.publishDate || new Date().toISOString(),
    authorName: frontmatter.authorName || 'CareerHunt',
    keywords: [frontmatter.primaryKeyword || 'career guide', ...(frontmatter.secondaryKeywords || [])],
  })
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)] py-14 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.item} className="flex items-center gap-2">
                    {index < breadcrumbs.length - 1 ? (
                      <>
                        <Link href={crumb.item} className="transition hover:text-sky-700">{crumb.name}</Link>
                        <span>/</span>
                      </>
                    ) : (
                      <span className="font-semibold text-slate-900">{crumb.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{frontmatter.category || 'Career guide'}</span>
                <span className="text-sm text-slate-500">Last verified {verifiedDate || 'Recently updated'}</span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{frontmatter.title || 'Career article'}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{frontmatter.metaDescription || 'Helpful career guidance from CareerHunt.'}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-sky-700" />
                  <span>{frontmatter.wordCount || 800} words</span>
                </div>
                <span>Primary keyword: {frontmatter.primaryKeyword || 'career guide'}</span>
                <span>Published {publishedDate || 'recently'}</span>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-8 text-white">
                <div className="flex items-center gap-2 text-sky-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">Quick take</span>
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-200">{frontmatter.metaDescription || 'Helpful career guidance from CareerHunt.'}</p>
              </div>

              <div className="mt-10 space-y-6">
                {renderContent(content)}
              </div>

              <section className="mt-10 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 sm:p-7" aria-labelledby="faq-section">
                <h2 id="faq-section" className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
                <div className="mt-6 space-y-3">
                  {(frontmatter.faqs || []).map((faq) => (
                    <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
                      <div className="mt-3 text-slate-600" dangerouslySetInnerHTML={{ __html: renderMarkdownHtml(faq.answer) }} />
                    </details>
                  ))}
                </div>
              </section>

              <section className="mt-10 rounded-[1.25rem] border border-slate-200 bg-white p-6 sm:p-7" aria-labelledby="related-links">
                <h2 id="related-links" className="text-2xl font-semibold text-slate-900">Related guides</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {(frontmatter.relatedLinks || []).filter((link) => link?.href && link?.title).map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-900">{link.title}</span>
                        <ExternalLink className="h-4 w-4 text-sky-700" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Find the right opportunity</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Use this guide as a starting point, then explore the latest UAE jobs to match your experience and move faster.</p>
              <Link href={frontmatter.ctaLink || '/jobs'} className="mt-5 inline-flex items-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
                {frontmatter.ctaText || 'Explore careers'}
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Related articles</h2>
              <div className="mt-4 space-y-3">
                {relatedArticles.slice(0, 3).map((article) => (
                  <Link key={article.frontmatter.slug} href={article.frontmatter.slug} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50">
                    <p className="font-semibold text-slate-900">{article.frontmatter.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{article.frontmatter.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Useful links</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {(frontmatter.pillars || []).map((pillar) => {
                  const related = (frontmatter.relatedLinks || []).find((r) => r.href === pillar)
                  const label = related
                    ? related.title
                    : pillar.replace(/^\/+/, '').split('/').filter(Boolean).map((part) => part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())).join(' › ')
                  const isExternal = /^https?:\/\//.test(pillar)

                  return (
                    <li key={pillar}>
                      {isExternal ? (
                        <a href={pillar} className="font-medium text-sky-700 hover:underline" target="_blank" rel="noopener noreferrer">{label}</a>
                      ) : (
                        <Link href={pillar} className="font-medium text-sky-700 hover:underline">{label}</Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}
