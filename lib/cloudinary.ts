const normalizeApiUrl = (url: string) => {
  const trimmed = url.replace(/\/+$|^\s+|\s+$/g, '')
  return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`
}

const getDefaultApiUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api`
  }
  return '/api'
}

const resolveApiUrl = (envUrl?: string) => {
  const trimmed = envUrl?.trim() || ''
  if (!trimmed) return getDefaultApiUrl()
  if (typeof window !== 'undefined' && trimmed.includes('localhost:5000') && !window.location.hostname.includes('localhost')) {
    return getDefaultApiUrl()
  }
  return normalizeApiUrl(trimmed)
}

export async function uploadImageToCloudinary(file: File) {
  const API_URL = resolveApiUrl(process.env.NEXT_PUBLIC_API_URL)

  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  if (!response.ok || !data.secure_url) {
    console.error('Cloudinary upload error (client->server)', { status: response.status, body: data })
    throw new Error(data.error || data.message || 'Upload failed')
  }

  return data.secure_url as string
}
