'use client';

import Image, { type ImageProps } from 'next/image';

export const IMAGE_QUALITY_HIGH = 90;

export const IMAGE_SIZES = {
  fullWidth: '100vw',
  sectionWide: '(max-width: 1024px) 100vw, 70vw',
  sectionHalf: '(max-width: 1024px) 100vw, 50vw',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
} as const;

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: ImageProps['src'] | null | undefined;
};

function shouldUnoptimize(src: string): boolean {
  if (!/^https?:\/\//i.test(src)) return false;
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiBase) return true;
  try {
    return new URL(src).hostname !== new URL(apiBase).hostname;
  } catch {
    return true;
  }
}

export function OptimizedImage({ src, alt, unoptimized, ...props }: OptimizedImageProps) {
  if (!src || (typeof src === 'string' && !src.trim())) {
    return null;
  }

  const resolvedUnoptimized =
    unoptimized ?? (typeof src === 'string' ? shouldUnoptimize(src) : false);

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      unoptimized={resolvedUnoptimized}
      {...props}
    />
  );
}

export default OptimizedImage;
