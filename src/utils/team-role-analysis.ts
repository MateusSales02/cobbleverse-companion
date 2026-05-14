import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeRoles(
  team: PlayerPokemon[]
) {
  const roles:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (!pokemon.role) {
      continue
    }

    roles[pokemon.role] =
      (roles[pokemon.role] || 0) + 1
  }

  return roles
}