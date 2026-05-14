import { pokemonSpecies }
  from "../data/pokemon-species"

import { typeChart }
  from "./pokemon-type-chart"

import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeWeaknesses(
  team: PlayerPokemon[]
) {
  const weaknesses:
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
      const weaknessData =
        typeChart[
          type as keyof typeof typeChart
        ]

      if (!weaknessData) {
        continue
      }

      for (
        const weakness
        of weaknessData.weakTo
      ) {
        weaknesses[weakness] =
          (weaknesses[weakness] || 0) + 1
      }
    }
  }

  return weaknesses
}