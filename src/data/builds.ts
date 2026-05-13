import type { Build } from "../types/build"

export const builds: Build[] = [
  {
    id: "dragapult-hyper-offense",

    pokemonSpeciesId: 887,

    name: "Hyper Offense",

    description:
      "Fast aggressive sweeper build.",

    category: "PvE",

    role: "Sweeper",

    tier: "S+",

    teraType: "Ghost",

    nature: "Jolly",

    ability: "Infiltrator",

    heldItem: "Life Orb",

    moves: [
      "Dragon Darts",
      "Phantom Force",
      "Flamethrower",
      "U-turn",
    ],

    evSpread: {
      attack: 252,
      speed: 252,
    },

    notes:
      "Excellent for fast clearing and boss pressure.",
  },
]