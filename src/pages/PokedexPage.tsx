import PokedexFilters
  from "../components/pokemon/PokedexFilters"

import PokemonGrid
  from "../components/pokemon/PokemonGrid"

export default function PokedexPage() {
  return (
    <div>

      <header className="mb-10">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-cyan-400
            text-sm
            mb-3
          "
        >
          Pokemon Encyclopedia
        </p>

        <h1
          className="
            text-5xl
            font-black
          "
        >
          Pokedex
        </h1>
      </header>

      <PokedexFilters />

      <PokemonGrid />

    </div>
  )
}