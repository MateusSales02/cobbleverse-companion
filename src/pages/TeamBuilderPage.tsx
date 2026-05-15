import { useState }
  from "react"

import TeamManagerPanel
  from "../components/team/TeamManagerPanel"

import TeamCard
  from "../components/team/TeamCard"

import PokemonPoolPanel
  from "../components/team/PokemonPoolPanel"

import {
  leftWidgets,
  rightWidgets,
} from "../config/team-widgets"

export default function TeamBuilderPage() {
  const [
    hiddenWidgets,
    setHiddenWidgets,
  ] = useState<string[]>([])

  function toggleWidget(
    id: string
  ) {
    setHiddenWidgets(
      (current) =>
        current.includes(id)
          ? current.filter(
              (widgetId) =>
                widgetId !== id
            )
          : [
              ...current,
              id,
            ]
    )
  }

  return (
    <div
      className="
        grid
        xl:grid-cols-[1.5fr_1fr]
        2xl:grid-cols-[1.7fr_1fr_1fr]
        gap-8
        items-start
      "
    >

      <div className="space-y-8">

        <TeamManagerPanel
          hiddenWidgets={
            hiddenWidgets
          }
          toggleWidget={
            toggleWidget
          }
        />

        <TeamCard />

      </div>

      <div className="space-y-8">

        {leftWidgets
          .filter(
            (widget) =>
              !hiddenWidgets.includes(
                widget.id
              )
          )
          .map(
            (widget) => {
              const Component =
                widget.component

              return (
                <Component
                  key={widget.id}
                />
              )
            }
          )}

      </div>

      <div className="space-y-8">

        {rightWidgets
          .filter(
            (widget) =>
              !hiddenWidgets.includes(
                widget.id
              )
          )
          .map(
            (widget) => {
              const Component =
                widget.component

              return (
                <Component
                  key={widget.id}
                />
              )
            }
          )}

        <PokemonPoolPanel />

      </div>

    </div>
  )
}