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

        <TeamManagerPanel />

        <TeamCard />

      </div>

      <div className="space-y-8">

        {leftWidgets.map(
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

        {rightWidgets.map(
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