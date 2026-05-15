import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  calculateTeamScore,
} from "../../utils/team-score"

import WidgetContainer
  from "../ui/WidgetContainer"

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
    <WidgetContainer
      title="Team Score"
      category="Competitive Rating"
      accent="cyan"
    >

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

    </WidgetContainer>
  )
}