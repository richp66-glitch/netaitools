import { articles } from './articles/articles';

const siteUrl = 'https://netaitools.com';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/articles', '/privacy', '/affiliate-disclosure'];
  const articleRoutes = articles.map((article) => `/articles/${article.slug}`);

  return [...staticRoutes, ...articleRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-07-09'),
    changeFrequency: route.startsWith('/articles/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/articles/') ? 0.8 : 0.7,
  }));
}
