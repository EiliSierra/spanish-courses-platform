'use client'

import { useState, useCallback, useEffect } from 'react'
import { PICTURE_MATCH_FAMILIES, PICTURE_MATCH_ROUNDS } from '@/lib/lessons/L1.6'
import { spawnConfetti } from '@/components/ui/Confetti'

export default function PictureMatchL16({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null)
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null)

  const currentRound = PICTURE_MATCH_ROUNDS[round]
  const totalRounds = PICTURE_MATCH_ROUNDS.length

  // Read the clue aloud
  useEffect(() => {
    if (phase === 'game' && currentRound && !feedback) {
      const timer = setTimeout(() => {
        window.speechSynthesis.cancel()
        const u = new SpeechSynthesisUtterance(currentRound.clue)
        u.lang = 'es-MX'
        u.rate = 0.85
        window.speechSynthesis.speak(u)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [phase, round, feedback, currentRound])

  const replayAudio = useCallback(() => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(currentRound.clue)
    u.lang = 'es-MX'
    u.rate = 0.85
    window.speechSynthesis.speak(u)
  }, [currentRound])

  const handleFamilyClick = useCallback((label: string) => {
    if (feedback) return
    setSelectedFamily(label)

    const isCorrect = label === currentRound.correct
    setFeedback({ correct: isCorrect, answer: currentRound.correct })

    if (isCorrect) {
      setScore(s => s + 1)
      spawnConfetti(window.innerWidth / 2, 200, 25)
    }

    setTimeout(() => {
      if (round + 1 < totalRounds) {
        setRound(r => r + 1)
        setFeedback(null)
        setSelectedFamily(null)
      } else {
        setPhase('results')
        if (isCorrect ? score + 1 >= totalRounds * 0.6 : score >= totalRounds * 0.6) {
          onComplete?.()
        }
      }
    }, 1800)
  }, [feedback, round, totalRounds, score, currentRound, onComplete])

  if (phase === 'start') {
    return (
      <div id="picture-match" className="text-center py-8">
        <h2 className="text-2xl font-bold mb-3">Picture Match</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Read or listen to a family description in Spanish, then choose the matching family. Use what you learned about family members and possessives!
        </p>
        <button
          onClick={() => setPhase('game')}
          className="px-8 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors shadow-lg"
        >
          Start Challenge
        </button>
      </div>
    )
  }

  if (phase === 'results') {
    const pct = Math.round((score / totalRounds) * 100)
    const passed = pct >= 60
    return (
      <div id="picture-match" className="text-center py-8">
        <div className="text-5xl mb-4">{passed ? '🎉' : '💪'}</div>
        <h2 className="text-2xl font-bold mb-2">
          {passed ? 'Great Job!' : 'Keep Practicing!'}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          You matched <strong>{score}</strong> of <strong>{totalRounds}</strong> families correctly ({pct}%)
        </p>
        <p className="text-gray-500 mb-6">
          {passed
            ? 'You can understand family descriptions in Spanish!'
            : 'Review the family vocabulary and possessives, then try again.'}
        </p>
        <button
          onClick={() => { setPhase('start'); setRound(0); setScore(0); setFeedback(null); setSelectedFamily(null) }}
          className="px-6 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    )
  }

  return (
    <div id="picture-match" className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Picture Match</h2>
        <span className="text-sm text-gray-500 font-medium">
          {round + 1} / {totalRounds} — Score: {score}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div
          className="h-2 bg-rose-500 rounded-full transition-all duration-500"
          style={{ width: `${((round) / totalRounds) * 100}%` }}
        />
      </div>

      {/* Clue */}
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🗣️</span>
          <div className="flex-1">
            <p className="text-sm text-rose-600 font-semibold mb-1">Listen to the description:</p>
            <p className="text-lg font-medium text-gray-800 italic">&ldquo;{currentRound.clue}&rdquo;</p>
          </div>
          <button
            onClick={replayAudio}
            className="flex-shrink-0 p-2 rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors"
            title="Replay audio"
          >
            🔊
          </button>
        </div>
      </div>

      {/* Family cards */}
      <p className="text-sm text-gray-500 font-medium mb-3">Which family matches this description?</p>
      <div className="grid grid-cols-2 gap-4">
        {PICTURE_MATCH_FAMILIES.map((family) => {
          const isSelected = selectedFamily === family.label
          const isCorrectAnswer = feedback && family.label === feedback.answer
          const isWrongSelection = isSelected && feedback && !feedback.correct

          let cardClass = 'border-2 rounded-xl p-4 text-center cursor-pointer transition-all duration-300 '
          if (isCorrectAnswer && feedback) {
            cardClass += 'border-green-500 bg-green-50 ring-2 ring-green-300 scale-[1.02]'
          } else if (isWrongSelection) {
            cardClass += 'border-red-400 bg-red-50 ring-2 ring-red-300'
          } else if (feedback) {
            cardClass += 'border-gray-200 bg-gray-50 opacity-50'
          } else {
            cardClass += 'border-gray-200 bg-white hover:border-rose-300 hover:shadow-md'
          }

          return (
            <button
              key={family.label}
              onClick={() => handleFamilyClick(family.label)}
              disabled={!!feedback}
              className={cardClass}
            >
              <div className="text-4xl mb-2">{family.emoji}</div>
              <p className="font-bold text-gray-700 mb-1">{family.label}</p>
              <p className="text-xs text-gray-500">{family.description}</p>
              {isCorrectAnswer && feedback && (
                <span className="inline-block mt-2 text-green-600 font-semibold text-sm">✓ Correct!</span>
              )}
              {isWrongSelection && (
                <span className="inline-block mt-2 text-red-600 font-semibold text-sm">✗ Not this one</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
