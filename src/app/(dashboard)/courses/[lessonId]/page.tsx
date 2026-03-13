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
import { SECTIONS } from '@/lib/lesson-data'
import { useParams } from 'next/navigation'

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string
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

  // Mark welcome visited on mount
  useEffect(() => {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <HeroSection />
          <ObjectivesGrid />
          <LetterGrid />
          <UniqueLetters />
          <PronunciationTips />
          <FlashcardGrid />
          <MatchingGame onComplete={handleMatchingComplete} />
          <SpellingBee onComplete={handleBeeComplete} />
          <SortingActivity onComplete={handleSortingComplete} />
          <DialogueSection />
          <CulturalNotes />
          <LightningRound onComplete={handleLightningComplete} />
          <KnowledgeQuiz onComplete={handleQuizComplete} />
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
