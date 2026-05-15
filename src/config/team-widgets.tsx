import TeamWeaknessPanel
  from "../components/team/TeamWeaknessPanel"

import TeamOffensePanel
  from "../components/team/TeamOffensePanel"

import TeamWeatherPanel
  from "../components/team/TeamWeatherPanel"

import TeamTeraPanel
  from "../components/team/TeamTeraPanel"

import TeamRolePanel
  from "../components/team/TeamRolePanel"

import TeamSpeedPanel
  from "../components/team/TeamSpeedPanel"

import TeamHazardPanel
  from "../components/team/TeamHazardPanel"

import TeamSetupPanel
  from "../components/team/TeamSetupPanel"

import TeamArchetypePanel
  from "../components/team/TeamArchetypePanel"

import TeamScorePanel
  from "../components/team/TeamScorePanel"

import TeamRadarChart
  from "../components/team/TeamRadarChart"

import TeamRecommendationPanel
  from "../components/team/TeamRecommendationPanel"

export const leftWidgets = [
  {
    id: "weakness",
    component:
      TeamWeaknessPanel,
  },

  {
    id: "offense",
    component:
      TeamOffensePanel,
  },

  {
    id: "weather",
    component:
      TeamWeatherPanel,
  },

  {
    id: "tera",
    component:
      TeamTeraPanel,
  },
]

export const rightWidgets = [
  {
    id: "roles",
    component:
      TeamRolePanel,
  },

  {
    id: "speed",
    component:
      TeamSpeedPanel,
  },

  {
    id: "hazards",
    component:
      TeamHazardPanel,
  },

  {
    id: "setup",
    component:
      TeamSetupPanel,
  },

  {
    id: "archetype",
    component:
      TeamArchetypePanel,
  },

  {
    id: "score",
    component:
      TeamScorePanel,
  },

  {
    id: "radar",
    component:
      TeamRadarChart,
  },

  {
    id: "recommendations",
    component:
      TeamRecommendationPanel,
  },
]