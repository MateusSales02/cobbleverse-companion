import {
  analyzeRoles,
} from "./team-role-analysis"

import {
  analyzeWeaknesses,
} from "./team-analysis"

import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function calculateTeamScore(
  team: PlayerPokemon[]
) {
  const roles =
    analyzeRoles(team)

  const weaknesses =
    analyzeWeaknesses(team)

  let score = 50

  if (roles["Sweeper"]) {
    score += 10
  }

  if (roles["Tank"]) {
    score += 10
  }

  if (roles["Support"]) {
    score += 10
  }

  const weaknessCount =
    Object.values(weaknesses)
      .filter((value) => value >= 2)
      .length

  score -= weaknessCount * 5

  if (score > 100) {
    score = 100
  }

  if (score < 0) {
    score = 0
  }

  return score
}