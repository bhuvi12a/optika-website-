import { useSyncExternalStore } from "react";
import type { BjorkTone } from "./liquid-text-core-palette";

export function useBjorkTone(tone?: BjorkTone): "light" | "dark" {
  const isDark = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    () => false
  );

  if (tone === "dark") return "dark";
  if (tone === "light") return "light";
  return isDark ? "dark" : "light";
}
