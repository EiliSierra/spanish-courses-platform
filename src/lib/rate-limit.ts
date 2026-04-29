// Rate limiter with two backends:
// 1. Upstash Redis (sliding window via sorted set) — when UPSTASH_REDIS_REST_URL
//    and UPSTASH_REDIS_REST_TOKEN are set. Persists across serverless instances.
// 2. In-memory Map fallback — when Upstash is not configured. Resets on cold start;
//    only meaningful for local dev or low-traffic single-instance deploys.
//
// Both backends are fail-open: if the backend errors, the request is allowed
// rather than blocked. Trade-off: better UX during outages, weaker abuse defense.

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
const useUpstash = !!(UPSTASH_URL && UPSTASH_TOKEN)

const hits = new Map<string, number[]>()

function inMemoryCheck(userId: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const userHits = hits.get(userId) ?? []
  const recent = userHits.filter((t) => now - t < windowMs)

  if (recent.length >= limit) {
    hits.set(userId, recent)
    return true
  }

  recent.push(now)
  hits.set(userId, recent)
  return false
}

type PipelineResponse = Array<{ result: number } | { error: string }>

async function upstashCheck(
  userId: string,
  limit: number,
  windowMs: number
): Promise<boolean> {
  const now = Date.now()
  const key = `rl:${userId}`
  const member = `${now}-${Math.random().toString(36).slice(2, 8)}`
  const lowerBound = now - windowMs

  try {
    const res = await fetch(`${UPSTASH_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        ['ZREMRANGEBYSCORE', key, '0', String(lowerBound)],
        ['ZADD', key, String(now), member],
        ['ZCARD', key],
        ['PEXPIRE', key, String(windowMs)],
      ]),
    })

    if (!res.ok) {
      console.warn(`[rate-limit] Upstash HTTP ${res.status}, allowing request`)
      return false
    }

    const data = (await res.json()) as PipelineResponse
    const cardEntry = data[2]
    if (!cardEntry || 'error' in cardEntry) {
      console.warn('[rate-limit] Upstash ZCARD error:', cardEntry)
      return false
    }
    return cardEntry.result > limit
  } catch (err) {
    console.warn('[rate-limit] Upstash request failed:', String(err))
    return false
  }
}

export async function isRateLimited(
  userId: string,
  limit: number = 20,
  windowMs: number = 60_000
): Promise<boolean> {
  if (useUpstash) {
    return upstashCheck(userId, limit, windowMs)
  }
  return inMemoryCheck(userId, limit, windowMs)
}
