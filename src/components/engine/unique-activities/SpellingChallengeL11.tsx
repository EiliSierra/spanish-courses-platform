'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { SPELLING_CHALLENGE_ROUNDS } from '@/lib/lessons/L1.1'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 15000 // 15 seconds per round

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function SpellingChallengeL11({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const scoreRef = useRef(0)

  const currentRound = SPELLING_CHALLENGE_ROUNDS[round]
  const totalRounds = SPELLING_CHALLENGE_ROUNDS.length

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const playWord = useCallback(() => {
    if (!currentRound) return
    if (audioRef.current) audioRef.current.pause()
    audioRef.current = new Audio(`/audio/L1.1/letters/${currentRound.audio}.mp3`)
    audioRef.current.play().catch(() => {
      // Fallback to Speech API
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(currentRound.word)
      u.lang = 'es-MX'
      u.rate = 0.85
      window.speechSynthesis.speak(u)
    })
  }, [currentRound])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    clearTimer()
    if (wasCorrect) {
      scoreRef.current += 1
      setScore(scoreRef.current)
    }
    if (round + 1 >= totalRounds) {
      setPhase('results')
      if (scoreRef.current >= Math.ceil(totalRounds * 0.6)) {
        spawnConfetti(window.innerWidth / 2, 200, 50)
        onComplete?.()
      }
    } else {
      setTimeout(() => {
        setFeedback(null)
        setSelected([])
        setRound(r => r + 1)
      }, 2000)
    }
  }, [round, totalRounds, clearTimer, onComplete])

  // Shuffle options each round
  useEffect(() => {
    if (phase === 'game' && currentRound) {
      setShuffledOptions(shuffle(currentRound.options))
    }
  }, [phase, round, currentRound])

  // Timer per round
  useEffect(() => {
    if (phase !== 'game' || !currentRound || feedback) return
    playWord()
    setTimeLeft(100)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.max(0, 100 - (elapsed / TIME_LIMIT) * 100)
      setTimeLeft(pct)
      if (pct <= 0) {
        clearTimer()
        setFeedback({ correct: false, answer: currentRound.spelling.join(' - ') })
        setTimeout(() => advanceRound(false), 2000)
      }
    }, 50)
    return clearTimer
  }, [phase, round, feedback, playWord, clearTimer, advanceRound, currentRound])

  const handleLetterClick = useCallback((letter: string) => {
    if (feedback) return
    const nextIdx = selected.length
    const newSelected = [...selected, letter]
    setSelected(newSelected)

    // Check if complete
    if (newSelected.length === currentRound.spelling.length) {
      clearTimer()
      const isCorrect = newSelected.every((l, i) => l === currentRound.spelling[i])
      setFeedback({ correct: isCorrect, answer: currentRound.spelling.join(' - ') })
      setTimeout(() => advanceRound(isCorrect), 2000)
    }
  }, [feedback, selected, currentRound, clearTimer, advanceRound])

  const undoLast = useCallback(() => {
    if (feedback || selected.length === 0) return
    setSelected(s => s.slice(0, -1))
  }, [feedback, selected])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    scoreRef.current = 0
    setSelected([])
    setFeedback(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="spelling-challenge">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spelling Challenge</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Listen to a Spanish word and spell it by selecting the correct letters in order. Use the Spanish letter names you just learned!</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#128221;</div>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{totalRounds} words to spell. You have 15 seconds per word.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl">
            Start Spelling
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0
    return (
      <section id="spelling-challenge">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spelling Challenge</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{Array(stars).fill(null).map((_, i) => <span key={i}>&#11088;</span>)}{Array(3 - stars).fill(null).map((_, i) => <span key={i}>&#9734;</span>)}</div>
          <div className="text-4xl font-bold text-blue-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {pct >= 80 ? 'Excellent spelling!' : pct >= 50 ? 'Good effort! Practice makes perfect.' : 'Keep learning those letter names!'}
          </p>
          <button onClick={startGame} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Try Again</button>
        </div>
      </section>
    )
  }

  return (
    <section id="spelling-challenge">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Spelling Challenge</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-400">Word {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-blue-600">Score: {score}</span>
      </div>

      {/* Timer bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {/* Audio replay + hint */}
        <div className="text-center mb-5">
          <button onClick={playWord} className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center mx-auto hover:from-blue-500 hover:to-indigo-600 transition-all shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {feedback ? (
              <span className="font-semibold">{currentRound.word} &mdash; &ldquo;{currentRound.english}&rdquo;</span>
            ) : (
              <>Listen and spell the word <span className="text-xs text-gray-500 dark:text-gray-400">({currentRound.hint})</span></>
            )}
          </p>
        </div>

        {/* Selected letters display */}
        <div className="flex items-center justify-center gap-2 mb-5 min-h-[3rem]">
          {currentRound.spelling.map((_, i) => {
            const letter = selected[i]
            const isCorrectSpot = feedback && letter === currentRound.spelling[i]
            const isWrongSpot = feedback && letter && letter !== currentRound.spelling[i]
            return (
              <div key={i} className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-lg transition-all ${
                isCorrectSpot ? 'border-green-400 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300'
                : isWrongSpot ? 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                : letter ? 'border-blue-400 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                : 'border-gray-200 dark:border-gray-700 bg-gray-50 text-gray-600 dark:text-gray-300'
              }`}>
                {letter || (i + 1)}
              </div>
            )
          })}
          {!feedback && selected.length > 0 && (
            <button onClick={undoLast} className="ml-2 w-10 h-10 rounded-lg bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center hover:bg-gray-200 text-sm font-medium" title="Undo">
              &#8592;
            </button>
          )}
        </div>

        {/* Letter options */}
        {!feedback && (
          <div className="flex flex-wrap justify-center gap-2">
            {shuffledOptions.map((letter, i) => {
              const usedCount = selected.filter(s => s === letter).length
              const totalAvail = shuffledOptions.filter(o => o === letter).length
              const disabled = usedCount >= totalAvail
              return (
                <button key={`${letter}-${i}`} onClick={() => handleLetterClick(letter)} disabled={disabled}
                  className={`w-12 h-12 rounded-xl border-2 font-bold text-base transition-all ${
                    disabled
                      ? 'border-gray-100 bg-gray-50 text-gray-600 dark:text-gray-300 cursor-not-allowed'
                      : 'border-gray-200 dark:border-gray-700 bg-white text-gray-700 dark:text-gray-200 hover:border-blue-400 hover:bg-blue-950 cursor-pointer shadow-sm'
                  }`}>
                  {letter}
                </button>
              )
            })}
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
            {feedback.correct ? 'Correct spelling!' : `Correct answer: ${feedback.answer}`}
          </div>
        )}
      </div>
    </section>
  )
}
