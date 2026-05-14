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
      {...attributes}
      {...listeners}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-5
        flex
        items-center
        gap-5
        cursor-grab
        active:cursor-grabbing
      "
    >

      <img
        src={species.image}
        alt={species.name}
        className="
          w-28
          h-28
          rounded-2xl
          object-cover
        "
      />

      <div className="flex-1">

        <h2
          className="
            text-3xl
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
            mt-3
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

        <div className="mt-4 flex gap-2 flex-wrap">

          {pokemon.moves.map(
            (move) => (
              <span
                key={move}
                className="
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  px-3
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