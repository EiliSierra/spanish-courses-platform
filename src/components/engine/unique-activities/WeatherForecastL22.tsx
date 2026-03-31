'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { WEATHER_FORECAST_SCENARIOS } from '@/lib/lessons/L2.2'
import { spawnConfetti } from '@/components/ui/Confetti'

const TIME_LIMIT = 15000

export default function WeatherForecastL22({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null)
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<{ correct: boolean } | null>(null)
  const [timeLeft, setTimeLeft] = useState(100)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const scoreRef = useRef(0)

  const scenario = WEATHER_FORECAST_SCENARIOS[round]
  const totalRounds = WEATHER_FORECAST_SCENARIOS.length

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
        setSelectedWeather(null)
        setSelectedSeason(null)
        setRound(r => r + 1)
      }, 2000)
    }
  }, [round, totalRounds, clearTimer, onComplete])

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
    if (feedback || !selectedWeather || !selectedSeason) return
    clearTimer()
    const correct = selectedWeather === scenario.correctWeather && selectedSeason === scenario.correctSeason
    setFeedback({ correct })
    setTimeout(() => advanceRound(correct), 2000)
  }, [feedback, selectedWeather, selectedSeason, clearTimer, scenario, advanceRound])

  const startGame = useCallback(() => {
    setPhase('game')
    setRound(0)
    setScore(0)
    scoreRef.current = 0
    setFeedback(null)
    setSelectedWeather(null)
    setSelectedSeason(null)
  }, [])

  const timerColor = timeLeft > 50 ? 'bg-green-500' : timeLeft > 25 ? 'bg-amber-500' : 'bg-red-500'

  if (phase === 'start') {
    return (
      <section id="weather-forecast">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Weather Forecast</h2>
        <p className="text-gray-400 mb-4">Read the weather report and identify the weather AND the season!</p>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-5xl mb-4">&#9925;</div>
          <p className="text-gray-400 mb-2">{totalRounds} cities across Latin America and Spain.</p>
          <p className="text-sm text-gray-400 mb-6">Select the weather condition and the season. 15 seconds per round.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-sky-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl">
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
      <section id="weather-forecast">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Weather Forecast</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-sky-600 mb-1">{score}/{totalRounds}</div>
          <p className="text-gray-400 mb-4">{pct >= 80 ? 'Expert meteorologist!' : pct >= 50 ? 'Good reading! Try again for a better score.' : 'Keep practicing your weather vocabulary!'}</p>
          <button onClick={startGame} className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700">Try Again</button>
        </div>
      </section>
    )
  }

  if (!scenario) return null

  return (
    <section id="weather-forecast">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Weather Forecast</h2>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Round {round + 1} of {totalRounds}</span>
        <span className="font-semibold text-sky-600">Score: {score}</span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div className={`h-full rounded-full transition-all duration-100 ${timerColor}`} style={{ width: `${timeLeft}%` }} />
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        {/* City & Forecast */}
        <div className="bg-sky-950 border border-sky-800 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">&#127758;</span>
            <span className="font-bold text-sky-200">{scenario.city}, {scenario.country}</span>
          </div>
          <p className="font-semibold text-gray-200 text-lg">&ldquo;{scenario.description}&rdquo;</p>
          {feedback && <p className="text-sm text-gray-400 mt-1 italic">{scenario.english}</p>}
        </div>

        {/* Weather Selection */}
        <p className="text-sm font-semibold text-gray-400 mb-2">What is the weather?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {scenario.weatherOptions.map((opt) => {
            const isCorrect = opt === scenario.correctWeather
            const isSelected = selectedWeather === opt
            const showResult = feedback !== null
            return (
              <button key={opt} onClick={() => !feedback && setSelectedWeather(opt)} disabled={!!feedback}
                className={`px-3 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                  showResult
                    ? isCorrect ? 'border-green-400 bg-green-950 text-green-200'
                      : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700'
                      : 'border-gray-700 opacity-40'
                    : isSelected ? 'border-sky-500 bg-sky-950 text-sky-200 ring-2 ring-sky-300'
                      : 'border-gray-700 hover:border-sky-400 hover:bg-sky-950/50 cursor-pointer'
                }`}>
                {opt}
              </button>
            )
          })}
        </div>

        {/* Season Selection */}
        <p className="text-sm font-semibold text-gray-400 mb-2">What season?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {scenario.seasonOptions.map((opt) => {
            const isCorrect = opt === scenario.correctSeason
            const isSelected = selectedSeason === opt
            const showResult = feedback !== null
            return (
              <button key={opt} onClick={() => !feedback && setSelectedSeason(opt)} disabled={!!feedback}
                className={`px-3 py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                  showResult
                    ? isCorrect ? 'border-emerald-400 bg-emerald-950 text-emerald-200'
                      : isSelected && !isCorrect ? 'border-red-700 bg-red-950 text-red-700'
                      : 'border-gray-700 opacity-40'
                    : isSelected ? 'border-emerald-500 bg-emerald-950 text-emerald-200 ring-2 ring-emerald-300'
                      : 'border-gray-700 hover:border-emerald-400 hover:bg-emerald-950/50 cursor-pointer'
                }`}>
                {opt}
              </button>
            )
          })}
        </div>

        {!feedback && (
          <button onClick={handleSubmit} disabled={!selectedWeather || !selectedSeason}
            className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
              selectedWeather && selectedSeason
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 shadow-md'
                : 'bg-gray-800 text-gray-400 cursor-not-allowed'
            }`}>
            Submit Forecast
          </button>
        )}

        {feedback && (
          <div className={`text-center text-sm font-semibold p-3 rounded-lg ${feedback.correct ? 'bg-green-950 text-green-200' : 'bg-red-950 text-red-200'}`}>
            {feedback.correct ? 'Correct forecast!' : `Correct: ${scenario.correctWeather} + ${scenario.correctSeason}`}
          </div>
        )}
      </div>
    </section>
  )
}
