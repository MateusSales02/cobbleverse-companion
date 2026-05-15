import {
  useState,
  type ReactNode,
} from "react"

type Props = {
  title: string

  children: ReactNode

  defaultOpen?: boolean
}

export default function AnalyticsSection({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [
    open,
    setOpen,
  ] = useState(defaultOpen)

  return (
    <section
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        overflow-hidden
        transition-all
      "
    >

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-full
          flex
          items-center
          justify-between
          px-6
          py-5
          hover:bg-zinc-800/40
          transition-all
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className={`
              transition-transform
              duration-300
              text-cyan-400
              text-sm
              ${
                open
                  ? "rotate-90"
                  : ""
              }
            `}
          >
            ▶
          </div>

          <h3
            className="
              text-lg
              font-bold
              text-white
            "
          >
            {title}
          </h3>

        </div>

      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? `
                grid-rows-[1fr]
                opacity-100
              `
              : `
                grid-rows-[0fr]
                opacity-0
              `
          }
        `}
      >

        <div className="overflow-hidden">

          <div className="p-6 pt-0">

            {children}

          </div>

        </div>

      </div>

    </section>
  )
}