import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

export const metadata: Metadata = {
  title: "Alexandria's Language Institute — Learn Spanish Online",
  description: 'Interactive Spanish courses from A1 to C2. 74 lessons, 4,400+ native audio clips, and hands-on activities. Start free today.',
  openGraph: {
    title: "Alexandria's Language Institute — Learn Spanish Online",
    description: 'Master Spanish with audio-powered lessons, real-world dialogues, and interactive activities. 10 levels from beginner to mastery.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${sourceSans.variable}`}>
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
