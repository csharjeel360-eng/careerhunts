import axios from 'axios'

const normalizeApiUrl = (url: string) => {
  const trimmed = url.replace(/\/+$/, '')
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

const baseURL = resolveApiUrl(process.env.NEXT_PUBLIC_API_URL)

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      // Normalize header typing for axios config in TypeScript environments
      config.headers = config.headers || ({} as any)
      ;(config.headers as any).Authorization = `Bearer ${token}`
    }
  }
  return config
})

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.message) {
      error.message = error.response.data.message
    }
    return Promise.reject(error)
  }
)

export const getFeaturedJobs = async () => {
  try {
    const response = await api.get('/jobs/featured?limit=6')
    return response.data.data
  } catch (error) {
    // Avoid crashing Server Component renders when the backend is unavailable.
    // Log the error on the server and return an empty list as a safe fallback.
    // Caller components should handle empty arrays appropriately.
    // eslint-disable-next-line no-console
    console.error('getFeaturedJobs error:', error)
    return []
  }
}

export const getTopViewedJobs = async () => {
  try {
    const response = await api.get('/jobs/top?limit=6')
    return response.data.data
  } catch (error) {
    console.error('getTopViewedJobs error:', error)
    return []
  }
}

export const getLatestJobs = async () => {
  try {
    const response = await api.get('/jobs?limit=9&sort=-postedDate')
    return response.data.data
  } catch (error) {
    // Prevent Server Component render crashes; return empty list as fallback.
    // eslint-disable-next-line no-console
    console.error('getLatestJobs error:', error)
    return []
  }
}





export const getJobBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/jobs/${slug}`)
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getJobBySlug error:', error)
    return null
  }
}

export const getJobs = async (params: any = {}) => {
  try {
    const response = await api.get('/jobs', { params })
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getJobs error:', error)
    return { data: [] }
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me')
    return response.data.user
  } catch (error) {
    console.error('getCurrentUser error:', error)
    return null
  }
}

export const updateProfile = async (data: any) => {
  const response = await api.put('/auth/profile', data)
  return response.data.user
}

export const uploadImage = async (formData: FormData) => {
  const response = await api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}

export const searchJobs = async (params: any) => {
  try {
    const response = await api.get('/jobs', { params })
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('searchJobs error:', error)
    return { data: [] }
  }
}

export const createJob = async (data: any) => {
  const response = await api.post('/jobs', data)
  return response.data.data
}

export const updateJob = async (id: string, data: any) => {
  const response = await api.put(`/jobs/${id}`, data)
  return response.data.data
}

export const deleteJob = async (id: string) => {
  const response = await api.delete(`/jobs/${id}`)
  return response.data
}

export const getAdminAnalytics = async () => {
  try {
    const response = await api.get('/admin/analytics')
    return response.data.data
  } catch (error) {
    console.error('getAdminAnalytics error:', error)
    return {
      totalJobs: 0,
      totalUsers: 0,
      totalEmployers: 0,
      featuredJobs: 0,
      pendingJobs: 0,
    }
  }
}

export const getAdminUsers = async () => {
  try {
    const response = await api.get('/admin/users')
    return response.data.data
  } catch (error) {
    console.error('getAdminUsers error:', error)
    return []
  }
}

export const deleteUserById = async (id: string) => {
  const response = await api.delete(`/admin/users/${id}`)
  return response.data
}

export const getApplications = async (jobId: string) => {
  try {
    const response = await api.get(`/applications/job/${jobId}`)
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getApplications error:', error)
    return []
  }
}

export const createApplication = async (data: any) => {
  const response = await api.post('/applications', data)
  return response.data.data
}

export const getCompanies = async () => {
  try {
    const response = await api.get('/companies')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getCompanies error:', error)
    return []
  }
}

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getCategories error:', error)
    return []
  }
}

export const getCountries = async () => {
  try {
    const response = await api.get('/countries')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getCountries error:', error)
    return []
  }
}

export const getCities = async () => {
  try {
    const response = await api.get('/cities')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getCities error:', error)
    return []
  }
}

export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blogs')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getBlogPosts error:', error)
    return []
  }
}

export const getSalaryGuides = async () => {
  try {
    const response = await api.get('/salary-guides')
    return response.data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('getSalaryGuides error:', error)
    return []
  }
}

export default api