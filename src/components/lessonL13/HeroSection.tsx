'use client'

export default function HeroSectionL13() {
  return (
    <section
      id="welcome"
      className="relative text-white rounded-2xl overflow-hidden mb-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/L1.3/hero-numbers.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-800/65 via-amber-700/55 to-yellow-700/65" />
      <div className="relative px-8 py-16 md:py-20 max-w-3xl">
        <div className="text-yellow-200 text-sm font-semibold tracking-wider uppercase mb-3">Lesson 1.3</div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[family-name:var(--font-inter)] mb-4">
          Numbers &amp; Time
        </h1>
        <p className="text-xl text-orange-100 leading-relaxed max-w-xl mb-2">
          Learn to count from 0 to 100, tell time, and master the days and months of the Spanish calendar.
        </p>
        <p className="text-amber-200 leading-relaxed">
          From &ldquo;cero&rdquo; to &ldquo;cien,&rdquo; unlock the numbers that power everyday conversations — prices, schedules, ages, and dates.
        </p>
      </div>
    </section>
  )
}
