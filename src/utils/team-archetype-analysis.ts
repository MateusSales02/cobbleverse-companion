import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeArchetype(
  team: PlayerPokemon[]
) {
  let sweepers = 0

  let tanks = 0

  let weather = 0

  for (const pokemon of team) {
    if (
      pokemon.role === "Sweeper"
    ) {
      sweepers++
    }

    if (
      pokemon.role === "Tank"
    ) {
      tanks++
    }

    if (
      pokemon.weatherSynergy &&
      pokemon.weatherSynergy !==
        "None"
    ) {
      weather++
    }
  }

  if (
    sweepers >= 3 &&
    weather >= 2
  ) {
    return "Weather Hyper Offense"
  }

  if (sweepers >= 3) {
    return "Hyper Offense"
  }

  if (
    tanks >= 3 &&
    sweepers <= 1
  ) {
    return "Balance"
  }

  return "Bulky Offense"
}