import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeSetupRoles(
  team: PlayerPokemon[]
) {
  const setupRoles:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (
      !pokemon.setupRole
    ) {
      continue
    }

    setupRoles[
      pokemon.setupRole
    ] =
      (
        setupRoles[
          pokemon.setupRole
        ] || 0
      ) + 1
  }

  return setupRoles
}