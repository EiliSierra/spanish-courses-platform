import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/db'
import Stripe from 'stripe'

class ClerkUpdateError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ClerkUpdateError'
  }
}

// Throws on failure so the webhook handler can return 500 and Stripe will retry.
async function setUserPlan(clerkUserId: string, plan: string): Promise<void> {
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
    throw new ClerkUpdateError(
      `Clerk metadata update failed (${res.status}): ${await res.text()}`
    )
  }
}

function getPlanFromPrice(priceId: string): string {
  if (priceId === process.env.STRIPE_PRICE_PREMIUM_MONTHLY) return 'premium_monthly'
  if (priceId === process.env.STRIPE_PRICE_PREMIUM_YEARLY) return 'premium_yearly'
  if (priceId === process.env.STRIPE_PRICE_LIFETIME) return 'lifetime'
  return 'free'
}

async function processEvent(event: Stripe.Event): Promise<void> {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const clerkUserId = session.metadata?.clerkUserId || session.client_reference_id
      if (!clerkUserId) return

      if (session.mode === 'payment') {
        await setUserPlan(clerkUserId, 'lifetime')
      } else if (session.mode === 'subscription' && session.subscription) {
        const subId =
          typeof session.subscription === 'string'
            ? session.subscription
            : session.subscription.id
        const sub = await stripe.subscriptions.retrieve(subId)
        const priceId = sub.items.data[0]?.price?.id
        if (priceId) {
          await setUserPlan(clerkUserId, getPlanFromPrice(priceId))
        }
      }
      return
    }

    case 'invoice.paid': {
      const invoice = event.data.object as Stripe.Invoice
      const subId =
        (invoice as unknown as { subscription: string | null }).subscription ||
        (invoice as unknown as {
          parent?: { subscription_details?: { subscription: string } }
        }).parent?.subscription_details?.subscription
      if (!subId) return

      const sub = await stripe.subscriptions.retrieve(subId)
      const clerkUserId = sub.metadata?.clerkUserId
      if (!clerkUserId) return

      const priceId = sub.items.data[0]?.price?.id
      if (priceId) {
        await setUserPlan(clerkUserId, getPlanFromPrice(priceId))
      }
      return
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const clerkUserId = sub.metadata?.clerkUserId
      if (clerkUserId) {
        await setUserPlan(clerkUserId, 'free')
      }
      return
    }
  }
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

  // Idempotency: if we already processed this event, ack with 200.
  const seen = await prisma.stripeEvent.findUnique({ where: { id: event.id } })
  if (seen) {
    return NextResponse.json({ received: true, idempotent: true })
  }

  try {
    await processEvent(event)
  } catch (err) {
    console.error(
      `Webhook handler failed for ${event.type} (${event.id}):`,
      err
    )
    // Return 500 so Stripe retries with its built-in exponential backoff.
    return NextResponse.json(
      { error: 'Internal error processing webhook' },
      { status: 500 }
    )
  }

  // Mark as processed only after side effects committed.
  // Upsert handles parallel re-deliveries that race past the findUnique above.
  await prisma.stripeEvent.upsert({
    where: { id: event.id },
    create: { id: event.id, type: event.type },
    update: {},
  })

  return NextResponse.json({ received: true })
}
