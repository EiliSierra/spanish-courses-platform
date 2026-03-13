'use client'

import { useCallback, useRef } from 'react'

const audioCache: Record<string, HTMLAudioElement> = {}

export function useAudio() {
  const currentRef = useRef<HTMLAudioElement | null>(null)

  const playLetter = useCallback((audioKey: string) => {
    if (currentRef.current) {
      currentRef.current.pause()
      currentRef.current.currentTime = 0
    }
    const path = `/audio/L1.1/letters/${encodeURIComponent(audioKey)}.mp3`
    if (!audioCache[path]) {
      audioCache[path] = new Audio(path)
    }
    const audio = audioCache[path]
    currentRef.current = audio
    audio.currentTime = 0
    audio.play().catch(() => {})
  }, [])

  const playFile = useCallback((src: string) => {
    if (currentRef.current) {
      currentRef.current.pause()
      currentRef.current.currentTime = 0
    }
    if (!audioCache[src]) {
      audioCache[src] = new Audio(src)
    }
    const audio = audioCache[src]
    currentRef.current = audio
    audio.currentTime = 0
    audio.play().catch(() => {})
    return audio
  }, [])

  const stop = useCallback(() => {
    if (currentRef.current) {
      currentRef.current.pause()
      currentRef.current.currentTime = 0
      currentRef.current = null
    }
  }, [])

  return { playLetter, playFile, stop }
}
