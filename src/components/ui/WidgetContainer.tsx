import {
  useState,
  type ReactNode,
} from "react"

type Props = {
  title: string

  category: string

  accent?: string

  children:
    ReactNode

  defaultCollapsed?:
    boolean

  dragHandleProps?: {
    attributes?: object
    listeners?: object
  }
}

export default function WidgetContainer({
  title,
  category,
  accent = "cyan",
  children,
  defaultCollapsed = false,
  dragHandleProps,
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

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
          mb-6
        "
      >

        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          className="
            flex-1
            text-left
          "
        >

          <p
            className={`
              uppercase
              tracking-[0.3em]
              text-sm
              mb-2
              ${
                accentStyles[
                  accent as keyof typeof accentStyles
                ]
              }
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

        </button>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <button
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
            className="
              text-zinc-500
              hover:text-white
              transition-all
              text-xl
            "
          >
            {collapsed
              ? "▶"
              : "▼"}
          </button>

          <div
            {...dragHandleProps?.attributes}
            {...dragHandleProps?.listeners}
            className="
              cursor-grab
              active:cursor-grabbing
              text-zinc-500
              hover:text-cyan-400
              transition-all
              text-xl
              select-none
            "
          >
            ⋮⋮
          </div>

        </div>

      </div>

      {!collapsed && (
        <div>
          {children}
        </div>
      )}

    </section>
  )
}