import type { Team }
  from "../types/team"

export const teams: Team[] = [
  {
    id: "main-team",

    name: "Hyper Offense",

    strategy: "Hyper Offense",

    region: "Kanto",

    notes:
      "Main progression team.",

    pokemonSlots: [
      {
        playerPokemonId:
          "dragapult-1",
      },

      {
        playerPokemonId:
          "metagross-1",
      },
    ],
  },
]