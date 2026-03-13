'use client'

export function spawnConfetti(x: number, y: number, count = 20) {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const container = document.createElement('div')
  container.className = 'confetti-container'
  document.body.appendChild(container)

  const colors = ['#2563eb', '#7c3aed', '#f59e0b', '#10b981', '#ef4444', '#ec4899']

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    piece.style.left = `${x + (Math.random() - 0.5) * 100}px`
    piece.style.top = `${y - 20}px`
    piece.style.background = colors[Math.floor(Math.random() * colors.length)]
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px'
    piece.style.width = `${6 + Math.random() * 8}px`
    piece.style.height = `${6 + Math.random() * 8}px`
    piece.style.animation = `confetti-fall ${0.8 + Math.random() * 1.2}s ease-out forwards`
    piece.style.animationDelay = `${Math.random() * 0.2}s`
    container.appendChild(piece)
  }

  setTimeout(() => container.remove(), 2500)
}
