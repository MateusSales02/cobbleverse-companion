import {
  LayoutDashboard,
  BookOpen,
  Swords,
  Map,
  Crown,
  Settings,
} from "lucide-react"

import { NavLink } from "react-router-dom"

const navigationItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    label: "Pokedex",
    path: "/pokedex",
    icon: BookOpen,
  },

  {
    label: "Teams",
    path: "/teams",
    icon: Swords,
  },

  {
    label: "Regions",
    path: "/regions",
    icon: Map,
  },

  {
    label: "Legendary",
    path: "/legendary",
    icon: Crown,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <aside
      className="
        w-72
        border-r
        border-zinc-800
        bg-zinc-900
        min-h-screen
        p-6
      "
    >
      <div className="mb-10">

        <h1
          className="
            text-3xl
            font-black
            text-cyan-400
          "
        >
          Cobbleverse
        </h1>

        <p className="text-zinc-500">
          Companion System
        </p>
      </div>

      <nav className="space-y-3">

        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  flex
                  items-center
                  gap-4
                  px-4
                  py-4
                  rounded-2xl
                  transition-all
                  border

                  ${
                    isActive
                      ? `
                        bg-cyan-500/10
                        border-cyan-500/30
                        text-cyan-300
                      `
                      : `
                        border-transparent
                        text-zinc-400
                        hover:bg-zinc-800
                        hover:text-white
                      `
                  }
                `
              }
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.label}
              </span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
