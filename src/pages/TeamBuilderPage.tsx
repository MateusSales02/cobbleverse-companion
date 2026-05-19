import {
  useEffect,
  useState,
} from "react"

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core"

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable"

import TeamManagerPanel
  from "../components/team/TeamManagerPanel"

import TeamCard
  from "../components/team/TeamCard"

import PokemonPoolPanel
  from "../components/team/PokemonPoolPanel"

import SortableWidget
  from "../components/team/SortableWidget"

import {
  widgetRegistry,
  defaultColumns,
} from "../config/team-widgets"

type DashboardColumns = {
  left: string[]
  right: string[]
}

export default function TeamBuilderPage() {
  const [
    hiddenWidgets,
    setHiddenWidgets,
  ] = useState<string[]>(
    () => {
      const saved =
        localStorage.getItem(
          "hidden-widgets"
        )

      return saved
        ? JSON.parse(saved)
        : []
    }
  )

  const [
    columns,
    setColumns,
  ] = useState<DashboardColumns>(
    () => {
      const saved =
        localStorage.getItem(
          "dashboard-columns"
        )

      return saved
        ? JSON.parse(saved)
        : defaultColumns
    }
  )

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

  function handleWidgetDragEnd(
    event: DragEndEvent
  ) {
    const {
      active,
      over,
    } = event

    if (!over) {
      return
    }

    if (
      active.id ===
      over.id
    ) {
      return
    }

    const activeId =
      String(active.id)

    const overId =
      String(over.id)

    const sourceColumn =
      Object.keys(columns).find(
        (columnKey) =>
          columns[
            columnKey as keyof DashboardColumns
          ].includes(
            activeId
          )
      )

    const targetColumn =
      Object.keys(columns).find(
        (columnKey) =>
          columns[
            columnKey as keyof DashboardColumns
          ].includes(
            overId
          )
      )

    if (
      !sourceColumn ||
      !targetColumn
    ) {
      return
    }

    if (
      sourceColumn ===
      targetColumn
    ) {
      const columnWidgets =
        columns[
          sourceColumn as keyof DashboardColumns
        ]

      const oldIndex =
        columnWidgets.indexOf(
          activeId
        )

      const newIndex =
        columnWidgets.indexOf(
          overId
        )

      setColumns({
        ...columns,

        [sourceColumn]:
          arrayMove(
            columnWidgets,
            oldIndex,
            newIndex
          ),
      })

      return
    }

    const sourceWidgets =
      [
        ...columns[
          sourceColumn as keyof DashboardColumns
        ],
      ]

    const targetWidgets =
      [
        ...columns[
          targetColumn as keyof DashboardColumns
        ],
      ]

    const sourceIndex =
      sourceWidgets.indexOf(
        activeId
      )

    sourceWidgets.splice(
      sourceIndex,
      1
    )

    const targetIndex =
      targetWidgets.indexOf(
        overId
      )

    targetWidgets.splice(
      targetIndex,
      0,
      activeId
    )

    setColumns({
      ...columns,

      [sourceColumn]:
        sourceWidgets,

      [targetColumn]:
        targetWidgets,
    })
  }

  useEffect(() => {
    localStorage.setItem(
      "hidden-widgets",
      JSON.stringify(
        hiddenWidgets
      )
    )
  }, [hiddenWidgets])

  useEffect(() => {
    localStorage.setItem(
      "dashboard-columns",
      JSON.stringify(
        columns
      )
    )
  }, [columns])

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

      <DndContext
        collisionDetection={
          closestCenter
        }
        onDragEnd={
          handleWidgetDragEnd
        }
      >

        <div className="space-y-8">

          <SortableContext
            items={columns.left}
            strategy={
              verticalListSortingStrategy
            }
          >

            {columns.left
              .filter(
                (widgetId) =>
                  !hiddenWidgets.includes(
                    widgetId
                  )
              )
              .map(
                (widgetId) => {
                  const Component =
                    widgetRegistry[
                      widgetId as keyof typeof widgetRegistry
                    ].component

                  return (
                    <SortableWidget
                      key={widgetId}
                      id={widgetId}
                    >

                      <Component />

                    </SortableWidget>
                  )
                }
              )}

          </SortableContext>

        </div>

        <div className="space-y-8">

          <SortableContext
            items={columns.right}
            strategy={
              verticalListSortingStrategy
            }
          >

            {columns.right
              .filter(
                (widgetId) =>
                  !hiddenWidgets.includes(
                    widgetId
                  )
              )
              .map(
                (widgetId) => {
                  const Component =
                    widgetRegistry[
                      widgetId as keyof typeof widgetRegistry
                    ].component

                  return (
                    <SortableWidget
                      key={widgetId}
                      id={widgetId}
                    >

                      <Component />

                    </SortableWidget>
                  )
                }
              )}

          </SortableContext>

          <PokemonPoolPanel />

        </div>

      </DndContext>

    </div>
  )
}