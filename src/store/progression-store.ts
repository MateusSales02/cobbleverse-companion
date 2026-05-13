import { create } from "zustand"

import type {
  PlayerProgression,
} from "../types/progression"

type ProgressionStore = {
  progression: PlayerProgression

  setCurrentRegion: (
    region: string
  ) => void

  addUnlockedRegion: (
    region: string
  ) => void

  setActiveTeam: (
    teamId: string
  ) => void
}

export const useProgressionStore =
  create<ProgressionStore>((set) => ({
    progression: {
      currentRegion: "Kanto",

      unlockedRegions: [
        "Kanto",
      ],

      completedRegions: [],

      gyms: [],

      elite4: {
        completed: false,

        championDefeated: false,
      },

      currentObjectives: [
        "Defeat Sabrina",
        "Capture Volcarona",
      ],

      legendaryTargets: [
        384,
      ],
    },

    setCurrentRegion: (region) =>
      set((state) => ({
        progression: {
          ...state.progression,

          currentRegion: region,
        },
      })),

    addUnlockedRegion: (region) =>
      set((state) => ({
        progression: {
          ...state.progression,

          unlockedRegions: [
            ...state.progression.unlockedRegions,
            region,
          ],
        },
      })),

    setActiveTeam: (teamId) =>
      set((state) => ({
        progression: {
          ...state.progression,

          activeTeamId: teamId,
        },
      })),
  }))