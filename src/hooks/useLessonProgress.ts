'use client'

import { useState, useCallback, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { SECTIONS } from '@/lib/lesson-data'

interface SectionState {
  visited?: boolean
  completed?: boolean
}

interface ProgressData {
  sectionStates: Record<string, SectionState>
  quizScore: { score: number; max: number; passed: boolean } | null
  lastAccess: number
}

function getStorageKey(userId: string | undefined, lessonId: string) {
  return `progress-${userId ?? 'anonymous'}-${lessonId}`
}

export function useLessonProgress(lessonId: string) {
  const { user } = useUser()
  const [sectionStates, setSectionStates] = useState<Record<string, SectionState>>({})
  const [quizScore, setQuizScoreState] = useState<ProgressData['quizScore']>(null)

  // Restore on mount
  useEffect(() => {
    const key = getStorageKey(user?.id, lessonId)
    try {
      const json = localStorage.getItem(key)
      if (json) {
        const data: ProgressData = JSON.parse(json)
        setSectionStates(data.sectionStates || {})
        setQuizScoreState(data.quizScore || null)
      }
    } catch {}
  }, [user?.id, lessonId])

  // Save helper
  const save = useCallback(
    (states: Record<string, SectionState>, quiz: ProgressData['quizScore']) => {
      const key = getStorageKey(user?.id, lessonId)
      const data: ProgressData = {
        sectionStates: states,
        quizScore: quiz,
        lastAccess: Date.now(),
      }
      try {
        localStorage.setItem(key, JSON.stringify(data))
      } catch {}
    },
    [user?.id, lessonId],
  )

  const markVisited = useCallback(
    (sectionId: string) => {
      setSectionStates((prev) => {
        const next = { ...prev, [sectionId]: { ...prev[sectionId], visited: true } }
        save(next, quizScore)
        return next
      })
    },
    [save, quizScore],
  )

  const markCompleted = useCallback(
    (sectionId: string) => {
      setSectionStates((prev) => {
        const next = { ...prev, [sectionId]: { ...prev[sectionId], completed: true } }
        save(next, quizScore)
        return next
      })
    },
    [save, quizScore],
  )

  const setQuizScore = useCallback(
    (score: number, max: number) => {
      const pct = Math.round((score / max) * 100)
      const qs = { score, max, passed: pct >= 70 }
      setQuizScoreState(qs)
      save(sectionStates, qs)
    },
    [save, sectionStates],
  )

  // Progress percentage
  const completedCount = SECTIONS.filter((s) => sectionStates[s.id]?.completed).length
  const progressPct = Math.round((completedCount / SECTIONS.length) * 100)

  return {
    sectionStates,
    quizScore,
    progressPct,
    markVisited,
    markCompleted,
    setQuizScore,
  }
}
