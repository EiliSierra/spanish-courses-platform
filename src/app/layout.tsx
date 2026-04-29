import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Source_Sans_3 } from 'next/font/google'
import JsonLd from '@/components/json-ld'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alexandriaslanguages.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alexandria's Language Institute — Learn Spanish Online",
    template: "%s | Alexandria's Language Institute",
  },
  description:
    'Interactive Spanish courses from A1 to C2. 74 lessons, 4,400+ native audio clips, and hands-on activities. Start free today.',
  keywords: [
    'learn Spanish online',
    'Spanish course',
    'Spanish A1 to C2',
    'CEFR Spanish',
    'native Spanish audio',
    'interactive Spanish lessons',
    'Spanish for adults',
    'Alexandria Languages',
  ],
  authors: [
    { name: 'Eili Sierra' },
    { name: 'Dr. Charles Martin', url: 'https://sites.google.com/alexandriasdesign.com/charlesmartinedd/home' },
  ],
  creator: "Alexandria's Language Institute",
  publisher: "Alexandria's Design LLC",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Alexandria's Language Institute — Learn Spanish Online",
    description:
      'Master Spanish with audio-powered lessons, real-world dialogues, and interactive activities. 10 levels from beginner to mastery.',
    url: SITE_URL,
    siteName: "Alexandria's Language Institute",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexandria's Language Institute — Learn Spanish Online",
    description:
      'Interactive Spanish courses from A1 to C2. 4,400+ native audio clips, hands-on activities. Start free.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${sourceSans.variable}`} suppressHydrationWarning>
        <head>
          <JsonLd />
        </head>
        <body className="font-[family-name:var(--font-source-sans)] antialiased">
          <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-ready');(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()` }} />
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
