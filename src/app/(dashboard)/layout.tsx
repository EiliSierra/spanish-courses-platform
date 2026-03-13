import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/courses" className="font-bold text-xl font-[family-name:var(--font-inter)] text-blue-700">
            Spanish Course
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/courses" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              My Courses
            </Link>
            <UserButton />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
