import type React from "react"
import type { Metadata } from "next"
import { Karla } from "next/font/google"
import "./globals.css"

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
})

export const metadata: Metadata = {
  title: "LNU AI Society",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${karla.variable} antialiased`}>
      <head>
        <link rel="icon" href="/images/logo-symbol.png" sizes="64x64" />
      </head>
      <body>{children}</body>
    </html>
  )
}
