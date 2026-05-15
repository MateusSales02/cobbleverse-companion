import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeHazards,
} from "../../utils/team-hazard-analysis"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamHazardPanel() {
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

  const hazards =
    analyzeHazards(
      resolvedTeam
    )

  const sortedHazards =
    Object.entries(hazards)

  return (
    <WidgetContainer
      title="Hazard Control"
      category="Field Control"
      accent="red"
    >

      <div className="space-y-4">

        {sortedHazards.map(
          ([hazard, count]) => (
            <div
              key={hazard}
              className="
                flex
                items-center
                justify-between
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-5
                py-4
              "
            >
              <span
                className="
                  text-lg
                  font-semibold
                "
              >
                {hazard}
              </span>

              <span
                className="
                  text-red-400
                  font-bold
                  text-xl
                "
              >
                {count}
              </span>

            </div>
          )
        )}

      </div>

    </WidgetContainer>
  )
}