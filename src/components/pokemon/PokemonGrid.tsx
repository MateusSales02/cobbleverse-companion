import PokemonCard from "./PokemonCard"

import { usePokedexStore } from "../../store/pokedex-store"

export default function PokemonGrid() {
  const {
    pokemon,
    search,
  } = usePokedexStore()

  const filteredPokemon =
    pokemon.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    )

  return (
    <section
      className="
        grid
        grid-cols-3
        gap-6
      "
    >
      {filteredPokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </section>
  )
}