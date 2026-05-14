import { create } from "zustand"

import { persist }
  from "zustand/middleware"

import { teams }
  from "../data/teams"

import type { Team }
  from "../types/team"

type TeamStore = {
  teams: Team[]

  activeTeamId: string

  setActiveTeam: (
    teamId: string
  ) => void

  createTeam: () => void

  deleteTeam: (
    teamId: string
  ) => void

  renameTeam: (
    teamId: string,
    name: string
  ) => void

  changeStrategy: (
    teamId: string,
    strategy: Team["strategy"]
  ) => void

  addPokemon: (
    playerPokemonId: string
  ) => void

  removePokemon: (
    playerPokemonId: string
  ) => void

  reorderTeam: (
    oldIndex: number,
    newIndex: number
  ) => void
}

export const useTeamStore =
  create<TeamStore>()(
    persist(
      (set) => ({
        teams,

        activeTeamId:
          teams[0].id,

        setActiveTeam: (
          teamId
        ) =>
          set({
            activeTeamId:
              teamId,
          }),

        createTeam: () =>
          set((state) => {
            const newTeam: Team = {
              id:
                crypto.randomUUID(),

              name:
                "New Team",

              strategy:
                "Balanced",

              pokemonSlots: [],
            }

            return {
              teams: [
                ...state.teams,
                newTeam,
              ],

              activeTeamId:
                newTeam.id,
            }
          }),

        deleteTeam: (
          teamId
        ) =>
          set((state) => {
            const filteredTeams =
              state.teams.filter(
                (team) =>
                  team.id !== teamId
              )

            return {
              teams:
                filteredTeams,

              activeTeamId:
                filteredTeams[0]
                  ?.id || "",
            }
          }),

        renameTeam: (
          teamId,
          name
        ) =>
          set((state) => ({
            teams: state.teams.map(
              (team) => {
                if (
                  team.id !== teamId
                ) {
                  return team
                }

                return {
                  ...team,
                  name,
                }
              }
            ),
          })),

        changeStrategy: (
          teamId,
          strategy
        ) =>
          set((state) => ({
            teams: state.teams.map(
              (team) => {
                if (
                  team.id !== teamId
                ) {
                  return team
                }

                return {
                  ...team,
                  strategy,
                }
              }
            ),
          })),

        addPokemon: (
          playerPokemonId
        ) =>
          set((state) => ({
            teams: state.teams.map(
              (team) => {
                if (
                  team.id !==
                  state.activeTeamId
                ) {
                  return team
                }

                if (
                  team.pokemonSlots
                    .length >= 6
                ) {
                  return team
                }

                return {
                  ...team,

                  pokemonSlots: [
                    ...team.pokemonSlots,

                    {
                      playerPokemonId,
                    },
                  ],
                }
              }
            ),
          })),

        removePokemon: (
          playerPokemonId
        ) =>
          set((state) => ({
            teams: state.teams.map(
              (team) => {
                if (
                  team.id !==
                  state.activeTeamId
                ) {
                  return team
                }

                return {
                  ...team,

                  pokemonSlots:
                    team.pokemonSlots.filter(
                      (slot) =>
                        slot.playerPokemonId !==
                        playerPokemonId
                    ),
                }
              }
            ),
          })),

        reorderTeam: (
          oldIndex,
          newIndex
        ) =>
          set((state) => ({
            teams: state.teams.map(
              (team) => {
                if (
                  team.id !==
                  state.activeTeamId
                ) {
                  return team
                }

                const updatedSlots =
                  [...team.pokemonSlots]

                const [movedPokemon] =
                  updatedSlots.splice(
                    oldIndex,
                    1
                  )

                updatedSlots.splice(
                  newIndex,
                  0,
                  movedPokemon
                )

                return {
                  ...team,

                  pokemonSlots:
                    updatedSlots,
                }
              }
            ),
          })),
      }),

      {
        name:
          "cobbleverse-team-storage",
      }
    )
  )