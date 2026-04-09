/**
 * Run once to create products and prices in Stripe.
 * Usage: npx tsx scripts/setup-stripe-products.ts
 *
 * After running, copy the price IDs into .env.local
 */

import Stripe from 'stripe'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local manually (no dotenv dependency needed)
const envFile = readFileSync(resolve(__dirname, '../.env.local'), 'utf-8')
for (const line of envFile.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) continue
  const eqIdx = trimmed.indexOf('=')
  if (eqIdx === -1) continue
  const key = trimmed.slice(0, eqIdx)
  const val = trimmed.slice(eqIdx + 1)
  process.env[key] = val
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

async function main() {
  console.log('Creating Stripe products and prices...\n')

  // 1. Create the product
  const product = await stripe.products.create({
    name: "Alexandria's Language Institute — Spanish Course",
    description: 'Interactive Spanish courses from A1 to C2. 74 lessons, 4,400+ audio clips, 10 levels.',
    metadata: { app: 'spanish-courses' },
  })
  console.log(`Product created: ${product.id}`)

  // 2. Premium Monthly — $14.99/month
  const premiumMonthly = await stripe.prices.create({
    product: product.id,
    unit_amount: 1499, // cents
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'premium_monthly' },
  })
  console.log(`Premium Monthly price: ${premiumMonthly.id}`)

  // 3. Premium Yearly — $119/year (save 34%)
  const premiumYearly = await stripe.prices.create({
    product: product.id,
    unit_amount: 11900,
    currency: 'usd',
    recurring: { interval: 'year' },
    metadata: { plan: 'premium_yearly' },
  })
  console.log(`Premium Yearly price: ${premiumYearly.id}`)

  // 4. Lifetime — $199 one-time
  const lifetime = await stripe.prices.create({
    product: product.id,
    unit_amount: 19900,
    currency: 'usd',
    metadata: { plan: 'lifetime' },
  })
  console.log(`Lifetime price: ${lifetime.id}`)

  console.log('\n✅ Done! Add these to your .env.local:\n')
  console.log(`STRIPE_PRICE_PREMIUM_MONTHLY=${premiumMonthly.id}`)
  console.log(`STRIPE_PRICE_PREMIUM_YEARLY=${premiumYearly.id}`)
  console.log(`STRIPE_PRICE_LIFETIME=${lifetime.id}`)
  console.log(`STRIPE_PRODUCT_ID=${product.id}`)
}

main().catch(console.error)
