import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

type UniqueActivityComponent = ComponentType<{ onComplete?: () => void }>

const REGISTRY: Record<string, () => Promise<{ default: UniqueActivityComponent }>> = {
  OrderChallengeL14: () => import('./OrderChallengeL14'),
}

export function getUniqueActivity(id: string) {
  const loader = REGISTRY[id]
  if (!loader) return null
  return dynamic(loader, { ssr: false })
}
