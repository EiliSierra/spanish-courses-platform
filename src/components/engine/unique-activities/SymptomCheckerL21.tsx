'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { SYMPTOM_CHECKER_SCENARIOS } from '@/lib/lessons/L2.1'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 15000 // 15 seconds per round

export default function SymptomCheckerL21({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedBody, setSelectedBody] = useState<string | null>(null)
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const scenario = SYMPTOM_CHECKER_SCENARIOS[round]
  const totalRounds = SYMPTOM_CHECKER_SCENARIOS.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    clearTimer()
    if (wasCorrect) {
      const newScore = scoreRef.current + 1
      scoreRef.current = newScore
      setScore(newScore)
    }
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= 5) {
        spawnConfetti(window.innerWidth / 2, 200, 50)
        onComplete?.()
      }
    } else {
      setTimeout(() => {
        setFeedback(null)
        setSelectedBody(null)
        setSelectedCondition(null)
        setRound(r => r + 1)
      }, 2000)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  // Start timer each round
  useEffect(() => {
    if (phase !== 'game' || !scenario || feedback) return
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.max(0, 100 - (elapsed / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) {
        clearTimer()
        setFeedback({ correct: false })
        setTimeout(() => advanceRound(false), 2000)
      }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, clearTimer, advanceRound, scenario])

  const handleSubmit = useCallback(() => {
    if (feedback || !selectedBody || !selectedCondition) return
    clearTimer()
    const correct = selectedBody === scenario.correctBodyPart && selectedCondition === scenario.correctCondition
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 2000)
  }, [feedback, selectedBody, selectedCondition, clearTimer, scenario, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    scoreRef.current = 0
    setFeedback(null)
    setSelectedBody(null)
    setSelectedCondition(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="symptom-checker">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Symptom Checker</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">A patient describes their symptoms. Select the correct body part AND condition!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#129657;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{totalRounds} rounds. Read the patient&apos;s symptoms carefully.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Select both the body part and the condition. 15 seconds per round.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl">
            Start Challenge
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="symptom-checker">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Symptom Checker</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-green-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{pct >= 80 ? 'Excellent diagnosis!' : pct >= 50 ? 'Good effort! Try again for a better score.' : 'Keep practicing your medical Spanish!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="symptom-checker">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Symptom Checker</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Round {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-green-600">Score: {score}</span>
      </div>

      {/* Timer bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {/* Patient speech bubble */}
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-700 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">&#129682;</span>
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-200 text-lg">&ldquo;{scenario.patientSays}&rdquo;</p>
              {feedback && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{scenario.english}</p>}
            </div>
          </div>
        </div>

        {/* Body Part Selection */}
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Where does it hurt?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {scenario.bodyPartOptions.map((opt) => {
            const isCorrect = opt === scenario.correctBodyPart
            const isSelected = selectedBody === opt
            const showResult = feedback !== null
            return (
              <button key={opt} onClick={() => !feedback && setSelectedBody(opt)} disabled={!!feedback}
                className={`px-3 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                  showResult
                    ? isCorrect
                      ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                      : isSelected && !isCorrect
                        ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                        : 'border-gray-200 dark:border-gray-700 opacity-40'
                    : isSelected
                      ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 ring-2 ring-green-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-400 hover:bg-green-950/50 cursor-pointer'
                }`}>
                {opt}
              </button>
            )
          })}
        </div>

        {/* Condition Selection */}
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">What condition?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {scenario.conditionOptions.map((opt) => {
            const isCorrect = opt === scenario.correctCondition
            const isSelected = selectedCondition === opt
            const showResult = feedback !== null
            return (
              <button key={opt} onClick={() => !feedback && setSelectedCondition(opt)} disabled={!!feedback}
                className={`px-3 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                  showResult
                    ? isCorrect
                      ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200'
                      : isSelected && !isCorrect
                        ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                        : 'border-gray-200 dark:border-gray-700 opacity-40'
                    : isSelected
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 cursor-pointer'
                }`}>
                {opt}
              </button>
            )
          })}
        </div>

        {/* Submit */}
        {!feedback && (
          <button onClick={handleSubmit} disabled={!selectedBody || !selectedCondition}
            className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
              selectedBody && selectedCondition
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}>
            Submit Diagnosis
          </button>
        )}

        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            {feedback.correct ? 'Correct diagnosis!' : `Correct: ${scenario.correctBodyPart} + ${scenario.correctCondition}`}
          </div>
        )}
      </div>
    </section>
  )
}
