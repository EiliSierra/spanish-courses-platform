import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm dark:bg-gray-900/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/courses" className="font-bold text-xl font-[family-name:var(--font-inter)] text-blue-600 dark:text-blue-400">
            Spanish Course
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/courses" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-sm font-medium">
              My Courses
            </Link>
            <ThemeToggle />
            <UserButton />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
