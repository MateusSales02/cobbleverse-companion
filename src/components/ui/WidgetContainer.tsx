import type {
  ReactNode,
} from "react"

type Props = {
  children: ReactNode
}

export default function WidgetContainer({
  children,
}: Props) {
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
      {children}
    </section>
  )
}