import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viewmark — Put your ads on viral clips",
  description: "Put your ads on viral clips",
  icons: {
    icon: [
      { url: "/fonts/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fonts/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fonts/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/fonts/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/fonts/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/fonts/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

