import { useTeamStore }
  from "../../store/team-store"

import type { Team }
  from "../../types/team"

export default function TeamManagerPanel() {
  const {
    teams,
    activeTeamId,
    setActiveTeam,
    createTeam,
    deleteTeam,
    renameTeam,
    changeStrategy,
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

  return (
    <section
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        px-5
        py-4
      "
    >

      <div
        className="
          flex
          items-end
          gap-4
        "
      >

        <div className="flex-1">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-cyan-400
              text-xs
              mb-2
            "
          >
            Team Manager
          </p>

          <div
            className="
              flex
              gap-3
            "
          >

            <input
              value={activeTeam.name}
              onChange={(event) =>
                renameTeam(
                  activeTeam.id,
                  event.target.value
                )
              }
              className="
                flex-1
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-4
                py-3
                font-bold
                outline-none
                focus:border-cyan-500
                transition-all
              "
            />

            <select
              value={activeTeam.strategy}
              onChange={(event) =>
                changeStrategy(
                  activeTeam.id,
                  event.target.value as Team["strategy"]
                )
              }
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                px-4
                py-3
                font-semibold
                min-w-[220px]
                outline-none
                focus:border-cyan-500
                transition-all
              "
            >

              <option value="Balanced">
                Balanced
              </option>

              <option value="Hyper Offense">
                Hyper Offense
              </option>

              <option value="Bulky Offense">
                Bulky Offense
              </option>

              <option value="Rain">
                Rain
              </option>

              <option value="Sand">
                Sand
              </option>

              <option value="Sun">
                Sun
              </option>

              <option value="Stall">
                Stall
              </option>

            </select>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <button
            onClick={createTeam}
            className="
              h-[50px]
              px-5
              rounded-2xl
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-black
              transition-all
              whitespace-nowrap
            "
          >
            New Team
          </button>

          {teams.length > 1 && (
            <button
              onClick={() =>
                deleteTeam(
                  activeTeam.id
                )
              }
              className="
                h-[50px]
                px-5
                rounded-2xl
                bg-red-500/10
                border
                border-red-500/20
                text-red-400
                hover:bg-red-500
                hover:text-white
                transition-all
                font-bold
              "
            >
              Delete
            </button>
          )}

        </div>

      </div>

      {teams.length > 1 && (

        <div
          className="
            flex
            gap-2
            mt-4
            flex-wrap
          "
        >

          {teams.map((team) => {
            const isActive =
              team.id ===
              activeTeamId

            return (
              <button
                key={team.id}
                onClick={() =>
                  setActiveTeam(
                    team.id
                  )
                }
                className={`
                  px-4
                  py-2
                  rounded-2xl
                  border
                  transition-all
                  text-sm
                  font-bold
                  ${
                    isActive
                      ? `
                        bg-cyan-500
                        border-cyan-500
                        text-black
                      `
                      : `
                        bg-zinc-950
                        border-zinc-800
                        text-zinc-400
                        hover:border-cyan-500
                        hover:text-white
                      `
                  }
                `}
              >
                {team.name}
              </button>
            )
          })}

        </div>

      )}

    </section>
  )
}