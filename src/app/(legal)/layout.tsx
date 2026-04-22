import Link from 'next/link'
import Image from 'next/image'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <nav className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Alexandria's Language Institute — Home">
            <Image
              src="/logo-horizontal.png"
              alt="Alexandria's Language Institute"
              width={280}
              height={56}
              className="h-12 w-auto dark:hidden"
            />
            <Image
              src="/logo-on-dark.png"
              alt="Alexandria's Language Institute"
              width={280}
              height={56}
              className="h-12 w-auto hidden dark:block"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Home
          </Link>
        </nav>

        <article className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl prose-h1:sm:text-4xl prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-p:leading-7 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-gray-100">
          {children}
        </article>

        <footer className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/terms" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
              Terms of Service
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
              Privacy Policy
            </Link>
            <Link href="/refund" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
              Refund Policy
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Alexandria&apos;s Design LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
