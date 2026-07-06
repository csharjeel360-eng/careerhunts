import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  const d = new Date(date)
  const now = new Date()

  if (now.toDateString() === d.toDateString()) return 'Today'

  const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

function normalizeCurrencyCode(currency: string = 'USD') {
  const normalized = typeof currency === 'string' ? currency.trim().toUpperCase() : ''

  if (!normalized) return 'USD'

  const aliases: Record<string, string> = {
    EU: 'EUR',
    US: 'USD',
    GB: 'GBP',
    CA: 'CAD',
    AU: 'AUD',
    JP: 'JPY',
    CH: 'CHF',
    SG: 'SGD',
    NZ: 'NZD',
    IN: 'INR',
    ZA: 'ZAR',
    AE: 'AED',
    CN: 'CNY',
    MX: 'MXN',
    SE: 'SEK',
    NO: 'NOK',
    DK: 'DKK',
    BR: 'BRL',
    HK: 'HKD',
    KR: 'KRW',
    PL: 'PLN',
    TR: 'TRY',
    TH: 'THB',
    MY: 'MYR',
    ID: 'IDR',
    PH: 'PHP',
    CZ: 'CZK',
    HU: 'HUF',
    RU: 'RUB',
    SA: 'SAR',
  }

  if (aliases[normalized]) return aliases[normalized]

  if (/^[A-Z]{3}$/.test(normalized)) {
    try {
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: normalized,
        maximumFractionDigits: 0,
      }).format(1)
      return normalized
    } catch {
      return 'USD'
    }
  }

  return 'USD'
}

export function formatSalary(min: number, max: number, currency: string = 'USD') {
  const safeCurrency = normalizeCurrencyCode(currency)
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: safeCurrency,
    maximumFractionDigits: 0,
  })

  if (min && max) {
    return `${formatter.format(min)} - ${formatter.format(max)}`
  } else if (min) {
    return `From ${formatter.format(min)}`
  } else if (max) {
    return `Up to ${formatter.format(max)}`
  }
  return 'Salary not specified'
}

export function generateSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
}

export function truncateText(text: string, maxLength: number = 100) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function normalizeWebsiteUrl(url?: string) {
  if (!url) return ''

  const trimmed = url.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }
  return `https://${trimmed}`
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}