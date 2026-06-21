import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lana AI — Human-Sounding Digital Assistant for Business',
  description:
    'Lana AI helps businesses reply faster, capture leads, answer questions, and manage client conversations with a warm human-sounding assistant.',
  metadataBase: new URL('https://hey-lana.ai'),
  openGraph: {
    title: 'Lana AI — Human-Sounding Digital Assistant for Business',
    description:
      'Lana AI helps businesses reply faster, capture leads, answer questions, and manage client conversations with a warm human-sounding assistant.',
    url: 'https://hey-lana.ai',
    siteName: 'Lana AI',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
