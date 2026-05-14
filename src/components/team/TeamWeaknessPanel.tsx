import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeWeaknesses,
} from "../../utils/team-analysis"

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
            text-red-400
            text-sm
            mb-2
          "
        >
          Team Analysis
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Weakness Coverage
        </h2>

      </header>

      <div className="space-y-4">

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
                {type}
              </span>

              <span
                className="
                  text-red-400
                  font-bold
                  text-xl
                "
              >
                {count}x
              </span>
            </div>
          )
        )}

      </div>

    </section>
  )
}