'use client'

export default function HeroSectionL12() {
  return (
    <section
      id="welcome"
      className="relative text-white rounded-2xl overflow-hidden mb-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/L1.2/hero-meeting.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/65 via-teal-700/55 to-cyan-700/65" />
      <div className="relative px-8 py-16 md:py-20 max-w-3xl">
        <div className="text-amber-300 text-sm font-semibold tracking-wider uppercase mb-3">Lesson 1.2</div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-[family-name:var(--font-inter)] mb-4">
          Meeting People
        </h1>
        <p className="text-xl text-emerald-100 leading-relaxed max-w-xl mb-2">
          Learn how to greet people, introduce yourself, and navigate everyday social situations in Spanish.
        </p>
        <p className="text-teal-200 leading-relaxed">
          From &ldquo;Hola&rdquo; to &ldquo;Mucho gusto,&rdquo; master the essential phrases that open doors to real conversations.
        </p>
      </div>
    </section>
  )
}
