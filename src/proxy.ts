import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/profile(.*)',
  '/courses(.*)',
])

const isPublicApiRoute = createRouteMatcher([
  '/api/ai(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  // Allow AI API routes without auth check (they're called from authenticated pages)
  if (isPublicApiRoute(req)) return
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp3|mp4)).*)',
    '/(api|trpc)(.*)',
  ],
}
