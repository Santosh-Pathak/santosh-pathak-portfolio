import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santosh Pathak - Full Stack Developer",
  description: "Portfolio of Santosh Pathak - Full Stack Developer at Tedekstra, UK. Specializing in MERN stack, React.js, Node.js, and modern web technologies.",
  keywords: "Santosh Pathak, Full Stack Developer, React, Node.js, MERN Stack, Tedekstra, Portfolio",
  authors: [{ name: "Santosh Pathak" }],
  openGraph: {
    title: "Santosh Pathak - Full Stack Developer",
    description: "Portfolio of Santosh Pathak - Full Stack Developer at Tedekstra, UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
