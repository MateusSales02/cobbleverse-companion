
import { playerPokemon }
  from "../data/player-pokemon"

import type { Team }
  from "../types/team"

import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export function resolveTeamPokemon(
  team: Team
): PlayerPokemon[] {
  return team.pokemonSlots
    .map((slot) =>
      playerPokemon.find(
        (pokemon) =>
          pokemon.id ===
          slot.playerPokemonId
      )
    )
    .filter(
      (
        pokemon
      ): pokemon is PlayerPokemon =>
        pokemon !== undefined
    )
}