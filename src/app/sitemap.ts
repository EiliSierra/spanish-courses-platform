import type { MetadataRoute } from 'next'

const BASE_URL = 'https://spanish-courses-platform.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
