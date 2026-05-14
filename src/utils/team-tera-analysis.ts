import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeTeraTypes(
  team: PlayerPokemon[]
) {
  const teraTypes:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (!pokemon.teraType) {
      continue
    }

    teraTypes[
      pokemon.teraType
    ] =
      (
        teraTypes[
          pokemon.teraType
        ] || 0
      ) + 1
  }

  return teraTypes
}