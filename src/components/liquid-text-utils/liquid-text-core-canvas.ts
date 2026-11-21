import { useEffect, useState } from "react";

export function defaultMaxDpr(): number {
  return typeof window !== "undefined" ? Math.min(1.5, window.devicePixelRatio || 1) : 1;
}

export function sizeCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  maxDpr: number = defaultMaxDpr()
): number {
  const dpr = Math.min(
    maxDpr,
    typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
  );
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return dpr;
}

export function useElementSize(ref: React.RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    ro.observe(el);
    setSize({ width: el.clientWidth, height: el.clientHeight });

    return () => ro.disconnect();
  }, [ref]);

  return size;
}
