import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import FrozenBackground from "@/components/FrozenBackground";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticTargets from "@/components/MagneticTargets";
import SeasonProvider, {
  SEASON_BOOT_SCRIPT,
} from "@/components/SeasonProvider";
import LanguageProvider, {
  LANG_BOOT_SCRIPT,
} from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Haider — Full Stack & Blockchain Developer",
  description:
    "Portfolio of Ali Haider — Full Stack and Blockchain Developer in Gilgit, Pakistan. Next.js, React, TypeScript, NestJS, Flutter, Solidity, and production web, mobile, and Web3 apps.",
  authors: [{ name: "Ali Haider" }],
  openGraph: {
    title: "Ali Haider — Full Stack & Blockchain Developer",
    description:
      "Full Stack and Blockchain Developer building web, mobile, and decentralized apps. Next.js, Flutter, NestJS, Solidity.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/ali.png", alt: "Ali Haider" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Haider — Full Stack & Blockchain Developer",
    description:
      "Full Stack and Blockchain Developer building web, mobile, and decentralized apps. Next.js, Flutter, NestJS, Solidity.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060e1c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Run synchronously before hydration to apply the user's stored
            season + language — avoids a flash of the default values. */}
        <script dangerouslySetInnerHTML={{ __html: SEASON_BOOT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOT_SCRIPT }} />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SeasonProvider>
            <FrozenBackground />
            <ScrollProgress />
            {children}
            <CustomCursor />
            <MagneticTargets />
          </SeasonProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
