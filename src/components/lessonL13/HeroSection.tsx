'use client'

export default function HeroSectionL13() {
  return (
    <section
      id="welcome"
      className="relative text-white rounded-2xl overflow-hidden mb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-amber-600 to-yellow-700" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E\")" }} />
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
