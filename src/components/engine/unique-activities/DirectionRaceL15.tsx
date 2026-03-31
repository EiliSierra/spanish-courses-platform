'use client'

import { useState, useCallback, useEffect } from 'react'
import { DIRECTION_RACE_MAP, DIRECTION_RACE_ROUNDS } from '@/lib/lessons/L1.5'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function DirectionRaceL15({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null)
  const [selectedCell, setSelectedCell] = useState<string | null>(null)

  const currentRound = DIRECTION_RACE_ROUNDS[round]
  const totalRounds = DIRECTION_RACE_ROUNDS.length

  // Read the instruction aloud
  useEffect(() => {
    if (phase === 'game' && currentRound && !feedback) {
      const timer = setTimeout(() => {
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(currentRound.instruction)
        u.lang = 'es-MX'
        u.rate = 0.85
        window.speechSynthesis.speak(u)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [phase, round, feedback, currentRound])

  const replayAudio = useCallback(() => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(currentRound.instruction)
    u.lang = 'es-MX'
    u.rate = 0.85
    window.speechSynthesis.speak(u)
  }, [currentRound])

  const handleCellClick = useCallback((label: string) => {
    if (feedback || label === 'TÚ') return
    setSelectedCell(label)

    const isCorrect = label === currentRound.correct
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
        setSelectedCell(null)
        setFeedback(null)
      }
    }, 1800)
  }, [feedback, currentRound, round, totalRounds, score, onComplete])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    setFeedback(null)
    setSelectedCell(null)
  }, [])

  // Render the visual map grid
  const renderMap = (interactive: boolean) => (
    <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-6">
      {DIRECTION_RACE_MAP.flat().map((cell) => {
        const isYou = cell.label === 'TÚ'
        const isCorrectAnswer = feedback && cell.label === currentRound?.correct
        const isSelected = cell.label === selectedCell
        const isWrongSelected = isSelected && feedback && !feedback.correct

        let cellStyle = 'bg-gray-50 border-gray-700 hover:border-sky-400 hover:bg-sky-950 cursor-pointer'
        if (isYou) cellStyle = 'bg-blue-100 border-blue-300 cursor-default'
        if (!interactive) cellStyle = 'bg-gray-50 border-gray-700'
        if (isCorrectAnswer) cellStyle = 'bg-green-100 border-green-400 ring-2 ring-green-300'
        if (isWrongSelected) cellStyle = 'bg-red-100 border-red-400'

        return (
          <button
            key={cell.label}
            onClick={() => interactive && handleCellClick(cell.label)}
            disabled={!interactive || !!feedback || isYou}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all min-h-[80px] ${cellStyle}`}
          >
            <span className="text-2xl">{cell.emoji}</span>
            <span className={`text-xs font-semibold mt-1 text-center leading-tight ${isYou ? 'text-blue-700' : 'text-gray-700'}`}>
              {cell.label}
            </span>
          </button>
        )
      })}
    </div>
  )

  const directionLegend = (
    <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-3">
      <span>⬆️ Derecho</span>
      <span>⬇️ Abajo</span>
      <span>⬅️ Izquierda</span>
      <span>➡️ Derecha</span>
    </div>
  )

  if (phase === 'start') {
    return (
      <section id="direction-race">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Direction Race</h2>
        <p className="text-gray-400 mb-4">Look at the map below. You start at the center (📍 TÚ). Listen to directions in Spanish and click the place you end up!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          {directionLegend}
          {renderMap(false)}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">{totalRounds} directions to follow. Use the map!</p>
            <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl">
              Start Race
            </button>
          </div>
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
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{Array(stars).fill(null).map((_, i) => <span key={i}>&#11088;</span>)}{Array(3 - stars).fill(null).map((_, i) => <span key={i}>&#9734;</span>)}</div>
          <div className="text-4xl font-bold text-sky-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">
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
        <span className="text-gray-400">Direction {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-sky-600">Score: {score}</span>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        {/* Instruction */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3">
            <button onClick={replayAudio} className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center hover:from-sky-500 hover:to-blue-600 transition-all shadow-lg flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            </button>
            <p className="text-lg font-semibold text-gray-200">&ldquo;{currentRound.instruction}&rdquo;</p>
          </div>
          <p className="text-sm text-gray-400 mt-2">Click the place on the map where you end up</p>
        </div>

        {/* Interactive map */}
        {directionLegend}
        {renderMap(true)}

        {/* Feedback */}
        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
            {feedback.correct ? '¡Correcto! You found it!' : `The answer was: ${feedback.answer}`}
          </div>
        )}
      </div>
    </section>
  )
}
