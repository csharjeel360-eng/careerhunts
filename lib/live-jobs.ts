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

// Live jobs are fetched directly from public Lever endpoints.
// Removed env file scanning and USAJOBS/Greenhouse fetch support.

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

// USAJOBS fetching removed.

const fetchGreenhouseJobs = async (_companyToken: string): Promise<LiveJob[]> => {
  // Greenhouse fetching removed — return empty list to avoid errors where referenced.
  return []
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
  // Only fetch Lever (and other non-Greenhouse, non-USA) jobs.
  const uaeResults = await Promise.allSettled([
    Promise.all(UAE_COMPANY_TOKENS.map(async (token) => {
      const leverJobs = await fetchLeverJobs(token)
      return leverJobs || []
    })),
  ])

  const jobs: LiveJob[] = []

  const uaePayload = uaeResults[0]
  if (uaePayload && uaePayload.status === 'fulfilled') {
    const value = uaePayload.value
    if (Array.isArray(value)) {
      jobs.push(...(value.flat()))
    }
  }

  if (!jobs.length) {
    return []
  }

  const dedupedJobs = dedupeJobs(jobs)
  return dedupedJobs.slice(0, 12)
}

export type { LiveJob }
