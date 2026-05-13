import { create } from "zustand"

import { pokemonSpecies } from "../data/pokemon-species"

import type {
  PokemonSpecies,
} from "../types/pokemon-species"

type PokedexStore = {
  pokemon: PokemonSpecies[]

  search: string

  selectedType: string | null

  setSearch: (
    search: string
  ) => void

  setSelectedType: (
    type: string | null
  ) => void
}

export const usePokedexStore =
  create<PokedexStore>((set) => ({
    pokemon: pokemonSpecies,

    search: "",

    selectedType: null,

    setSearch: (search) =>
      set({
        search,
      }),

    setSelectedType: (type) =>
      set({
        selectedType: type,
      }),
  }))