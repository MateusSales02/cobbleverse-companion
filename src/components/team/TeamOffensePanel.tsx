import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeOffensiveCoverage,
} from "../../utils/team-offense-analysis"

import TypeBadge
  from "../ui/TypeBadge"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamOffensePanel() {
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

  const offensiveCoverage =
    analyzeOffensiveCoverage(
      resolvedTeam
    )

  const sortedCoverage =
    Object.entries(
      offensiveCoverage
    )

  return (
    <WidgetContainer
      title="Type Coverage"
      category="Offensive Analysis"
      accent="orange"
    >

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        {sortedCoverage.map(
          ([type, count]) => (
            <div
              key={type}
              className="
                flex
                items-center
                justify-between
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-4
                py-3
              "
            >
              <TypeBadge
                type={
                  type as keyof typeof import(
                    "../../constants/type-colors"
                  ).typeColors
                }
              />

              <span
                className="
                  text-orange-400
                  font-bold
                  text-base
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