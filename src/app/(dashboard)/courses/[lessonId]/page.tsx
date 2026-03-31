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
import { L51Data, L51PhraseByAudio } from '@/lib/lessons/L5.1'
import { L52Data, L52PhraseByAudio } from '@/lib/lessons/L5.2'
import { L53Data, L53PhraseByAudio } from '@/lib/lessons/L5.3'
import { L54Data, L54PhraseByAudio } from '@/lib/lessons/L5.4'
import { L55Data, L55PhraseByAudio } from '@/lib/lessons/L5.5'
import { L56Data, L56PhraseByAudio } from '@/lib/lessons/L5.6'
import { L57Data, L57PhraseByAudio } from '@/lib/lessons/L5.7'
import { L58Data, L58PhraseByAudio } from '@/lib/lessons/L5.8'
import { L5F_QUESTION_POOL, L5F_CONFIG } from '@/lib/lessons/L5.F'
import { L61Data, L61PhraseByAudio } from '@/lib/lessons/L6.1'
import { L62Data, L62PhraseByAudio } from '@/lib/lessons/L6.2'
import { L63Data, L63PhraseByAudio } from '@/lib/lessons/L6.3'
import { L64Data, L64PhraseByAudio } from '@/lib/lessons/L6.4'
import { L65Data, L65PhraseByAudio } from '@/lib/lessons/L6.5'
import { L66Data, L66PhraseByAudio } from '@/lib/lessons/L6.6'
import { L67Data, L67PhraseByAudio } from '@/lib/lessons/L6.7'
import { L68Data, L68PhraseByAudio } from '@/lib/lessons/L6.8'
import { L6F_QUESTION_POOL, L6F_CONFIG } from '@/lib/lessons/L6.F'
import { L71Data, L71PhraseByAudio } from '@/lib/lessons/L7.1'
import { L72Data, L72PhraseByAudio } from '@/lib/lessons/L7.2'
import { L73Data, L73PhraseByAudio } from '@/lib/lessons/L7.3'
import { L74Data, L74PhraseByAudio } from '@/lib/lessons/L7.4'
import { L75Data, L75PhraseByAudio } from '@/lib/lessons/L7.5'
import { L76Data, L76PhraseByAudio } from '@/lib/lessons/L7.6'
import { L77Data, L77PhraseByAudio } from '@/lib/lessons/L7.7'
import { L78Data, L78PhraseByAudio } from '@/lib/lessons/L7.8'
import { L7F_QUESTION_POOL, L7F_CONFIG } from '@/lib/lessons/L7.F'
import { L81Data, L81PhraseByAudio } from '@/lib/lessons/L8.1'
import { L82Data, L82PhraseByAudio } from '@/lib/lessons/L8.2'
import { L83Data, L83PhraseByAudio } from '@/lib/lessons/L8.3'
import { L84Data, L84PhraseByAudio } from '@/lib/lessons/L8.4'
import { L85Data, L85PhraseByAudio } from '@/lib/lessons/L8.5'
import { L86Data, L86PhraseByAudio } from '@/lib/lessons/L8.6'
import { L87Data, L87PhraseByAudio } from '@/lib/lessons/L8.7'
import { L88Data, L88PhraseByAudio } from '@/lib/lessons/L8.8'
import { L8F_QUESTION_POOL, L8F_CONFIG } from '@/lib/lessons/L8.F'
import { L91Data, L91PhraseByAudio } from '@/lib/lessons/L9.1'
import { L92Data, L92PhraseByAudio } from '@/lib/lessons/L9.2'
import { L93Data, L93PhraseByAudio } from '@/lib/lessons/L9.3'
import { L94Data, L94PhraseByAudio } from '@/lib/lessons/L9.4'
import { L95Data, L95PhraseByAudio } from '@/lib/lessons/L9.5'
import { L96Data, L96PhraseByAudio } from '@/lib/lessons/L9.6'
import { L97Data, L97PhraseByAudio } from '@/lib/lessons/L9.7'
import { L98Data, L98PhraseByAudio } from '@/lib/lessons/L9.8'
import { L9F_QUESTION_POOL, L9F_CONFIG } from '@/lib/lessons/L9.F'
import { L101Data, L101PhraseByAudio } from '@/lib/lessons/L10.1'
import { L102Data, L102PhraseByAudio } from '@/lib/lessons/L10.2'
import { L10F_QUESTION_POOL, L10F_CONFIG } from '@/lib/lessons/L10.F'
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
  if (lessonId === 'L5.1') return <LessonShell data={L51Data} phraseByAudio={L51PhraseByAudio} />
  if (lessonId === 'L5.2') return <LessonShell data={L52Data} phraseByAudio={L52PhraseByAudio} />
  if (lessonId === 'L5.3') return <LessonShell data={L53Data} phraseByAudio={L53PhraseByAudio} />
  if (lessonId === 'L5.4') return <LessonShell data={L54Data} phraseByAudio={L54PhraseByAudio} />
  if (lessonId === 'L5.5') return <LessonShell data={L55Data} phraseByAudio={L55PhraseByAudio} />
  if (lessonId === 'L5.6') return <LessonShell data={L56Data} phraseByAudio={L56PhraseByAudio} />
  if (lessonId === 'L5.7') return <LessonShell data={L57Data} phraseByAudio={L57PhraseByAudio} />
  if (lessonId === 'L5.8') return <LessonShell data={L58Data} phraseByAudio={L58PhraseByAudio} />
  if (lessonId === 'L5.F') return <FinalExam questions={L5F_QUESTION_POOL} {...L5F_CONFIG} />
  if (lessonId === 'L6.1') return <LessonShell data={L61Data} phraseByAudio={L61PhraseByAudio} />
  if (lessonId === 'L6.2') return <LessonShell data={L62Data} phraseByAudio={L62PhraseByAudio} />
  if (lessonId === 'L6.3') return <LessonShell data={L63Data} phraseByAudio={L63PhraseByAudio} />
  if (lessonId === 'L6.4') return <LessonShell data={L64Data} phraseByAudio={L64PhraseByAudio} />
  if (lessonId === 'L6.5') return <LessonShell data={L65Data} phraseByAudio={L65PhraseByAudio} />
  if (lessonId === 'L6.6') return <LessonShell data={L66Data} phraseByAudio={L66PhraseByAudio} />
  if (lessonId === 'L6.7') return <LessonShell data={L67Data} phraseByAudio={L67PhraseByAudio} />
  if (lessonId === 'L6.8') return <LessonShell data={L68Data} phraseByAudio={L68PhraseByAudio} />
  if (lessonId === 'L6.F') return <FinalExam questions={L6F_QUESTION_POOL} {...L6F_CONFIG} />
  if (lessonId === 'L7.1') return <LessonShell data={L71Data} phraseByAudio={L71PhraseByAudio} />
  if (lessonId === 'L7.2') return <LessonShell data={L72Data} phraseByAudio={L72PhraseByAudio} />
  if (lessonId === 'L7.3') return <LessonShell data={L73Data} phraseByAudio={L73PhraseByAudio} />
  if (lessonId === 'L7.4') return <LessonShell data={L74Data} phraseByAudio={L74PhraseByAudio} />
  if (lessonId === 'L7.5') return <LessonShell data={L75Data} phraseByAudio={L75PhraseByAudio} />
  if (lessonId === 'L7.6') return <LessonShell data={L76Data} phraseByAudio={L76PhraseByAudio} />
  if (lessonId === 'L7.7') return <LessonShell data={L77Data} phraseByAudio={L77PhraseByAudio} />
  if (lessonId === 'L7.8') return <LessonShell data={L78Data} phraseByAudio={L78PhraseByAudio} />
  if (lessonId === 'L7.F') return <FinalExam questions={L7F_QUESTION_POOL} {...L7F_CONFIG} />
  if (lessonId === 'L8.1') return <LessonShell data={L81Data} phraseByAudio={L81PhraseByAudio} />
  if (lessonId === 'L8.2') return <LessonShell data={L82Data} phraseByAudio={L82PhraseByAudio} />
  if (lessonId === 'L8.3') return <LessonShell data={L83Data} phraseByAudio={L83PhraseByAudio} />
  if (lessonId === 'L8.4') return <LessonShell data={L84Data} phraseByAudio={L84PhraseByAudio} />
  if (lessonId === 'L8.5') return <LessonShell data={L85Data} phraseByAudio={L85PhraseByAudio} />
  if (lessonId === 'L8.6') return <LessonShell data={L86Data} phraseByAudio={L86PhraseByAudio} />
  if (lessonId === 'L8.7') return <LessonShell data={L87Data} phraseByAudio={L87PhraseByAudio} />
  if (lessonId === 'L8.8') return <LessonShell data={L88Data} phraseByAudio={L88PhraseByAudio} />
  if (lessonId === 'L8.F') return <FinalExam questions={L8F_QUESTION_POOL} {...L8F_CONFIG} />
  if (lessonId === 'L9.1') return <LessonShell data={L91Data} phraseByAudio={L91PhraseByAudio} />
  if (lessonId === 'L9.2') return <LessonShell data={L92Data} phraseByAudio={L92PhraseByAudio} />
  if (lessonId === 'L9.3') return <LessonShell data={L93Data} phraseByAudio={L93PhraseByAudio} />
  if (lessonId === 'L9.4') return <LessonShell data={L94Data} phraseByAudio={L94PhraseByAudio} />
  if (lessonId === 'L9.5') return <LessonShell data={L95Data} phraseByAudio={L95PhraseByAudio} />
  if (lessonId === 'L9.6') return <LessonShell data={L96Data} phraseByAudio={L96PhraseByAudio} />
  if (lessonId === 'L9.7') return <LessonShell data={L97Data} phraseByAudio={L97PhraseByAudio} />
  if (lessonId === 'L9.8') return <LessonShell data={L98Data} phraseByAudio={L98PhraseByAudio} />
  if (lessonId === 'L9.F') return <FinalExam questions={L9F_QUESTION_POOL} {...L9F_CONFIG} />
  if (lessonId === 'L10.1') return <LessonShell data={L101Data} phraseByAudio={L101PhraseByAudio} />
  if (lessonId === 'L10.2') return <LessonShell data={L102Data} phraseByAudio={L102PhraseByAudio} />
  if (lessonId === 'L10.F') return <FinalExam questions={L10F_QUESTION_POOL} {...L10F_CONFIG} />
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
