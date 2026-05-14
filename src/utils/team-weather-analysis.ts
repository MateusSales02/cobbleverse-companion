import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function analyzeWeatherSynergy(
  team: PlayerPokemon[]
) {
  const weather:
    Record<string, number> = {}

  for (const pokemon of team) {
    if (
      !pokemon.weatherSynergy
    ) {
      continue
    }

    weather[
      pokemon.weatherSynergy
    ] =
      (
        weather[
          pokemon.weatherSynergy
        ] || 0
      ) + 1
  }

  return weather
}