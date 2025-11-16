import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viewmark — Put your ads on viral clips",
  description: "Viewmark powers branded viral short-form video campaigns, placing your logo or offer inside high-performing videos at scale.",
  icons: {
    icon: [
      { url: "/fonts/favicon/favicon.ico", sizes: "any" },
      { url: "/fonts/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fonts/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/fonts/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/fonts/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/fonts/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Viewmark — Put your ads on viral clips",
    description: "Viewmark powers branded viral short-form video campaigns, placing your logo or offer inside high-performing videos at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viewmark — Put your ads on viral clips",
    description: "Viewmark powers branded viral short-form video campaigns, placing your logo or offer inside high-performing videos at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links for better browser support */}
        <link rel="icon" href="/fonts/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/fonts/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/fonts/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/fonts/favicon/apple-touch-icon.png" />
        
        {/* Preload critical fonts to prevent FOIT */}
        <link
          rel="preload"
          href="/fonts/neueSingular-H-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/neueSingular-H-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/neueSingular-H-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

