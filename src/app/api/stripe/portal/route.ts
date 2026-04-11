import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Find the Stripe customer linked to this Clerk user
  const customers = await stripe.customers.search({
    query: `metadata["clerkUserId"]:"${userId}"`,
  })

  if (customers.data.length === 0) {
    return NextResponse.json(
      { error: 'No billing account found. Please subscribe first.' },
      { status: 404 }
    )
  }

  const customerId = customers.data[0].id
  const returnUrl =
    process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })

  return NextResponse.json({ url: session.url })
}
