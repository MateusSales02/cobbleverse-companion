import type { PokemonSpecies } from "../types/pokemon-species"

export const pokemonSpecies: PokemonSpecies[] = [
  {
    id: 887,

    name: "Dragapult",

    nationalDex: 887,

    description:
      "Extremely fast pseudo-legendary ghost dragon.",

    image:
      "https://img.pokemondb.net/artwork/large/dragapult.jpg",

    types: ["Dragon", "Ghost"],

    abilities: [
      "Clear Body",
      "Infiltrator",
    ],

    hiddenAbility: "Cursed Body",

    stats: {
      hp: 88,
      attack: 120,
      defense: 75,
      specialAttack: 100,
      specialDefense: 75,
      speed: 142,
    },

    evolutionChain: [],

    regions: ["Galar"],

    biome: [
      "Taiga",
      "Dark Forest",
    ],

    rarity: "Rare",

    catchRate: 45,

    legendary: false,

    mythical: false,

    ultraBeast: false,

    pseudoLegendary: true,

    starter: false,
  },

  {
    id: 376,

    name: "Metagross",

    nationalDex: 376,

    description:
      "Heavy steel psychic pseudo-legendary.",

    image:
      "https://img.pokemondb.net/artwork/large/metagross.jpg",

    types: ["Steel", "Psychic"],

    abilities: ["Clear Body"],

    hiddenAbility: "Light Metal",

    stats: {
      hp: 80,
      attack: 135,
      defense: 130,
      specialAttack: 95,
      specialDefense: 90,
      speed: 70,
    },

    evolutionChain: [],

    regions: ["Hoenn"],

    biome: [
      "Mountain",
      "Cave",
    ],

    rarity: "Rare",

    catchRate: 3,

    legendary: false,

    mythical: false,

    ultraBeast: false,

    pseudoLegendary: true,

    starter: false,
  },
]