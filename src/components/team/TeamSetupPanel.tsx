import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeSetupRoles,
} from "../../utils/team-setup-analysis"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamSetupPanel() {
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

  const setupRoles =
    analyzeSetupRoles(
      resolvedTeam
    )

  const sortedSetupRoles =
    Object.entries(setupRoles)

  return (
    <WidgetContainer
      title="Setup Analysis"
      category="Win Condition"
      accent="blue"
    >

      <div className="space-y-4">

        {sortedSetupRoles.map(
          ([role, count]) => (
            <div
              key={role}
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
                {role}
              </span>

              <span
                className="
                  text-blue-400
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