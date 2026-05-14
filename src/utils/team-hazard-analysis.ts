import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeHazards(
  team: PlayerPokemon[]
) {
  const hazards:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (
      !pokemon.hazardRole
    ) {
      continue
    }

    hazards[
      pokemon.hazardRole
    ] =
      (
        hazards[
          pokemon.hazardRole
        ] || 0
      ) + 1
  }

  return hazards
}