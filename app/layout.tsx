import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/wallpapers/light.webp" />
        <link rel="preload" as="image" href="/wallpapers/dark.webp" />
      </head>
      <body
        className={`${geistMono.className} bg-[#8fa3c7] font-mono text-[var(--color-ink)] antialiased dark:bg-[#0b0e14]`}
      >
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-12 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <main id="main">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
