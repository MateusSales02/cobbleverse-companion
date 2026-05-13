export type EncounterTime =
  | "Day"
  | "Night"
  | "Any"

export type EncounterWeather =
  | "Clear"
  | "Rain"
  | "Storm"
  | "Snow"
  | "Any"

export type EncounterRarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Ultra Rare"
  | "Legendary"

export type Encounter = {
  id: string

  pokemonSpeciesId: number

  biome: string

  region: string

  weather: EncounterWeather

  time: EncounterTime

  rarity: EncounterRarity

  minLevel: number

  maxLevel: number
}