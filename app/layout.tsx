import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-provider"
import type { ReactNode } from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "SHRI INTERWORKS - European Manpower Solutions | Recruitment",
  description: "Professional recruitment and manpower solutions connecting skilled Asian workers with European employers. Construction, hospitality, textile, and more.",
  keywords: "recruitment, manpower, European jobs, Asian workers, staffing solutions, labor recruitment",
  generator: 'v0.app',
  authors: [{ name: 'SHRI INTERWORKS' }],
  openGraph: {
    type: 'website',
    url: 'https://interworks.ro',
    title: 'SHRI INTERWORKS - European Manpower Solutions',
    description: 'Professional recruitment and manpower solutions',
    siteName: 'SHRI INTERWORKS',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHRI INTERWORKS - European Manpower Solutions',
    description: 'Professional recruitment and manpower solutions',
  },
  robots: 'index, follow',
  canonical: 'https://interworks.ro',
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
        <link rel="canonical" href="https://interworks.ro" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'SHRI INTERWORKS',
              'url': 'https://interworks.ro',
              'logo': 'https://interworks.ro/logo.webp',
              'description': 'Professional recruitment and manpower solutions connecting Asian workers with European employers',
              'sameAs': [],
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'Customer Service',
                'email': 'info@interworks.ro'
              }
            })
          }}
        />
      </head>
      <body className={`${_geist.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
