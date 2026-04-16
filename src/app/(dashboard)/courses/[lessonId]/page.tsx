'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { LESSON_REGISTRY, type LessonEntry, type ExamEntry } from '@/lib/lesson-registry'
import type { LessonData, PhraseData } from '@/lib/types/lesson'
import type { ExamQuestion } from '@/lib/lessons/L1.F'
import type { ExamConfig } from '@/lib/lesson-registry'
import LessonShell from '@/components/engine/LessonShell'
import FinalExam from '@/components/engine/FinalExam'
import { ToastProvider } from '@/components/ui/Toast'

type LoadedLesson = { type: 'lesson'; data: LessonData; phraseByAudio: Record<string, PhraseData> }
type LoadedExam = { type: 'exam'; questions: ExamQuestion[]; config: ExamConfig }
type LoadedContent = LoadedLesson | LoadedExam

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string
  const [content, setContent] = useState<LoadedContent | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const entry = LESSON_REGISTRY[lessonId]
    if (!entry) {
      setError(true)
      return
    }

    let cancelled = false
    entry.load().then((loaded) => {
      if (cancelled) return
      if (entry.type === 'lesson') {
        const { data, phraseByAudio } = loaded as Awaited<ReturnType<LessonEntry['load']>>
        setContent({ type: 'lesson', data, phraseByAudio })
      } else {
        const { questions, config } = loaded as Awaited<ReturnType<ExamEntry['load']>>
        setContent({ type: 'exam', questions, config })
      }
    })

    return () => { cancelled = true }
  }, [lessonId])

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Lesson not found</h1>
          <p className="text-gray-500">The lesson &quot;{lessonId}&quot; does not exist.</p>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-gray-400 text-lg">Loading lesson...</div>
      </div>
    )
  }

  if (content.type === 'exam') {
    return <FinalExam questions={content.questions} {...content.config} />
  }

  return <LessonShell data={content.data} phraseByAudio={content.phraseByAudio} />
}

export default function LessonPage() {
  return (
    <ToastProvider>
      <LessonContent />
    </ToastProvider>
  )
}
