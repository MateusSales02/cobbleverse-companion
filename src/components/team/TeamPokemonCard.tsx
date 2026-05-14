import { pokemonSpecies }
  from "../../data/pokemon-species"

import type {
  PlayerPokemon,
} from "../../types/player-pokemon"

type Props = {
  pokemon: PlayerPokemon
}

export default function TeamPokemonCard({
  pokemon,
}: Props) {
  const species =
    pokemonSpecies.find(
      (species) =>
        species.id === pokemon.speciesId
    )

  if (!species) {
    return null
  }

  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-5
        flex
        items-center
        gap-5
      "
    >
      <img
        src={species.image}
        alt={species.name}
        className="
          w-24
          h-24
          object-cover
          rounded-2xl
        "
      />

      <div className="flex-1">

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          {pokemon.nickname ??
            species.name}
        </h2>

        <p className="text-zinc-500">
          Lv. {pokemon.level}
        </p>

        <div className="flex gap-2 mt-3">

          {species.types.map((type) => (
            <span
              key={type}
              className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                text-cyan-300
                text-sm
              "
            >
              {type}
            </span>
          ))}

        </div>

      </div>

    </div>
  )
}