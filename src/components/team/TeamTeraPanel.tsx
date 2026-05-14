import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeTeraTypes,
} from "../../utils/team-tera-analysis"

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
            text-purple-400
            text-sm
            mb-2
          "
        >
          Tera Analysis
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Tera Distribution
        </h2>

      </header>

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
              <span
                className="
                  text-lg
                  font-semibold
                "
              >
                {tera}
              </span>

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

    </section>
  )
}