import { typeColors }
  from "../../constants/type-colors"

type Props = {
  type: keyof typeof typeColors
}

export default function TypeBadge({
  type,
}: Props) {
  return (
    <span
      className={`
        ${typeColors[type]}
        px-3
        py-1
        rounded-xl
        text-sm
        font-bold
        shadow-lg
        border
        border-white/10
      `}
    >
      {type}
    </span>
  )
}