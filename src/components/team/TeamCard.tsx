import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core"

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import TeamPokemonCard
  from "./TeamPokemonCard"

export default function TeamCard() {
  const {
    teams,
    activeTeamId,
    removePokemon,
    reorderTeam,
  } = useTeamStore()

  const activeTeam =
    teams.find(
      (team) =>
        team.id ===
        activeTeamId
    )

  if (!activeTeam) {
    return null
  }

  const teamMembers =
    resolveTeamPokemon(
      activeTeam
    )

  function handleDragEnd(
    event: DragEndEvent
  ) {
    const {
      active,
      over,
    } = event

    if (!over) {
      return
    }

    if (
      active.id ===
      over.id
    ) {
      return
    }

    const oldIndex =
      teamMembers.findIndex(
        (pokemon) =>
          pokemon.id ===
          active.id
      )

    const newIndex =
      teamMembers.findIndex(
        (pokemon) =>
          pokemon.id ===
          over.id
      )

    reorderTeam(
      oldIndex,
      newIndex
    )
  }

  return (
    <section>

      <header className="mb-8">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-cyan-400
            text-sm
            mb-3
          "
        >
          Active Team
        </p>

        <h1
          className="
            text-5xl
            font-black
            mb-3
          "
        >
          {activeTeam.name}
        </h1>

        <p className="text-zinc-500">
          {activeTeam.strategy}
        </p>

      </header>

      <DndContext
        collisionDetection={
          closestCenter
        }
        onDragEnd={handleDragEnd}
      >

        <SortableContext
          items={teamMembers.map(
            (pokemon) =>
              pokemon.id
          )}
          strategy={
            verticalListSortingStrategy
          }
        >

          <div className="space-y-4">

            {teamMembers.map(
              (
                pokemon,
                index
              ) => (
                <div
                  key={`${pokemon.id}-${index}`}
                  className="
                    w-full
                    max-w-[680px]
                  "
                >

                  <div
                    className="
                      relative
                      w-full
                    "
                  >

                    <TeamPokemonCard
                      pokemon={pokemon}
                    />

                    <button
                      onClick={() =>
                        removePokemon(
                          pokemon.id
                        )
                      }
                      className="
                        absolute
                        top-3
                        right-3
                        w-9
                        h-9
                        rounded-xl
                        bg-red-500/10
                        border
                        border-red-500/20
                        text-red-400
                        hover:bg-red-500
                        hover:text-white
                        transition-all
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-black
                      "
                    >
                      ×
                    </button>

                  </div>

                </div>
              )
            )}

          </div>

        </SortableContext>

      </DndContext>

    </section>
  )
}