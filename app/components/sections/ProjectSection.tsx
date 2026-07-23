'use client';

import React from 'react';
import { Page } from '@/app/lib/types';
import { TiptapRenderer } from '@/app/components/ui/TiptapRenderer';
import { cn } from '@/app/lib/utils';
import { useThemeColors, useThemeFonts } from '@/app/hooks/useTheme';

interface ProjectSectionProps {
  projectSection: Page['projectSection'];
  className?: string;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projectSection, className }) => {
  const themeColors = useThemeColors();
  const themeFonts = useThemeFonts();

  if (!projectSection?.enabled) return null;

  if (!projectSection.title && !projectSection.description) return null;

  return (
    <section
      className={cn('py-10 lg:py-12', className)}
      style={{ backgroundColor: themeColors.pageBackground || '#F5F2ED' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className="text-[10px] tracking-[0.4em] uppercase font-bold"
              style={{ color: '#8B6E4E', fontFamily: themeFonts.body }}
            >
              Projects
            </span>
            <div className="w-12 h-[1px] bg-[#8B6E4E]/30" />
          </div>

          {projectSection.title && (
            <h2
              className="text-3xl lg:text-4xl font-serif leading-tight mb-6"
              style={{ color: themeColors.lightPrimaryText, fontFamily: themeFonts.heading }}
            >
              <TiptapRenderer content={projectSection.title} />
            </h2>
          )}

          {projectSection.description && (
            <div
              className="text-base lg:text-lg font-light leading-relaxed opacity-80"
              style={{ color: themeColors.lightSecondaryText, fontFamily: themeFonts.body }}
            >
              <TiptapRenderer content={projectSection.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
