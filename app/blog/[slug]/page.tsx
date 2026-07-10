import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blogData'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: 'Blog',
      description: 'Explore practical career advice, remote job tips, and growth strategies on CareerHunt.'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://careerhunt.online/blog/${post.slug}`
    },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://careerhunt.online/blog/${post.slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt
    }
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef6ff_35%,_#f8fafc_100%)]">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%)]" />
      <div className="container relative mx-auto px-4 py-14 sm:py-16">
        <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900">
          <span className="mr-2">←</span>
          Back to blog
        </Link>

        <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_25px_70px_-24px_rgba(15,23,42,0.24)] backdrop-blur sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">{post.category}</span>
            {post.keywords.slice(0, 3).map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                {keyword}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Topics covered</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                <div className="mt-4 space-y-3 text-base leading-8 text-slate-700">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
