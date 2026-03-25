'use client'

import { useState, useCallback, useEffect } from 'react'
import { DIRECTION_RACE_ROUNDS } from '@/lib/lessons/L1.5'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function DirectionRaceL15({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])

  const currentRound = DIRECTION_RACE_ROUNDS[round]
  const totalRounds = DIRECTION_RACE_ROUNDS.length

  useEffect(() => {
    if (phase === 'game' && currentRound) {
      setShuffledOptions(shuffle(currentRound.options))
      setFeedback(null)
    }
  }, [phase, round, currentRound])

  // Read the instruction aloud
  useEffect(() => {
    if (phase === 'game' && currentRound && !feedback) {
      const timer = setTimeout(() => {
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(currentRound.instruction)
        u.lang = 'es-MX'
        u.rate = 0.85
        window.speechSynthesis.speak(u)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [phase, round, feedback, currentRound])

  const handleChoice = useCallback((choice: string) => {
    if (feedback) return
    const isCorrect = choice === currentRound.correct
    setFeedback({ correct: isCorrect, answer: currentRound.correct })

    if (isCorrect) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 25)
    }

    setTimeout(() => {
      if (round + 1 >= totalRounds) {
        setPhase('results')
        if ((isCorrect ? score + 1 : score) >= Math.ceil(totalRounds * 0.6)) {
          onComplete?.()
        }
      } else {
        setRound(r => r + 1)
      }
    }, 1500)
  }, [feedback, currentRound, round, totalRounds, score, onComplete])

  const replayAudio = useCallback(() => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(currentRound.instruction)
    u.lang = 'es-MX'
    u.rate = 0.85
    window.speechSynthesis.speak(u)
  }, [currentRound])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setFeedback(null)
  }, [])

  if (phase === 'start') {
    return (
      <section id="direction-race">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Direction Race</h2>
        <p className="text-gray-600 mb-4">Listen to the directions and select where you end up. Follow the instructions carefully!</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">&#128506;</div>
          <p className="text-gray-600 mb-6">{totalRounds} destinations to find. Listen and choose!</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
            Start Race
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="direction-race">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Direction Race</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{Array(stars).fill(null).map((_, i) => <span key={i}>&#11088;</span>)}{Array(3 - stars).fill(null).map((_, i) => <span key={i}>&#9734;</span>)}</div>
          <div className="text-4xl font-bold text-sky-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-600 mb-4">
            {pct >= 80 ? 'Excellent navigation!' : pct >= 50 ? 'Good sense of direction! Keep practicing.' : 'Keep following those directions!'}
          </p>
          <button onClick={startGame} className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700">Try Again</button>
        </div>
      </section>
    )
  }

  return (
    <section id="direction-race">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Direction Race</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Destination {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-sky-600">Score: {score}</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Direction instruction */}
        <div className="text-center mb-6">
          <button onClick={replayAudio} className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center mx-auto hover:from-sky-500 hover:to-blue-600 transition-all shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <p className="text-lg font-semibold text-gray-800 mt-3">&ldquo;{currentRound.instruction}&rdquo;</p>
          <p className="text-sm text-gray-500 mt-1">Where do you end up?</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3">
          {shuffledOptions.map((option) => {
            const isCorrectOption = option === currentRound.correct
            const showResult = feedback !== null
            return (
              <button key={option} onClick={() => handleChoice(option)} disabled={!!feedback}
                className={`px-4 py-4 rounded-xl border-2 font-semibold text-center transition-all ${
                  showResult
                    ? isCorrectOption
                      ? 'border-green-400 bg-green-50 text-green-800'
                      : 'border-gray-200 opacity-50'
                    : 'border-gray-200 hover:border-sky-400 hover:bg-sky-50 cursor-pointer'
                }`}>
                {option}
              </button>
            )
          })}
        </div>

        {feedback && (
          <div className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedback.correct ? 'You found it!' : `The answer was: ${feedback.answer}`}
          </div>
        )}
      </div>
    </section>
  )
}
