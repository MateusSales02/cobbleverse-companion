import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeWeaknesses,
} from "../../utils/team-analysis"

import TypeBadge
  from "../ui/TypeBadge"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamWeaknessPanel() {
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

  const weaknesses =
    analyzeWeaknesses(
      resolvedTeam
    )

  const sortedWeaknesses =
    Object.entries(weaknesses)
      .sort((a, b) => b[1] - a[1])

  return (
    <WidgetContainer
      title="Weakness Coverage"
      category="Team Analysis"
      accent="red"
    >

      <div
        className="
          grid
          grid-cols-2
          gap-4
        "
      >

        {sortedWeaknesses.map(
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
                  text-red-400
                  font-bold
                  text-base
                "
              >
                {count}x
              </span>

            </div>
          )
        )}

      </div>

    </WidgetContainer>
  )
}