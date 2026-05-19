import {
  widgetRegistry,
} from "../../config/team-widgets"

type Props = {
  hiddenWidgets: string[]

  toggleWidget:
    (id: string) => void
}

const widgetTitles:
  Record<string, string> = {
    weakness:
      "Weakness Coverage",

    offense:
      "Type Coverage",

    weather:
      "Weather Synergy",

    tera:
      "Tera Distribution",

    roles:
      "Role Distribution",

    speed:
      "Speed Control",

    hazards:
      "Hazard Control",

    setup:
      "Setup Analysis",

    archetype:
      "Archetype",

    score:
      "Team Score",

    radar:
      "Team Radar",

    recommendations:
      "Recommendations",
  }

export default function DashboardCustomizer({
  hiddenWidgets,
  toggleWidget,
}: Props) {
  const widgets =
    Object.keys(
      widgetRegistry
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
          Dashboard
        </p>

        <h2
          className="
            text-2xl
            font-black
          "
        >
          Customize Widgets
        </h2>

      </header>

      <div className="space-y-3">

        {widgets.map(
          (widgetId) => {
            const hidden =
              hiddenWidgets.includes(
                widgetId
              )

            return (
              <button
                key={widgetId}
                onClick={() =>
                  toggleWidget(
                    widgetId
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-2xl
                  px-4
                  py-3
                  hover:border-cyan-400
                  transition-all
                "
              >

                <span
                  className="
                    font-semibold
                  "
                >
                  {
                    widgetTitles[
                      widgetId
                    ]
                  }
                </span>

                <span
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  {hidden
                    ? "Hidden"
                    : "Visible"}
                </span>

              </button>
            )
          }
        )}

      </div>

    </section>
  )
}