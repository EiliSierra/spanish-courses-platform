'use client'

import Link from 'next/link'
import { SignInButton } from '@clerk/nextjs'

export function HeroCTA({ isSignedIn }: { isSignedIn: boolean }) {
  if (isSignedIn) {
    return (
      <Link
        href="/courses"
        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all text-lg"
      >
        Go to My Courses
        <ArrowIcon />
      </Link>
    )
  }
  return (
    <SignInButton mode="modal">
      <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all text-lg">
        Start Free — Level 1
        <ArrowIcon />
      </button>
    </SignInButton>
  )
}

export function NavAuth({ isSignedIn }: { isSignedIn: boolean }) {
  if (isSignedIn) {
    return (
      <Link
        href="/courses"
        className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        My Courses
      </Link>
    )
  }
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
        Sign In
      </button>
    </SignInButton>
  )
}

export function PricingCTA({ isSignedIn }: { isSignedIn: boolean }) {
  if (isSignedIn) {
    return (
      <Link href="/courses" className="mt-8 block w-full py-3 rounded-xl font-bold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-center">
        Go to Courses
      </Link>
    )
  }
  return (
    <SignInButton mode="modal">
      <button className="mt-8 w-full py-3 rounded-xl font-bold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
        Get Started
      </button>
    </SignInButton>
  )
}

export function FinalCTA({ isSignedIn }: { isSignedIn: boolean }) {
  if (isSignedIn) {
    return (
      <Link
        href="/courses"
        className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all text-lg"
      >
        Continue Learning
        <ArrowIcon />
      </Link>
    )
  }
  return (
    <SignInButton mode="modal">
      <button className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all text-lg">
        Start Learning — It&apos;s Free
        <ArrowIcon />
      </button>
    </SignInButton>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}
