'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { spawnConfetti } from '@/components/ui/Confetti'

const ND_POOL = [
  { audio: 'quince', answers: ['15', 'quince'], display: '15 — Quince' },
  { audio: 'siete', answers: ['7', 'siete'], display: '7 — Siete' },
  { audio: 'trece', answers: ['13', 'trece'], display: '13 — Trece' },
  { audio: 'veinte', answers: ['20', 'veinte'], display: '20 — Veinte' },
  { audio: 'veinticinco', answers: ['25', 'veinticinco'], display: '25 — Veinticinco' },
  { audio: 'cincuenta', answers: ['50', 'cincuenta'], display: '50 — Cincuenta' },
  { audio: 'setenta', answers: ['70', 'setenta'], display: '70 — Setenta' },
  { audio: 'cien', answers: ['100', 'cien'], display: '100 — Cien' },
  { audio: 'dieciseis', answers: ['16', 'dieciseis', 'diecis\u00e9is'], display: '16 — Diecis\u00e9is' },
  { audio: 'once', answers: ['11', 'once'], display: '11 — Once' },
  { audio: 'catorce', answers: ['14', 'catorce'], display: '14 — Catorce' },
  { audio: 'treinta-y-cinco', answers: ['35', 'treinta y cinco'], display: '35 — Treinta y cinco' },
  { audio: 'cuarenta-y-dos', answers: ['42', 'cuarenta y dos'], display: '42 — Cuarenta y dos' },
  { audio: 'veintitres', answers: ['23', 'veintitres', 'veintitr\u00e9s'], display: '23 — Veintitr\u00e9s' },
  { audio: 'es-la-una', answers: ['1:00', 'es la una'], display: 'Es la una (1:00)' },
  { audio: 'son-las-dos', answers: ['2:00', 'son las dos'], display: 'Son las dos (2:00)' },
  { audio: 'son-las-tres', answers: ['3:00', 'son las tres'], display: 'Son las tres (3:00)' },
  { audio: 'medianoche', answers: ['medianoche', 'midnight'], display: 'Medianoche' },
  { audio: 'mediodia', answers: ['mediodia', 'mediod\u00eda', 'noon'], display: 'Mediod\u00eda' },
  { audio: 'y-media', answers: ['y media', ':30'], display: 'Y media (:30)' },
  { audio: 'y-cuarto', answers: ['y cuarto', ':15'], display: 'Y cuarto (:15)' },
  { audio: 'menos-cuarto', answers: ['menos cuarto', ':45'], display: 'Menos cuarto (:45)' },
  { audio: 'tengo-veinte-anos', answers: ['tengo veinte anos', 'tengo veinte a\u00f1os', '20'], display: 'Tengo veinte a\u00f1os' },
  { audio: 'cuantos-anos-tienes', answers: ['cuantos anos tienes', 'cuantos a\u00f1os tienes'], display: '\u00bfCu\u00e1ntos a\u00f1os tienes?' },
  { audio: 'de-la-manana', answers: ['de la manana', 'de la ma\u00f1ana', 'am'], display: 'De la ma\u00f1ana (AM)' },
  { audio: 'de-la-tarde', answers: ['de la tarde', 'pm'], display: 'De la tarde (PM)' },
  { audio: 'de-la-noche', answers: ['de la noche'], display: 'De la noche' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalize(s: string) {
  return s.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9: ]/g, '')
}

const TOTAL = 10
const TIME_LIMIT = 8000

export default function NumberDictation({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [pool, setPool] = useState<typeof ND_POOL>([])
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<{ correct: boolean; display: string } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const startGame = useCallback(() => {
    const selected = shuffle(ND_POOL).slice(0, TOTAL)
    setPool(selected)
    setRound(0)
    setScore(0)
    setInput('')
    setFeedback(null)
    setPhase('game')
    setTimeLeft(100)
  }, [])

  const playAudio = useCallback(() => {
    if (!pool[round]) return
    if (audioRef.current) audioRef.current.pause()
    audioRef.current = new Audio(`/audio/L1.3/phrases/${pool[round].audio}.mp3`)
    audioRef.current.play().catch(() => {})
  }, [pool, round])

  // Auto-play audio on new round
  useEffect(() => {
    if (phase === 'game' && pool[round]) {
      playAudio()
      setTimeLeft(100)
      setFeedback(null)
      setInput('')
      const start = Date.now()
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - start
        const pct = Math.max(0, 100 - (elapsed / TIME_LIMIT) * 100)
        setTimeLeft(pct)
        if (pct <= 0) {
          clearInterval(timerRef.current!)
          setFeedback({ correct: false, display: pool[round].display })
          setTimeout(() => advanceRound(false), 1500)
        }
      }, 50)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, round])

  const advanceRound = useCallback((wasCorrect: boolean) => {
    const newScore = wasCorrect ? score + 1 : score
    if (wasCorrect) setScore(newScore)
    if (round + 1 >= TOTAL) {
      setPhase('results')
      if (newScore >= 6) {
        onComplete?.()
        spawnConfetti(window.innerWidth / 2, 200, 40)
      }
    } else {
      setRound(r => r + 1)
    }
  }, [round, score, onComplete])

  const submitAnswer = useCallback(() => {
    if (!input.trim() || !pool[round] || feedback) return
    if (timerRef.current) clearInterval(timerRef.current)
    const norm = normalize(input)
    const correct = pool[round].answers.some(a => normalize(a) === norm)
    setFeedback({ correct, display: pool[round].display })
    if (correct) setScore(s => s + 1)
    setTimeout(() => advanceRound(correct), 1200)
  }, [input, pool, round, feedback, advanceRound])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="number-dictation">
        <h2 className="text-2xl font-bold mb-2">Number Dictation</h2>
        <p className="text-gray-600 mb-5">Listen to the audio and type what you hear. You have 8 seconds per round.</p>
        <div className="text-center py-8">
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all">
            Start Dictation
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / TOTAL) * 100)
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👏' : pct >= 40 ? '💪' : '📝'
    return (
      <section id="number-dictation">
        <h2 className="text-2xl font-bold mb-2">Number Dictation</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center mt-4">
          <div className="text-5xl mb-3">{emoji}</div>
          <div className="text-4xl font-bold text-orange-600 mb-1">{pct}%</div>
          <p className="text-gray-600 mb-4">{score} of {TOTAL} correct</p>
          <button onClick={startGame} className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700">
            Try Again
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="number-dictation">
      <h2 className="text-2xl font-bold mb-2">Number Dictation</h2>
      <div className="flex justify-between text-sm font-semibold mb-2">
        <span className="text-gray-500">Round {round + 1} / {TOTAL}</span>
        <span className="text-orange-600">Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="text-center mb-6">
        <button onClick={playAudio}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" /></svg>
        </button>
        <p className="text-sm text-gray-400 mt-2">Click to replay</p>
      </div>

      {feedback ? (
        <div className={`text-center p-4 rounded-xl mb-4 ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-bold">{feedback.correct ? 'Correct!' : 'Not quite...'}</p>
          <p className="text-sm mt-1">{feedback.display}</p>
        </div>
      ) : (
        <div className="flex gap-3 justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submitAnswer() }}
            placeholder="Type what you hear..."
            autoFocus
            className="w-64 px-4 py-3 border-2 border-gray-300 rounded-xl text-center text-lg font-semibold focus:border-orange-400 outline-none"
          />
          <button onClick={submitAnswer} className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700">
            Submit
          </button>
        </div>
      )}
    </section>
  )
}
