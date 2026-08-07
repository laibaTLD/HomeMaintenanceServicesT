'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TiptapRenderer } from '@/app/components/ui/TiptapRenderer';
import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { getPageHref } from '@/app/lib/siteContent';
import { useThemeColors, useThemeFonts } from '@/app/hooks/useTheme';
import { cn, getImageSrc } from '@/app/lib/utils';
import { tiptapToText } from '@/app/lib/seo';

interface CTAProps {
  cta: unknown;
  className?: string;
}

type CtaButton = { label: string; href: string };

type NormalizedCta = {
  title?: unknown;
  description?: unknown;
  subtitle?: unknown;
  primaryButton?: CtaButton;
  backgroundImage?: string;
  backgroundColor?: string;
};

function normalizeHref(href: string): string {
  const t = href.trim();
  if (t.startsWith('http') || t.startsWith('mailto:') || t.startsWith('tel:')) return t;
  return t.startsWith('/') ? t : `/${t}`;
}

function resolveMediaUrl(raw: unknown): string | undefined {
  if (!raw) return undefined;
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    return trimmed ? getImageSrc(trimmed) : undefined;
  }
  if (typeof raw === 'object' && raw !== null && 'url' in raw) {
    const url = (raw as { url?: string }).url?.trim();
    return url ? getImageSrc(url) : undefined;
  }
  return undefined;
}

function resolveBackgroundImage(cta: Record<string, unknown>): string | undefined {
  const mediaItems = Array.isArray(cta.mediaItems) ? cta.mediaItems : [];

  const candidates: unknown[] = [
    cta.backgroundImage,
    cta.image,
    mediaItems[0],
    (mediaItems[0] as { url?: string } | undefined)?.url,
  ];

  for (const candidate of candidates) {
    const src = resolveMediaUrl(candidate);
    if (src) return src;
  }

  return undefined;
}

function resolvePrimaryButton(cta: Record<string, unknown>): CtaButton | undefined {
  const primary = cta.primaryButton as { label?: string; href?: string } | undefined;
  if (primary?.label?.trim()) {
    return {
      label: primary.label.trim(),
      href: normalizeHref(primary.href?.trim() || '/contact-us'),
    };
  }

  const legacy = cta.ctaButton as
    | { text?: string; url?: string; label?: string; href?: string }
    | undefined;
  const label = legacy?.text?.trim() || legacy?.label?.trim();
  if (label) {
    return {
      label,
      href: normalizeHref(legacy?.url?.trim() || legacy?.href?.trim() || '/contact-us'),
    };
  }

  return undefined;
}

function normalizeCtaSection(cta: unknown): NormalizedCta | null {
  if (!cta || typeof cta !== 'object') return null;

  const data = cta as Record<string, unknown>;
  if (data.enabled === false) return null;

  const primaryButton = resolvePrimaryButton(data);
  const backgroundImage = resolveBackgroundImage(data);
  const title = data.title;
  const description = data.description;
  const subtitle = data.subtitle ?? data.label;
  const backgroundColor =
    typeof data.backgroundColor === 'string' ? data.backgroundColor : undefined;

  if (!title && !description && !primaryButton && !subtitle) return null;

  return {
    title,
    description,
    subtitle,
    primaryButton,
    backgroundImage,
    backgroundColor,
  };
}

function hasRichContent(content: unknown): boolean {
  if (content == null || content === '') return false;
  if (typeof content === 'object') return Boolean(tiptapToText(content));
  return Boolean(String(content).trim());
}

/** Service area CTA — matches home page CTASection look & motion. */
export const CTA: React.FC<CTAProps> = ({ cta, className }) => {
  const themeColors = useThemeColors();
  const themeFonts = useThemeFonts();
  const { pages } = useWebBuilder();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffsetY, setParallaxOffsetY] = useState(0);

  const section = useMemo(() => normalizeCtaSection(cta), [cta]);

  const titleText = useMemo(() => tiptapToText(section?.title), [section?.title]);
  const descriptionText = useMemo(
    () => tiptapToText(section?.description),
    [section?.description]
  );
  const subtitleText = useMemo(() => tiptapToText(section?.subtitle), [section?.subtitle]);

  const ctaLabel = section?.primaryButton?.label?.trim() || 'Contact Us';
  const ctaHref = useMemo(() => {
    if (section?.primaryButton?.href) return section.primaryButton.href;
    const contactPage = pages?.find((p) => p.pageType === 'contact');
    return contactPage ? getPageHref(contactPage) : '/contact-us';
  }, [section?.primaryButton?.href, pages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercent = rect.top / window.innerHeight;
      setParallaxOffsetY(scrollPercent * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!section) return null;

  const showTitle = hasRichContent(section.title) || Boolean(titleText);
  const showDescription = hasRichContent(section.description) || Boolean(descriptionText);
  const showSubtitle = hasRichContent(section.subtitle) || Boolean(subtitleText);
  const backgroundImageUrl = section.backgroundImage || null;
  const isExternal =
    ctaHref.startsWith('http') || ctaHref.startsWith('mailto:') || ctaHref.startsWith('tel:');

  const buttonInner = (
    <>
      <span className="z-10 text-xs font-black uppercase tracking-[0.2em]">{ctaLabel}</span>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500"
        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </div>
      <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-10" />
    </>
  );

  const buttonClassName =
    'group relative flex items-center gap-8 rounded-full px-10 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500';
  const buttonStyle: React.CSSProperties = {
    fontFamily: themeFonts.body,
    backgroundColor: themeColors.primaryButton,
    color: '#FFFFFF',
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative flex min-h-[40vh] items-center justify-center overflow-hidden py-8 lg:py-10',
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 scale-125"
        style={{
          backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
          backgroundColor: section.backgroundColor || themeColors.primaryButton,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffsetY * -0.5}px) scale(1.1)`,
          transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        }}
      />

      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[1px]" />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div
            className={cn(
              'mb-8 flex flex-col items-center gap-4 transition-all delay-100 duration-1000',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/90">
              {showSubtitle && hasRichContent(section.subtitle) ? (
                <TiptapRenderer content={section.subtitle} as="inline" />
              ) : (
                subtitleText || 'Begin Your Journey'
              )}
            </span>
            <div className="h-[1px] w-16 bg-white/40" />
          </div>

          {showTitle && (
            <h2
              className={cn(
                'mb-8 font-serif text-4xl leading-[1.1] text-white transition-all delay-300 duration-1000 md:text-5xl lg:text-6xl',
                isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-20 scale-95 opacity-0'
              )}
            >
              {hasRichContent(section.title) ? (
                <TiptapRenderer content={section.title} />
              ) : (
                titleText
              )}
            </h2>
          )}

          {showDescription && hasRichContent(section.description) && (
            <div
              className={cn(
                'mb-12 max-w-2xl text-base font-light leading-relaxed text-white/80 transition-all delay-500 duration-1000 md:text-lg',
                isVisible ? 'opacity-100' : 'opacity-0'
              )}
            >
              <TiptapRenderer content={section.description} />
            </div>
          )}

          {showDescription && !hasRichContent(section.description) && descriptionText && (
            <p
              className={cn(
                'mb-12 max-w-2xl text-base font-light leading-relaxed text-white/80 transition-all delay-500 duration-1000 md:text-lg',
                isVisible ? 'opacity-100' : 'opacity-0'
              )}
            >
              {descriptionText}
            </p>
          )}

          <div
            className={cn(
              'transition-all delay-700 duration-1000',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            {isExternal ? (
              <a
                href={ctaHref}
                className={buttonClassName}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.hoverActive;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.primaryButton;
                }}
              >
                {buttonInner}
              </a>
            ) : (
              <Link
                href={ctaHref}
                className={buttonClassName}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.hoverActive;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColors.primaryButton;
                }}
              >
                {buttonInner}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 h-12 w-full rounded-t-[60px] bg-white" />
    </section>
  );
};

export default CTA;
