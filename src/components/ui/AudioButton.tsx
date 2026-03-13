'use client'

import { useState, useCallback } from 'react'

interface AudioButtonProps {
  src: string
  label?: string
  size?: 'sm' | 'md'
  className?: string
}

export default function AudioButton({ src, label, size = 'md', className = '' }: AudioButtonProps) {
  const [playing, setPlaying] = useState(false)

  const play = useCallback(() => {
    const audio = new Audio(src)
    setPlaying(true)
    audio.onended = () => setPlaying(false)
    audio.onerror = () => setPlaying(false)
    audio.play().catch(() => setPlaying(false))
  }, [src])

  const sizeClasses = size === 'sm' ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'

  return (
    <button
      onClick={play}
      className={`inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors ${sizeClasses} ${playing ? 'ring-2 ring-blue-400 animate-pulse' : ''} ${className}`}
      aria-label={label ?? 'Play audio'}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
      </svg>
    </button>
  )
}
