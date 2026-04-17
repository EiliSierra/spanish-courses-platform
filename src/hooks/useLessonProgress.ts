'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
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

export function useLessonProgress(lessonId: string, sections?: { id: string; label: string }[]) {
  const { user } = useUser()
  const [sectionStates, setSectionStates] = useState<Record<string, SectionState>>({})
  const [quizScore, setQuizScoreState] = useState<ProgressData['quizScore']>(null)
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Restore on mount: try server first, fall back to localStorage
  useEffect(() => {
    const key = getStorageKey(user?.id, lessonId)

    // Load from localStorage immediately (instant UX)
    try {
      const json = localStorage.getItem(key)
      if (json) {
        const data: ProgressData = JSON.parse(json)
        setSectionStates(data.sectionStates || {})
        setQuizScoreState(data.quizScore || null)
      }
    } catch {}

    // Then fetch from server and merge (server wins if newer)
    if (user?.id) {
      fetch(`/api/progress?lessonId=${lessonId}`)
        .then((res) => res.json())
        .then(({ progress }) => {
          if (!progress) return
          const serverStates = (progress.sectionStates as Record<string, SectionState>) || {}
          const serverQuiz = progress.quizScore != null
            ? { score: progress.quizScore, max: progress.quizMax, passed: progress.quizPassed }
            : null

          // Merge: keep whichever has more completed sections
          setSectionStates((local) => {
            const localCompleted = Object.values(local).filter((s) => s.completed).length
            const serverCompleted = Object.values(serverStates).filter((s) => s.completed).length
            if (serverCompleted >= localCompleted) {
              return serverStates
            }
            // Local has more progress — sync it back to server
            syncToServer(lessonId, local, serverQuiz)
            return local
          })

          if (serverQuiz) setQuizScoreState(serverQuiz)
        })
        .catch(() => {}) // Server unavailable — localStorage works as fallback
    }
  }, [user?.id, lessonId])

  // Sync to server (debounced)
  const syncToServer = useCallback(
    (lid: string, states: Record<string, SectionState>, quiz: ProgressData['quizScore']) => {
      if (!user?.id) return

      if (syncTimer.current) clearTimeout(syncTimer.current)
      syncTimer.current = setTimeout(() => {
        const sectionList = sections ?? SECTIONS
        const completedCount = sectionList.filter((s) => states[s.id]?.completed).length
        const pct = Math.round((completedCount / sectionList.length) * 100)

        fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lessonId: lid,
            sectionStates: states,
            quizScore: quiz?.score ?? null,
            quizMax: quiz?.max ?? null,
            quizPassed: quiz?.passed ?? false,
            progressPct: pct,
          }),
        }).catch(() => {}) // Fail silently — localStorage is the fallback
      }, 2000) // Debounce 2s to avoid spamming on every section visit
    },
    [user?.id, sections],
  )

  // Save to localStorage + queue server sync
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
      syncToServer(lessonId, states, quiz)
    },
    [user?.id, lessonId, syncToServer],
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

  const markAllCompleted = useCallback(() => {
    const sectionList = sections ?? SECTIONS
    setSectionStates((prev) => {
      const next = { ...prev }
      sectionList.forEach((s) => {
        next[s.id] = { ...next[s.id], visited: true, completed: true }
      })
      save(next, quizScore)
      return next
    })
  }, [save, quizScore, sections])

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
  const sectionList = sections ?? SECTIONS
  const completedCount = sectionList.filter((s) => sectionStates[s.id]?.completed).length
  const progressPct = Math.round((completedCount / sectionList.length) * 100)

  return {
    sectionStates,
    quizScore,
    progressPct,
    markVisited,
    markCompleted,
    markAllCompleted,
    setQuizScore,
  }
}
