import {
  analyzeWeaknesses,
} from "./team-analysis"

import {
  analyzeRoles,
} from "./team-role-analysis"

import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function generateRecommendations(
  team: PlayerPokemon[]
) {
  const recommendations:
    string[] = []

  const weaknesses =
    analyzeWeaknesses(team)

  const roles =
    analyzeRoles(team)

  if (
    (weaknesses["Fairy"] || 0) >= 2
  ) {
    recommendations.push(
      "Your team is vulnerable to Fairy types. Consider adding Steel coverage."
    )
  }

  if (!roles["Support"]) {
    recommendations.push(
      "Your team lacks a dedicated Support Pokémon."
    )
  }

  if (!roles["Pivot"]) {
    recommendations.push(
      "Consider adding a Pivot for safer switches and tempo control."
    )
  }

  if (
    (weaknesses["Ice"] || 0) >= 2
  ) {
    recommendations.push(
      "Ice weakness detected. Fire or Steel coverage recommended."
    )
  }

  return recommendations
}