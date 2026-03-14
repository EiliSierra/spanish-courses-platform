'use client'

import { useEffect, useState, useCallback } from 'react'
import { useLessonProgress } from '@/hooks/useLessonProgress'
import { useToast } from '@/components/ui/Toast'
import LessonSidebar from '@/components/layout/LessonSidebar'
import HeroSection from './HeroSection'
import ObjectivesGrid from './ObjectivesGrid'
import PhraseGrid from './PhraseGrid'
import PronunciationTips from './PronunciationTips'
import FlashcardGrid from './FlashcardGrid'
import MatchingGame from './MatchingGame'
import SortingActivity from './SortingActivity'
import DialogueSection from './DialogueSection'
import CulturalNotes from './CulturalNotes'
import NumberDictation from './NumberDictation'
import KnowledgeQuiz from './KnowledgeQuiz'
import { SECTIONS_L13 } from '@/lib/lesson-data-L13'

export default function LessonL13Content() {
  const { sectionStates, progressPct, markVisited, markCompleted, setQuizScore } = useLessonProgress('L1.3')
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

    SECTIONS_L13.forEach((sec) => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
    markVisited('welcome')
  }, [markVisited])

  const handleMatchingComplete = useCallback(() => {
    markCompleted('matching-game')
    showToast('Perfect match! All pairs found!', 'success')
  }, [markCompleted, showToast])

  const handleSortingComplete = useCallback(() => {
    markCompleted('number-sorting')
  }, [markCompleted])

  const handleDictationComplete = useCallback(() => {
    markCompleted('number-dictation')
    showToast('Great listening skills!', 'success')
  }, [markCompleted, showToast])

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
        sections={SECTIONS_L13}
        lessonLabel="Lesson 1.3"
      />

      <div className="lg:ml-[280px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
          <HeroSection />
          <div className="section-card bg-white"><ObjectivesGrid /></div>
          <div className="section-card bg-orange-50/30 border-orange-100"><PhraseGrid /></div>
          <div className="section-card bg-yellow-50/30 border-yellow-100"><PronunciationTips /></div>
          <div className="section-card bg-amber-50/30 border-amber-100"><FlashcardGrid /></div>
          <div className="section-card bg-emerald-50/30 border-emerald-100"><MatchingGame onComplete={handleMatchingComplete} /></div>
          <div className="section-card bg-blue-50/30 border-blue-100"><SortingActivity onComplete={handleSortingComplete} /></div>
          <div className="section-card bg-purple-50/30 border-purple-100"><DialogueSection /></div>
          <div className="section-card bg-rose-50/30 border-rose-100"><CulturalNotes /></div>
          <div className="section-card bg-orange-50/40 border-orange-100"><NumberDictation onComplete={handleDictationComplete} /></div>
          <div className="section-card bg-indigo-50/40 border-indigo-100"><KnowledgeQuiz onComplete={handleQuizComplete} /></div>
        </div>
      </div>
    </>
  )
}
