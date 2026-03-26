'use client'

import { useState, useCallback, useEffect } from 'react'
import { SCHEDULE_ROUNDS } from '@/lib/lessons/L1.8'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function ScheduleBuilderL18({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [placed, setPlaced] = useState<string[]>([])
  const [available, setAvailable] = useState<string[]>([])
  const [feedback, setFeedback] = useState<boolean | null>(null)

  const currentRound = SCHEDULE_ROUNDS[round]
  const totalRounds = SCHEDULE_ROUNDS.length

  useEffect(() => {
    if (phase === 'game' && currentRound) {
      // Shuffle the slots as available options
      const shuffled = [...currentRound.slots].sort(() => Math.random() - 0.5)
      setAvailable(shuffled)
      setPlaced([])
      setFeedback(null)
    }
  }, [phase, round, currentRound])

  // Read clue aloud
  useEffect(() => {
    if (phase === 'game' && currentRound && feedback === null) {
      const timer = setTimeout(() => {
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(currentRound.clue)
        u.lang = 'es-MX'
        u.rate = 0.8
        window.speechSynthesis.speak(u)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [phase, round, feedback, currentRound])

  const replayAudio = useCallback(() => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(currentRound.clue)
    u.lang = 'es-MX'
    u.rate = 0.8
    window.speechSynthesis.speak(u)
  }, [currentRound])

  const addToSchedule = useCallback((activity: string) => {
    setPlaced(p => [...p, activity])
    setAvailable(a => { const idx = a.indexOf(activity); return [...a.slice(0, idx), ...a.slice(idx + 1)] })
  }, [])

  const removeFromSchedule = useCallback((index: number) => {
    const item = placed[index]
    setPlaced(p => [...p.slice(0, index), ...p.slice(index + 1)])
    setAvailable(a => [...a, item])
  }, [placed])

  const checkSchedule = useCallback(() => {
    const correct = JSON.stringify(placed) === JSON.stringify(currentRound.slots)
    setFeedback(correct)
    if (correct) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 25)
    }

    setTimeout(() => {
      if (round + 1 < totalRounds) {
        setRound(r => r + 1)
      } else {
        setPhase('results')
        if (correct ? score + 1 >= 1 : score >= 1) onComplete?.()
      }
    }, 2000)
  }, [placed, currentRound, round, totalRounds, score, onComplete])

  if (phase === 'start') {
    return (
      <div id="schedule-builder" className="text-center py-8">
        <h2 className="text-2xl font-bold mb-3">Schedule Builder</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Listen to someone describe their daily routine, then put the activities in the correct order. Use what you learned about time expressions and daily verbs!
        </p>
        <button
          onClick={() => setPhase('game')}
          className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors shadow-lg"
        >
          Start Challenge
        </button>
      </div>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const passed = pct >= 33
    return (
      <div id="schedule-builder" className="text-center py-8">
        <div className="text-5xl mb-4">{passed ? '🎉' : '💪'}</div>
        <h2 className="text-2xl font-bold mb-2">{passed ? '¡Excelente rutina!' : 'Keep Practicing!'}</h2>
        <p className="text-lg text-gray-700 mb-2">
          You built <strong>{score}</strong> of <strong>{totalRounds}</strong> schedules correctly ({pct}%)
        </p>
        <button
          onClick={() => { setPhase('start'); setRound(0); setScore(0); setPlaced([]); setAvailable([]); setFeedback(null) }}
          className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    )
  }

  return (
    <div id="schedule-builder" className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Schedule Builder</h2>
        <span className="text-sm text-gray-500 font-medium">{round + 1} / {totalRounds} — Score: {score}</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="h-2 bg-cyan-500 rounded-full transition-all duration-500" style={{ width: `${(round / totalRounds) * 100}%` }} />
      </div>

      {/* Clue */}
      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🗣️</span>
          <div className="flex-1">
            <p className="text-sm text-cyan-600 font-semibold mb-1">Listen to the routine:</p>
            <p className="text-base font-medium text-gray-800 italic">&ldquo;{currentRound.clue}&rdquo;</p>
          </div>
          <button onClick={replayAudio} className="flex-shrink-0 p-2 rounded-lg bg-cyan-100 hover:bg-cyan-200 transition-colors" title="Replay">
            🔊
          </button>
        </div>
      </div>

      {/* Schedule (placed items) */}
      <p className="text-sm font-semibold text-gray-700 mb-2">Your schedule (in order):</p>
      <div className={`min-h-[60px] border-2 border-dashed rounded-xl p-3 mb-4 flex flex-wrap gap-2 ${feedback === true ? 'border-green-400 bg-green-50' : feedback === false ? 'border-red-400 bg-red-50' : 'border-cyan-300 bg-cyan-50/30'}`}>
        {placed.length === 0 && <p className="text-gray-400 text-sm">Tap activities below to add them in order...</p>}
        {placed.map((item, i) => (
          <button
            key={`${item}-${i}`}
            onClick={() => !feedback && removeFromSchedule(i)}
            disabled={feedback !== null}
            className="px-3 py-1.5 bg-white border border-cyan-300 rounded-lg text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors flex items-center gap-1"
          >
            <span className="text-gray-400 text-xs">{i + 1}.</span> {item}
            {!feedback && <span className="text-red-400 text-xs ml-1">✕</span>}
          </button>
        ))}
        {feedback === true && <span className="text-green-600 font-semibold text-sm ml-2">✓ Correct order!</span>}
        {feedback === false && <span className="text-red-500 font-semibold text-sm ml-2">✗ Try a different order</span>}
      </div>

      {/* Available activities */}
      {available.length > 0 && !feedback && (
        <>
          <p className="text-sm font-semibold text-gray-700 mb-2">Available activities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {available.map((item, i) => (
              <button
                key={`avail-${item}-${i}`}
                onClick={() => addToSchedule(item)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:border-cyan-400 hover:bg-cyan-50 transition-colors shadow-sm"
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Submit */}
      {!feedback && placed.length === currentRound.slots.length && (
        <button
          onClick={checkSchedule}
          className="w-full py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors"
        >
          Check Schedule
        </button>
      )}
    </div>
  )
}
