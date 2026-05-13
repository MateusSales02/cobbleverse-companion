
export type PokemonStats = {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export type PokemonEvolution = {
  pokemonId: number
  method: string
  level?: number
  item?: string
}

export type PokemonSpecies = {
  id: number

  name: string

  nationalDex: number

  description: string

  image: string

  types: string[]

  abilities: string[]

  hiddenAbility?: string

  stats: PokemonStats

  evolutionChain: PokemonEvolution[]

  regions: string[]

  biome: string[]

  rarity: string

  catchRate: number

  legendary: boolean

  mythical: boolean

  ultraBeast: boolean

  pseudoLegendary: boolean

  starter: boolean
}
