export type TeamStrategy =
  | "Hyper Offense"
  | "Balanced"
  | "Stall"
  | "Rain"
  | "Sun"
  | "Sand"
  | "Trick Room"

export type TeamSlot = {
  playerPokemonId: string

  role?: string

  notes?: string
}

export type Team = {
  id: string

  name: string

  strategy: TeamStrategy

  region?: string

  notes?: string

  pokemonSlots: TeamSlot[]
}