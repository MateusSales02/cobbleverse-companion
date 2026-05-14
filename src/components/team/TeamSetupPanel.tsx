import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeSetupRoles,
} from "../../utils/team-setup-analysis"

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
    <section
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-6
      "
    >
      <header className="mb-6">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-blue-400
            text-sm
            mb-2
          "
        >
          Win Condition
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Setup Analysis
        </h2>

      </header>

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

    </section>
  )
}