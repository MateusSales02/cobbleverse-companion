import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core"

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

  function handleDragEnd() {
    // drag reorder virá depois
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

        <div className="space-y-5">

          {teamMembers.map(
            (pokemon) => (
              <div
                key={pokemon.id}
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div className="flex-1">

                  <TeamPokemonCard
                    pokemon={pokemon}
                  />

                </div>

                <button
                  onClick={() =>
                    removePokemon(
                      pokemon.id
                    )
                  }
                  className="
                    bg-red-500
                    hover:bg-red-400
                    transition-all
                    px-4
                    py-3
                    rounded-2xl
                    font-bold
                  "
                >
                  Remove
                </button>

              </div>
            )
          )}

        </div>

      </DndContext>

    </section>
  )
}