export type BuildRole =
  | "Lead"
  | "Sweeper"
  | "Wallbreaker"
  | "Tank"
  | "Support"
  | "Pivot"
  | "Setup"
  | "Utility"

export type BuildTier =
  | "S+"
  | "S"
  | "A"
  | "B"
  | "C"

export type BuildCategory =
  | "PvE"
  | "PvP"
  | "Boss"
  | "Raid"
  | "Farming"

export type Build = {
  id: string

  pokemonSpeciesId: number

  name: string

  description: string

  category: BuildCategory

  role: BuildRole

  tier: BuildTier

  teraType?: string

  nature: string

  ability: string

  heldItem: string

  moves: string[]

  evSpread: {
    hp?: number
    attack?: number
    defense?: number
    specialAttack?: number
    specialDefense?: number
    speed?: number
  }

  notes?: string
}