import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'

const authMock = vi.fn()
const customersSearchMock = vi.fn()
const customersCreateMock = vi.fn()
const pricesRetrieveMock = vi.fn()
const checkoutCreateMock = vi.fn()

vi.mock('@clerk/nextjs/server', () => ({
  auth: authMock,
}))

vi.mock('@/lib/stripe', () => ({
  stripe: {
    customers: {
      search: customersSearchMock,
      create: customersCreateMock,
    },
    prices: {
      retrieve: pricesRetrieveMock,
    },
    checkout: {
      sessions: {
        create: checkoutCreateMock,
      },
    },
  },
}))

function makeRequest(body: unknown) {
  return new NextRequest('https://example.com/api/stripe/checkout', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('stripe checkout route', () => {
  const originalEnv = { ...process.env }

  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    process.env = {
      ...originalEnv,
      STRIPE_PRICE_PREMIUM_MONTHLY: 'price_monthly',
      STRIPE_PRICE_PREMIUM_YEARLY: 'price_yearly',
      STRIPE_PRICE_LIFETIME: 'price_lifetime',
    }
    authMock.mockResolvedValue({ userId: 'user_123' })
    customersSearchMock.mockResolvedValue({ data: [{ id: 'cus_existing' }] })
    customersCreateMock.mockResolvedValue({ id: 'cus_new' })
    pricesRetrieveMock.mockResolvedValue({ recurring: { interval: 'month' } })
    checkoutCreateMock.mockResolvedValue({ url: 'https://checkout.stripe.test/session' })
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('returns 401 for unauthenticated requests', async () => {
    authMock.mockResolvedValueOnce({ userId: null })
    const { POST } = await import('@/app/api/stripe/checkout/route')

    const response = await POST(makeRequest({ priceId: 'price_monthly' }))

    expect(response.status).toBe(401)
    await expect(response.json()).resolves.toEqual({ error: 'Unauthorized' })
    expect(checkoutCreateMock).not.toHaveBeenCalled()
  })

  it('returns 400 when priceId is missing', async () => {
    const { POST } = await import('@/app/api/stripe/checkout/route')

    const response = await POST(makeRequest({}))

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({ error: 'Missing priceId' })
    expect(customersSearchMock).not.toHaveBeenCalled()
  })

  it('returns 400 for priceIds outside the allowlist without calling Stripe', async () => {
    const { POST } = await import('@/app/api/stripe/checkout/route')

    const response = await POST(makeRequest({ priceId: 'price_bad' }))

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({ error: 'Invalid priceId' })
    expect(customersSearchMock).not.toHaveBeenCalled()
    expect(pricesRetrieveMock).not.toHaveBeenCalled()
    expect(checkoutCreateMock).not.toHaveBeenCalled()
  })

  it('creates a checkout session for an allowlisted priceId', async () => {
    const { POST } = await import('@/app/api/stripe/checkout/route')

    const response = await POST(makeRequest({ priceId: 'price_monthly' }))

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({
      url: 'https://checkout.stripe.test/session',
    })
    expect(customersSearchMock).toHaveBeenCalledWith({
      query: 'metadata["clerkUserId"]:"user_123"',
    })
    expect(pricesRetrieveMock).toHaveBeenCalledWith('price_monthly')
    expect(checkoutCreateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: 'subscription',
        customer: 'cus_existing',
        line_items: [{ price: 'price_monthly', quantity: 1 }],
        metadata: { clerkUserId: 'user_123' },
        client_reference_id: 'user_123',
      })
    )
  })
})
