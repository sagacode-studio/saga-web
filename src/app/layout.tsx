import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sagacode.studio"),
  title: {
    default: "SagaCode | Small but Mighty",
    template: "%s | SagaCode",
  },
  description: "Building the future of Indie Games, Frontend Design, and AI-driven solutions through human-AI collaboration. One Person Company crafting impact.",
  keywords: [
    "indie games",
    "game development", 
    "frontend design",
    "web development",
    "AI solutions",
    "next.js",
    "react developer",
    "Indonesia",
  ],
  authors: [{ name: "SagaCode Studio" }],
  creator: "SagaCode Studio",
  publisher: "SagaCode Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagacode.studio",
    siteName: "SagaCode",
    title: "SagaCode | Small but Mighty",
    description: "Building the future through human-AI collaboration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SagaCode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SagaCode | Small but Mighty",
    description: "Building the future through human-AI collaboration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}