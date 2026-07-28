import type { Metadata } from 'next'
import ContentCard from '@/components/shared/ContentCard'
import { BLOG_POSTS } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Guides Hub',
  description: 'Browse career, salary, and visa guidance articles in one place.'
}

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Guides hub</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Browse practical career and relocation guides</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Use this hub to discover career advice, salary insights, and visa guidance tailored to job seekers moving across the UAE and beyond.
        </p>
      </section>

      <section className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {BLOG_POSTS.slice(0, 4).map((post) => (
          <ContentCard
            key={post.slug}
            href={`/career-insights/${post.slug}`}
            title={post.title}
            description={post.excerpt}
            category={post.category}
            variant="guide"
            authorName={post.authorName ?? 'CareerHunt'}
            authorInitials={post.authorInitials ?? 'CH'}
            readTime={post.readTime ?? '5 min read'}
            publishedAt={post.publishedAt ?? '2026'}
          />
        ))}
      </section>
    </main>
  )
}
