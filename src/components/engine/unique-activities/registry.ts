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
  ScheduleBuilderL18: () => import('./ScheduleBuilderL18'),
  SymptomCheckerL21: () => import('./SymptomCheckerL21'),
  WeatherForecastL22: () => import('./WeatherForecastL22'),
  PlanBuilderL23: () => import('./PlanBuilderL23'),
  HotelCheckinL24: () => import('./HotelCheckinL24'),
  BoardingPassL25: () => import('./BoardingPassL25'),
  OutfitBuilderL26: () => import('./OutfitBuilderL26'),
  WhoIsItL27: () => import('./WhoIsItL27'),
  JobInterviewL28: () => import('./JobInterviewL28'),
  StoryBuilderL31: () => import('./StoryBuilderL31'),
  RoomDesignerL32: () => import('./RoomDesignerL32'),
  AppNavigatorL33: () => import('./AppNavigatorL33'),
  RecipeBuilderL34: () => import('./RecipeBuilderL34'),
  HobbyMatchL35: () => import('./HobbyMatchL35'),
  EcoQuizL36: () => import('./EcoQuizL36'),
  FestivalMatchL37: () => import('./FestivalMatchL37'),
  PostcardWriterL38: () => import('./PostcardWriterL38'),
  MemoryLaneL41: () => import('./MemoryLaneL41'),
  SubjunctiveDetectorL42: () => import('./SubjunctiveDetectorL42'),
}

export function getUniqueActivity(id: string) {
  const loader = REGISTRY[id]
  if (!loader) return null
  return dynamic(loader, { ssr: false })
}
