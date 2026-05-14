import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeSpeedControl,
} from "../../utils/team-speed-analysis"

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
            text-green-400
            text-sm
            mb-2
          "
        >
          Speed Analysis
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Speed Control
        </h2>

      </header>

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

    </section>
  )
}