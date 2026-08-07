/**
 * Normalize a service/city slug for comparisons and URLs.
 */
export function normalizeSlug(value: string | null | undefined): string {
  if (!value) return '';
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Resolve the public slug for a service-like object.
 */
export function resolveServiceSlug(
  service: { slug?: string | null; name?: unknown; _id?: string } | null | undefined
): string {
  if (!service) return '';
  if (service.slug) return normalizeSlug(service.slug);
  if (typeof service.name === 'string' && service.name.trim()) {
    return normalizeSlug(service.name);
  }
  if (service._id) return normalizeSlug(service._id);
  return '';
}
