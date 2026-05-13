import { create } from "zustand"

import type { Team } from "../types/team"

type TeamStore = {
  teams: Team[]

  activeTeamId?: string

  createTeam: (
    team: Team
  ) => void

  setActiveTeam: (
    teamId: string
  ) => void
}

export const useTeamStore =
  create<TeamStore>((set) => ({
    teams: [],

    activeTeamId: undefined,

    createTeam: (team) =>
      set((state) => ({
        teams: [
          ...state.teams,
          team,
        ],
      })),

    setActiveTeam: (teamId) =>
      set({
        activeTeamId: teamId,
      }),
  }))