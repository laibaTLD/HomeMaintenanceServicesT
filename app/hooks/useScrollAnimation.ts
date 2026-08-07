'use client';

import { useEffect, useRef, useState } from 'react';

type UseScrollAnimationOptions = {
  threshold?: number | number[];
  rootMargin?: string;
  /** Once visible, stay visible (default true). */
  once?: boolean;
};

/**
 * IntersectionObserver helper for section enter animations.
 * Returns a ref to attach and whether the element is (or has been) visible.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          if (!once) setIsVisible(false);
          return;
        }
        setIsVisible(true);
        if (once) observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export default useScrollAnimation;
