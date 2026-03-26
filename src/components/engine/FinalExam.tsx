'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import type { ExamQuestion } from '@/lib/lessons/L1.F'
import { spawnConfetti } from '@/components/ui/Confetti'
import Link from 'next/link'

interface FinalExamProps {
  questions: ExamQuestion[]
  totalQuestions: number
  passingScore: number
  title: string
  subtitle: string
  description: string
  badgeEmoji: string
  badgeName: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FinalExam({ questions, totalQuestions, passingScore, title, subtitle, description, badgeEmoji, badgeName }: FinalExamProps) {
  const [phase, setPhase] = useState<'intro' | 'exam' | 'results'>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number | boolean | string>>({})
  const [fillInput, setFillInput] = useState('')

  // Pick random questions on start
  const examQuestions = useMemo(() => {
    if (phase !== 'exam') return []
    return shuffle(questions).slice(0, totalQuestions)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const question = examQuestions[currentQ]
  const totalAnswered = Object.keys(answers).length
  const progress = totalAnswered / totalQuestions * 100

  // Calculate results
  const results = useMemo(() => {
    if (phase !== 'results') return null
    let correct = 0
    const details: { q: ExamQuestion; userAnswer: number | boolean | string; correct: boolean }[] = []

    examQuestions.forEach((q, i) => {
      const userAns = answers[i]
      let isCorrect = false

      if (q.type === 'fill') {
        const expected = String(q.answer).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
        const given = String(userAns || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
        isCorrect = expected === given
      } else if (q.type === 'tf') {
        isCorrect = userAns === q.answer
      } else {
        isCorrect = userAns === q.answer
      }

      if (isCorrect) correct++
      details.push({ q, userAnswer: userAns, correct: isCorrect })
    })

    const pct = Math.round((correct / totalQuestions) * 100)
    const passed = pct >= passingScore
    return { correct, total: totalQuestions, pct, passed, details }
  }, [phase, examQuestions, answers, totalQuestions, passingScore])

  // Confetti on pass
  useEffect(() => {
    if (results?.passed) {
      setTimeout(() => spawnConfetti(window.innerWidth / 2, 200, 60), 300)
    }
  }, [results])

  // Save badge to localStorage
  useEffect(() => {
    if (results?.passed) {
      localStorage.setItem('spanish-course-L1F-badge', JSON.stringify({ passed: true, score: results.pct, date: new Date().toISOString() }))
    }
  }, [results])

  const selectAnswer = useCallback((answer: number | boolean | string) => {
    setAnswers(prev => ({ ...prev, [currentQ]: answer }))
  }, [currentQ])

  const nextQuestion = useCallback(() => {
    if (currentQ + 1 < totalQuestions) {
      setCurrentQ(c => c + 1)
      setFillInput('')
    } else {
      setPhase('results')
    }
  }, [currentQ, totalQuestions])

  const prevQuestion = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ(c => c - 1)
      setFillInput('')
    }
  }, [currentQ])

  // === INTRO ===
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">{badgeEmoji}</div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-gray-500 mb-6">{subtitle}</p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8 text-left">
          <p className="text-gray-700 mb-4">{description}</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="text-indigo-500">📝</span> {totalQuestions} questions from all 8 lessons</li>
            <li className="flex items-center gap-2"><span className="text-indigo-500">🎯</span> {passingScore}% to pass ({Math.ceil(totalQuestions * passingScore / 100)}/{totalQuestions} correct)</li>
            <li className="flex items-center gap-2"><span className="text-indigo-500">📊</span> Feedback shown at the end (not per question)</li>
            <li className="flex items-center gap-2"><span className="text-indigo-500">🔄</span> You can retake the exam anytime</li>
            <li className="flex items-center gap-2"><span className="text-indigo-500">⬅️➡️</span> Navigate freely between questions</li>
          </ul>
        </div>
        <button
          onClick={() => { setPhase('exam'); setCurrentQ(0); setAnswers({}); setFillInput('') }}
          className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Start Exam
        </button>
        <div className="mt-6">
          <Link href="/courses" className="text-sm text-gray-400 hover:text-gray-600">← Back to courses</Link>
        </div>
      </div>
    )
  }

  // === RESULTS ===
  if (phase === 'results' && results) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{results.passed ? badgeEmoji : '📚'}</div>
          <h1 className="text-3xl font-bold mb-2">
            {results.passed ? '¡Felicidades!' : 'Keep Practicing!'}
          </h1>
          <p className="text-xl text-gray-600">
            You scored <strong className={results.passed ? 'text-green-600' : 'text-red-500'}>{results.correct}/{results.total}</strong> ({results.pct}%)
          </p>
          {results.passed && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 rounded-full">
              <span className="text-2xl">{badgeEmoji}</span>
              <span className="font-bold text-amber-800">{badgeName}</span>
            </div>
          )}
          {!results.passed && (
            <p className="text-gray-500 mt-2">You need {passingScore}% to pass. Review the lessons below and try again!</p>
          )}
        </div>

        {/* Detailed Review */}
        <h2 className="text-xl font-bold mb-4">Review Your Answers</h2>
        <div className="space-y-3 mb-8">
          {results.details.map((d, i) => (
            <div key={i} className={`p-4 rounded-xl border ${d.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm">
                    <span className="text-gray-400 mr-1">Q{i + 1}.</span>
                    {d.q.text}
                  </p>
                  <div className="mt-1 text-xs text-gray-500">
                    {d.q.fromLesson} — {d.q.topic}
                  </div>
                  {!d.correct && (
                    <p className="text-sm mt-1">
                      <span className="text-red-600">Your answer: {d.q.type === 'mc' ? d.q.options?.[d.userAnswer as number] : String(d.userAnswer)}</span>
                      <span className="text-gray-400 mx-1">|</span>
                      <span className="text-green-700">Correct: {d.q.type === 'mc' ? d.q.options?.[d.q.answer as number] : d.q.type === 'tf' ? (d.q.answer ? 'True' : 'False') : String(d.q.answer)}</span>
                    </p>
                  )}
                </div>
                <span className={`text-lg ${d.correct ? 'text-green-500' : 'text-red-400'}`}>
                  {d.correct ? '✓' : '✗'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setPhase('intro') }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            {results.passed ? 'Retake Exam' : 'Try Again'}
          </button>
          <Link href="/courses" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            Back to Courses
          </Link>
        </div>
      </div>
    )
  }

  // === EXAM ===
  if (!question) return null

  const currentAnswer = answers[currentQ]
  const hasAnswered = currentAnswer !== undefined

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-gray-800">Level 1 Final Exam</h2>
        <span className="text-sm text-gray-500">{totalAnswered}/{totalQuestions} answered</span>
      </div>

      {/* Progress */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="h-2 bg-indigo-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
            {currentQ + 1}
          </span>
          <span className="text-xs text-gray-400">{question.fromLesson} — {question.topic}</span>
        </div>

        <p className="text-lg font-medium text-gray-900 mb-5">{question.text}</p>

        {/* MC Options */}
        {question.type === 'mc' && question.options && (
          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${
                  currentAnswer === i
                    ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-300 font-medium'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30'
                }`}
              >
                <span className="text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* TF Options */}
        {question.type === 'tf' && (
          <div className="flex gap-3">
            {[true, false].map((val) => (
              <button
                key={String(val)}
                onClick={() => selectAnswer(val)}
                className={`flex-1 py-3 rounded-xl border font-medium transition-all ${
                  currentAnswer === val
                    ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-300'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                {val ? 'True' : 'False'}
              </button>
            ))}
          </div>
        )}

        {/* Fill-in */}
        {question.type === 'fill' && (
          <div>
            <input
              type="text"
              value={currentAnswer !== undefined ? String(currentAnswer) : fillInput}
              onChange={(e) => {
                setFillInput(e.target.value)
                selectAnswer(e.target.value)
              }}
              placeholder="Type your answer..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 text-lg"
              autoComplete="off"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQ === 0}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        {/* Question dots */}
        <div className="flex gap-1 flex-wrap justify-center max-w-xs">
          {examQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentQ(i); setFillInput('') }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentQ ? 'bg-indigo-600 scale-125' : answers[i] !== undefined ? 'bg-indigo-300' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {currentQ + 1 < totalQuestions ? (
          <button
            onClick={nextQuestion}
            className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
          >
            Next →
          </button>
        ) : (
          <div className="w-[70px]" /> /* spacer to keep dots centered */
        )}
      </div>

      {/* Submit button — always visible */}
      <div className="mt-6">
        <button
          onClick={() => setPhase('results')}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md"
        >
          Submit Exam ({totalAnswered}/{totalQuestions} answered)
        </button>
        {totalAnswered < totalQuestions && (
          <p className="text-center text-xs text-amber-600 mt-2">
            {totalQuestions - totalAnswered} unanswered questions will count as incorrect.
          </p>
        )}
      </div>
    </div>
  )
}
