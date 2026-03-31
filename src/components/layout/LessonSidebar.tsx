'use client'

import { useState, useEffect } from 'react'
import { SECTIONS } from '@/lib/lesson-data'

interface LessonSidebarProps {
  progressPct: number
  sectionStates: Record<string, { visited?: boolean; completed?: boolean }>
  activeSection: string
  sections?: { id: string; title?: string; label?: string }[]
  lessonLabel?: string
}

export default function LessonSidebar({ progressPct, sectionStates, activeSection, sections, lessonLabel }: LessonSidebarProps) {
  const sidebarSections: { id: string; title?: string; label?: string }[] = sections ?? SECTIONS;
  const [open, setOpen] = useState(false)

  // Close on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-gray-200 rounded-lg shadow-md p-2 border border-gray-700"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-[280px] bg-gray-900 border-r border-gray-800 z-40 overflow-y-auto transition-transform lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Lesson navigation"
      >
        <div className="p-5 border-b border-gray-800">
          <h2 className="font-bold text-lg font-[family-name:var(--font-inter)] text-gray-100">Spanish Course</h2>
          <div className="text-sm text-gray-400">{lessonLabel ?? 'Lesson 1.1'}</div>
        </div>

        {/* Progress */}
        <div className="px-5 py-4 border-b border-gray-800">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-gray-400">Progress</span>
            <span className="font-semibold text-blue-400">{progressPct}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Nav links */}
        <div className="py-2">
          {sidebarSections.map((sec) => {
            const state = sectionStates[sec.id]
            const isActive = sec.id === activeSection
            const isCompleted = state?.completed
            const title = sec.title ?? sec.label ?? sec.id

            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' })
                  setOpen(false)
                }}
                className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-950 text-blue-300 font-semibold border-r-3 border-blue-500'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    isCompleted
                      ? 'bg-green-500'
                      : isActive
                        ? 'bg-blue-500'
                        : 'bg-gray-600'
                  }`}
                />
                {title}
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
