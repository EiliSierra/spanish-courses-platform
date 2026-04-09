import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

// Clerk's Backend API to set user metadata
async function setUserPlan(clerkUserId: string, plan: string) {
  const res = await fetch(`https://api.clerk.com/v1/users/${clerkUserId}/metadata`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      public_metadata: { plan, updatedAt: new Date().toISOString() },
    }),
  })
  if (!res.ok) {
    console.error('Failed to update Clerk metadata:', await res.text())
  }
}

function getPlanFromPrice(priceId: string): string {
  if (priceId === process.env.STRIPE_PRICE_PREMIUM_MONTHLY) return 'premium_monthly'
  if (priceId === process.env.STRIPE_PRICE_PREMIUM_YEARLY) return 'premium_yearly'
  if (priceId === process.env.STRIPE_PRICE_LIFETIME) return 'lifetime'
  return 'free'
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const clerkUserId = session.metadata?.clerkUserId || session.client_reference_id
      if (!clerkUserId) break

      if (session.mode === 'payment') {
        // Lifetime one-time payment
        await setUserPlan(clerkUserId, 'lifetime')
      }
      // For subscriptions, the plan is set via invoice.paid
      break
    }

    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice
      const subId = (invoice as unknown as { subscription: string | null }).subscription
      if (!subId) break

      const sub = await stripe.subscriptions.retrieve(subId)
      const clerkUserId = sub.metadata?.clerkUserId
      if (!clerkUserId) break

      const priceId = sub.items.data[0]?.price?.id
      if (priceId) {
        await setUserPlan(clerkUserId, getPlanFromPrice(priceId))
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const clerkUserId = sub.metadata?.clerkUserId
      if (clerkUserId) {
        await setUserPlan(clerkUserId, 'free')
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
