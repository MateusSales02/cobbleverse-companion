import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeSpeedControl(
  team: PlayerPokemon[]
) {
  const speedControl:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (
      !pokemon.speedControl
    ) {
      continue
    }

    speedControl[
      pokemon.speedControl
    ] =
      (
        speedControl[
          pokemon.speedControl
        ] || 0
      ) + 1
  }

  return speedControl
}