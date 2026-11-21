export type BjorkTone = "light" | "dark" | "auto";

export const BJORK_PALETTE: Record<string, { text: string; bg: string }> = {
  light: {
    text: "#0c3b36",
    bg: "#ffffff",
  },
  dark: {
    text: "#ffffff",
    bg: "#091c1f",
  },
  auto: {
    text: "#0c3b36",
    bg: "#ffffff",
  },
};
