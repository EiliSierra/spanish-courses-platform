# Spanish Courses — Interactive Learning Platform

An interactive, audio-rich Spanish language course built with Next.js, React, and Tailwind CSS. Features gamified lessons with flashcards, matching games, sorting activities, real-world dialogues, and knowledge quizzes.

## Tech Stack

- **Next.js 16** — App Router with dynamic lesson routing
- **React 19** — Interactive components with hooks
- **TypeScript** — Full type safety
- **Tailwind CSS 4** — Utility-first styling with custom pastel palettes
- **Clerk** — Authentication and user management
- **Audio** — 200+ MP3 files for pronunciation and dialogues

## Available Lessons

| Lesson | Title | Content | Status |
|--------|-------|---------|--------|
| L1.1 | Sounds & Letters | 27 letters, pronunciation, alphabet games | Available |
| L1.2 | Meeting People | 43 phrases: greetings, farewells, introductions, polite expressions | Available |
| L1.3 | Numbers & Time | Numbers 0–100, telling time, days, months, age expressions | Available |
| L1.4 | At the Café | Coming soon |
| L1.5 | Getting Around | Coming soon |
| L1.6 | My World | Coming soon |
| L1.7 | Daily Routines | Coming soon |
| L1.8 | Likes, Feelings & Me | Coming soon |

## Features per Lesson

- **Hero Section** — Unique background image and color gradient per lesson
- **Phrase Cards** — Interactive cards with audio playback, color-coded by category
- **Tabbed Flashcards** — Organized in tiers (Essentials, Building, Challenge)
- **Matching Game** — Drag-and-drop Spanish-to-English pairing
- **Sorting Activities** — Categorize phrases into correct groups
- **Real-World Dialogues** — Chat-bubble format with per-line audio
- **Cultural Notes** — Context about Spanish-speaking cultures
- **Pronunciation Tips** — Accordion-style phonetic guides
- **Knowledge Quiz** — 15 questions (multiple choice, true/false, fill-in-the-blank)
- **Progress Tracking** — Per-section completion with localStorage persistence

## Design System

Each lesson follows a consistent visual language:
- **Section cards** with alternating soft pastel backgrounds (blue, emerald, amber, purple, rose, indigo)
- **White cards** with subtle shadows and hover-lift effects
- **Speaker icons** on all interactive audio elements
- **Category color coding** (e.g., greetings = emerald, farewells = blue, polite = purple)
- **Responsive** — Mobile sidebar, adaptive grids

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Clerk publishable key and secret key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   └── (dashboard)/courses/
│       ├── page.tsx              # Course listing
│       └── [lessonId]/page.tsx   # Dynamic lesson router
├── components/
│   ├── lesson/                   # L1.1 components
│   ├── lessonL12/                # L1.2 components
│   ├── lessonL13/                # L1.3 components
│   ├── layout/LessonSidebar.tsx  # Shared sidebar navigation
│   └── ui/                       # Toast, Confetti, etc.
├── hooks/
│   ├── useAudio.ts               # Audio playback hook
│   └── useLessonProgress.ts      # Progress tracking hook
├── lib/
│   ├── lesson-data.ts            # L1.1 data
│   ├── lesson-data-L12.ts        # L1.2 data
│   └── lesson-data-L13.ts        # L1.3 data
public/
├── audio/
│   ├── L1.1/                     # ~150 audio files
│   ├── L1.2/                     # 52 audio files
│   └── L1.3/                     # 96 audio files
└── images/
    ├── L1.1/bg-learning.jpg
    ├── L1.2/hero-meeting.png
    └── L1.3/hero-numbers.png
```

## License

Private — Discovery Collective
