import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  generateRecommendations,
} from "../../utils/team-recommendations"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamRecommendationPanel() {
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

  const recommendations =
    generateRecommendations(
      resolvedTeam
    )

  return (
    <WidgetContainer
      title="Recommendations"
      category="AI Assistant"
      accent="emerald"
    >

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {recommendations.map(
          (recommendation) => (
            <div
              key={recommendation}
              className="
                flex
                items-start
                gap-3
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-4
                py-3
              "
            >

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-400
                  mt-2
                  shrink-0
                "
              />

              <p
                className="
                  text-zinc-300
                  text-sm
                  leading-relaxed
                "
              >
                {recommendation}
              </p>

            </div>
          )
        )}

      </div>

    </WidgetContainer>
  )
}