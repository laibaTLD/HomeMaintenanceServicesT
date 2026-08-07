'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { ServingAreasSection } from '@/app/components/sections/ServingAreasSection';
import { resolveServiceSlug } from '@/app/lib/serviceAreaSlugs';
import { tiptapToText } from '@/app/lib/seo';

interface ServingAreasProps {
  /** CMS section config (title/description/slug only — areas come from live API) */
  service?: unknown;
  className?: string;
}

type ServingAreasConfig = {
  enabled: boolean;
  title?: string;
  description?: string;
  serviceSlug?: string;
};

function toPlainText(value: unknown): string | undefined {
  if (value == null || value === '') return undefined;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed || undefined;
  }
  const text = tiptapToText(value).trim();
  return text || undefined;
}

/** CMS config only — strip static area lists so pills always come from live API. */
export function stripStaticAreasFromConfig(service: unknown): unknown {
  if (!service || typeof service !== 'object') return service;
  const { areas, serviceAreas, items, locations, ...cms } = service as Record<string, unknown>;
  return cms;
}

function normalizeSectionConfig(
  service: unknown,
  serviceSlugFromUrl: string
): ServingAreasConfig | null {
  const raw = stripStaticAreasFromConfig(service);
  const data = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null;

  if (data?.enabled === false) return { enabled: false };

  const serviceSlug =
    (typeof data?.serviceSlug === 'string' && data.serviceSlug.trim()) ||
    serviceSlugFromUrl ||
    undefined;

  if (!data && !serviceSlug) return { enabled: true };

  if (!data) {
    return { enabled: true, serviceSlug };
  }

  return {
    enabled: true,
    title: toPlainText(data.title),
    description: toPlainText(data.description ?? data.shortDescription),
    serviceSlug,
  };
}

/** Service area coverage — live areas from builder API (same as home). */
export const ServingAreas: React.FC<ServingAreasProps> = ({ service, className }) => {
  const params = useParams();
  const serviceSlugFromUrl =
    typeof params?.serviceSlug === 'string' ? params.serviceSlug : '';

  const config = useMemo(
    () =>
      normalizeSectionConfig(service, serviceSlugFromUrl) ??
      (serviceSlugFromUrl
        ? { enabled: true, serviceSlug: resolveServiceSlug({ slug: serviceSlugFromUrl }) }
        : { enabled: true }),
    [service, serviceSlugFromUrl]
  );

  if (config.enabled === false) return null;

  return (
    <ServingAreasSection
      enabled={config.enabled}
      title={config.title}
      description={config.description}
      className={className}
    />
  );
};

export default ServingAreas;
