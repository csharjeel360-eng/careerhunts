const normalizeApiUrl = (url: string) => {
  const trimmed = url.replace(/\/+$|^\s+|\s+$/g, '')
  return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`
}

const backendBaseUrl = normalizeApiUrl(process.env.NEXT_PUBLIC_API_URL || '/api')

const proxyRequest = async (request: Request) => {
  const url = new URL(request.url)
  const authPath = url.pathname.replace(/^\/api\/auth/, '') || ''
  const targetUrl = `${backendBaseUrl}/auth${authPath}${url.search}`

  const headers = new Headers(request.headers)
  headers.delete('host')

  const init: RequestInit = {
    method: request.method,
    headers,
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    redirect: 'manual',
  }

  const response = await fetch(targetUrl, init)
  const responseHeaders = new Headers(response.headers)

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  })
}

export async function GET(request: Request) {
  return proxyRequest(request)
}

export async function POST(request: Request) {
  return proxyRequest(request)
}

export async function PUT(request: Request) {
  return proxyRequest(request)
}

export async function DELETE(request: Request) {
  return proxyRequest(request)
}

export async function PATCH(request: Request) {
  return proxyRequest(request)
}
