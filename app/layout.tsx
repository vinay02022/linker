import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Linkkr - Modular Social Automation Engine",
  description:
    "The modular social automation platform built for scale. Automate Instagram, Telegram, LinkedIn, and X with engineering-grade infrastructure.",
  openGraph: {
    title: "Linkkr - Modular Social Automation Engine",
    description:
      "Automate Instagram, Telegram, LinkedIn, and X with engineering-grade infrastructure. Built for creators, founders, and growth teams.",
    url: "https://linkkr.io",
    siteName: "Linkkr",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkkr - Modular Social Automation Engine",
    description:
      "Automate Instagram, Telegram, LinkedIn, and X with engineering-grade infrastructure.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://linkkr.io"),
}

export const viewport: Viewport = {
  themeColor: "#0f1114",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
