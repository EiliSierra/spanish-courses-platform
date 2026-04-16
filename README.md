# Alexandria's Language Institute — Interactive Spanish Courses

An interactive, audio-rich Spanish language platform with 74 lessons across 10 levels (A1–C2). Built with Next.js, React, and Tailwind CSS. Features flashcards, matching games, sorting activities, real-world dialogues, pronunciation practice, AI tutoring, and comprehensive final exams.

## Live

[spanish-courses-platform.vercel.app](https://spanish-courses-platform.vercel.app)

## Tech Stack

- **Next.js 16** — App Router with dynamic lesson routing via lesson registry
- **React 19** — Interactive components with hooks
- **TypeScript** — Full type safety
- **Tailwind CSS 4** — Utility-first styling with custom pastel palettes
- **Clerk** — Authentication and user management
- **Stripe** — Payments (monthly, yearly, lifetime plans)
- **OpenAI / OpenRouter** — AI tutor, pronunciation coach, personalized learning

## Course Content

- **10 levels** — Foundations (A1) through Capstone (C1–C2)
- **74 lessons** — 8 per level (2 in Level 10)
- **10 final exams** — 25 questions each, 70% to pass and earn a badge
- **4,400+ audio clips** — Native-speaker recordings for every word and dialogue
- **Interactive activities** — Flashcards, matching games, spelling bees, sorting, lightning rounds, quizzes

### Levels Overview

| Level | Name | CEFR | Lessons |
|-------|------|------|---------|
| 1 | Foundations | A1 | 8 (Free) |
| 2 | Building Blocks | A1–A2 | 8 |
| 3 | Elementary | A2 | 8 |
| 4 | Pre-Intermediate | A2–B1 | 8 |
| 5 | Intermediate | B1–B2 | 8 |
| 6 | Upper-Intermediate | B1–C1 | 8 |
| 7 | Advanced | B2–C1 | 8 |
| 8 | Specialization | B2–C1 | 8 |
| 9 | Cultural Immersion | C1 | 8 |
| 10 | Capstone | C1–C2 | 2 |

## Architecture

```
src/
├── app/
│   ├── page.tsx                          # Landing page
│   ├── (dashboard)/courses/
│   │   ├── page.tsx                      # Course listing with access control
│   │   └── [lessonId]/
│   │       ├── layout.tsx                # Auth gate (Clerk + Stripe plan check)
│   │       └── page.tsx                  # Dynamic lesson loader via registry
│   └── api/
│       ├── ai/                           # AI endpoints (tutor, pronunciation, personalize)
│       └── stripe/                       # Checkout, portal, webhook
├── components/
│   ├── engine/
│   │   ├── LessonShell.tsx               # Universal lesson renderer
│   │   └── FinalExam.tsx                 # Exam component with randomized questions
│   └── landing/                          # Landing page components
├── lib/
│   ├── lesson-registry.ts                # Central lesson → data mapping (lazy imports)
│   ├── lessons/                          # 84 lesson data files (L1.1–L10.F)
│   ├── stripe.ts                         # Plans, access control
│   ├── rate-limit.ts                     # In-memory rate limiter for AI endpoints
│   └── types/lesson.ts                   # Shared lesson types
└── hooks/
    ├── useAudio.ts                       # Audio playback
    └── useLessonProgress.ts              # Progress tracking (localStorage)
```

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add Clerk, Stripe, and OpenAI keys to .env.local
npm run dev
```

## Pricing

- **Free** — Level 1 (8 lessons + exam)
- **Premium** — $14.99/month or $119/year (all 10 levels)
- **Lifetime** — $199 one-time (all content, forever)

## License

© 2026 Alexandria's Design LLC. All rights reserved.
