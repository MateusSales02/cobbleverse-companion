import { useParams } from "react-router-dom"

import { pokemonSpecies }
  from "../data/pokemon-species"

export default function PokemonDetailsPage() {
  const { id } = useParams()

  const pokemon =
    pokemonSpecies.find(
      (pokemon) =>
        pokemon.id === Number(id)
    )

  if (!pokemon) {
    return (
      <div className="text-white">
        Pokemon not found.
      </div>
    )
  }

  return (
    <div>

      <section
        className="
          grid
          grid-cols-2
          gap-10
        "
      >

        <div
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            overflow-hidden
          "
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>

        <div>

          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-3
            "
          >
            Pokemon Details
          </p>

          <h1
            className="
              text-6xl
              font-black
              mb-6
            "
          >
            {pokemon.name}
          </h1>

          <div className="flex gap-3 mb-8">

            {pokemon.types.map((type) => (
              <span
                key={type}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-300
                "
              >
                {type}
              </span>
            ))}

          </div>

          <p
            className="
              text-zinc-400
              text-lg
              leading-relaxed
              mb-8
            "
          >
            {pokemon.description}
          </p>

          <section className="space-y-4">

            <div>
              <p className="text-zinc-500">
                Abilities
              </p>

              <p className="text-xl">
                {pokemon.abilities.join(", ")}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Biomes
              </p>

              <p className="text-xl">
                {pokemon.biome.join(", ")}
              </p>
            </div>

            <div>
              <p className="text-zinc-500">
                Regions
              </p>

              <p className="text-xl">
                {pokemon.regions.join(", ")}
              </p>
            </div>

          </section>

        </div>

      </section>

    </div>
  )
}