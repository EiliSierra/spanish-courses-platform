'use client'

export default function HeroSectionL12() {
  return (
    <section
      id="welcome"
      className="relative text-white rounded-2xl overflow-hidden mb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }} />
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
