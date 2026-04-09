'use client'

import { useEffect, useRef } from 'react'

export function AnimatedGradientOrbs() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame: number
    let t = 0

    function animate() {
      t += 0.003
      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 40}px, ${Math.cos(t * 0.7) * 30}px)`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 50}px, ${Math.sin(t * 0.6) * 40}px)`
      }
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <div
        ref={orb1}
        className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        ref={orb2}
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none"
      />
    </>
  )
}
