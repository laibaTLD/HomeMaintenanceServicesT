import type { Page } from '@/app/lib/types';

const PAGE_TYPE_PATHS: Record<Page['pageType'], string> = {
  home: '/',
  about: '/about-us',
  contact: '/contact-us',
  'service-list': '/services',
  'blog-list': '/blog',
  testimonials: '/testimonials',
  'project-detail': '/project-detail',
};

/**
 * Resolves a public href for a CMS page from its pageType (and slug as fallback).
 */
export function getPageHref(
  page: Pick<Page, 'pageType' | 'slug'> | null | undefined
): string {
  if (!page) return '/';

  const byType = PAGE_TYPE_PATHS[page.pageType];
  if (byType) return byType;

  const slug = page.slug?.replace(/^\//, '').trim();
  return slug ? `/${slug}` : '/';
}
