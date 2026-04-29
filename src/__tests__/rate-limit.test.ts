import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('rate limiter', () => {
  const originalEnv = { ...process.env }
  const originalFetch = global.fetch

  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    process.env = { ...originalEnv }
    global.fetch = vi.fn()
  })

  afterEach(() => {
    process.env = originalEnv
    global.fetch = originalFetch
  })

  it('falls back to the in-memory limiter when Upstash env vars are missing', async () => {
    delete process.env.UPSTASH_REDIS_REST_URL
    delete process.env.UPSTASH_REDIS_REST_TOKEN
    const { isRateLimited } = await import('@/lib/rate-limit')

    await expect(isRateLimited('user_123', 2, 60_000)).resolves.toBe(false)
    await expect(isRateLimited('user_123', 2, 60_000)).resolves.toBe(false)
    await expect(isRateLimited('user_123', 2, 60_000)).resolves.toBe(true)
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('uses the Upstash pipeline when configured and applies the ZCARD result', async () => {
    process.env.UPSTASH_REDIS_REST_URL = 'https://upstash.example.com'
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token'
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      json: vi
        .fn()
        .mockResolvedValue([{ result: 0 }, { result: 1 }, { result: 4 }, { result: 1 }]),
    } as unknown as Response)
    const { isRateLimited } = await import('@/lib/rate-limit')

    await expect(isRateLimited('user_456', 3, 60_000)).resolves.toBe(true)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://upstash.example.com/pipeline',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer token',
        }),
      })
    )
  })

  it('fails open when the Upstash request is non-ok', async () => {
    process.env.UPSTASH_REDIS_REST_URL = 'https://upstash.example.com'
    process.env.UPSTASH_REDIS_REST_TOKEN = 'token'
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 503,
    } as unknown as Response)
    const { isRateLimited } = await import('@/lib/rate-limit')

    await expect(isRateLimited('user_789', 3, 60_000)).resolves.toBe(false)
  })
})
