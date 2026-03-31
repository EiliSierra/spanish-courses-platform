'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Props {
  lessonId: string
  lessonTitle: string
}

export default function ConversationalTutor({ lessonId, lessonTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: `¡Hola! I'm your AI tutor for "${lessonTitle}." Ask me anything about this lesson — vocabulary, grammar, pronunciation, or cultural questions. I can answer in English or Spanish!`
      }])
    }
  }, [isOpen, messages.length, lessonTitle])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          lessonId,
          lessonTitle,
        }),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(errData.error || `API error: ${res.status}`)
      }

      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, messages, lessonId, lessonTitle])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
          isOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gradient-to-br from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700'
        }`}
        aria-label={isOpen ? 'Close tutor' : 'Open AI tutor'}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            <circle cx="8" cy="10" r="1"/>
            <circle cx="12" cy="10" r="1"/>
            <circle cx="16" cy="10" r="1"/>
          </svg>
        )}
      </button>

      {/* Badge */}
      {!isOpen && messages.length === 0 && (
        <div className="fixed bottom-[5.5rem] right-6 z-50 bg-gray-800 rounded-lg shadow-md px-3 py-1.5 text-xs font-semibold text-violet-700 border border-violet-100 animate-bounce">
          Ask your AI Tutor!
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">AI Tutor</h3>
              <p className="text-violet-200 text-[10px]">{lessonTitle}</p>
            </div>
            <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/20 text-white">
              AI
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[340px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-3 py-2.5 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about vocabulary, grammar..."
              disabled={loading}
              className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="px-3 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:opacity-40 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-3 pb-3 flex flex-wrap gap-1.5">
              {[
                'What\'s the difference between "quiero" and "me gustaría"?',
                'How do I ask for the check?',
                'When do I use "un" vs "una"?',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(sendMessage, 50) }}
                  className="text-[11px] px-2.5 py-1.5 bg-violet-950 text-violet-700 rounded-lg hover:bg-violet-100 transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
