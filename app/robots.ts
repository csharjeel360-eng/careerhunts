import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/dashboard/',
        '/employer/',
      ],
    },
    sitemap: 'https://careerhunt.com/sitemap.xml',
    host: 'https://careerhunt.com',
  }
}