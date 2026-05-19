import {
  useSortable,
} from "@dnd-kit/sortable"

import { CSS }
  from "@dnd-kit/utilities"

import type {
  ReactNode,
} from "react"

type Props = {
  id: string

  children:
    ReactNode
}

export default function SortableWidget({
  id,
  children,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  })

  const style = {
    transform:
      CSS.Transform.toString(
        transform
      ),

    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        transition-all
        ${
          isDragging
            ? `
              opacity-50
              scale-[1.02]
            `
            : ""
        }
      `}
    >

      <div
        {...attributes}
        {...listeners}
        className="
          cursor-grab
          active:cursor-grabbing
        "
      >

        {children}

      </div>

    </div>
  )
}