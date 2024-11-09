import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const fira = Fira_Code({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import "./globals.css";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { flex } from "styled-system/patterns";
import { Providers } from "~/app/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000",
};

export const metadata: Metadata = {
  title:
    "Abraham A. Aremu (aka anubra266) - Software Engineer and Open Source Enthusiast",
  description: "Software engineer passionate about UI, accessibility and DX.",
  openGraph: {
    images: ["https://portfolio-anubra266.vercel.app/api/og"],
  },
  metadataBase: new URL("https://anubra266.dev"),

  icons: [
    {
      rel: "apple-touch-icon",
      url: "https://avatars.githubusercontent.com/u/30869823?s=180&v=4",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "https://avatars.githubusercontent.com/u/30869823?s=32&v=4",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "https://avatars.githubusercontent.com/u/30869823?s=16&v=4",
      type: "image/png",
      sizes: "16x16",
    },
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "mask-icon", url: "/favicon/safari-pinned-tab.svg", color: "#000" },
  ],
  twitter: {
    site: "@anubra266",
    card: "summary_large_image",
    title:
      "Abraham A. Aremu (aka anubra266) - Software Engineer and Open Source Enthusiast",
    description: "Software engineer passionate about UI, accessibility and DX.",
    creator: "@anubra266",
    images: ["https://portfolio-anubra266.vercel.app/api/og"],
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={
          {
            "--inter": inter.style.fontFamily,
            "--body": poppins.style.fontFamily,
            "--font-mono": fira.style.fontFamily,
          } as object
        }
      >
        <Providers>
          <div
            className={flex({
              direction: "column",
              align: "center",
              minH: "screen",
              "--maxW": "1288px",
              "--padding": {
                base: "spacing.4",
                md: "spacing.7",
                lg: "spacing.10",
                xl: "spacing.4",
              },
              position: "relative",
            })}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
