'use client'

import { useState, useCallback, useMemo } from 'react'
import { RECIPE_CHALLENGES, type RecipeStep } from '@/lib/lessons/L3.4'
import { spawnConfetti } from '@/components/ui/Confetti'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function RecipeBuilderL34({ onComplete }: { onComplete?: () => void }) {
  const [phase, setPhase] = useState<'start' | 'game' | 'results'>('start')
  const [recipeIdx, setRecipeIdx] = useState(0)
  const [selected, setSelected] = useState<RecipeStep[]>([])
  const [shuffled, setShuffled] = useState<RecipeStep[]>([])
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [scores, setScores] = useState<boolean[]>([])

  const recipe = RECIPE_CHALLENGES[recipeIdx]
  const totalRecipes = RECIPE_CHALLENGES.length

  const startGame = useCallback(() => {
    setPhase('game')
    setRecipeIdx(0)
    setSelected([])
    setChecked(false)
    setIsCorrect(false)
    setScores([])
    setShuffled(shuffle(RECIPE_CHALLENGES[0].steps))
  }, [])

  const handleSelectStep = useCallback((step: RecipeStep) => {
    if (checked) return
    setSelected(prev => {
      // If already selected, remove it and all after it
      const idx = prev.findIndex(s => s.order === step.order)
      if (idx >= 0) return prev.slice(0, idx)
      return [...prev, step]
    })
  }, [checked])

  const handleCheck = useCallback(() => {
    if (selected.length !== 5) return
    const correct = selected.every((s, i) => s.order === i + 1)
    setChecked(true)
    setIsCorrect(correct)
    if (correct) spawnConfetti(window.innerWidth / 2, 200, 30)
  }, [selected])

  const handleNext = useCallback(() => {
    const correct = selected.every((s, i) => s.order === i + 1)
    const newScores = [...scores, correct]
    setScores(newScores)

    if (recipeIdx + 1 >= totalRecipes) {
      setPhase('results')
      const totalCorrect = newScores.filter(Boolean).length
      if (totalCorrect >= 2) onComplete?.()
    } else {
      const nextIdx = recipeIdx + 1
      setRecipeIdx(nextIdx)
      setSelected([])
      setChecked(false)
      setIsCorrect(false)
      setShuffled(shuffle(RECIPE_CHALLENGES[nextIdx].steps))
    }
  }, [recipeIdx, totalRecipes, scores, selected, onComplete])

  const handleReset = useCallback(() => {
    setSelected([])
    setChecked(false)
    setIsCorrect(false)
    setShuffled(shuffle(RECIPE_CHALLENGES[recipeIdx].steps))
  }, [recipeIdx])

  const availableSteps = useMemo(() => {
    const selectedOrders = new Set(selected.map(s => s.order))
    return shuffled.filter(s => !selectedOrders.has(s.order))
  }, [shuffled, selected])

  if (phase === 'start') {
    return (
      <section id="recipe-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Recipe Builder</h2>
        <p className="text-gray-600 mb-4">Put the recipe steps in the correct order!</p>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-5xl mb-4">&#127859;</div>
          <p className="text-gray-600 mb-2">{totalRecipes} recipes. Arrange the 5 steps in order for each Latin American dish.</p>
          <p className="text-sm text-gray-400 mb-6">Click steps in the order you think is correct.</p>
          <button onClick={startGame} className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl">
            Start Cooking!
          </button>
        </div>
      </section>
    )
  }

  if (phase === 'results') {
    const totalCorrect = scores.filter(Boolean).length
    const pct = Math.round((totalCorrect / totalRecipes) * 100)
    const stars = pct >= 90 ? 3 : pct >= 50 ? 2 : pct > 0 ? 1 : 0
    return (
      <section id="recipe-builder">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Recipe Builder</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="text-4xl mb-2">{'\u2b50'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <div className="text-4xl font-bold text-orange-600 mb-1">{totalCorrect}/{totalRecipes}</div>
          <p className="text-gray-600 mb-4">{pct === 100 ? 'Perfect chef! Every recipe in order!' : pct >= 50 ? 'Good cooking! Some steps need rearranging.' : 'Keep practicing those recipes!'}</p>
          <div className="bg-orange-50 rounded-xl p-4 mb-4 text-left">
            <p className="text-xs font-semibold text-orange-600 uppercase mb-2">Results:</p>
            {RECIPE_CHALLENGES.map((r, i) => (
              <p key={i} className="text-sm text-gray-700 mb-1">
                {r.emoji} {r.title}: {scores[i] ? '✅ Correct order!' : '❌ Wrong order'}
              </p>
            ))}
          </div>
          <button onClick={startGame} className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700">Try Again</button>
        </div>
      </section>
    )
  }

  return (
    <section id="recipe-builder">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-inter)] mb-2">Recipe Builder</h2>
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-500">Recipe {recipeIdx + 1} of {totalRecipes}</span>
        <span className="font-semibold text-orange-600">{recipe.emoji} {recipe.title}</span>
      </div>

      {/* Selected steps (the order the user has chosen) */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-orange-500 uppercase mb-2">Your order ({selected.length}/5):</p>
        <div className="space-y-2 min-h-[80px]">
          {selected.length === 0 && (
            <p className="text-sm text-gray-400 italic py-4 text-center">Click steps below in the correct order...</p>
          )}
          {selected.map((step, i) => (
            <button key={step.order} onClick={() => !checked && handleSelectStep(step)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all ${
                checked
                  ? step.order === i + 1
                    ? 'border-green-400 bg-green-50 text-green-800'
                    : 'border-red-300 bg-red-50 text-red-700'
                  : 'border-orange-300 bg-orange-50 text-gray-800 cursor-pointer hover:border-orange-400'
              }`}>
              <span className="font-bold mr-2">{i + 1}.</span>
              {step.step}
              {checked && (
                <span className="block text-xs mt-1 italic text-gray-500">{step.english}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Available steps (scrambled, not yet picked) */}
      {!checked && availableSteps.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Available steps:</p>
          <div className="space-y-2">
            {availableSteps.map((step) => (
              <button key={step.order} onClick={() => handleSelectStep(step)}
                className="w-full text-left px-4 py-3 rounded-xl border-2 border-gray-200 text-sm text-gray-700 hover:border-orange-400 hover:bg-orange-50/50 cursor-pointer transition-all">
                {step.step}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Check / correct answer area */}
      {checked && !isCorrect && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-red-700 mb-2">Correct order:</p>
          {[...recipe.steps].sort((a, b) => a.order - b.order).map((step) => (
            <p key={step.order} className="text-sm text-red-800 mb-1">
              <span className="font-bold">{step.order}.</span> {step.step}
              <span className="text-xs text-gray-500 italic ml-1">({step.english})</span>
            </p>
          ))}
        </div>
      )}

      {checked && isCorrect && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4 text-center">
          <p className="text-sm font-semibold text-green-800">Perfect! Every step in the right order! 🎉</p>
        </div>
      )}

      <div className="flex gap-3 justify-center">
        {!checked && selected.length === 5 && (
          <button onClick={handleCheck} className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-orange-600 transition-all">
            Check Order
          </button>
        )}
        {!checked && selected.length > 0 && selected.length < 5 && (
          <button onClick={handleReset} className="px-4 py-2 text-gray-500 text-sm hover:text-gray-700">
            Reset
          </button>
        )}
        {checked && (
          <button onClick={handleNext} className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700">
            {recipeIdx + 1 >= totalRecipes ? 'See Results' : 'Next Recipe →'}
          </button>
        )}
      </div>
    </section>
  )
}
