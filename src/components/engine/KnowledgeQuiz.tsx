'use client'

import { useState, useCallback } from 'react'
import type { QuizQuestion } from '@/lib/types/lesson'
import { spawnConfetti } from '@/components/ui/Confetti'

interface KnowledgeQuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number, max: number) => void
}

export default function KnowledgeQuiz({ questions, onComplete }: KnowledgeQuizProps) {
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
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Knowledge Check</h2>
      <p className="text-gray-600 mb-2">Answer all {questions.length} questions. You need 70% to pass.</p>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">{answeredCount < questions.length ? `Question ${answeredCount + 1} of ${questions.length}` : `${questions.length} of ${questions.length} answered`}</span>
          <span className="font-semibold text-blue-600">{progressPct}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <QuizCard key={q.id} question={q} isAnswered={!!answered[q.id]} isCorrect={results[q.id]} onAnswer={(c) => handleAnswer(q.id, c)} />
        ))}
      </div>

      {showFinal && (
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-8 text-center">
          {(() => {
            const pct = Math.round((correctCount / questions.length) * 100)
            const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
            return (<>
              <div className="text-4xl mb-2">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
              <div className="text-4xl font-bold text-blue-600 mb-1">{pct}%</div>
              <p className="text-gray-600 mb-4">{correctCount} of {questions.length} correct</p>
              <button onClick={retry} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Retry Quiz</button>
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

  const typeBg = q.type === 'mc' ? 'bg-blue-100 text-blue-700' : q.type === 'tf' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'
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

  const answerDisplay = Array.isArray(q.answer) ? q.answer[0] : q.answer

  return (
    <div className={`bg-white rounded-xl border p-6 transition-all ${isAnswered ? isCorrect ? 'border-green-300 bg-green-50/30' : 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-gray-400">Q{q.id}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBg}`}>{typeLabel}</span>
      </div>
      <p className="font-medium text-gray-800 mb-4">{q.text}</p>

      {q.type === 'mc' && q.options && (
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isThisCorrect = i === (q.answer as number)
            const isSelected = selectedOption === i
            return (
              <button key={i} onClick={() => { if (!isAnswered) { setSelectedOption(i); onAnswer(i === (q.answer as number)) } }} disabled={isAnswered}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all ${
                  isAnswered ? isThisCorrect ? 'border-green-400 bg-green-50 text-green-800' : isSelected ? 'border-red-400 bg-red-50 text-red-800' : 'border-gray-200 opacity-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
                }`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isAnswered && isThisCorrect ? 'bg-green-500 text-white' : isAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
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
                isAnswered ? val === (q.answer as boolean) ? 'border-green-400 bg-green-50 text-green-800' : 'border-gray-200 opacity-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
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
              isAnswered ? isCorrect ? 'border-green-400 bg-green-50 text-green-700' : 'border-red-400 bg-red-50 text-red-700' : 'border-gray-300 focus:border-blue-400'
            }`} />
          <button onClick={() => { if (!isAnswered) checkFill() }}
            disabled={isAnswered} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50">Check</button>
        </div>
      )}

      {isAnswered && (
        <div className={`mt-3 text-sm p-3 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isCorrect ? 'Correct!' : `Incorrect. The answer is: ${answerDisplay}`}
        </div>
      )}
    </div>
  )
}
