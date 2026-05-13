export type ObjectivePriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical"

export type ObjectiveCategory =
  | "Main"
  | "Side"
  | "Legendary"
  | "Collection"
  | "Team"
  | "Build"

export type Objective = {
  id: string

  title: string

  description?: string

  category: ObjectiveCategory

  priority: ObjectivePriority

  completed: boolean

  relatedRegion?: string

  rewards?: string[]

  createdAt?: string
}