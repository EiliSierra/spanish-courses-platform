# Architecture — Alexandria's Language Institute

**Last updated:** 2026-04-22

This document explains how the platform is wired together: which systems store what data, how they talk to each other, and what happens during critical flows (payment, access control, subscription expiration).

---

## 1. High-level diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                   alexandriaslanguages.com (Vercel)                 │
│                                                                     │
│   Next.js 16 app  ───────┬───────────────┬────────────────┐         │
│                          │               │                │         │
│                          ▼               ▼                ▼         │
│                   ┌──────────┐     ┌──────────┐    ┌────────────┐   │
│                   │  CLERK   │     │  STRIPE  │    │  NEON DB   │   │
│                   │          │     │          │    │ (Postgres) │   │
│                   │  Users   │◄───►│ Customers│    │            │   │
│                   │  Plan    │     │ Subs     │    │ Progress   │   │
│                   │  Auth    │     │ Payments │    │ Exams      │   │
│                   └──────────┘     └──────────┘    └────────────┘   │
│                          ▲               │                          │
│                          │    webhook    │                          │
│                          └───────────────┘                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. The three "databases" and their roles

### 2.1 Stripe — source of truth for PAYMENTS

Stores:
- **Customers** — each paying user, with email and `metadata.clerkUserId`
- **Subscriptions** — active / past_due / canceled, with link to Price ID
- **Payments / Invoices** — history of successful + failed charges
- **Prices** — the 3 products: `STRIPE_PRICE_PREMIUM_MONTHLY`, `STRIPE_PRICE_PREMIUM_YEARLY`, `STRIPE_PRICE_LIFETIME`

Do not duplicate this data locally. Always query Stripe when asking "did this user pay?".

### 2.2 Clerk — source of truth for USERS and ACCESS

Stores:
- **Users** — each registered account, with email, avatar, auth method
- **`user.publicMetadata.plan`** — one of `free | premium_monthly | premium_yearly | lifetime`

This is what the app reads at every request to decide lesson access. Clerk returns the plan inside the JWT, so we avoid hitting the database on every page load.

### 2.3 Neon (Postgres via Prisma) — source of truth for PROGRESS

Stores (see `prisma/schema.prisma`):
- **`LessonProgress`** — one row per (userId, lessonId). Tracks section states, quiz score, progress percentage.
- **`ExamResult`** — one row per exam attempt. Tracks score, pass/fail, timestamp.

Progress is **preserved** even if a user downgrades. If they cancel → re-subscribe 6 months later, their progress is intact.

---

## 3. Critical flow: a successful payment

```
1. User lands on /#pricing → clicks "Start monthly"
2. Browser → POST /api/stripe/checkout with priceId
3. Server creates Stripe Customer (or finds existing) with metadata.clerkUserId
4. Server creates Stripe Checkout Session with metadata.clerkUserId
5. Browser → redirected to Stripe-hosted checkout page
6. User enters card → Stripe charges card
7. Stripe → POST /api/stripe/webhook with event "checkout.session.completed"
8. Webhook verifies signature using STRIPE_WEBHOOK_SECRET
9. Webhook extracts clerkUserId from session.metadata
10. Webhook determines plan from priceId (monthly / yearly / lifetime)
11. Webhook → PATCH api.clerk.com/users/{id}/metadata with new plan
12. User → redirected to /checkout/success
13. Next page load → Clerk JWT re-issued with updated plan
14. User can now open any lesson up to maxLevel of their plan
```

**Critical env vars for this flow:**
- `STRIPE_SECRET_KEY` — server → Stripe
- `STRIPE_WEBHOOK_SECRET` — validates incoming webhook (must match the Stripe webhook endpoint's signing secret)
- `CLERK_SECRET_KEY` — server → Clerk
- `STRIPE_PRICE_PREMIUM_MONTHLY` / `_YEARLY` / `_LIFETIME` — to map incoming priceIds to plan names

---

## 4. Access control — how a lesson page checks access

At `src/app/(dashboard)/courses/[lessonId]/layout.tsx`:

```typescript
const user = await currentUser()
const userPlan = user?.publicMetadata?.plan ?? 'free'

if (!canAccessLesson(lessonId, userPlan)) {
  redirect('/#pricing')
}
```

`canAccessLesson` (in `src/lib/stripe.ts`) is trivially simple:

```typescript
const PLANS = {
  free:            { maxLevel: 1 },   // only Level 1
  premium_monthly: { maxLevel: 10 },  // all 10 levels
  premium_yearly:  { maxLevel: 10 },
  lifetime:        { maxLevel: 10 },
}
```

Lesson IDs follow the pattern `L{level}.{number}` (e.g. `L3.5`, `L10.F`). The function parses the level and compares to `maxLevel`. **Access is binary — all levels or just Level 1.** It does NOT gate by "progress completed so far".

---

## 5. Subscription expiration flow

```
Day 30 (renewal day):
- Stripe attempts to charge the saved card.
  └── Success → webhook "invoice.paid" → plan stays as premium_monthly

If payment fails:
- Day 30: charge fails. Subscription status → past_due.
  └── User KEEPS ACCESS for now.
- Days 31-37: Stripe retries 3-4 times automatically (configurable).
- Day 38 (approx): If all retries fail → subscription → canceled.
  └── Webhook "customer.subscription.deleted" fires.
  └── Our code sets user.publicMetadata.plan = 'free'.
  └── Next page load: user sees only Level 1 content.

If they re-subscribe later:
- New "checkout.session.completed" webhook → plan = premium_monthly again.
- Their LessonProgress and ExamResult data in Neon was preserved.
- They pick up exactly where they left off.
```

**Grace period:** ~7-10 days by default. Can be tightened or extended in Stripe Dashboard → Settings → Billing → Subscriptions and emails.

---

## 6. Environment variables reference

All live in Vercel → Settings → Environment Variables (Production). Local mirror in `.env.local` for development.

| Variable | Purpose | Rotate if |
|---|---|---|
| `STRIPE_SECRET_KEY` | Server calls to Stripe API | Leaked publicly |
| `STRIPE_WEBHOOK_SECRET` | Validates incoming Stripe webhook signatures | **Each new webhook endpoint** — must match Stripe's signing secret |
| `STRIPE_PRICE_PREMIUM_MONTHLY` | Maps Stripe priceId → 'premium_monthly' plan | Prices change in Stripe |
| `STRIPE_PRICE_PREMIUM_YEARLY` | Same, yearly | Same |
| `STRIPE_PRICE_LIFETIME` | Same, lifetime | Same |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Browser → Stripe.js | Rarely |
| `CLERK_SECRET_KEY` | Server → Clerk API | Leaked |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Browser Clerk auth | Rarely |
| `DATABASE_URL` | Neon Postgres connection | Leaked |
| `NEXT_PUBLIC_SITE_URL` | Used by sitemap.ts, OG images | Domain changes |
| `OPENROUTER_API_KEY` | AI tutor / pronunciation / personalize | Billing issue |
| `VERCEL_AI_GATEWAY_*` | Fallback for AI endpoints | Provider change |

---

## 7. Key integrations & dashboards

| Tool | URL | What you see |
|---|---|---|
| Vercel | `vercel.com/charles-martins-projects-94f292e0/spanish-courses-platform` | Deploys, env vars, runtime logs |
| Stripe | `dashboard.stripe.com` | Customers, payments, webhooks, events |
| Clerk | `dashboard.clerk.com` | Users, metadata, auth logs |
| Neon | `console.neon.tech` | Database tables, queries, connection pool |
| OpenRouter | `openrouter.ai/activity` | AI model usage, costs |

See `RUNBOOK.md` for common operational tasks.
