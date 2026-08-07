'use client';

import { useThemeColors, useThemeFonts, type ThemeColors, type ThemeFonts } from '@/app/hooks/useTheme';

export interface SectionTheme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

/** Combined theme colors + fonts for section components. */
export function useSectionTheme(): SectionTheme {
  const colors = useThemeColors();
  const fonts = useThemeFonts();
  return { colors, fonts };
}

export default useSectionTheme;
