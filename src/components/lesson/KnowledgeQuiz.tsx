'use client'

import { useState, useCallback } from 'react'
import { QUIZ_QUESTIONS } from '@/lib/lesson-data'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function KnowledgeQuiz({ onComplete }: { onComplete?: (score: number, max: number) => void }) {
  const [answered, setAnswered] = useState<Record<number, boolean>>({})
  const [results, setResults] = useState<Record<number, boolean>>({})
  const [correctCount, setCorrectCount] = useState(0)
  const [showFinal, setShowFinal] = useState(false)

  const answeredCount = Object.keys(answered).length
  const progressPct = Math.round((answeredCount / QUIZ_QUESTIONS.length) * 100)

  const handleAnswer = useCallback((qId: number, isCorrect: boolean) => {
    if (answered[qId]) return
    setAnswered((prev) => ({ ...prev, [qId]: true }))
    setResults((prev) => ({ ...prev, [qId]: isCorrect }))

    let newCorrect = correctCount
    if (isCorrect) {
      newCorrect = correctCount + 1
      setCorrectCount(newCorrect)
    }

    const newAnswered = answeredCount + 1
    if (newAnswered === QUIZ_QUESTIONS.length) {
      setTimeout(() => {
        setShowFinal(true)
        onComplete?.(newCorrect, QUIZ_QUESTIONS.length)
        if (Math.round((newCorrect / QUIZ_QUESTIONS.length) * 100) >= 80) {
          spawnConfetti(window.innerWidth / 2, 200, 60)
        }
      }, 800)
    }
  }, [answered, answeredCount, correctCount, onComplete])

  const retry = useCallback(() => {
    setAnswered({})
    setResults({})
    setCorrectCount(0)
    setShowFinal(false)
  }, [])

  return (
    <section id="knowledge-check" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Knowledge Check</h2>
      <p className="text-gray-600 mb-2">Answer all 15 questions. You need 70% (11/15) to pass.</p>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">
            {answeredCount < QUIZ_QUESTIONS.length
              ? `Question ${answeredCount + 1} of ${QUIZ_QUESTIONS.length}`
              : `${QUIZ_QUESTIONS.length} of ${QUIZ_QUESTIONS.length} answered`}
          </span>
          <span className="font-semibold text-blue-600">{progressPct}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q) => (
          <QuizCard
            key={q.id}
            question={q}
            isAnswered={!!answered[q.id]}
            isCorrect={results[q.id]}
            onAnswer={(correct) => handleAnswer(q.id, correct)}
          />
        ))}
      </div>

      {/* Final result */}
      {showFinal && (
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-8 text-center">
          {(() => {
            const pct = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100)
            const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
            return (
              <>
                <div className="text-4xl mb-2">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
                <div className="text-4xl font-bold text-blue-600 mb-1">{pct}%</div>
                <p className="text-gray-600 mb-4">{correctCount} of {QUIZ_QUESTIONS.length} correct</p>
                <div className="flex gap-3 justify-center">
                  <button onClick={retry} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Retry Quiz
                  </button>
                </div>
              </>
            )
          })()}
        </div>
      )}
    </section>
  )
}

// Individual quiz card component
function QuizCard({
  question: q,
  isAnswered,
  isCorrect,
  onAnswer,
}: {
  question: typeof QUIZ_QUESTIONS[number]
  isAnswered: boolean
  isCorrect?: boolean
  onAnswer: (correct: boolean) => void
}) {
  const [fillInput, setFillInput] = useState('')
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleMcAnswer = useCallback((optionIndex: number) => {
    if (isAnswered) return
    setSelectedOption(optionIndex)
    onAnswer(optionIndex === (q.correct as number))
  }, [isAnswered, onAnswer, q.correct])

  const handleTfAnswer = useCallback((value: boolean) => {
    if (isAnswered) return
    onAnswer(value === (q.correct as boolean))
  }, [isAnswered, onAnswer, q.correct])

  const handleFillSubmit = useCallback(() => {
    if (isAnswered || !fillInput.trim()) return
    const normalize = (s: string) => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    onAnswer(normalize(fillInput) === normalize(q.correct as string))
  }, [isAnswered, fillInput, onAnswer, q.correct])

  const typeLabel = q.type === 'mc' ? 'Multiple Choice' : q.type === 'tf' ? 'True / False' : 'Fill in the Blank'
  const typeBg = q.type === 'mc' ? 'bg-blue-100 text-blue-700' : q.type === 'tf' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'

  return (
    <div className={`bg-white rounded-xl border p-6 transition-all ${
      isAnswered
        ? isCorrect
          ? 'border-green-300 bg-green-50/30'
          : 'border-red-300 bg-red-50/30'
        : 'border-gray-200'
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-gray-400">Q{q.id}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBg}`}>{typeLabel}</span>
      </div>
      <p className="font-medium text-gray-800 mb-4">{q.text}</p>

      {q.type === 'mc' && q.options && (
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const markers = ['A', 'B', 'C', 'D']
            const isThisCorrect = i === (q.correct as number)
            const isSelected = selectedOption === i

            return (
              <button
                key={i}
                onClick={() => handleMcAnswer(i)}
                disabled={isAnswered}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all ${
                  isAnswered
                    ? isThisCorrect
                      ? 'border-green-400 bg-green-50 text-green-800'
                      : isSelected
                        ? 'border-red-400 bg-red-50 text-red-800'
                        : 'border-gray-200 opacity-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  isAnswered && isThisCorrect ? 'bg-green-500 text-white' : isAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {markers[i]}
                </span>
                <span className="text-sm">{opt}</span>
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'tf' && (
        <div className="flex gap-3">
          {[true, false].map((val) => {
            const isThisCorrect = val === (q.correct as boolean)
            return (
              <button
                key={String(val)}
                onClick={() => handleTfAnswer(val)}
                disabled={isAnswered}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-medium text-center transition-all ${
                  isAnswered
                    ? isThisCorrect
                      ? 'border-green-400 bg-green-50 text-green-800'
                      : 'border-gray-200 opacity-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
                }`}
              >
                {val ? 'True' : 'False'}
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'fill' && (
        <div className="flex gap-3">
          <input
            type="text"
            value={fillInput}
            onChange={(e) => setFillInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleFillSubmit() }}
            disabled={isAnswered}
            maxLength={4}
            placeholder="?"
            className={`w-20 h-12 text-center text-xl font-bold rounded-lg border-2 outline-none transition-colors ${
              isAnswered
                ? isCorrect
                  ? 'border-green-400 bg-green-50 text-green-700'
                  : 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-300 focus:border-blue-400'
            }`}
          />
          <button
            onClick={handleFillSubmit}
            disabled={isAnswered}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            Check
          </button>
        </div>
      )}

      {/* Feedback */}
      {isAnswered && (
        <div className={`mt-3 text-sm p-3 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isCorrect ? 'Correct! ' : 'Incorrect. '}{q.explanation}
        </div>
      )}
    </div>
  )
}
