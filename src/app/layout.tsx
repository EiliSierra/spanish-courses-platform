import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

export const metadata: Metadata = {
  title: 'Spanish Course — Learn Spanish Online',
  description: 'Interactive Spanish course with audio, games, and quizzes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${sourceSans.variable}`}>
        <body className="font-[family-name:var(--font-source-sans)] bg-gray-50 text-gray-800 antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
