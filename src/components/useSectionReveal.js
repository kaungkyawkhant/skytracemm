import { useEffect, useRef } from 'react';

/**
 * Adds `.section-visible` once a section enters the viewport.
 */
export function useSectionReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return sectionRef;
}
