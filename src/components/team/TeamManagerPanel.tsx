import { useTeamStore }
  from "../../store/team-store"

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
      <header
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <div>

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-cyan-400
              text-sm
              mb-2
            "
          >
            Team Manager
          </p>

          <h2
            className="
              text-3xl
              font-black
            "
          >
            Squad Library
          </h2>

        </div>

        <button
          onClick={createTeam}
          className="
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            text-black
            font-bold
            px-5
            py-3
            rounded-2xl
          "
        >
          New Team
        </button>

      </header>

      <div className="space-y-5">

        {teams.map((team) => {
          const isActive =
            team.id ===
            activeTeamId

          return (
            <div
              key={team.id}
              className={`
                border
                rounded-2xl
                p-5
                transition-all
                ${
                  isActive
                    ? `
                      bg-cyan-500/10
                      border-cyan-500
                    `
                    : `
                      bg-zinc-950
                      border-zinc-800
                    `
                }
              `}
            >

              <div className="space-y-4">

                <input
                  value={team.name}
                  onChange={(event) =>
                    renameTeam(
                      team.id,
                      event.target.value
                    )
                  }
                  className="
                    w-full
                    bg-zinc-900
                    border
                    border-zinc-700
                    rounded-xl
                    px-4
                    py-3
                    text-2xl
                    font-bold
                    outline-none
                    focus:border-cyan-500
                  "
                />

                <select
                  value={team.strategy}
                  onChange={(event) =>
                    changeStrategy(
                      team.id,
                      event.target.value as
                        typeof team.strategy
                    )
                  }
                  className="
                    w-full
                    bg-zinc-900
                    border
                    border-zinc-700
                    rounded-xl
                    px-4
                    py-3
                    font-semibold
                    outline-none
                    focus:border-cyan-500
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

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  {!isActive && (
                    <button
                      onClick={() =>
                        setActiveTeam(
                          team.id
                        )
                      }
                      className="
                        bg-cyan-500
                        hover:bg-cyan-400
                        transition-all
                        text-black
                        font-bold
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      Select
                    </button>
                  )}

                  {teams.length > 1 && (
                    <button
                      onClick={() =>
                        deleteTeam(
                          team.id
                        )
                      }
                      className="
                        bg-red-500
                        hover:bg-red-400
                        transition-all
                        font-bold
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      Delete
                    </button>
                  )}

                </div>

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}