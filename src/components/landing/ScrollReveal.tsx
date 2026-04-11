'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('reveal-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: '200px 0px 200px 0px' }
    )

    observer.observe(el)

    // Fallback: reveal after 2s in case observer doesn't fire
    const fallback = setTimeout(() => {
      el.classList.add('reveal-visible')
    }, 2000 + delay)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div ref={ref} className={`reveal-hidden ${className}`}>
      {children}
    </div>
  )
}

export function StaggerReveal({
  children,
  className = '',
  staggerMs = 100,
}: {
  children: ReactNode[]
  className?: string
  staggerMs?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll('.stagger-item')
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('reveal-visible')
            }, i * staggerMs)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: '200px 0px 200px 0px' }
    )

    observer.observe(el)

    // Fallback: reveal all stagger items after 2s
    const fallback = setTimeout(() => {
      const items = el.querySelectorAll('.stagger-item')
      items.forEach((item) => item.classList.add('reveal-visible'))
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [staggerMs])

  return (
    <div ref={ref} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div key={i} className="stagger-item reveal-hidden">
          {child}
        </div>
      ))}
    </div>
  )
}
