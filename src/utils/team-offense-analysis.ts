import { pokemonSpecies }
  from "../data/pokemon-species"

import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeOffensiveCoverage(
  team: PlayerPokemon[]
) {
  const offensiveTypes:
    Record<string, number> = {}

  for (const pokemon of team) {
    const species =
      pokemonSpecies.find(
        (species) =>
          species.id ===
          pokemon.speciesId
      )

    if (!species) {
      continue
    }

    for (const type of species.types) {
      offensiveTypes[type] =
        (offensiveTypes[type] || 0) + 1
    }
  }

  return offensiveTypes
}