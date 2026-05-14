import type {
  PlayerPokemon,
} from "../types/player-pokemon"

export const playerPokemon: PlayerPokemon[] = [
  {
    id: "dragapult-1",

    speciesId: 887,

    nickname: "Spectre",

    level: 100,

    shiny: false,

    teraType: "Ghost",

    nature: "Jolly",

    ability: "Infiltrator",

    heldItem: "Life Orb",

    role: "Sweeper",

    weatherSynergy: "None",

    speedControl: "Fast Sweeper",

    hazardRole: "Pressure",

    setupRole: "Late Game Sweeper",

    moves: [
      "Dragon Darts",
      "Phantom Force",
      "Flamethrower",
      "U-turn",
    ],

    ivs: {
      hp: 31,
      attack: 31,
      defense: 31,
      specialAttack: 31,
      specialDefense: 31,
      speed: 31,
    },

    evs: {
      attack: 252,
      speed: 252,
    },

    capturedAt: "2026-05-13",

    regionCaptured: "Kanto",
  },

  {
    id: "metagross-1",

    speciesId: 376,

    nickname: "Titan",

    level: 100,

    shiny: false,

    teraType: "Steel",

    nature: "Adamant",

    ability: "Clear Body",

    heldItem: "Weakness Policy",

    role: "Tank",

    weatherSynergy: "Sand",

    speedControl: "Bulky",

    hazardRole: "Stealth Rock",

    setupRole: "Bulky Setup",

    moves: [
      "Meteor Mash",
      "Zen Headbutt",
      "Earthquake",
      "Bullet Punch",
    ],

    ivs: {
      hp: 31,
      attack: 31,
      defense: 31,
      specialAttack: 31,
      specialDefense: 31,
      speed: 31,
    },

    evs: {
      attack: 252,
      hp: 252,
    },

    capturedAt: "2026-05-13",

    regionCaptured: "Kanto",
  },
]