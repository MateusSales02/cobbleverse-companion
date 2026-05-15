import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeWeatherSynergy,
} from "../../utils/team-weather-analysis"

import TypeBadge
  from "../ui/TypeBadge"

import WidgetContainer
  from "../ui/WidgetContainer"

export default function TeamWeatherPanel() {
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

  const weather =
    analyzeWeatherSynergy(
      resolvedTeam
    )

  const sortedWeather =
    Object.entries(weather)

  return (
    <WidgetContainer
      title="Weather Synergy"
      category="Weather Analysis"
      accent="orange"
    >

      <div className="space-y-4">

        {sortedWeather.map(
          ([weather, count]) => (
            <div
              key={weather}
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
              <TypeBadge
                type={
                  weather as keyof typeof import(
                    "../../constants/type-colors"
                  ).typeColors
                }
              />

              <span
                className="
                  text-yellow-400
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