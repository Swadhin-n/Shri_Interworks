import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-provider"
import type { ReactNode } from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "SHRI INTERWORKS - European Manpower Solutions",
  description: "Connecting skilled Asian talent with European opportunities",
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SHRI INTERWORKS - European Manpower Solutions</title>
        <meta name="description" content="Connecting skilled Asian talent with European opportunities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/webp" href="/logo.webp" />
      </head>
      <body className={`${_geist.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
