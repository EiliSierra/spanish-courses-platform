import Link from 'next/link'

export default function CheckoutSuccess() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold font-[family-name:var(--font-inter)] text-gray-900 mb-4">
          Welcome to Premium!
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Your payment was successful. You now have full access to all 10 levels,
          74 lessons, and 4,400+ audio clips. Let&apos;s keep learning!
        </p>
        <Link
          href="/courses"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all text-lg"
        >
          Go to My Courses
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </main>
  )
}
