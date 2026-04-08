import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RELIANEX",
  description:
    "Combining an engineer's perspective with a user-experience mindset.",
  icons: {
    icon: "/logo.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A4D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--surface)] text-[var(--text)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
