import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optika Healthcare | Optical & Diagnostics",
  description:
    "Corporate health camps, eye check-ups, diagnostic services and eyewear solutions from Optika Healthcare in Hosur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
