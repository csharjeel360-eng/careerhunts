import type { Metadata } from 'next'
import { getPageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { getCategories } from '@/lib/api'

export const metadata: Metadata = getPageMetadata({
  title: 'Job Categories | CareerHunt',
  description: 'Browse job categories across tech, design, marketing, operations, and more on CareerHunt.',
  path: '/categories',
  keywords: ['job categories', 'career categories', 'find jobs', 'CareerHunt'],
})

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Job categories</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Find the right category for your next role</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">Browse curated categories across tech, product, design, marketing, and more.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category: any) => (
          <Link key={category._id} href={`/categories/${category.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-slate-900">{category.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{category.description || 'Explore jobs in this category.'}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
