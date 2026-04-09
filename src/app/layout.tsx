import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
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
          <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-ready')` }} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
