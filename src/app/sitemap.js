export default function sitemap() {
    return [
      {
        url: 'https://eport.site/features',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://eport.site/login',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://eport.site/signup',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://eport.site/examples_basic',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://eport.site/examples_premium',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
    ]
  }