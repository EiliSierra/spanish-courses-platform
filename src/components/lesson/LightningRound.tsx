'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useAudio } from '@/hooks/useAudio'
import { LR_POOL } from '@/lib/lesson-data'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TOTAL_ROUNDS = 10
const TIME_PER_ROUND = 5000

interface Round {
  correct: { letter: string; name: string }
  options: { letter: string; name: string }[]
}

function generateRounds(): Round[] {
  const pool = shuffle(LR_POOL)
  const rounds: Round[] = []
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const correct = pool[i % pool.length]
    const wrongs = shuffle(LR_POOL.filter((l) => l.letter !== correct.letter)).slice(0, 3)
    rounds.push({ correct, options: shuffle([correct, ...wrongs]) })
  }
  return rounds
}

type Screen = 'start' | 'game' | 'results'

export default function LightningRound({ onComplete }: { onComplete?: () => void }) {
  const { playLetter } = useAudio()
  const [screen, setScreen] = useState<Screen>('start')
  const [rounds, setRounds] = useState<Round[]>([])
  const [roundIdx, setRoundIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [feedback, setFeedback] = useState<{ text: string; correct: boolean } | null>(null)
  const [timerPct, setTimerPct] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeLeftRef = useRef(TIME_PER_ROUND)
  const answeredRef = useRef(false)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback(() => {
    timeLeftRef.current = TIME_PER_ROUND
    setTimerPct(100)
    timerRef.current = setInterval(() => {
      timeLeftRef.current -= 50
      setTimerPct(Math.max(0, (timeLeftRef.current / TIME_PER_ROUND) * 100))
      if (timeLeftRef.current <= 0) {
        clearInterval(timerRef.current!)
        timerRef.current = null
        if (!answeredRef.current) {
          answeredRef.current = true
          setAnswered(true)
          setFeedback({ text: `Time's up! It was ${rounds[roundIdx]?.correct.letter} (${rounds[roundIdx]?.correct.name})`, correct: false })
          setTimeout(() => {
            setRoundIdx((prev) => {
              const next = prev + 1
              if (next >= TOTAL_ROUNDS) setScreen('results')
              return next
            })
          }, 1500)
        }
      }
    }, 50)
  // We intentionally only read rounds/roundIdx from the closure at mount time
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearTimer])

  const startGame = useCallback(() => {
    const newRounds = generateRounds()
    setRounds(newRounds)
    setRoundIdx(0)
    setScore(0)
    setScreen('game')
  }, [])

  // Play audio and start timer when round changes
  useEffect(() => {
    if (screen !== 'game' || roundIdx >= TOTAL_ROUNDS || !rounds[roundIdx]) return
    setAnswered(false)
    answeredRef.current = false
    setFeedback(null)
    setTimerPct(100)

    const audioKey = rounds[roundIdx].correct.letter.toLowerCase() === 'ñ' ? 'ñ' : rounds[roundIdx].correct.letter.toLowerCase()
    const audioTimeout = setTimeout(() => {
      playLetter(audioKey)
      const timerTimeout = setTimeout(() => startTimer(), 400)
      return () => clearTimeout(timerTimeout)
    }, 300)

    return () => {
      clearTimeout(audioTimeout)
      clearTimer()
    }
  }, [screen, roundIdx, rounds, playLetter, startTimer, clearTimer])

  const handleAnswer = useCallback((opt: { letter: string; name: string }) => {
    if (answeredRef.current) return
    answeredRef.current = true
    setAnswered(true)
    clearTimer()

    const round = rounds[roundIdx]
    if (opt.letter === round.correct.letter) {
      setScore((s) => s + 1)
      setFeedback({ text: 'Correct!', correct: true })
      const btn = document.querySelector(`[data-lr-letter="${opt.letter}"]`)
      if (btn) {
        const rect = btn.getBoundingClientRect()
        spawnConfetti(rect.left + rect.width / 2, rect.top, 8)
      }
    } else {
      setFeedback({ text: `It was ${round.correct.letter} (${round.correct.name})`, correct: false })
    }

    setTimeout(() => {
      const next = roundIdx + 1
      if (next >= TOTAL_ROUNDS) {
        setScreen('results')
      } else {
        setRoundIdx(next)
      }
    }, 1200)
  }, [rounds, roundIdx, clearTimer])

  const replay = useCallback(() => {
    if (rounds[roundIdx]) {
      const audioKey = rounds[roundIdx].correct.letter.toLowerCase() === 'ñ' ? 'ñ' : rounds[roundIdx].correct.letter.toLowerCase()
      playLetter(audioKey)
    }
  }, [rounds, roundIdx, playLetter])

  // Results screen
  if (screen === 'results') {
    const pct = Math.round((score / TOTAL_ROUNDS) * 100)
    if (pct >= 60) onComplete?.()
    if (pct >= 80) spawnConfetti(window.innerWidth / 2, 200, 30)

    return (
      <section id="lightning-round" className="mb-10">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-5">Lightning Round</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-3">{pct >= 80 ? '🌟' : pct >= 50 ? '💪' : '👂'}</div>
          <h3 className="text-xl font-bold mb-1">
            {pct >= 80 ? 'Excellent Ear!' : pct >= 50 ? 'Good Progress!' : 'Keep Practicing!'}
          </h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">{score} / {TOTAL_ROUNDS}</p>
          <p className="text-gray-600 mb-5">
            {pct >= 80
              ? "You can recognize Spanish letters by sound. You're ready for the final quiz!"
              : pct >= 50
                ? 'You\'re getting there. Try again to sharpen your listening skills!'
                : 'Go back and review the letter sounds, then try again.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={startGame} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
              Try Again
            </button>
            <a
              href="#knowledge-check"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('knowledge-check')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
            >
              Continue to Quiz
            </a>
          </div>
        </div>
      </section>
    )
  }

  // Start screen
  if (screen === 'start') {
    return (
      <section id="lightning-round" className="mb-10">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Lightning Round</h2>
        <p className="text-gray-600 mb-5">Test your ear! You&apos;ll hear a letter — pick the right one before time runs out.</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Ready?</h3>
          <p className="text-gray-600 mb-5">10 rounds, 5 seconds each. Listen carefully!</p>
          <button onClick={startGame} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
            Start!
          </button>
        </div>
      </section>
    )
  }

  // Game screen
  const round = rounds[roundIdx]
  if (!round) return null

  return (
    <section id="lightning-round" className="mb-10">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Lightning Round</h2>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-3 text-sm">
          <span className="text-gray-500">Round {roundIdx + 1} / {TOTAL_ROUNDS}</span>
          <span className="font-semibold text-blue-600">Score: {score}</span>
        </div>

        {/* Timer bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className={`h-full rounded-full transition-all duration-[50ms] linear ${
              timerPct > 30 ? 'bg-blue-500' : timerPct > 10 ? 'bg-amber-500' : 'bg-red-500'
            }`}
            style={{ width: `${timerPct}%` }}
          />
        </div>

        {/* Replay button */}
        <div className="text-center mb-6">
          <button
            onClick={replay}
            className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto hover:bg-blue-200 transition-colors"
            aria-label="Replay letter sound"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {round.options.map((opt) => (
            <button
              key={opt.letter}
              data-lr-letter={opt.letter}
              onClick={() => handleAnswer(opt)}
              disabled={answered}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                answered
                  ? opt.letter === round.correct.letter
                    ? 'border-green-400 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-gray-50 text-gray-400 opacity-50'
                  : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
              }`}
            >
              <span className="text-2xl font-bold block">{opt.letter}</span>
              <span className="text-xs text-gray-500">{opt.name}</span>
            </button>
          ))}
        </div>

        {feedback && (
          <p className={`text-center text-sm font-medium ${feedback.correct ? 'text-green-600' : 'text-red-600'}`}>
            {feedback.text}
          </p>
        )}
      </div>
    </section>
  )
}
