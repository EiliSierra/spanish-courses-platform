import Stripe from 'stripe'

// Lazy Stripe client. Constructing at import time crashes the build's
// "collect page data" step when STRIPE_SECRET_KEY isn't present (CI dummies,
// Preview deploys without env vars). Defer until first request.

let _stripe: Stripe | undefined

function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    _stripe = new Stripe(key, { typescript: true })
  }
  return _stripe
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    return Reflect.get(getStripe(), prop, receiver)
  },
})

export const PLANS = {
  free: {
    name: 'Free',
    maxLevel: 1,
    priceMonthly: null,
    priceYearly: null,
    priceLifetime: null,
  },
  premium_monthly: {
    name: 'Premium Monthly',
    maxLevel: 10,
    stripePriceId: process.env.STRIPE_PRICE_PREMIUM_MONTHLY,
  },
  premium_yearly: {
    name: 'Premium Yearly',
    maxLevel: 10,
    stripePriceId: process.env.STRIPE_PRICE_PREMIUM_YEARLY,
  },
  lifetime: {
    name: 'Lifetime',
    maxLevel: 10,
    stripePriceId: process.env.STRIPE_PRICE_LIFETIME,
  },
} as const

export type PlanKey = keyof typeof PLANS

/**
 * Given a user's plan, return the max level they can access.
 * Levels 1 = free, 2-10 = paid.
 */
export function getMaxLevel(plan: PlanKey): number {
  return PLANS[plan].maxLevel
}

/**
 * Check if a user can access a specific lesson.
 * Lesson IDs are like "L1.1", "L5.3", "L10.F"
 */
export function canAccessLesson(lessonId: string, plan: PlanKey): boolean {
  const levelMatch = lessonId.match(/^L(\d+)/)
  if (!levelMatch) return false
  const level = parseInt(levelMatch[1], 10)
  return level <= getMaxLevel(plan)
}
