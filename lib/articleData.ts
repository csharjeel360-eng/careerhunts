import fs from 'fs'
import path from 'path'

export interface ArticleFrontmatter {
  title: string
  metaTitle: string
  metaDescription: string
  slug: string
  primaryKeyword: string
  secondaryKeywords: string[]
  searchIntent: string
  category: string
  authorName: string
  authorRole: string
  publishDate: string
  updatedDate?: string
  authorImage: string
  lastVerified: string
  wordCount: number
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ title: string; href: string }>
  ctaLink: string
  ctaText: string
  pillars: string[]
}

export interface ArticleContent {
  frontmatter: ArticleFrontmatter
  content: string
}

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

function parseScalar(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return ''
  if (trimmed === 'true' || trimmed === 'false') return trimmed === 'true'
  if (/^\d+$/.test(trimmed)) return Number(trimmed)
  return trimmed.replace(/^['"]|['"]$/g, '')
}

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\s*([\s\S]*?)\s*---\s*/)
  if (!match) return { frontmatter: {}, content: markdown }

  const raw = match[1]
  const frontmatter: Partial<ArticleFrontmatter> = {}
  const lines = raw.split(/\r?\n/)

  let currentKey: string | null = null
  let currentArray: Array<any> | null = null
  let currentItem: Record<string, unknown> | null = null

  for (const line of lines) {
    if (!line.trim()) continue

    if (line.startsWith('    ') && currentKey && currentItem && (currentKey === 'faqs' || currentKey === 'relatedLinks')) {
      const trimmed = line.trim()
      const separatorIndex = trimmed.indexOf(':')
      if (separatorIndex > -1) {
        const key = trimmed.slice(0, separatorIndex).trim()
        const value = trimmed.slice(separatorIndex + 1).trim()
        currentItem[key] = parseScalar(value)
      }
      continue
    }

    if (line.startsWith('  - ')) {
      const value = line.replace(/^  - /, '').trim()
      if (!currentArray) continue

      if (currentKey === 'faqs' || currentKey === 'relatedLinks') {
        const separatorIndex = value.indexOf(':')
        const item: Record<string, unknown> = {}
        currentArray.push(item)
        currentItem = item

        if (separatorIndex > -1) {
          const key = value.slice(0, separatorIndex).trim()
          const itemValue = value.slice(separatorIndex + 1).trim()
          item[key] = parseScalar(itemValue)
        } else {
          item.question = parseScalar(value)
          item.answer = ''
        }
      } else {
        currentArray.push(parseScalar(value))
      }
      continue
    }

    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    if (value === '') {
      currentKey = key
      currentArray = []
      currentItem = null
      ;(frontmatter as Record<string, unknown>)[key] = currentArray
      continue
    }

    currentKey = null
    currentArray = null
    currentItem = null
    if (value.startsWith('[')) {
      ;(frontmatter as Record<string, unknown>)[key] = JSON.parse(value)
    } else {
      ;(frontmatter as Record<string, unknown>)[key] = parseScalar(value)
    }
  }

  return {
    frontmatter,
    content: markdown.replace(match[0], '').trim(),
  }
}

function getArticleFiles(category?: string) {
  const baseDir = path.join(ARTICLES_DIR, category || '')
  if (!fs.existsSync(baseDir)) return []
  return fs.readdirSync(baseDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(baseDir, file))
}

export function getAllArticles(): ArticleContent[] {
  const categories = fs.existsSync(ARTICLES_DIR) ? fs.readdirSync(ARTICLES_DIR).filter((entry) => fs.statSync(path.join(ARTICLES_DIR, entry)).isDirectory()) : []

  return categories.flatMap((category) => {
    return getArticleFiles(category).map((filePath) => {
      const markdown = fs.readFileSync(filePath, 'utf8')
      const { frontmatter, content } = parseFrontmatter(markdown)
      return {
        frontmatter: frontmatter as ArticleFrontmatter,
        content,
      }
    })
  })
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((article) => article.frontmatter.slug === slug)
}

export function getArticlesByCategory(category: string) {
  return getAllArticles().filter((article) => article.frontmatter.category === category)
}

export function getArticleSlugs() {
  return getAllArticles().map((article) => article.frontmatter.slug)
}
