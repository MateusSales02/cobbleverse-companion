import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeTeraTypes,
} from "../../utils/team-tera-analysis"

import TypeBadge
  from "../ui/TypeBadge"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamTeraPanel() {
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

  const teraTypes =
    analyzeTeraTypes(
      resolvedTeam
    )

  const sortedTeraTypes =
    Object.entries(teraTypes)

  return (
    <WidgetContainer
      title="Tera Distribution"
      category="Tera Analysis"
      accent="purple"
    >

      <div className="space-y-4">

        {sortedTeraTypes.map(
          ([tera, count]) => (
            <div
              key={tera}
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
              <TypeBadge
                type={
                  tera as keyof typeof import(
                    "../../constants/type-colors"
                  ).typeColors
                }
              />

              <span
                className="
                  text-purple-400
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