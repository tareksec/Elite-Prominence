import { SERVICES_DATA } from '@/lib/servicesData'
import { SOLUTIONS_DATA } from '@/lib/solutionsData'
import { CASE_STUDIES_DATA } from '@/lib/caseStudiesData'
import { BLOG_ARTICLES } from '@/lib/blogData'

export default function sitemap() {
  const baseUrl = 'https://www.prominence.agency'
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/assessment`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog-grid`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog-standard`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/feedback`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/community`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceRoutes = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const solutionRoutes = SOLUTIONS_DATA.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const caseStudyRoutes = CASE_STUDIES_DATA.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogRoutes = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.dateModified ? article.dateModified.split('T')[0] : currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]
}
