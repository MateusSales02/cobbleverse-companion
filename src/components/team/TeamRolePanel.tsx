import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeRoles,
} from "../../utils/team-role-analysis"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamRolePanel() {
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

  const roles =
    analyzeRoles(
      resolvedTeam
    )

  const sortedRoles =
    Object.entries(roles)

  return (
    <WidgetContainer
      title="Role Distribution"
      category="Team Strategy"
      accent="cyan"
    >

      <div className="space-y-4">

        {sortedRoles.map(
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
                  text-cyan-400
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