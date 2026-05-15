'use client';

import React from 'react';
import { getImageSrc } from '@/app/lib/utils';
import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { TiptapRenderer } from '@/app/components/ui/TiptapRenderer';
import { useThemeColors, useThemeFonts } from '@/app/hooks/useTheme';
import { ArrowUpRight } from 'lucide-react';

const isSocialColumn = (title?: string) => title?.toLowerCase().includes('social') ?? false;

export const Footer: React.FC = () => {
  const { site } = useWebBuilder();
  const themeColors = useThemeColors();
  const themeFonts = useThemeFonts();

  const footer = site?.footer;
  const footerColumns = footer?.columns || [];
  const copyright = footer?.copyright || '';
  const logoUrl = footer?.logo?.url || site?.theme?.logoUrl;
  const logoAlt = footer?.logo?.altText || (typeof site?.name === 'string' ? site.name : 'Logo');

  const linkColumns = footerColumns.filter(
    (col) => !isSocialColumn(col.title) && (col.links?.length ?? 0) > 0
  );
  const socialColumns = footerColumns.filter((col) => isSocialColumn(col.title));

  const socialFromColumns = socialColumns.flatMap((col) =>
    (col.links || []).map((link) => ({
      label: link.label || 'Link',
      url: link.url,
    }))
  );
  const socialFromSite = footer?.showSocialLinks
    ? (site?.socialLinks || []).map((link) => ({
        label: link.platform,
        url: link.url,
      }))
    : [];
  const allSocialLinks = [...socialFromSite, ...socialFromColumns];
  const socialColumnTitle = socialColumns[0]?.title;

  const renderCopyright = () => {
    if (!copyright) {
      return `© ${new Date().getFullYear()} ${site?.name}. All rights reserved.`;
    }
    return <TiptapRenderer content={copyright} as="inline" />;
  };

  const renderFooterDescription = () => {
    const description = footer?.description;
    if (!description) return null;
    if (typeof description === 'object' && description.type === 'doc') {
      return <TiptapRenderer content={description} as="inline" />;
    }
    return String(description);
  };

  const renderSiteName = () => {
    const name = site?.name;
    if (!name) return '';
    if (typeof name === 'object' && (name as { type?: string }).type === 'doc') {
      return <TiptapRenderer content={name} as="inline" />;
    }
    return String(name);
  };

  const renderInlineText = (value: unknown) => {
    if (value && typeof value === 'object' && (value as { type?: string }).type === 'doc') {
      return <TiptapRenderer content={value} as="inline" />;
    }
    return String(value ?? '');
  };

  const renderLegalHeading = (heading: unknown, fallback: string) => {
    if (heading && typeof heading === 'object' && (heading as { type?: string }).type === 'doc') {
      return <TiptapRenderer content={heading} as="inline" />;
    }
    if (typeof heading === 'string' || typeof heading === 'number') {
      const text = String(heading).trim();
      return text ? text : fallback;
    }
    return fallback;
  };

  const columnCount = linkColumns.length + (allSocialLinks.length > 0 ? 1 : 0) + 1;

  return (
    <footer
      className="pt-12 pb-4 overflow-hidden"
      style={{
        backgroundColor: themeColors.sectionBackgroundDark,
        color: themeColors.darkPrimaryText,
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 space-y-10">
            {logoUrl ? (
              <img
                src={getImageSrc(logoUrl)}
                alt={logoAlt}
                className="h-20 w-auto object-contain"
              />
            ) : (
              <h2 className="text-3xl font-serif italic" style={{ fontFamily: themeFonts.heading }}>
                {renderSiteName()}
              </h2>
            )}

            {footer?.description && (
              <p
                className="text-sm opacity-60 leading-relaxed max-w-sm"
                style={{ fontFamily: themeFonts.body }}
              >
                {renderFooterDescription()}
              </p>
            )}
          </div>

          <div
            className={`lg:col-span-7 grid grid-cols-2 gap-12 ${
              columnCount >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            }`}
          >
            {linkColumns.map((col, colIdx) => (
              <div key={`footer-col-${colIdx}`} className="space-y-6">
                {col.title && (
                  <span
                    className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 block"
                    style={{ fontFamily: themeFonts.body }}
                  >
                    {col.title}
                  </span>
                )}
                <ul className="space-y-4">
                  {(col.links || []).map((link, linkIdx) => (
                    <li key={`${link.url}-${linkIdx}`}>
                      <a
                        href={link.url}
                        className="text-base hover:translate-x-1 inline-block transition-transform duration-300"
                        style={{ fontFamily: themeFonts.body }}
                      >
                        {renderInlineText(link.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {allSocialLinks.length > 0 && (
              <div className="space-y-6">
                {socialColumnTitle && (
                  <span
                    className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 block"
                    style={{ fontFamily: themeFonts.body }}
                  >
                    {socialColumnTitle}
                  </span>
                )}
                <ul className="space-y-4">
                  {allSocialLinks.map((link, idx) => (
                    <li key={`${link.url}-${idx}`}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-base"
                        style={{ fontFamily: themeFonts.body }}
                      >
                        <span className="capitalize">{link.label}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6 col-span-2 md:col-span-1">
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 block"
                style={{ fontFamily: themeFonts.body }}
              >
                Find Us
              </span>
              <div className="space-y-6">
                {site?.business?.address && (
                  <address
                    className="not-italic text-base leading-relaxed opacity-70"
                    style={{ fontFamily: themeFonts.body }}
                  >
                    {site.business.address.street}
                    <br />
                    {site.business.address.city}, {site.business.address.state}
                    <br />
                    {site.business.address.zipCode}
                  </address>
                )}

                <div className="space-y-4 pt-4 border-t border-white/10">
                  {site?.business?.email && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest opacity-40 block">
                        Email Us
                      </span>
                      <a
                        href={`mailto:${site.business.email}`}
                        className="block text-sm hover:underline transition-all duration-300 break-all"
                        style={{ fontFamily: themeFonts.body }}
                      >
                        {site.business.email}
                      </a>
                    </div>
                  )}
                  {site?.business?.phone && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest opacity-40 block">
                        Call Us
                      </span>
                      <a
                        href={`tel:${site.business.phone}`}
                        className="block text-lg font-medium hover:opacity-70 transition-opacity"
                        style={{ fontFamily: themeFonts.heading }}
                      >
                        {site.business.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-2 border-t flex flex-col justify-between items-center gap-6"
          style={{ borderColor: `${themeColors.inactive}20` }}
        >
          <div
            className="text-[10px] uppercase tracking-widest opacity-40"
            style={{ fontFamily: themeFonts.body }}
          >
            {renderCopyright()}
          </div>

          <div className="flex gap-8">
            {site?.legal?.termsOfService?.heading ? (
              <a
                href="/terms-of-service"
                className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                {renderLegalHeading(site.legal.termsOfService.heading, 'Terms of Service')}
              </a>
            ) : (
              <a
                href="/terms-of-service"
                className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </a>
            )}
            {site?.legal?.privacyPolicy?.heading ? (
              <a
                href="/privacy-policy"
                className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                {renderLegalHeading(site.legal.privacyPolicy.heading, 'Privacy Policy')}
              </a>
            ) : (
              <a
                href="/privacy-policy"
                className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </a>
            )}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-white transition-colors"
              style={{ color: themeColors.primaryButton }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
