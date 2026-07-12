import { readFileSync } from 'fs'
import path from 'path'

type LiveJob = {
  id: string
  title: string
  company: string
  location: string
  postedDate: string
  applyUrl: string
  salary?: string
  source: string
}

const UAE_COMPANY_TOKENS = ['careem', 'talabat', 'propertyfinder']

const parseEnvFile = () => {
  if (typeof window !== 'undefined') {
    return {}
  }

  const envValues: Record<string, string> = {}
  const candidateDirs = new Set<string>([
    process.cwd(),
    path.resolve(process.cwd(), 'client'),
    path.resolve(process.cwd(), '..'),
    path.resolve(process.cwd(), '../client'),
  ])

  for (const dir of candidateDirs) {
    for (const fileName of ['.env.local', '.env']) {
      try {
        const envPath = path.resolve(dir, fileName)
        const content = readFileSync(envPath, 'utf8')
        console.log('[live-jobs] env file found', envPath)
        for (const line of content.split(/\r?\n/)) {
          if (!line || line.startsWith('#')) continue
          const separatorIndex = line.indexOf('=')
          if (separatorIndex === -1) continue
          const key = line.slice(0, separatorIndex).trim()
          let value = line.slice(separatorIndex + 1).trim()
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
          }
          envValues[key] = value
        }
      } catch {
        // Ignore missing env files; process.env will be used when available.
      }
    }
  }

  return envValues
}

const runtimeEnv = parseEnvFile()

const getEnvValue = (key: string) => {
  const fromProcess = process.env[key]
  if (fromProcess && fromProcess.trim()) {
    return fromProcess.trim()
  }

  const fromFile = runtimeEnv[key]
  if (fromFile && fromFile.trim()) {
    return fromFile.trim()
  }

  return ''
}

const normalizeText = (value: unknown) => {
  if (typeof value !== 'string') return ''
  return value.trim()
}

const normalizeLocation = (value: unknown) => {
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'object' && value && 'name' in value && typeof (value as { name?: unknown }).name === 'string') {
    return (value as { name: string }).name.trim()
  }
  return ''
}

const dedupeJobs = (jobs: LiveJob[]) => {
  const seen = new Set<string>()
  const uniqueJobs: LiveJob[] = []

  for (const job of jobs) {
    const key = `${job.title.toLowerCase()}::${job.company.toLowerCase()}::${job.location.toLowerCase()}`
    if (!seen.has(key)) {
      seen.add(key)
      uniqueJobs.push(job)
    }
  }

  return uniqueJobs.sort((a, b) => {
    const aTime = new Date(a.postedDate).getTime()
    const bTime = new Date(b.postedDate).getTime()
    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime)
  })
}

const fetchJson = async <T>(url: string, init?: RequestInit): Promise<T | null> => {
  try {
    const response = await fetch(url, init)
    if (!response.ok) {
      if (response.status === 404 || response.status === 410) {
        return null
      }
      throw new Error(`Request failed with status ${response.status}`)
    }
    return (await response.json()) as T
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    if (message.includes('status 404') || message.includes('status 410')) {
      return null
    }
    console.error(`Live jobs fetch failed for ${url}:`, error)
    return null
  }
}

const fetchUsaJobs = async (): Promise<LiveJob[]> => {
  const apiKey = getEnvValue('USAJOBS_API_KEY') || process.env.USAJOBS_API_KEY || ''
  const userAgent = getEnvValue('USAJOBS_USER_AGENT') || process.env.USAJOBS_USER_AGENT || getEnvValue('NEXT_PUBLIC_CONTACT_EMAIL') || 'careers@careerhunt.com'

  console.log('[live-jobs] USAJOBS env', { cwd: process.cwd(), apiKeyPresent: Boolean(apiKey), userAgent })

  if (!apiKey) {
    console.log('[live-jobs] USAJOBS API key missing')
    return []
  }

  const payload = await fetchJson<any>('https://data.usajobs.gov/api/search?ResultsPerPage=10', {
    headers: {
      'Authorization-Key': apiKey,
      'User-Agent': userAgent,
    },
    cache: 'no-store',
  })

  const resultItems = payload?.SearchResult?.SearchResultItems || payload?.SearchResultItems || []

  if (!Array.isArray(resultItems)) {
    console.log('[live-jobs] USAJobs resultItems is not an array', payload)
    return []
  }

  console.log('[live-jobs] USAJobs item count', resultItems.length)

  return resultItems
    .map((entry: any) => {
      const descriptor = entry?.MatchedObjectDescriptor || entry
      if (!descriptor) {
        return null
      }

      const location = normalizeText(descriptor.PositionLocationDisplay) ||
        (Array.isArray(descriptor.PositionLocation)
          ? descriptor.PositionLocation.map((item: any) => normalizeText(item?.LocationName)).filter(Boolean).join(', ')
          : '') ||
        'United States'

      return {
        id: `usajobs-${descriptor.PositionID || descriptor.PositionURI || descriptor.PositionTitle || entry.MatchedObjectId || Math.random().toString(36).slice(2)}`,
        title: normalizeText(descriptor.PositionTitle) || 'Untitled role',
        company: normalizeText(descriptor.OrganizationName) || 'USAJOBS',
        location,
        postedDate: normalizeText(descriptor.PublicationStartDate) || normalizeText(descriptor.PositionStartDate) || new Date().toISOString(),
        applyUrl: normalizeText(descriptor.PositionURI) || normalizeText(descriptor.ApplyURI?.[0]) || '',
        salary: descriptor.PositionRemuneration?.[0]
          ? `${descriptor.PositionRemuneration[0].MinimumRange || ''}${descriptor.PositionRemuneration[0].MaximumRange ? ` - ${descriptor.PositionRemuneration[0].MaximumRange}` : ''}`.trim()
          : undefined,
        source: 'USAJOBS',
      }
    })
    .filter(Boolean)
}

const fetchGreenhouseJobs = async (companyToken: string): Promise<LiveJob[]> => {
  const payload = await fetchJson<any>(`https://boards-api.greenhouse.io/v1/boards/${companyToken}/jobs`, {
    cache: 'no-store',
  })

  if (!payload?.jobs) {
    return []
  }

  return payload.jobs.map((job: any) => ({
    id: `greenhouse-${companyToken}-${job.id || job.title}`,
    title: normalizeText(job.title) || 'Untitled role',
    company: normalizeText(job.company_name) || companyToken,
    location: normalizeLocation(job.location?.name) || normalizeText(job.location) || normalizeLocation(job.offices?.[0]?.location) || 'UAE',
    postedDate: normalizeText(job.updated_at) || normalizeText(job.published_at) || new Date().toISOString(),
    applyUrl: normalizeText(job.absolute_url) || '',
    source: 'Greenhouse',
  }))
}

const fetchLeverJobs = async (companyToken: string): Promise<LiveJob[]> => {
  const payload = await fetchJson<any>(`https://api.lever.co/v0/postings/${companyToken}?mode=json`, {
    cache: 'no-store',
  })

  if (!Array.isArray(payload)) {
    return []
  }

  return payload.map((job: any) => ({
    id: `lever-${companyToken}-${job.id || job.text}`,
    title: normalizeText(job.text) || 'Untitled role',
    company: normalizeText(job.company) || companyToken,
    location: normalizeLocation(job.categories?.location) || normalizeText(job.location) || 'UAE',
    postedDate: normalizeText(job.createdAt) || new Date().toISOString(),
    applyUrl: normalizeText(job.urls?.apply) || normalizeText(job.applyUrl) || '',
    source: 'Lever',
  }))
}

export const getLiveJobs = async (): Promise<LiveJob[]> => {
  const [usaJobsResult, uaeJobsResults] = await Promise.allSettled([
    fetchUsaJobs(),
    Promise.all(UAE_COMPANY_TOKENS.flatMap(async (token) => {
      const [greenhouseJobs, leverJobs] = await Promise.allSettled([
        fetchGreenhouseJobs(token),
        fetchLeverJobs(token),
      ])

      return [
        greenhouseJobs.status === 'fulfilled' ? greenhouseJobs.value : [],
        leverJobs.status === 'fulfilled' ? leverJobs.value : [],
      ].flat()
    })),
  ])

  const jobs: LiveJob[] = []

  if (usaJobsResult.status === 'fulfilled') {
    jobs.push(...usaJobsResult.value)
  }

  if (uaeJobsResults.status === 'fulfilled') {
    jobs.push(...uaeJobsResults.value.flat())
  }

  if (!jobs.length) {
    return []
  }

  const dedupedJobs = dedupeJobs(jobs)
  const usaJobs = dedupedJobs.filter((job) => job.source === 'USAJOBS')
  const otherJobs = dedupedJobs.filter((job) => job.source !== 'USAJOBS')

  return [...usaJobs, ...otherJobs].slice(0, 12)
}

export type { LiveJob }
