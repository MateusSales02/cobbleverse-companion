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
            text-orange-400
            text-sm
            mb-2
          "
        >
          Offensive Analysis
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Type Coverage
        </h2>

      </header>

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

    </section>
  )
}