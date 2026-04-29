import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'

const constructEventMock = vi.fn()
const subscriptionsRetrieveMock = vi.fn()
const findUniqueMock = vi.fn()
const upsertMock = vi.fn()

vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: {
      constructEvent: constructEventMock,
    },
    subscriptions: {
      retrieve: subscriptionsRetrieveMock,
    },
  },
}))

vi.mock('@/lib/db', () => ({
  prisma: {
    stripeEvent: {
      findUnique: findUniqueMock,
      upsert: upsertMock,
    },
  },
}))

function makeRequest(signature?: string) {
  return new NextRequest('https://example.com/api/stripe/webhook', {
    method: 'POST',
    body: JSON.stringify({ ok: true }),
    headers: signature ? { 'stripe-signature': signature } : undefined,
  })
}

describe('stripe webhook route', () => {
  const originalEnv = { ...process.env }
  const originalFetch = global.fetch

  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    process.env = {
      ...originalEnv,
      STRIPE_WEBHOOK_SECRET: 'whsec_test',
      STRIPE_PRICE_PREMIUM_MONTHLY: 'price_monthly',
      STRIPE_PRICE_PREMIUM_YEARLY: 'price_yearly',
      STRIPE_PRICE_LIFETIME: 'price_lifetime',
      CLERK_SECRET_KEY: 'sk_clerk_test',
    }
    global.fetch = vi.fn()
    findUniqueMock.mockResolvedValue(null)
    upsertMock.mockResolvedValue({})
    subscriptionsRetrieveMock.mockResolvedValue({
      metadata: { clerkUserId: 'user_123' },
      items: { data: [{ price: { id: 'price_monthly' } }] },
    })
  })

  afterEach(() => {
    process.env = originalEnv
    global.fetch = originalFetch
  })

  it('returns 400 when the stripe-signature header is missing', async () => {
    const { POST } = await import('@/app/api/stripe/webhook/route')

    const response = await POST(makeRequest())

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({ error: 'Missing signature' })
    expect(constructEventMock).not.toHaveBeenCalled()
  })

  it('returns 400 when signature verification fails', async () => {
    constructEventMock.mockImplementationOnce(() => {
      throw new Error('bad signature')
    })
    const { POST } = await import('@/app/api/stripe/webhook/route')

    const response = await POST(makeRequest('sig_test'))

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({ error: 'Invalid signature' })
  })

  it('acks duplicate events without processing them again', async () => {
    constructEventMock.mockReturnValueOnce({
      id: 'evt_seen',
      type: 'checkout.session.completed',
      data: { object: {} },
    })
    findUniqueMock.mockResolvedValueOnce({ id: 'evt_seen' })
    const { POST } = await import('@/app/api/stripe/webhook/route')

    const response = await POST(makeRequest('sig_seen'))

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({
      received: true,
      idempotent: true,
    })
    expect(subscriptionsRetrieveMock).not.toHaveBeenCalled()
    expect(global.fetch).not.toHaveBeenCalled()
    expect(upsertMock).not.toHaveBeenCalled()
  })

  it('returns 500 for new events when downstream processing fails and leaves the event unrecorded', async () => {
    constructEventMock.mockReturnValueOnce({
      id: 'evt_fail',
      type: 'checkout.session.completed',
      data: {
        object: {
          metadata: { clerkUserId: 'user_123' },
          mode: 'subscription',
          subscription: 'sub_123',
        },
      },
    })
    subscriptionsRetrieveMock.mockResolvedValueOnce({
      metadata: { clerkUserId: 'user_123' },
      items: { data: [{ price: { id: 'price_monthly' } }] },
    })
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: vi.fn().mockResolvedValue('clerk failed'),
    } as unknown as Response)
    const { POST } = await import('@/app/api/stripe/webhook/route')

    const response = await POST(makeRequest('sig_fail'))

    expect(response.status).toBe(500)
    await expect(response.json()).resolves.toEqual({
      error: 'Internal error processing webhook',
    })
    expect(upsertMock).not.toHaveBeenCalled()
  })

  it('records new events after successful processing', async () => {
    constructEventMock.mockReturnValueOnce({
      id: 'evt_ok',
      type: 'checkout.session.completed',
      data: {
        object: {
          metadata: { clerkUserId: 'user_123' },
          mode: 'subscription',
          subscription: 'sub_ok',
        },
      },
    })
    subscriptionsRetrieveMock.mockResolvedValueOnce({
      metadata: { clerkUserId: 'user_123' },
      items: { data: [{ price: { id: 'price_yearly' } }] },
    })
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      text: vi.fn().mockResolvedValue(''),
    } as unknown as Response)
    const { POST } = await import('@/app/api/stripe/webhook/route')

    const response = await POST(makeRequest('sig_ok'))

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ received: true })
    expect(upsertMock).toHaveBeenCalledWith({
      where: { id: 'evt_ok' },
      create: { id: 'evt_ok', type: 'checkout.session.completed' },
      update: {},
    })
  })
})
