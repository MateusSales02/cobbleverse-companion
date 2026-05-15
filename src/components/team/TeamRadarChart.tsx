import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

import { useTeamStore }
  from "../../store/team-store"

import {
  resolveTeamPokemon,
} from "../../utils/resolve-team-pokemon"

export default function TeamRadarChart() {
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

  const team =
    resolveTeamPokemon(
      activeTeam
    )

  const offense =
    Math.min(
      team.length * 15,
      100
    )

  const defense =
    Math.min(
      team.filter(
        (pokemon) =>
          pokemon.role ===
          "Tank"
      ).length * 35,
      100
    )

  const speed =
    Math.min(
      team.filter(
        (pokemon) =>
          pokemon.role ===
          "Sweeper"
      ).length * 35,
      100
    )

  const utility =
    Math.min(
      team.filter(
        (pokemon) =>
          pokemon.role ===
          "Support"
      ).length * 40,
      100
    )

  const setup =
    Math.min(
      team.filter(
        (pokemon) =>
          pokemon.role ===
          "Setup"
      ).length * 40,
      100
    )

  const synergy =
    Math.min(
      team.length * 16,
      100
    )

  const data = [
    {
      subject:
        "Offense",

      value:
        offense,
    },

    {
      subject:
        "Defense",

      value:
        defense,
    },

    {
      subject:
        "Speed",

      value:
        speed,
    },

    {
      subject:
        "Utility",

      value:
        utility,
    },

    {
      subject:
        "Setup",

      value:
        setup,
    },

    {
      subject:
        "Synergy",

      value:
        synergy,
    },
  ]

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
          Team Analytics
        </p>

        <h2
          className="
            text-2xl
            font-black
          "
        >
          Team Radar
        </h2>

      </header>

      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <RadarChart data={data}>

            <PolarGrid />

            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill:
                  "#d4d4d8",
                fontSize: 10,
              }}
            />

            <Radar
              name="Team"
              dataKey="value"
              stroke="#22d3ee"
              fill="#22d3ee"
              fillOpacity={0.4}
              strokeWidth={2}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

    </section>
  )
}