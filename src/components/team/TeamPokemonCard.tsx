import {
  useSortable,
} from "@dnd-kit/sortable"

import { CSS }
  from "@dnd-kit/utilities"

import { pokemonSpecies }
  from "../../data/pokemon-species"

import type {
  PlayerPokemon,
} from "../../types/player-pokemon"

import TypeBadge
  from "../ui/TypeBadge"

type Props = {
  pokemon: PlayerPokemon
}

export default function TeamPokemonCard({
  pokemon,
}: Props) {
  const species =
    pokemonSpecies.find(
      (species) =>
        species.id ===
        pokemon.speciesId
    )

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: pokemon.id,
  })

  const style = {
    transform:
      CSS.Transform.toString(
        transform
      ),

    transition,
  }

  if (!species) {
    return null
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        bg-zinc-900
        border
        border-zinc-800
        hover:border-cyan-400/40
        hover:shadow-cyan-500/10
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        rounded-3xl
        p-4
        flex
        items-center
        gap-4
      "
    >

      <button
        {...attributes}
        {...listeners}
        className="
          self-stretch
          px-3
          rounded-2xl
          bg-zinc-950
          border
          border-zinc-800
          text-zinc-500
          hover:text-cyan-400
          hover:border-cyan-500
          transition-all
          cursor-grab
          active:cursor-grabbing
          flex
          items-center
          justify-center
          text-xl
          font-black
          shrink-0
        "
      >
        ⋮⋮
      </button>

      <img
        src={species.image}
        alt={species.name}
        className="
          w-20
          h-20
          rounded-2xl
          object-cover
        "
      />

      <div className="flex-1">

        <h2
          className="
            text-2xl
            font-black
            mb-2
          "
        >
          {pokemon.nickname ??
            species.name}
        </h2>

        <p className="text-zinc-500">
          Lv. {pokemon.level}
        </p>

        <div
          className="
            flex
            gap-2
            mt-2
          "
        >

          {species.types.map(
            (type) => (
              <TypeBadge
                key={type}
                type={
                  type as keyof typeof import(
                    "../../constants/type-colors"
                  ).typeColors
                }
              />
            )
          )}

        </div>

        <div className="mt-3 flex gap-2 flex-wrap">

          {pokemon.moves.map(
            (move) => (
              <span
                key={move}
                className="
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  px-2
                  py-1
                  rounded-xl
                  text-sm
                  text-cyan-300
                "
              >
                {move}
              </span>
            )
          )}

        </div>

      </div>

    </div>
  )
}