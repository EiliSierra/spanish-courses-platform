# Runbook — Operational Playbook

**Last updated:** 2026-04-22

This document is a "what to do when X happens" playbook. Look up the situation → follow the steps. Each entry is self-contained.

---

## Index

1. [A user paid but doesn't have access](#1-a-user-paid-but-doesnt-have-access)
2. [The Stripe webhook is failing](#2-the-stripe-webhook-is-failing)
3. [A user wants a refund](#3-a-user-wants-a-refund)
4. [A user wants to cancel their subscription](#4-a-user-wants-to-cancel-their-subscription)
5. [How to view all paying customers](#5-how-to-view-all-paying-customers)
6. [How to check monthly revenue](#6-how-to-check-monthly-revenue)
7. [A deploy to production](#7-deploying-to-production)
8. [An env var needs updating](#8-an-env-var-needs-updating)
9. [The site is down or slow](#9-the-site-is-down-or-slow)
10. [Weekly health check](#10-weekly-health-check)

---

## 1. A user paid but doesn't have access

**Symptom:** User says "I paid but lessons are locked." Most common cause: webhook failed so plan in Clerk is still `free`.

### Steps

1. **Get from the user:** email they used, approximate payment time (with timezone).
2. **Run the diagnostic script:**
   ```bash
   # Edit EMAIL variable at top of script
   cd D:\ClaudeEili\Scripts
   python fix_charles_subscription.py
   ```
   The script:
   - Pulls Vercel production env vars (`.env.prod.tmp`)
   - Finds the Stripe customer by email
   - Checks their active subscription and payments
   - Finds the Clerk user by email
   - Compares plan in Clerk vs Stripe
   - If mismatch → updates Clerk metadata
   - Deletes the env file when done

3. **Tell the user to log out and log back in.** Clerk caches the plan in the JWT for up to 1 hour — a fresh login forces a new JWT with the updated plan.

4. **Verify the webhook that failed:** go to Stripe Dashboard → Developers → Events → find the user's `checkout.session.completed` → check its delivery status. If still in red, resend it manually.

5. **Check root cause:** if many users have this issue, the webhook signing secret is probably out of sync. See section 2.

---

## 2. The Stripe webhook is failing

**Symptom:** In Stripe Dashboard → Developers → Webhooks → `sophisticated-excellence` endpoint, error rate is > 0%. Common error: `Invalid signature`.

### Steps

1. **Confirm the error.** Click the endpoint → Event deliveries. Look at a failed delivery → Response tab → see the exact error.

2. **If "Invalid signature":** the `STRIPE_WEBHOOK_SECRET` in Vercel does not match the signing secret of this specific endpoint.
   - Go to Stripe Dashboard → Developers → Webhooks → click endpoint → **Signing secret** → Reveal and copy.
   - Go to Vercel → Settings → Environment Variables → find `STRIPE_WEBHOOK_SECRET` → Edit → paste new value → Save (Production only).
   - Redeploy: `npx vercel --prod` from the project directory.
   - Resend the failed events in Stripe Dashboard — they should go to 200 OK.

3. **If "404 Not Found" or similar:** the endpoint URL is wrong. Current URL should be `https://spanish-courses-platform.vercel.app/api/stripe/webhook` (the Vercel canonical alias) or equivalent for the custom domain. Update in Stripe if needed.

4. **If "500 Internal Server Error":** bug in our code. Check Vercel runtime logs, fix, redeploy.

5. **Fix any users affected during the outage** (section 1).

---

## 3. A user wants a refund

### Steps

1. Go to Stripe Dashboard → Payments → search by email or payment ID.
2. Click the payment → Refund button (top right) → enter amount → Confirm.
3. Stripe will:
   - Refund the card (shows on their bank in 5-10 business days)
   - Automatically cancel the subscription (if it was recurring)
   - Fire webhook `customer.subscription.deleted`
   - Our code → sets their plan to `free` on next page load.
4. Email the user confirming the refund.

**Policy reference:** `src/app/(legal)/refund/page.tsx` — check terms first (usually 7 days, etc.).

---

## 4. A user wants to cancel their subscription

### Option A — user does it themselves

Our site has a Stripe Customer Portal (`/api/stripe/portal` → opens the Stripe-hosted page). If exposed in the dashboard UI, they can cancel there.

### Option B — cancel for them

1. Stripe Dashboard → Customers → find by email → Subscriptions tab.
2. Click the active subscription → Cancel subscription.
3. Choose: "Cancel immediately" (plan = free right now) OR "At period end" (they keep access until the renewal date).
4. Webhook fires `customer.subscription.deleted` (or `.updated` for period-end cancel).

---

## 5. How to view all paying customers

- **Stripe Dashboard → Customers** (with filter: has active subscription)
- **Clerk Dashboard → Users** (filter by `publicMetadata.plan != 'free'`)
- **Script:** `python D:\ClaudeEili\Scripts\weekly_health_check.py` produces a full report.

---

## 6. How to check monthly revenue

- **Stripe Dashboard → Reports → Net volume** — monthly totals, MoM growth.
- **Stripe Dashboard → Home** — quick glance of this month vs last.
- Export CSV from Reports if needed for accounting.

---

## 7. Deploying to production

### Normal flow (once auto-deploy is fixed)

1. `git push origin master` → Vercel auto-detects → builds → deploys.

### Manual (current state — auto-deploy broken)

1. From `D:\ClaudeEili\Proyectos\SpanishCourses-Next`:
   ```bash
   npx vercel --prod --yes
   ```
2. Takes ~1-2 min. Returns a deploy URL. Vercel automatically aliases the production domain.

### If deploy fails

Check Vercel dashboard → Deployments → the failed deploy → Build logs. Common issues:
- TypeScript error → fix and retry
- Missing env var → add in Vercel settings
- Prisma client out of date → `npx prisma generate` locally, commit, retry

---

## 8. An env var needs updating

1. Vercel Dashboard → Settings → Environment Variables.
2. Find the variable → click `⋯` → Edit → update value → Save.
3. Make sure only the right environment is checked (Production / Preview / Development).
4. Redeploy: `npx vercel --prod` (env vars only apply after a new deploy).

**For local development:** also update `.env.local` with the same value.

**NEVER** commit env vars to git. `.env.local` and `.env.prod.tmp` are in `.gitignore`.

---

## 9. The site is down or slow

### Site down (all users affected)

1. Check Vercel Dashboard → Deployments → is there a recent failed deploy? If yes, rollback to the last healthy deploy (click `⋯` → Promote to Production on the healthy one).
2. Check `status.vercel.com`, `status.stripe.com`, `status.clerk.com`, `status.neon.tech` — might be upstream.
3. Check Vercel runtime logs for spikes of 5xx errors.

### Slow responses

1. Vercel Dashboard → Analytics → Web Vitals — look for regressions.
2. Check specific routes in the Runtime Logs.
3. Neon console → slow queries tab.
4. AI endpoints (`/api/ai/*`) can be slow when OpenRouter is rate-limited — fallback is Vercel AI Gateway (already configured).

---

## 10. Weekly health check

Run every Sunday (or whenever):

```bash
python D:\ClaudeEili\Scripts\weekly_health_check.py
```

The script:
- Lists all active Stripe subscriptions.
- For each, verifies the user in Clerk has the matching plan.
- Reports mismatches (paid in Stripe but `plan = free` in Clerk, or vice versa).
- Sends an email summary to the admin.

Run whenever you suspect something is off or want a snapshot.

---

## Scripts directory

All operational scripts live in `D:\ClaudeEili\Scripts\`:

| Script | What it does |
|---|---|
| `fix_charles_subscription.py` | Diagnose a single user (by email) and fix their plan if Stripe ↔ Clerk is out of sync |
| `weekly_health_check.py` | Full audit of all paying customers, emails report |

All scripts pull Vercel production env vars temporarily into `.env.prod.tmp` and delete it when done, so they always use the live keys without you having to manage them.
