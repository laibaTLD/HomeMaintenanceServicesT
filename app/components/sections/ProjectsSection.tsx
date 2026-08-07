'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Page, Project } from '@/app/lib/types';
import { TiptapRenderer } from '@/app/components/ui/TiptapRenderer';
import { cn, getImageSrc } from '@/app/lib/utils';
import { useThemeColors, useThemeFonts } from '@/app/hooks/useTheme';
import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { projectApi } from '@/app/lib/api';
import { ArrowUpRight } from 'lucide-react';

const HOME_PREVIEW_LIMIT = 6;

interface ProjectsSectionProps {
  projectsSection: Page['projectsSection'];
  className?: string;
}

function orderProjectsByIds(projects: Project[], ids: string[]): Project[] {
  return ids
    .map((id) => projects.find((p) => p._id === id))
    .filter((p): p is Project => Boolean(p));
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectsSection, className }) => {
  const themeColors = useThemeColors();
  const themeFonts = useThemeFonts();
  const { site, projects: allProjects, loading: webBuilderLoading } = useWebBuilder();

  const [sectionProjects, setSectionProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      if (!site?.slug || !projectsSection?.enabled) {
        setLoading(false);
        return;
      }

      const published = (allProjects || []).filter((p) => p.status === 'published');

      try {
        if (projectsSection.projectIds && projectsSection.projectIds.length > 0) {
          const projects = await projectApi.getProjectsByIds(site.slug, projectsSection.projectIds);
          const publishedSelected = projects.filter((p) => p.status === 'published');
          setSectionProjects(orderProjectsByIds(publishedSelected, projectsSection.projectIds));
        } else {
          setSectionProjects(published.slice(0, HOME_PREVIEW_LIMIT));
        }
      } catch (error) {
        console.error('Failed to load projects:', error);
        if (projectsSection.projectIds?.length) {
          const filtered = published.filter((p) => projectsSection.projectIds!.includes(p._id));
          setSectionProjects(orderProjectsByIds(filtered, projectsSection.projectIds));
        } else {
          setSectionProjects(published.slice(0, HOME_PREVIEW_LIMIT));
        }
      } finally {
        setLoading(false);
      }
    };

    if (!webBuilderLoading || (allProjects && allProjects.length >= 0)) {
      loadProjects();
    }
  }, [site?.slug, projectsSection?.projectIds, allProjects, projectsSection?.enabled, webBuilderLoading]);

  if (!projectsSection?.enabled) return null;

  if (loading || webBuilderLoading) {
    return null;
  }

  if (sectionProjects.length === 0) return null;

  const hasSelectedIds = Boolean(projectsSection.projectIds?.length);
  const publishedCount = (allProjects || []).filter((p) => p.status === 'published').length;
  const showViewAll = !hasSelectedIds && publishedCount > HOME_PREVIEW_LIMIT;

  return (
    <section className={cn('py-8 lg:py-10 overflow-hidden', className)} style={{ backgroundColor: themeColors.pageBackground }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="text-[10px] tracking-[0.4em] uppercase font-bold"
                style={{ color: '#8B6E4E', fontFamily: themeFonts.body }}
              >
                Our Work
              </span>
              <div className="w-12 h-[1px] bg-[#8B6E4E]/30" />
            </div>

            {projectsSection.title && (
              <h2
                className="text-3xl lg:text-4xl font-serif leading-tight"
                style={{ color: themeColors.lightPrimaryText, fontFamily: themeFonts.heading }}
              >
                <TiptapRenderer content={projectsSection.title} />
              </h2>
            )}
          </div>

          {projectsSection.description && (
            <div
              className="max-w-sm text-base font-light leading-relaxed opacity-70"
              style={{ color: themeColors.lightSecondaryText, fontFamily: themeFonts.body }}
            >
              <TiptapRenderer content={projectsSection.description} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {sectionProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const imageUrl = project.featuredImage?.url ? getImageSrc(project.featuredImage.url) : '';

            return (
              <div
                key={project._id}
                className={cn('group relative flex flex-col', !isEven && 'md:mt-24')}
              >
                <Link
                  href={`/project-detail/${project.slug}`}
                  className="block overflow-hidden relative aspect-[4/5] rounded-sm bg-gray-100"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.featuredImage?.altText || project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-sm">No Image</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </Link>

                <div className="mt-8">
                  <div
                    className="flex items-center justify-between border-b pb-4"
                    style={{ borderColor: `${themeColors.secondaryText}15` }}
                  >
                    <h3
                      className="text-2xl lg:text-3xl font-serif"
                      style={{ color: themeColors.lightPrimaryText, fontFamily: themeFonts.heading }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="text-[10px] tracking-widest uppercase font-bold opacity-40"
                      style={{ color: themeColors.secondaryText }}
                    >
                      View
                    </span>
                  </div>

                  {project.shortDescription && (
                    <div
                      className="mt-4 text-base font-light leading-relaxed opacity-60 max-w-md"
                      style={{ color: themeColors.lightSecondaryText, fontFamily: themeFonts.body }}
                    >
                      <TiptapRenderer content={project.shortDescription} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-20 flex justify-center">
            <Link
              href="/project-detail"
              className="group flex items-center gap-6 px-10 py-5 border rounded-full transition-all duration-500"
              style={{
                borderColor: `${themeColors.secondaryText}20`,
                color: themeColors.lightPrimaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = themeColors.darkPrimaryText;
                e.currentTarget.style.color = themeColors.lightPrimaryText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = themeColors.lightPrimaryText;
              }}
            >
              <span className="text-xs font-black uppercase tracking-[0.2em]">View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
