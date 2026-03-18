'use client'

import type { LessonHero } from '@/lib/types/lesson'

export default function HeroSection({ hero }: { hero: LessonHero }) {
  return (
    <section
      id="welcome"
      className="relative text-white rounded-2xl overflow-hidden mb-10 bg-cover bg-center"
      style={{ backgroundImage: `url('${hero.image}')` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${hero.gradient}`} />
      <div className="relative px-8 py-16 md:py-20 max-w-3xl">
        <div className={`text-${hero.accentColor} text-sm font-semibold tracking-wider uppercase mb-3`}>
          Lesson {hero.lessonId.replace('L', '')}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[family-name:var(--font-inter)] mb-4">
          {hero.title}
        </h1>
        <p className="text-xl text-orange-100 leading-relaxed max-w-xl mb-2">
          {hero.subtitle}
        </p>
        <p className={`text-${hero.accentColor} leading-relaxed`}>
          {hero.description}
        </p>
      </div>
    </section>
  )
}
