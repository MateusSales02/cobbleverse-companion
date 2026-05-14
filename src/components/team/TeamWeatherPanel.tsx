import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

import {
  analyzeWeatherSynergy,
} from "../../utils/team-weather-analysis"

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
            text-yellow-400
            text-sm
            mb-2
          "
        >
          Weather Analysis
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Weather Synergy
        </h2>

      </header>

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
              <span
                className="
                  text-lg
                  font-semibold
                "
              >
                {weather}
              </span>

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

    </section>
  )
}