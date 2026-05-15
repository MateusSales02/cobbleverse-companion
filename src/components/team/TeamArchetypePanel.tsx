import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeArchetype,
} from "../../utils/team-archetype-analysis"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamArchetypePanel() {
  const {
    teams,
    activeTeamId,
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

  const resolvedTeam =
    resolveTeamPokemon(
      activeTeam
    )

  const archetype =
    analyzeArchetype(
      resolvedTeam
    )

  return (
    <WidgetContainer
      title="Archetype"
      category="Team Identity"
      accent="cyan"
    >

      <div
        className="
          bg-zinc-950
          border
          border-zinc-800
          rounded-2xl
          p-6
        "
      >

        <h3
          className="
            text-4xl
            font-black
            text-cyan-300
          "
        >
          {archetype}
        </h3>

        <p
          className="
            text-zinc-500
            mt-3
            text-lg
          "
        >
          Competitive identity
          detected from the
          current team structure.
        </p>

      </div>

    </WidgetContainer>
  )
}