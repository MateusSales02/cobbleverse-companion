import { Link } from "react-router-dom"
import type {
  PokemonSpecies,
} from "../../types/pokemon-species"

type Props = {
  pokemon: PokemonSpecies
}

export default function PokemonCard({
  pokemon,
}: Props) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        overflow-hidden
        transition-all
        hover:border-cyan-500
      "
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="
          w-full
          h-56
          object-cover
        "
      />

      <div className="p-5">

        <div className="mb-4">

          <p className="text-zinc-500 text-sm">
            #{pokemon.nationalDex}
          </p>

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {pokemon.name}
          </h2>
        </div>

        <div className="flex gap-2 mb-4">

          {pokemon.types.map((type) => (
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

        <div className="space-y-2 text-sm">

          <p>
            <span className="text-zinc-500">
              Rarity:
            </span>{" "}
            {pokemon.rarity}
          </p>

          <p>
            <span className="text-zinc-500">
              Region:
            </span>{" "}
            {pokemon.regions.join(", ")}
          </p>

        </div>

      </div>
    </Link>
  )
}