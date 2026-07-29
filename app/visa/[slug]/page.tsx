import type { Metadata } from 'next'
import { getAllArticles, getArticleBySlug, getArticlesByCategory, getArticleSlugs, type ArticleContent } from '@/lib/articleData'
import { getCanonicalUrl, getPageMetadata } from '@/lib/seo'
import ArticleTemplate from '@/components/shared/ArticleTemplate'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

function normaliseSlug(slug: string) {
  return slug.replace(/^\/+/, '').replace(/^visa\//, '')
}

function toReadableTitle(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function createFallbackArticle(slug: string): ArticleContent {
  const resolvedSlug = `/visa/${normaliseSlug(slug)}`
  const title = toReadableTitle(normaliseSlug(slug)) || 'UAE Visa Guide'

  return {
    frontmatter: {
      title,
      metaTitle: title,
      metaDescription: `Learn the latest guidance for ${title} in the UAE, including requirements, steps, costs, and practical next actions.`,
      slug: resolvedSlug,
      primaryKeyword: normaliseSlug(slug).replace(/-/g, ' '),
      secondaryKeywords: ['UAE visa guide', 'visa information'],
      searchIntent: 'Informational',
      category: 'visa',
      authorName: 'CareerHunt',
      authorRole: 'Editorial Team',
      publishDate: '2026-07-29',
      authorImage: '/icon.svg',
      lastVerified: '2026-07-29',
      wordCount: 700,
      faqs: [],
      relatedLinks: [],
      ctaLink: '/jobs',
      ctaText: 'Explore UAE jobs',
      pillars: [],
    },
    content: `## Overview\nThis guide is being prepared for the UAE visa topic you requested.\n\n## What to Expect\nYou will soon see a complete overview covering eligibility, documents, timelines, and application steps.\n\n## Next Step\nUse the related opportunities below to continue exploring UAE jobs and visa pathways.`,
  }
}

export async function generateStaticParams() {
  return getArticleSlugs()
    .filter((slug) => slug.startsWith('/visa/'))
    .map((slug) => ({ slug: normaliseSlug(slug) }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(`/visa/${normaliseSlug(slug)}`)

  if (!article) {
    return getPageMetadata({
      title: 'Visa Guide',
      description: 'Explore visa and immigration guides for the UAE.',
      path: '/visa',
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

export default async function VisaArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const resolvedSlug = `/visa/${normaliseSlug(slug)}`
  const article = getArticleBySlug(resolvedSlug) || createFallbackArticle(resolvedSlug)

  const relatedArticles = getArticlesByCategory('visa')
    .filter((item) => item.frontmatter.slug !== article.frontmatter.slug)
    .slice(0, 3)

  return <ArticleTemplate article={article} relatedArticles={relatedArticles} />
}
