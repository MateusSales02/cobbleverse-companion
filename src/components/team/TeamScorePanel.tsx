import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  calculateTeamScore,
} from "../../utils/team-score"

export default function TeamScorePanel() {
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

  const score =
    calculateTeamScore(
      resolvedTeam
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
            text-cyan-400
            text-sm
            mb-2
          "
        >
          Competitive Rating
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Team Score
        </h2>

      </header>

      <div
        className="
          bg-zinc-950
          border
          border-zinc-800
          rounded-2xl
          p-8
          flex
          flex-col
          items-center
          justify-center
        "
      >

        <span
          className="
            text-7xl
            font-black
            text-cyan-300
          "
        >
          {score}
        </span>

        <p
          className="
            text-zinc-500
            mt-4
            text-lg
          "
        >
          Overall competitive
          effectiveness score.
        </p>

      </div>

    </section>
  )
}