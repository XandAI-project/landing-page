import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://xandai.dev'),
  title: {
    default: 'XandAI | AI, Tech & Self-Hosted Models',
    template: '%s | XandAI',
  },
  description: 'Technical articles about artificial intelligence, self-hosted models, and practical engineering experiments.',
  keywords: ['AI', 'artificial intelligence', 'self-hosted', 'ollama', 'local models', 'machine learning', 'engineering'],
  authors: [{ name: 'XandAI' }],
  creator: 'XandAI',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xandai.dev',
    title: 'XandAI | AI, Tech & Self-Hosted Models',
    description: 'Technical articles about artificial intelligence, self-hosted models, and practical engineering experiments.',
    siteName: 'XandAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XandAI | AI, Tech & Self-Hosted Models',
    description: 'Technical articles about artificial intelligence, self-hosted models, and practical engineering experiments.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

