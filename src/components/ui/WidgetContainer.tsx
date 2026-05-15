import {
  useState,
  type ReactNode,
} from "react"

type Props = {
  title: string
  category: string
  accent?: string
  children: ReactNode
  defaultCollapsed?: boolean
}

export default function WidgetContainer({
  title,
  category,
  accent = "cyan",
  children,
  defaultCollapsed = false,
}: Props) {
  const [
    collapsed,
    setCollapsed,
  ] = useState(
    defaultCollapsed
  )

  const accentStyles = {
    cyan:
      "text-cyan-400",

    red:
      "text-red-400",

    orange:
      "text-orange-400",

    emerald:
      "text-emerald-400",

    purple:
      "text-purple-400",

    blue:
      "text-blue-400",
  }

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

      <button
        onClick={() =>
          setCollapsed(
            !collapsed
          )
        }
        className="
          w-full
          flex
          items-start
          justify-between
          text-left
          mb-6
        "
      >

        <div>

          <p
            className={`
              uppercase
              tracking-[0.3em]
              text-sm
              mb-2
              ${accentStyles[
                accent as keyof typeof accentStyles
              ]}
            `}
          >
            {category}
          </p>

          <h2
            className="
              text-3xl
              font-black
            "
          >
            {title}
          </h2>

        </div>

        <span
          className="
            text-zinc-500
            text-xl
            transition-transform
          "
        >
          {collapsed
            ? "▶"
            : "▼"}
        </span>

      </button>

      {!collapsed && (
        <div>
          {children}
        </div>
      )}

    </section>
  )
}