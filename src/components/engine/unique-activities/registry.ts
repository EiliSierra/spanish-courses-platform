import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

type UniqueActivityComponent = ComponentType<{ onComplete?: () => void }>

const REGISTRY: Record<string, () => Promise<{ default: UniqueActivityComponent }>> = {
  OrderChallengeL14: () => import('./OrderChallengeL14'),
  SpellingChallengeL11: () => import('./SpellingChallengeL11'),
  ConversationBuilderL12: () => import('./ConversationBuilderL12'),
  NumberDictationL13: () => import('./NumberDictationL13'),
  DirectionRaceL15: () => import('./DirectionRaceL15'),
  PictureMatchL16: () => import('./PictureMatchL16'),
  MenuBuilderL17: () => import('./MenuBuilderL17'),
}

export function getUniqueActivity(id: string) {
  const loader = REGISTRY[id]
  if (!loader) return null
  return dynamic(loader, { ssr: false })
}
