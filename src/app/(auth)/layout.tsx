import Link from 'next/link'
import Image from 'next/image'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center" aria-label="Alexandria's Language Institute — Home">
            <Image
              src="/logo-horizontal.png"
              alt="Alexandria's Language Institute"
              width={320}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>
    </div>
  )
}
