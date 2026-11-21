import { useEffect, useRef } from "react";

export function useVisibleLoop(
  ref: React.RefObject<HTMLElement | null>,
  callback: (dt: number) => void,
  options: { enabled: boolean }
) {
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    if (!options.enabled) return;

    let animId: number;
    let lastTime = performance.now();
    let isVisible = true;

    const el = ref.current;
    let observer: IntersectionObserver | null = null;

    if (el && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      });
      observer.observe(el);
    }

    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      if (isVisible) {
        cbRef.current(dt);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      if (observer && el) observer.unobserve(el);
    };
  }, [ref, options.enabled]);
}
