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
import { L11Data, L11PhraseByAudio } from '@/lib/lessons/L1.1'
import { L12Data, L12PhraseByAudio } from '@/lib/lessons/L1.2'
import { L13Data, L13PhraseByAudio } from '@/lib/lessons/L1.3'
import { L14Data, L14PhraseByAudio } from '@/lib/lessons/L1.4'
import { L15Data, L15PhraseByAudio } from '@/lib/lessons/L1.5'
import { L16Data, L16PhraseByAudio } from '@/lib/lessons/L1.6'
import { L17Data, L17PhraseByAudio } from '@/lib/lessons/L1.7'
import { L18Data, L18PhraseByAudio } from '@/lib/lessons/L1.8'
import { L1F_QUESTION_POOL, L1F_CONFIG } from '@/lib/lessons/L1.F'
import { L21Data, L21PhraseByAudio } from '@/lib/lessons/L2.1'
import { L22Data, L22PhraseByAudio } from '@/lib/lessons/L2.2'
import { L23Data, L23PhraseByAudio } from '@/lib/lessons/L2.3'
import { L24Data, L24PhraseByAudio } from '@/lib/lessons/L2.4'
import { L25Data, L25PhraseByAudio } from '@/lib/lessons/L2.5'
import { L26Data, L26PhraseByAudio } from '@/lib/lessons/L2.6'
import { L27Data, L27PhraseByAudio } from '@/lib/lessons/L2.7'
import { L28Data, L28PhraseByAudio } from '@/lib/lessons/L2.8'
import { L2F_QUESTION_POOL, L2F_CONFIG } from '@/lib/lessons/L2.F'
import { L31Data, L31PhraseByAudio } from '@/lib/lessons/L3.1'
import { L32Data, L32PhraseByAudio } from '@/lib/lessons/L3.2'
import { L33Data, L33PhraseByAudio } from '@/lib/lessons/L3.3'
import { L34Data, L34PhraseByAudio } from '@/lib/lessons/L3.4'
import { L35Data, L35PhraseByAudio } from '@/lib/lessons/L3.5'
import { L36Data, L36PhraseByAudio } from '@/lib/lessons/L3.6'
import { L37Data, L37PhraseByAudio } from '@/lib/lessons/L3.7'
import { L38Data, L38PhraseByAudio } from '@/lib/lessons/L3.8'
import { L3F_QUESTION_POOL, L3F_CONFIG } from '@/lib/lessons/L3.F'
import { L41Data, L41PhraseByAudio } from '@/lib/lessons/L4.1'
import { L42Data, L42PhraseByAudio } from '@/lib/lessons/L4.2'
import { L43Data, L43PhraseByAudio } from '@/lib/lessons/L4.3'
import { L44Data, L44PhraseByAudio } from '@/lib/lessons/L4.4'
import { L45Data, L45PhraseByAudio } from '@/lib/lessons/L4.5'
import { L46Data, L46PhraseByAudio } from '@/lib/lessons/L4.6'
import { L47Data, L47PhraseByAudio } from '@/lib/lessons/L4.7'
import { L48Data, L48PhraseByAudio } from '@/lib/lessons/L4.8'
import { L4F_QUESTION_POOL, L4F_CONFIG } from '@/lib/lessons/L4.F'
import FinalExam from '@/components/engine/FinalExam'
import { SECTIONS } from '@/lib/lesson-data'
import { useParams } from 'next/navigation'

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string

  // Route to specific lessons
  if (lessonId === 'L1.1') return <LessonShell data={L11Data} phraseByAudio={L11PhraseByAudio} />
  if (lessonId === 'L1.2') return <LessonShell data={L12Data} phraseByAudio={L12PhraseByAudio} />
  if (lessonId === 'L1.3') return <LessonShell data={L13Data} phraseByAudio={L13PhraseByAudio} />
  if (lessonId === 'L1.4') return <LessonShell data={L14Data} phraseByAudio={L14PhraseByAudio} />
  if (lessonId === 'L1.5') return <LessonShell data={L15Data} phraseByAudio={L15PhraseByAudio} />
  if (lessonId === 'L1.6') return <LessonShell data={L16Data} phraseByAudio={L16PhraseByAudio} />
  if (lessonId === 'L1.7') return <LessonShell data={L17Data} phraseByAudio={L17PhraseByAudio} />
  if (lessonId === 'L1.8') return <LessonShell data={L18Data} phraseByAudio={L18PhraseByAudio} />
  if (lessonId === 'L1.F') return <FinalExam questions={L1F_QUESTION_POOL} {...L1F_CONFIG} />
  if (lessonId === 'L2.1') return <LessonShell data={L21Data} phraseByAudio={L21PhraseByAudio} />
  if (lessonId === 'L2.2') return <LessonShell data={L22Data} phraseByAudio={L22PhraseByAudio} />
  if (lessonId === 'L2.3') return <LessonShell data={L23Data} phraseByAudio={L23PhraseByAudio} />
  if (lessonId === 'L2.4') return <LessonShell data={L24Data} phraseByAudio={L24PhraseByAudio} />
  if (lessonId === 'L2.5') return <LessonShell data={L25Data} phraseByAudio={L25PhraseByAudio} />
  if (lessonId === 'L2.6') return <LessonShell data={L26Data} phraseByAudio={L26PhraseByAudio} />
  if (lessonId === 'L2.7') return <LessonShell data={L27Data} phraseByAudio={L27PhraseByAudio} />
  if (lessonId === 'L2.8') return <LessonShell data={L28Data} phraseByAudio={L28PhraseByAudio} />
  if (lessonId === 'L2.F') return <FinalExam questions={L2F_QUESTION_POOL} {...L2F_CONFIG} />
  if (lessonId === 'L3.1') return <LessonShell data={L31Data} phraseByAudio={L31PhraseByAudio} />
  if (lessonId === 'L3.2') return <LessonShell data={L32Data} phraseByAudio={L32PhraseByAudio} />
  if (lessonId === 'L3.3') return <LessonShell data={L33Data} phraseByAudio={L33PhraseByAudio} />
  if (lessonId === 'L3.4') return <LessonShell data={L34Data} phraseByAudio={L34PhraseByAudio} />
  if (lessonId === 'L3.5') return <LessonShell data={L35Data} phraseByAudio={L35PhraseByAudio} />
  if (lessonId === 'L3.6') return <LessonShell data={L36Data} phraseByAudio={L36PhraseByAudio} />
  if (lessonId === 'L3.7') return <LessonShell data={L37Data} phraseByAudio={L37PhraseByAudio} />
  if (lessonId === 'L3.8') return <LessonShell data={L38Data} phraseByAudio={L38PhraseByAudio} />
  if (lessonId === 'L3.F') return <FinalExam questions={L3F_QUESTION_POOL} {...L3F_CONFIG} />
  if (lessonId === 'L4.1') return <LessonShell data={L41Data} phraseByAudio={L41PhraseByAudio} />
  if (lessonId === 'L4.2') return <LessonShell data={L42Data} phraseByAudio={L42PhraseByAudio} />
  if (lessonId === 'L4.3') return <LessonShell data={L43Data} phraseByAudio={L43PhraseByAudio} />
  if (lessonId === 'L4.4') return <LessonShell data={L44Data} phraseByAudio={L44PhraseByAudio} />
  if (lessonId === 'L4.5') return <LessonShell data={L45Data} phraseByAudio={L45PhraseByAudio} />
  if (lessonId === 'L4.6') return <LessonShell data={L46Data} phraseByAudio={L46PhraseByAudio} />
  if (lessonId === 'L4.7') return <LessonShell data={L47Data} phraseByAudio={L47PhraseByAudio} />
  if (lessonId === 'L4.8') return <LessonShell data={L48Data} phraseByAudio={L48PhraseByAudio} />
  if (lessonId === 'L4.F') return <FinalExam questions={L4F_QUESTION_POOL} {...L4F_CONFIG} />
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
