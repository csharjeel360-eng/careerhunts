import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getArticlesByCategory, getArticleSlugs, type ArticleContent } from '@/lib/articleData'
import { getCanonicalUrl, getPageMetadata } from '@/lib/seo'
import ArticleTemplate from '@/components/shared/ArticleTemplate'

interface SalaryGuideArticlePageProps {
  params: Promise<{ slug: string }>
}

function normaliseSlug(slug: string) {
  return slug.replace(/^\/+/, '').replace(/^salary-guide\//, '')
}

export async function generateStaticParams() {
  return getArticleSlugs()
    .filter((slug) => slug.startsWith('/salary-guide/'))
    .map((slug) => ({ slug: normaliseSlug(slug) }))
}

export async function generateMetadata({ params }: SalaryGuideArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(`/salary-guide/${normaliseSlug(slug)}`)

  if (!article) {
    return getPageMetadata({
      title: 'Salary Guide',
      description: 'Explore salary guides for UAE jobs, roles, and employer types.',
      path: '/salary-guide',
    })
  }

  const canonical = getCanonicalUrl(article.frontmatter.slug)

  return {
    ...getPageMetadata({
      title: article.frontmatter.metaTitle || article.frontmatter.title,
      description: article.frontmatter.metaDescription,
      path: article.frontmatter.slug,
      keywords: [article.frontmatter.primaryKeyword, ...article.frontmatter.secondaryKeywords],
    }),
    alternates: {
      canonical,
    },
    openGraph: {
      ...getPageMetadata({
        title: article.frontmatter.metaTitle || article.frontmatter.title,
        description: article.frontmatter.metaDescription,
        path: article.frontmatter.slug,
        keywords: [article.frontmatter.primaryKeyword, ...article.frontmatter.secondaryKeywords],
      }).openGraph,
      url: canonical,
      type: 'article',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: article.frontmatter.title,
        },
      ],
    },
    twitter: {
      ...getPageMetadata({
        title: article.frontmatter.metaTitle || article.frontmatter.title,
        description: article.frontmatter.metaDescription,
        path: article.frontmatter.slug,
        keywords: [article.frontmatter.primaryKeyword, ...article.frontmatter.secondaryKeywords],
      }).twitter,
      card: 'summary_large_image',
      images: ['/og-image.jpg'],
    },
  }
}

export default async function SalaryGuideArticlePage({ params }: SalaryGuideArticlePageProps) {
  const { slug } = await params
  const resolvedSlug = `/salary-guide/${normaliseSlug(slug)}`
  const article = getArticleBySlug(resolvedSlug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getArticlesByCategory('salary')
    .filter((item) => item.frontmatter.slug !== article.frontmatter.slug)
    .slice(0, 3)

  return <ArticleTemplate article={article} relatedArticles={relatedArticles} />
}
