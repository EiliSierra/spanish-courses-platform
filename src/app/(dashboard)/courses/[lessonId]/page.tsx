'use client'

import { useEffect, useState, useCallback } from 'react'
import { useLessonProgress } from '@/hooks/useLessonProgress'
import { ToastProvider, useToast } from '@/components/ui/Toast'
import LessonSidebar from '@/components/layout/LessonSidebar'
import HeroSection from '@/components/lesson/HeroSection'
import ObjectivesGrid from '@/components/lesson/ObjectivesGrid'
import LetterGrid from '@/components/lesson/LetterGrid'
import UniqueLetters from '@/components/lesson/UniqueLetters'
import PronunciationTips from '@/components/lesson/PronunciationTips'
import FlashcardGrid from '@/components/lesson/FlashcardGrid'
import MatchingGame from '@/components/lesson/MatchingGame'
import SpellingBee from '@/components/lesson/SpellingBee'
import SortingActivity from '@/components/lesson/SortingActivity'
import DialogueSection from '@/components/lesson/DialogueSection'
import CulturalNotes from '@/components/lesson/CulturalNotes'
import LightningRound from '@/components/lesson/LightningRound'
import KnowledgeQuiz from '@/components/lesson/KnowledgeQuiz'
import LessonL12Content from '@/components/lessonL12/LessonPage'
import LessonL13Content from '@/components/lessonL13/LessonPage'
import LessonShell from '@/components/engine/LessonShell'
import { L14Data, L14PhraseByAudio } from '@/lib/lessons/L1.4'
import { SECTIONS } from '@/lib/lesson-data'
import { useParams } from 'next/navigation'

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string

  // Route to specific lessons
  if (lessonId === 'L1.2') return <LessonL12Content />
  if (lessonId === 'L1.3') return <LessonL13Content />
  if (lessonId === 'L1.4') return <LessonShell data={L14Data} phraseByAudio={L14PhraseByAudio} />
  const { sectionStates, progressPct, markVisited, markCompleted, setQuizScore } = useLessonProgress(lessonId)
  const [activeSection, setActiveSection] = useState('welcome')
  const { showToast } = useToast()

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (window.scrollY < 200) {
              setActiveSection('welcome')
              markVisited('welcome')
            } else {
              setActiveSection(id)
              markVisited(id)
            }
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => {
      if (window.scrollY < 200) setActiveSection('welcome')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [markVisited])

  // Scroll to top and mark welcome visited on mount
  useEffect(() => {
    window.scrollTo(0, 0)
    markVisited('welcome')
  }, [markVisited])

  const handleMatchingComplete = useCallback(() => {
    markCompleted('matching-game')
    showToast('You matched 10/10! Perfect!', 'success')
  }, [markCompleted, showToast])

  const handleBeeComplete = useCallback(() => {
    markCompleted('spelling-bee')
  }, [markCompleted])

  const handleSortingComplete = useCallback(() => {
    markCompleted('letter-sorting')
  }, [markCompleted])

  const handleLightningComplete = useCallback(() => {
    markCompleted('lightning-round')
  }, [markCompleted])

  const handleQuizComplete = useCallback(
    (score: number, max: number) => {
      setQuizScore(score, max)
      markCompleted('knowledge-check')
      const pct = Math.round((score / max) * 100)
      showToast(`Quiz Complete! Score: ${pct}%`, pct >= 80 ? 'success' : 'info')
    },
    [setQuizScore, markCompleted, showToast],
  )

  return (
    <>
      <LessonSidebar
        progressPct={progressPct}
        sectionStates={sectionStates}
        activeSection={activeSection}
      />

      <div className="lg:ml-[280px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
          <HeroSection />
          <div className="section-card bg-white"><ObjectivesGrid /></div>
          <div className="section-card bg-blue-50/40 border-blue-100"><LetterGrid /></div>
          <div className="section-card bg-purple-50/40 border-purple-100"><UniqueLetters /></div>
          <div className="section-card bg-amber-50/30 border-amber-100"><PronunciationTips /></div>
          <div className="section-card bg-indigo-50/30 border-indigo-100"><FlashcardGrid /></div>
          <div className="section-card bg-emerald-50/30 border-emerald-100"><MatchingGame onComplete={handleMatchingComplete} /></div>
          <div className="section-card bg-amber-50/30 border-amber-100"><SpellingBee onComplete={handleBeeComplete} /></div>
          <div className="section-card bg-blue-50/30 border-blue-100"><SortingActivity onComplete={handleSortingComplete} /></div>
          <div className="section-card bg-purple-50/30 border-purple-100"><DialogueSection /></div>
          <div className="section-card bg-rose-50/30 border-rose-100"><CulturalNotes /></div>
          <div className="section-card bg-orange-50/30 border-orange-100"><LightningRound onComplete={handleLightningComplete} /></div>
          <div className="section-card bg-indigo-50/40 border-indigo-100"><KnowledgeQuiz onComplete={handleQuizComplete} /></div>
        </div>
      </div>
    </>
  )
}

export default function LessonPage() {
  return (
    <ToastProvider>
      <LessonContent />
    </ToastProvider>
  )
}
