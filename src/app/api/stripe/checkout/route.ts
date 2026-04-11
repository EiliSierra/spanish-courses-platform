import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { priceId } = await req.json()
  if (!priceId || typeof priceId !== 'string') {
    return NextResponse.json({ error: 'Missing priceId' }, { status: 400 })
  }

  const price = await stripe.prices.retrieve(priceId)
  const isSubscription = !!price.recurring

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? 'subscription' : 'payment',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.nextUrl.origin}/#pricing`,
    metadata: { clerkUserId: userId },
    client_reference_id: userId,
    ...(isSubscription
      ? { subscription_data: { metadata: { clerkUserId: userId } } }
      : { payment_intent_data: { metadata: { clerkUserId: userId } } }),
  })

  return NextResponse.json({ url: session.url })
}
