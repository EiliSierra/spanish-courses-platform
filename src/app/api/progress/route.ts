import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'

// GET /api/progress?lessonId=L1.1  — fetch progress for one lesson
// GET /api/progress                — fetch all progress for the user
export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const lessonId = req.nextUrl.searchParams.get('lessonId')

  if (lessonId) {
    const progress = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    })
    return NextResponse.json({ progress })
  }

  // All progress for dashboard
  const progress = await prisma.lessonProgress.findMany({
    where: { userId },
    orderBy: { lastAccess: 'desc' },
  })
  return NextResponse.json({ progress })
}

// POST /api/progress — save/update progress for a lesson
export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { lessonId, sectionStates, quizScore, quizMax, quizPassed, progressPct } = await req.json()

  if (!lessonId || typeof lessonId !== 'string') {
    return NextResponse.json({ error: 'lessonId required' }, { status: 400 })
  }

  const progress = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: {
      sectionStates: sectionStates ?? {},
      quizScore: quizScore ?? null,
      quizMax: quizMax ?? null,
      quizPassed: quizPassed ?? false,
      progressPct: progressPct ?? 0,
      lastAccess: new Date(),
    },
    create: {
      userId,
      lessonId,
      sectionStates: sectionStates ?? {},
      quizScore: quizScore ?? null,
      quizMax: quizMax ?? null,
      quizPassed: quizPassed ?? false,
      progressPct: progressPct ?? 0,
    },
  })

  return NextResponse.json({ progress })
}
