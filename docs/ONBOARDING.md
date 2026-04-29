# Onboarding — New team member

**Last updated:** 2026-04-29

Welcome. This document walks you through everything you need to be operationally productive in ~1 day.

---

## 1. What this is

**Alexandria's Language Institute** is a Spanish learning platform for adult learners A1 → C2.

- Website: https://www.alexandriaslanguages.com
- Code: https://github.com/EiliSierra/spanish-courses-platform
- Backed by: Alexandria's Design LLC (Dr. Charles Martin, Ed.D. — instructional designer + lead curriculum author)
- Stack: Next.js 16, Clerk (auth), Stripe (payments), Neon Postgres (progress), Vercel (hosting), OpenRouter (AI)

---

## 2. Accounts you need (request these on day 1)

### Core platform (required)

| System | Purpose | Who gives access |
|---|---|---|
| GitHub `EiliSierra/spanish-courses-platform` | Read/write code, PRs, CI | Eili |
| Vercel (team `charles-martins-projects-94f292e0`) | Deploys, env vars, logs, analytics | Charles |
| Stripe Dashboard (`Alexandria's Design`) | Payments, subscriptions, webhooks | Charles |
| Clerk Dashboard | User auth, metadata, JWT inspection | Charles |
| Neon Console | Database queries, schema, connection pool | Charles or Eili |
| Upstash Console | Rate-limit Redis (`alexandria-languages-prod`) — usage, command counts, token | Charles or Eili |
| OpenRouter | AI usage, billing, model selection | Eili (API key in `.env`) |
| Google Domain / DNS | `alexandriaslanguages.com` records | Charles |

### Adjacent (request only if you'll touch them)

| System | Purpose | Who gives access |
|---|---|---|
| ElevenLabs | Voice clone for narration / social media | Charles (shared Creator account) |
| GoDaddy / Outlook (`info@alexandriasdesign.com`) | Customer support inbox | Charles |
| GitHub Actions (already covered above) | CI logs, re-run failed jobs | Same as GitHub |

Ask for **read-only** access by default — upgrade to admin only when needed.

---

## 3. Local development setup

### Prerequisites
- Node.js 20+
- Git
- Editor (VS Code recommended)

### Setup
```bash
# Clone
git clone https://github.com/EiliSierra/spanish-courses-platform.git
cd spanish-courses-platform

# Install deps
npm install

# Pull env vars from Vercel (requires `npx vercel login` first)
npx vercel link  # link your local copy to the project
npx vercel env pull .env.local --environment=development

# Run dev server
npm run dev
```

Visit http://localhost:3000. Changes hot-reload automatically.

### Run the test suite

```bash
npm run test:run         # one-shot, same command CI runs
npm run test             # watch mode for active development
```

12 unit tests across `src/__tests__/` cover the Stripe checkout allowlist, webhook idempotency, and rate limiter. All external services (Stripe, Clerk, Prisma, fetch) are mocked — running tests does NOT touch any real account. CI gates merges on `master` with this same command on Linux.

### Database (Neon)

If you need to run migrations locally:
```bash
npx prisma generate
npx prisma db push   # only against dev DB, never production
```

---

## 4. Code layout (mental model)

```
src/
├── app/
│   ├── page.tsx                       # Landing page
│   ├── layout.tsx                     # Root layout, Clerk provider, metadata
│   ├── sitemap.ts                     # Dynamic sitemap
│   ├── opengraph-image.tsx            # OG image for social shares
│   │
│   ├── (auth)/                        # Sign-in, sign-up — Clerk-powered
│   │   └── layout.tsx                 # Header with logo
│   │
│   ├── (legal)/                       # Terms, privacy, refund — static content
│   │
│   ├── (dashboard)/                   # Authenticated user area
│   │   ├── layout.tsx                 # Dashboard header
│   │   └── courses/
│   │       ├── page.tsx               # Course index with progress
│   │       └── [lessonId]/
│   │           ├── layout.tsx         # ACCESS CONTROL is here
│   │           └── page.tsx           # Renders lesson via LessonShell
│   │
│   ├── checkout/success/              # Post-payment confirmation
│   │
│   └── api/
│       ├── stripe/
│       │   ├── checkout/route.ts      # Creates checkout session
│       │   ├── webhook/route.ts       # ★ Receives Stripe events
│       │   └── portal/route.ts        # Customer portal
│       └── ai/
│           ├── tutor/                 # AI chat inside lessons
│           ├── pronunciation/         # Pronunciation feedback
│           └── personalize/           # Personalized context
│
├── lib/
│   ├── stripe.ts                      # PLANS config + canAccessLesson()
│   ├── lessons/                       # All lesson data files (L1.1.ts → L10.F.ts)
│   │   └── registry.ts                # Maps lessonId → lesson module
│   └── ...
│
└── components/
    ├── engine/                        # LessonShell + activity components
    ├── landing/                       # Landing page pieces
    └── ui/                            # Reusable UI primitives
```

**The two most important files to understand:**
1. `src/lib/stripe.ts` — defines plans and access levels
2. `src/app/api/stripe/webhook/route.ts` — keeps Stripe and Clerk in sync

---

## 5. Conventions

### Git
- Branch `master` is production.
- Commit messages: short first line (< 70 chars), optional longer body. Conventional commits-style preferred but not enforced.
- PRs not strictly required for solo work — direct commits to master are OK.

### Code style
- TypeScript strict mode — keep it strict.
- Tailwind CSS for styling (not CSS modules). Design tokens in `globals.css`.
- Server Components by default. `'use client'` only when interactivity needed.
- API routes return JSON.

### Tests
- Tests live in `src/__tests__/`. Use Vitest, mock external services, never hit real Stripe / Clerk / Neon / Upstash.
- CI runs `typecheck → test:run → build` on every push and PR. Red CI blocks merge by convention.
- If you change a route in `src/app/api/`, check the matching test file. The tests reflect a real audit finding — do not delete a failing test, update both the test and the production code together when the contract changes.

### Naming
- Lessons: `L{level}.{number}` (e.g. `L3.5`) or `L{level}.F` for final exams.
- Audio files: same pattern, in `public/audio/L{level}.{number}/`.
- Lesson images: `public/images/L{level}.{number}/` (hero image as `hero-*.png`).

---

## 6. Where data lives (reference — full detail in ARCHITECTURE.md)

- **Users and plan** → Clerk
- **Payments** → Stripe
- **Lesson progress, exam results** → Neon (via Prisma)
- **Lesson content (Spanish phrases, activities, audios)** → `src/lib/lessons/*.ts` files (committed in the repo)

---

## 7. Day-to-day tasks

See `RUNBOOK.md` for specific operational procedures:
- User support (access issues, refunds, cancellations)
- Deploys
- Monitoring and health checks
- Incident response

---

## 8. Who to ask

| Topic | Person |
|---|---|
| Code, deploys, infrastructure | Eili |
| Curriculum, educational method, content decisions | Dr. Charles Martin |
| Business / product direction | Dr. Charles Martin |
| Payments, accounting, legal entity | Dr. Charles Martin |
| AI integrations, OpenRouter | Eili |
| Social media, marketing | Eili |

---

## 9. Your first week (suggested)

### Day 1
- Get accounts provisioned (see section 2 — at minimum GitHub + Vercel + Stripe + Clerk)
- Clone repo, run locally, explore Level 1 end-to-end as a free user
- Run `npm run test:run` and confirm all 12 tests pass
- Read `ARCHITECTURE.md`

### Day 2
- Register a test user, upgrade (Stripe test mode), verify access
- Read `RUNBOOK.md` — understand the support playbook
- Shadow a real support ticket if any

### Day 3-5
- Pick up a small ticket (bug fix or content tweak)
- Ship it end-to-end: edit → test locally → PR or direct commit → verify on production

### End of week 1
- Run `weekly_health_check.py` and interpret the output
- Attend Sunday sync to understand current priorities
