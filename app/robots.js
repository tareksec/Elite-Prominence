export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/dashboard/',
          '/admin',
          '/admin/',
          '/api/',
          '/login',
          '/signup',
        ],
      },
    ],
    sitemap: 'https://www.prominence.agency/sitemap.xml',
  }
}
