'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useLessonProgress } from '@/hooks/useLessonProgress'
import { useToast } from '@/components/ui/Toast'
import LessonSidebar from '@/components/layout/LessonSidebar'
import HeroSection from './HeroSection'
import PriorKnowledge from './PriorKnowledge'
import PersonalizedContext from './PersonalizedContext'
import PhraseGrid from './PhraseGrid'
import PronunciationTips from './PronunciationTips'
import PronunciationPractice from './PronunciationPractice'
import FlashcardGrid from './FlashcardGrid'
import MatchingGame from './MatchingGame'
import SortingActivity from './SortingActivity'
import DialogueSection from './DialogueSection'
import CulturalNotes from './CulturalNotes'
import KnowledgeQuiz from './KnowledgeQuiz'
import { getNextLessonId } from '@/lib/lesson-registry'
import ConversationalTutor from './ConversationalTutor'
import { getUniqueActivity } from './unique-activities/registry'
import type { LessonData, PhraseData } from '@/lib/types/lesson'

interface LessonShellProps {
  data: LessonData
  phraseByAudio: Record<string, PhraseData>
}

export default function LessonShell({ data, phraseByAudio }: LessonShellProps) {
  const { sectionStates, progressPct, markVisited, markCompleted, markAllCompleted, setQuizScore } = useLessonProgress(data.id, data.sections)
  const [activeSection, setActiveSection] = useState('welcome')
  const { showToast } = useToast()

  const UniqueActivity = useMemo(
    () => data.uniqueActivity ? getUniqueActivity(data.uniqueActivity.id) : null,
    [data.uniqueActivity],
  )

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

    data.sections.forEach((sec) => {
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
  }, [markVisited, data.sections])

  useEffect(() => {
    window.scrollTo(0, 0)
    markVisited('welcome')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMatchingComplete = useCallback(() => {
    markCompleted('matching-game')
    showToast('Perfect match! All pairs found!', 'success')
  }, [markCompleted, showToast])

  const handleSortingComplete = useCallback(() => {
    markCompleted(data.sortSectionId)
  }, [markCompleted, data.sortSectionId])

  const handleUniqueComplete = useCallback(() => {
    if (data.uniqueActivity) {
      markCompleted(data.uniqueActivity.sectionId)
      showToast('Great job!', 'success')
    }
  }, [markCompleted, showToast, data.uniqueActivity])

  const handleQuizComplete = useCallback(
    (score: number, max: number) => {
      setQuizScore(score, max)
      markAllCompleted()
      const pct = Math.round((score / max) * 100)
      showToast(`Quiz Complete! Score: ${pct}%`, pct >= 80 ? 'success' : 'info')
    },
    [setQuizScore, markAllCompleted, showToast],
  )

  const sc = data.sectionColors
  const lessonNum = data.id.replace('L', '')
  const nextLessonId = useMemo(() => getNextLessonId(data.id), [data.id])
  const nextLessonLabel = nextLessonId
    ? (nextLessonId.endsWith('.F') ? `Final Exam ${nextLessonId.slice(1, -2)}` : `Lesson ${nextLessonId.slice(1)}`)
    : null

  // Build transition lookup: afterSection → text
  const transitionMap = useMemo(() => {
    const map: Record<string, string> = {}
    if (data.sectionTransitions) {
      data.sectionTransitions.forEach(t => { map[t.afterSection] = t.text })
    }
    return map
  }, [data.sectionTransitions])

  const TransitionText = useCallback(({ afterSection }: { afterSection: string }) => {
    const text = transitionMap[afterSection]
    if (!text) return null
    return (
      <div className="flex items-center gap-3 py-2 px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <p className="text-sm text-gray-500 italic text-center">{text}</p>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    )
  }, [transitionMap])

  return (
    <>
      <LessonSidebar
        progressPct={progressPct}
        sectionStates={sectionStates}
        activeSection={activeSection}
        sections={data.sections}
        lessonLabel={`Lesson ${lessonNum}`}
      />

      <div className="lg:ml-[280px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
          <HeroSection hero={data.hero} />

          {/* Prior Knowledge (What You Already Know) */}
          {data.priorKnowledge && data.priorKnowledge.length > 0 && (
            <div className={`section-card ${sc['prior-knowledge']?.bg ?? 'bg-indigo-50 dark:bg-indigo-950/30'} ${sc['prior-knowledge']?.border ?? 'border-indigo-200 dark:border-indigo-100'}`}>
              <PriorKnowledge items={data.priorKnowledge} />
            </div>
          )}

          {/* Objectives */}
          <div className={`section-card ${sc.objectives?.bg ?? 'bg-white'}`}>
            <section id="objectives">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">What You&apos;ll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.objectives.map((obj) => (
                  <div key={obj.title} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                    <span className="text-3xl">{obj.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100">{obj.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Personalized Context (AI) */}
          {data.personalizedVocab && data.personalizedVocab.length > 0 && (
            <div className={`section-card ${sc['personalized-context']?.bg ?? 'bg-violet-50 dark:bg-violet-950/30'} ${sc['personalized-context']?.border ?? 'border-violet-200 dark:border-violet-100'}`}>
              <PersonalizedContext words={data.personalizedVocab} lessonId={data.id} />
            </div>
          )}

          {/* Phrase sections — each gets its own card with its own color, with transitions */}
          {data.phraseSections.map((ps) => {
            const color = sc[ps.id]
            return (
              <div key={ps.id}>
                <div className={`section-card ${color?.bg ?? ''} ${color?.border ?? ''}`}>
                  <PhraseGrid sections={[ps]} audioBase={data.audioBase} />
                </div>
                <TransitionText afterSection={ps.id} />
              </div>
            )
          })}

          {/* Pronunciation Tips */}
          <div className={`section-card ${sc['pronunciation-tips']?.bg ?? ''} ${sc['pronunciation-tips']?.border ?? ''}`}>
            <PronunciationTips tips={data.pronunciationTips} />
          </div>

          {/* Pronunciation Practice (AI) */}
          {data.pronunciationChallenges && data.pronunciationChallenges.length > 0 && (
            <div className={`section-card ${sc['pronunciation-practice']?.bg ?? 'bg-blue-50 dark:bg-blue-950/30'} ${sc['pronunciation-practice']?.border ?? 'border-blue-200 dark:border-blue-800'}`}>
              <PronunciationPractice challenges={data.pronunciationChallenges} audioBase={data.audioBase} />
            </div>
          )}

          {/* Flashcards */}
          <div className={`section-card ${sc.flashcards?.bg ?? ''} ${sc.flashcards?.border ?? ''}`}>
            <FlashcardGrid groups={data.flashcardGroups} phraseByAudio={phraseByAudio} audioBase={data.audioBase} />
          </div>

          {/* Matching Game */}
          <div className={`section-card ${sc['matching-game']?.bg ?? ''} ${sc['matching-game']?.border ?? ''}`}>
            <MatchingGame pairs={data.matchPairs} labels={data.matchLabels} onComplete={handleMatchingComplete} />
          </div>

          {/* Sorting Activity */}
          <div className={`section-card ${sc[data.sortSectionId]?.bg ?? ''} ${sc[data.sortSectionId]?.border ?? ''}`}>
            <SortingActivity activities={data.sortActivities} sectionId={data.sortSectionId} title={data.sortTitle} onComplete={handleSortingComplete} />
          </div>

          {/* Dialogues */}
          <div className={`section-card ${sc.dialogues?.bg ?? ''} ${sc.dialogues?.border ?? ''}`}>
            <DialogueSection dialogues={data.dialogues} description={data.dialogueDescription} />
          </div>
          <TransitionText afterSection="dialogues" />

          {/* Cultural Notes */}
          <div className={`section-card ${sc.cultural?.bg ?? ''} ${sc.cultural?.border ?? ''}`}>
            <CulturalNotes notes={data.culturalNotes} />
          </div>
          <TransitionText afterSection="cultural" />

          {/* Unique Activity (if any) */}
          {UniqueActivity && data.uniqueActivity && (
            <>
              <div className={`section-card ${data.uniqueActivity.sectionColor} ${data.uniqueActivity.sectionBorder}`}>
                <UniqueActivity onComplete={handleUniqueComplete} />
              </div>
              <TransitionText afterSection={data.uniqueActivity.sectionId} />
            </>
          )}

          {/* Knowledge Check */}
          <div className={`section-card ${sc['knowledge-check']?.bg ?? ''} ${sc['knowledge-check']?.border ?? ''}`}>
            <KnowledgeQuiz questions={data.quiz} onComplete={handleQuizComplete} nextLessonId={nextLessonId} nextLessonLabel={nextLessonLabel} />
          </div>
        </div>
      </div>

      {/* Floating AI Conversational Tutor */}
      <ConversationalTutor lessonId={data.id} lessonTitle={data.hero.title} />
    </>
  )
}
