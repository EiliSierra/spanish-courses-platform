'use client'

import { useState, useCallback } from 'react'
import type { QuizQuestion } from '@/lib/types/lesson'
import { spawnConfetti } from '@/components/ui/Confetti'

interface KnowledgeQuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number, max: number) => void
  nextLessonId?: string | null
  nextLessonLabel?: string | null
}

export default function KnowledgeQuiz({ questions, onComplete, nextLessonId, nextLessonLabel }: KnowledgeQuizProps) {
  const [answered, setAnswered] = useState<Record<number, boolean>>({})
  const [results, setResults] = useState<Record<number, boolean>>({})
  const [correctCount, setCorrectCount] = useState(0)
  const [showFinal, setShowFinal] = useState(false)

  const answeredCount = Object.keys(answered).length
  const progressPct = Math.round((answeredCount / questions.length) * 100)

  const handleAnswer = useCallback((qId: number, isCorrect: boolean) => {
    if (answered[qId]) return
    setAnswered((prev) => ({ ...prev, [qId]: true }))
    setResults((prev) => ({ ...prev, [qId]: isCorrect }))
    let newCorrect = correctCount
    if (isCorrect) { newCorrect = correctCount + 1; setCorrectCount(newCorrect) }
    if (answeredCount + 1 === questions.length) {
      setTimeout(() => {
        setShowFinal(true)
        onComplete?.(newCorrect, questions.length)
        if (Math.round((newCorrect / questions.length) * 100) >= 80) spawnConfetti(window.innerWidth / 2, 200, 60)
      }, 800)
    }
  }, [answered, answeredCount, correctCount, onComplete, questions.length])

  const retry = useCallback(() => { setAnswered({}); setResults({}); setCorrectCount(0); setShowFinal(false) }, [])

  return (
    <section id="knowledge-check">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
        </div>
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)]">Knowledge Check</h2>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-2">Answer all {questions.length} questions. You need 70% to pass.</p>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">{answeredCount < questions.length ? `Question ${answeredCount + 1} of ${questions.length}` : `${questions.length} of ${questions.length} answered`}</span>
          <span className="font-semibold text-blue-600">{progressPct}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <QuizCard key={q.id} question={q} isAnswered={!!answered[q.id]} isCorrect={results[q.id]} onAnswer={(c) => handleAnswer(q.id, c)} />
        ))}
      </div>

      {showFinal && (
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          {(() => {
            const pct = Math.round((correctCount / questions.length) * 100)
            const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
            return (<>
              <div className="text-4xl mb-2">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
              <div className="text-4xl font-bold text-blue-600 mb-1">{pct}%</div>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{correctCount} of {questions.length} correct</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button onClick={retry} className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700">Retry Quiz</button>
                {nextLessonId && (
                  <a href={`/courses/${nextLessonId}`} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 inline-flex items-center gap-2">
                    Continue to {nextLessonLabel ?? nextLessonId}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                )}
              </div>
            </>)
          })()}
        </div>
      )}
    </section>
  )
}

function normalize(s: string): string {
  return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9: ]/g, '')
}

function QuizCard({ question: q, isAnswered, isCorrect, onAnswer }: { question: QuizQuestion; isAnswered: boolean; isCorrect?: boolean; onAnswer: (correct: boolean) => void }) {
  const [fillInput, setFillInput] = useState('')
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const typeBg = q.type === 'mc' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : q.type === 'tf' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200' : 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200'
  const typeLabel = q.type === 'mc' ? 'Multiple Choice' : q.type === 'tf' ? 'True / False' : 'Fill in the Blank'

  const checkFill = () => {
    if (!fillInput.trim()) return
    const input = normalize(fillInput)
    if (Array.isArray(q.answer)) {
      onAnswer(q.answer.some(a => normalize(a) === input))
    } else {
      onAnswer(input === normalize(String(q.answer)))
    }
  }

  const answerDisplay = Array.isArray(q.answer) ? q.answer[0] : q.type === 'mc' && q.options ? q.options[q.answer as number] : q.type === 'tf' ? (q.answer ? 'True' : 'False') : q.answer

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border p-6 transition-all ${isAnswered ? isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30' : 'border-red-500 bg-red-50 dark:bg-red-950/30' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Q{q.id}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBg}`}>{typeLabel}</span>
      </div>
      <p className="font-medium text-gray-700 dark:text-gray-200 mb-4">{q.text}</p>

      {q.type === 'mc' && q.options && (
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isThisCorrect = i === (q.answer as number)
            const isSelected = selectedOption === i
            return (
              <button key={i} onClick={() => { if (!isAnswered) { setSelectedOption(i); onAnswer(i === (q.answer as number)) } }} disabled={isAnswered}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all ${
                  isAnswered ? isThisCorrect ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200' : isSelected ? 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200' : 'border-gray-200 dark:border-gray-700 opacity-50' : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer'
                }`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isAnswered && isThisCorrect ? 'bg-green-500 text-white' : isAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}>
                  {['A', 'B', 'C', 'D'][i]}
                </span>
                <span className="text-sm">{opt}</span>
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'tf' && (
        <div className="flex gap-3">
          {[true, false].map((val) => (
            <button key={String(val)} onClick={() => { if (!isAnswered) onAnswer(val === (q.answer as boolean)) }} disabled={isAnswered}
              className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium text-center transition-all ${
                isAnswered ? val === (q.answer as boolean) ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200' : 'border-gray-200 dark:border-gray-700 opacity-50' : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer text-gray-700 dark:text-gray-200'
              }`}>
              {val ? 'True' : 'False'}
            </button>
          ))}
        </div>
      )}

      {q.type === 'fill' && (
        <div className="flex gap-3">
          <input type="text" value={fillInput} onChange={(e) => setFillInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !isAnswered) checkFill() }}
            disabled={isAnswered} placeholder="?"
            className={`w-32 h-12 text-center text-xl font-bold rounded-lg border-2 outline-none transition-colors ${
              isAnswered ? isCorrect ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200' : 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:border-blue-400'
            }`} />
          <button onClick={() => { if (!isAnswered) checkFill() }}
            disabled={isAnswered} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50">Check</button>
        </div>
      )}

      {isAnswered && (
        <div className={`mt-3 text-sm p-3 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200' : 'bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200'}`}>
          {isCorrect ? 'Correct!' : `Incorrect. The answer is: ${answerDisplay}`}
        </div>
      )}
    </div>
  )
}
