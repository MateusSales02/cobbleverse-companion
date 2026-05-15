import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeSpeedControl,
} from "../../utils/team-speed-analysis"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamSpeedPanel() {
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

  const speedControl =
    analyzeSpeedControl(
      resolvedTeam
    )

  const sortedSpeedControl =
    Object.entries(speedControl)

  return (
    <WidgetContainer
      title="Speed Control"
      category="Speed Analysis"
      accent="emerald"
    >

      <div className="space-y-4">

        {sortedSpeedControl.map(
          ([speed, count]) => (
            <div
              key={speed}
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
                {speed}
              </span>

              <span
                className="
                  text-green-400
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