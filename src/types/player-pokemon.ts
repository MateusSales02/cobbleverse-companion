export type PokemonIVs = {
  hp?: number
  attack?: number
  defense?: number
  specialAttack?: number
  specialDefense?: number
  speed?: number
}

export type PokemonEVs = {
  hp?: number
  attack?: number
  defense?: number
  specialAttack?: number
  specialDefense?: number
  speed?: number
}


export type PlayerPokemon = {

  id: string

  speciesId: number

  nickname?: string

  level: number

  gender?: string

  shiny: boolean

  teraType?: string

  nature: string

  ability: string

  heldItem?: string

  role?: string

  weatherSynergy?: string

  speedControl?: string

  hazardRole?: string

  setupRole?: string

  moves: string[]

  ivs: PokemonIVs

  evs: PokemonEVs

  capturedAt?: string

  regionCaptured?: string

}