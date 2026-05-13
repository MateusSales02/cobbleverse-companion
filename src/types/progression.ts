export type GymProgress = {
  gymName: string

  completed: boolean

  badge?: string
}

export type Elite4Progress = {
  completed: boolean

  championDefeated: boolean
}

export type PlayerProgression = {
  currentRegion: string

  unlockedRegions: string[]

  completedRegions: string[]

  gyms: GymProgress[]

  elite4: Elite4Progress

  currentObjectives: string[]

  activeTeamId?: string

  legendaryTargets: number[]
}