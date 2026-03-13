'use client'

export default function HeroSection() {
  return (
    <section id="welcome" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white rounded-2xl overflow-hidden mb-10">
      <div className="px-8 py-16 md:py-20 max-w-3xl">
        <div className="text-blue-200 text-sm font-semibold tracking-wider uppercase mb-3">Lesson 1.1</div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[family-name:var(--font-inter)] mb-4">
          Sounds & Letters
        </h1>
        <p className="text-xl text-blue-100 leading-relaxed max-w-xl mb-2">
          The Spanish alphabet consists of 27 letters, including the unique &lsquo;ñ,&rsquo; and is entirely phonetic,
          meaning each letter has a consistent sound.
        </p>
        <p className="text-blue-200 leading-relaxed">
          Mastering its pronunciation is essential for building a strong foundation in reading, writing, and speaking Spanish with confidence.
        </p>
      </div>
    </section>
  )
}
