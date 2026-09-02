'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import ContentCard from '@/components/shared/ContentCard'
import { BLOG_PAGE_CARDS, TRENDING_GUIDES } from '@/lib/blogPageCards'

export default function CareerInsightsClient() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = ['All', 'Visa Guides', 'Salary Guides', 'Company Careers', 'Career Resources']

  const filteredCards = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return BLOG_PAGE_CARDS.filter((card) => {
      const category = card.category ?? 'Career guide'
      const normalizedCategory = category.toLowerCase()

      const matchesTab =
        activeTab === 'All' ||
        (activeTab === 'Visa Guides' && normalizedCategory.includes('visa')) ||
        (activeTab === 'Salary Guides' && normalizedCategory.includes('salary')) ||
        (activeTab === 'Company Careers' && (normalizedCategory.includes('career') || normalizedCategory.includes('company'))) ||
        (activeTab === 'Career Resources' && normalizedCategory.includes('resource'))

      const matchesSearch = !query || `${card.title} ${card.description}`.toLowerCase().includes(query)

      return matchesTab && matchesSearch
    })
  }, [activeTab, searchTerm])

  const trendingArticles = TRENDING_GUIDES.map((href) => BLOG_PAGE_CARDS.find((card) => card.href === href))
    .filter((card): card is NonNullable<typeof card> => Boolean(card))
    .filter((card) => {
      const category = card.category ?? 'Career guide'
      const normalizedCategory = category.toLowerCase()
      const query = searchTerm.trim().toLowerCase()

      const matchesTab =
        activeTab === 'All' ||
        (activeTab === 'Visa Guides' && normalizedCategory.includes('visa')) ||
        (activeTab === 'Salary Guides' && normalizedCategory.includes('salary')) ||
        (activeTab === 'Company Careers' && (normalizedCategory.includes('career') || normalizedCategory.includes('company'))) ||
        (activeTab === 'Career Resources' && normalizedCategory.includes('resource'))

      const matchesSearch = !query || `${card.title} ${card.description}`.toLowerCase().includes(query)

      return matchesTab && matchesSearch
    })

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 sm:mt-10">
        <div className="rounded-[22px] border border-slate-200/80 bg-white/80 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-3">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'border border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 text-sky-700 shadow-sm'
                      : 'border border-transparent bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-900'
                  ].join(' ')}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search guides, salary tips, visa advice..."
            className="w-full rounded-[18px] border border-slate-200 bg-white/90 py-3.5 pl-11 pr-4 text-sm text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
        </div>
      </div>

      {trendingArticles.length > 0 && (
        <div className="mt-8 sm:mt-10">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-semibold text-slate-900">Trending guides</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trendingArticles.map((card) => {
              if (!card) return null

              const category = card.category ?? 'Career guide'
              const normalizedCategory = category.toLowerCase()
              const variant = normalizedCategory.includes('visa')
                ? 'visa'
                : normalizedCategory.includes('salary')
                  ? 'salary'
                  : normalizedCategory.includes('resource')
                    ? 'resources'
                    : 'guide'

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative block overflow-hidden rounded-[20px] border border-sky-100 bg-gradient-to-br from-white via-sky-50/60 to-cyan-50/60 p-4 shadow-[0_10px_28px_rgba(14,116,144,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_36px_rgba(14,116,144,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500" />
                  {card.backgroundImage ? (
                    <div className="mb-3 overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100">
                      <Image
                        src={card.backgroundImage}
                        alt={card.title}
                        width={640}
                        height={280}
                        className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}
                  <span className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    {category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 transition group-hover:text-sky-700">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-3">{card.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs text-slate-500">
                    <span>{card.readTime ?? '6 min read'}</span>
                    <span>{card.updatedAt ?? card.publishedAt}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-sky-700">
                    <span>Read guide</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] sm:mt-10 sm:gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => {
            const category = card.category ?? 'Career guide'
            const normalizedCategory = category.toLowerCase()
            const variant = normalizedCategory.includes('visa')
              ? 'visa'
              : normalizedCategory.includes('salary')
                ? 'salary'
                : normalizedCategory.includes('resource')
                  ? 'resources'
                  : 'guide'

            return (
              <ContentCard
                key={card.href}
                href={card.href}
                title={card.title}
                description={card.description}
                category={category}
                variant={variant}
                authorName={card.authorName ?? 'CareerHunt'}
                authorInitials={card.authorInitials ?? 'CH'}
                readTime={card.readTime ?? '6 min read'}
                publishedAt={card.publishedAt}
                updatedAt={card.updatedAt}
                backgroundImage={card.backgroundImage}
              />
            )
          })
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            No guides match that search. Try another keyword or switch tabs.
          </div>
        )}
      </div>
    </>
  )
}
