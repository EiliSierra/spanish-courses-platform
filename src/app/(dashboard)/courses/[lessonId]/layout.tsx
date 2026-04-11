import { currentUser } from '@clerk/nextjs/server'
import { canAccessLesson, type PlanKey } from '@/lib/stripe'
import { redirect } from 'next/navigation'

export default async function LessonLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lessonId: string }>
}) {
  const { lessonId } = await params
  const user = await currentUser()
  const userPlan = (user?.publicMetadata?.plan as PlanKey) || 'free'

  if (!canAccessLesson(lessonId, userPlan)) {
    redirect('/#pricing')
  }

  return <>{children}</>
}
