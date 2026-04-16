// Simple in-memory sliding-window rate limiter.
// Resets on deploy/restart — acceptable for a Vercel serverless app
// because each cold start gets a fresh map, and the window is short.

const hits = new Map<string, number[]>()

/**
 * Check if a user has exceeded the rate limit.
 * @param userId  Clerk user ID
 * @param limit   Max requests allowed in the window
 * @param windowMs  Window size in milliseconds (default 60s)
 * @returns true if the request should be BLOCKED
 */
export function isRateLimited(
  userId: string,
  limit: number = 20,
  windowMs: number = 60_000
): boolean {
  const now = Date.now()
  const userHits = hits.get(userId) ?? []

  // Remove entries outside the window
  const recent = userHits.filter((t) => now - t < windowMs)

  if (recent.length >= limit) {
    hits.set(userId, recent)
    return true
  }

  recent.push(now)
  hits.set(userId, recent)
  return false
}
