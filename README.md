# Alexandria's Language Institute

> An interactive, audio-rich Spanish language platform backed by doctoral research in educational technology. 84 lessons across 10 CEFR levels (A1 → C2).

🌐 **Live:** [www.alexandriaslanguages.com](https://www.alexandriaslanguages.com)

---

## 📚 Documentation

**Start here** depending on your role:

| If you are... | Read this first |
|---|---|
| New to the team | [`docs/ONBOARDING.md`](./docs/ONBOARDING.md) — accounts, local setup, conventions, your first week |
| Need to understand how the system works | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — 3-database architecture (Stripe + Clerk + Neon), payment flows, access control, env vars |
| Handling a user issue or incident | [`docs/RUNBOOK.md`](./docs/RUNBOOK.md) — step-by-step playbooks for the 10 most common situations |

---

## 🎯 What this is

An instructional-design-first language learning platform built by [Dr. Charles Martin, Ed.D.](https://sites.google.com/alexandriasdesign.com/charlesmartinedd/home) (University of Florida, specialization in Educational Technology). Every lesson is built on CEFR backward design, UDL principles, and evidence-based L2 acquisition research — not gamified novelty.

- **10 levels** · A1 Foundations → C2 Capstone
- **84 lessons total** · 74 regular lessons + 10 final exams
- **4,400+ audio clips** · native-speaker recordings for every word and dialogue
- **15+ interactive activity types** · flashcards, matching games, spelling bees, ordering challenges, dialect decoders, triage simulators, and more
- **AI tutor** · context-aware pronunciation feedback and personalized practice

### Pricing

| Plan | Access | Price |
|---|---|---|
| Free | Level 1 only (8 lessons + final exam) | $0 |
| Premium Monthly | All 10 levels | $14.99/mo |
| Premium Yearly | All 10 levels | $119/yr |
| Lifetime | All 10 levels, forever | $199 one-time |

---

## 🛠 Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) · [React 19](https://react.dev)
- **Language:** TypeScript (strict mode)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Auth:** [Clerk](https://clerk.com)
- **Payments:** [Stripe](https://stripe.com)
- **Database:** [Neon](https://neon.tech) (serverless Postgres) via [Prisma](https://prisma.io)
- **Rate limiting:** [Upstash Redis](https://upstash.com) (sliding window) with in-memory fallback
- **AI:** [OpenRouter](https://openrouter.ai) (Gemini, Gemma) + [Vercel AI Gateway](https://vercel.com/ai-gateway) fallback
- **Audio:** Edge TTS for phrases, Web Speech API for letters
- **Hosting:** [Vercel](https://vercel.com)
- **Analytics:** Vercel Analytics + Speed Insights
- **Tests:** [Vitest](https://vitest.dev) — 12 unit tests covering checkout allowlist, webhook idempotency, rate limiter

---

## 🏛 Data architecture

Three specialized stores, each with a clear role. Full details in [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

| Store | What it owns | Why |
|---|---|---|
| **Stripe** | Customers, payments, subscriptions, invoices | Source of truth for "did they pay?" |
| **Clerk** | Users, auth, plan (via `publicMetadata.plan`) | Source of truth for "can they access this?" — plan is read from the JWT on every page request |
| **Neon (Postgres)** | `LessonProgress`, `ExamResult` | Source of truth for "how far did they get?" — preserved even if subscription lapses |

The three are kept in sync by the Stripe webhook (`/api/stripe/webhook`). See the architecture doc for the full flow.

---

## 📁 Code layout

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout, Clerk provider, metadata
│   ├── sitemap.ts                  # Dynamic sitemap for SEO
│   ├── (auth)/                     # Sign-in, sign-up (Clerk) with shared logo header
│   ├── (legal)/                    # Terms, privacy, refund
│   ├── (dashboard)/                # Authenticated area
│   │   └── courses/
│   │       └── [lessonId]/layout.tsx   # ★ ACCESS CONTROL (plan-gated)
│   ├── checkout/success/           # Post-payment confirmation
│   └── api/
│       ├── stripe/
│       │   ├── checkout/           # Creates Stripe Checkout Session
│       │   ├── webhook/            # ★ Stripe → Clerk sync
│       │   └── portal/             # Customer portal
│       └── ai/
│           ├── tutor/              # In-lesson chat
│           ├── pronunciation/      # Pronunciation feedback
│           └── personalize/        # Personalized context
├── components/
│   ├── engine/                     # LessonShell + activity components (14+)
│   └── landing/                    # Landing page pieces
├── lib/
│   ├── stripe.ts                   # PLANS config + canAccessLesson()
│   ├── lessons/                    # 84 lesson data files (L1.1 → L10.F)
│   │   └── registry.ts             # lessonId → lesson module
│   └── ...
└── prisma/
    └── schema.prisma               # LessonProgress + ExamResult models
```

### Levels overview

| Level | Name | CEFR | Lessons |
|---|---|---|---|
| 1 | Foundations | A1 | 8 + final *(free)* |
| 2 | Building Blocks | A1–A2 | 8 + final |
| 3 | Elementary | A2 | 8 + final |
| 4 | Pre-Intermediate | A2–B1 | 8 + final |
| 5 | Intermediate | B1–B2 | 8 + final |
| 6 | Upper-Intermediate | B1–C1 | 8 + final |
| 7 | Advanced | B2–C1 | 8 + final |
| 8 | Specialization | B2–C1 | 8 + final |
| 9 | Cultural Immersion | C1 | 8 + final |
| 10 | Capstone | C1–C2 | 2 + final |

---

## 🚀 Getting started

### Prerequisites

- Node.js 20+
- Access to the project on [Vercel](https://vercel.com), [Stripe](https://stripe.com), [Clerk](https://clerk.com), [Neon](https://neon.tech)

### Local development

```bash
git clone https://github.com/EiliSierra/spanish-courses-platform.git
cd spanish-courses-platform
npm install

# Pull environment variables from Vercel (requires `npx vercel login` first)
npx vercel link
npx vercel env pull .env.local --environment=development

# Run locally
npm run dev
```

Visit `http://localhost:3000`.

### Running tests

```bash
npm run test:run          # one-shot, used in CI
npm run test              # watch mode for development
npm run test:coverage     # generates lcov coverage report
```

12 unit tests across `src/__tests__/`. All Stripe / Clerk / Prisma / fetch calls are mocked — no real services hit. CI runs `test:run` before `build` on every push and PR to `master`.

### Required environment variables

A partial list — see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for the full reference with purposes.

| Variable | Used by |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe server-side API |
| `STRIPE_WEBHOOK_SECRET` | Verifies Stripe webhook signatures (must match endpoint's signing secret) |
| `STRIPE_PRICE_PREMIUM_MONTHLY` · `_YEARLY` · `_LIFETIME` | Maps priceIds to plan names |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe.js browser checkout |
| `CLERK_SECRET_KEY` | Server-side Clerk API |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser Clerk auth |
| `DATABASE_URL` | Neon Postgres connection |
| `NEXT_PUBLIC_SITE_URL` | Sitemap, OG images |
| `OPENROUTER_API_KEY` | AI endpoints (tutor, pronunciation, personalize) |
| `VERCEL_AI_GATEWAY_*` | AI fallback provider |
| `UPSTASH_REDIS_REST_URL` · `_TOKEN` | Persistent rate limit for AI endpoints (falls back to in-memory if absent) |

**Never commit** `.env*` files. `.gitignore` already excludes them.

---

## 🚢 Deployment

Every push and PR to `master` runs CI on Linux: `typecheck` → `test:run` → `build`. CI must be green before deploying.

Production deploys currently ship manually:

```bash
npx vercel --prod
```

Auto-deploy on push to `master` is pending reauthorization of the Vercel ↔ GitHub integration (see [`docs/RUNBOOK.md`](./docs/RUNBOOK.md) section 7). Until then, deploy after each commit you want live.

### Health monitoring

- **Stripe webhook failures** → email alerts enabled by default to account owner
- **Weekly health check** → run `python D:\ClaudeEili\Scripts\weekly_health_check.py` to audit Stripe ↔ Clerk sync
- **Individual user debugging** → `python D:\ClaudeEili\Scripts\fix_charles_subscription.py` (edit `EMAIL` at top)

Detailed runbook in [`docs/RUNBOOK.md`](./docs/RUNBOOK.md).

---

## 🎨 Design system

- **Brand colors:** Primary `#2563eb` (blue) · Accent `#7c3aed` (purple)
- **Logo variants:** `public/logo-horizontal.png`, `public/logo-on-dark.png`, `public/logo-icon-only.png`
- **Font:** Inter (variable)
- **Light/dark theme:** automatic via `prefers-color-scheme` with user toggle in dashboard

---

## 🔬 About the method

The curriculum is developed by **Dr. Charles Martin, Ed.D.** — Doctorate in Curriculum and Instruction with specialization in Educational Technology (University of Florida), currently pursuing an M.S. in Technology Leadership at Brown University. 15+ years of instructional design experience spanning the U.S. Department of Defense, UCLA Health, Microsoft Education, and Morgan State University.

The platform applies:
- **Backward design from CEFR objectives** — every lesson starts with measurable outcomes
- **Universal Design for Learning (UDL)** — multiple means of engagement, representation, expression
- **Research-based L2 acquisition strategies** in online learning environments
- **Technology in service of learning** — AI, audio, adaptive review used because evidence supports them, not because they're trendy

---

## 📜 License

© 2026 Alexandria's Design LLC. All rights reserved.

The curriculum, lesson content, audio recordings, and branding are proprietary. The code is closed-source.

---

## 🤝 Contact

- Business & curriculum: `info@alexandriasdesign.com`
- Technical / operations: see [`docs/ONBOARDING.md`](./docs/ONBOARDING.md)
