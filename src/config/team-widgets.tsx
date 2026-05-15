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

    title:
      "Weakness Coverage",

    component:
      TeamWeaknessPanel,

    visible: true,
  },

  {
    id: "offense",

    title:
      "Type Coverage",

    component:
      TeamOffensePanel,

    visible: true,
  },

  {
    id: "weather",

    title:
      "Weather Synergy",

    component:
      TeamWeatherPanel,

    visible: true,
  },

  {
    id: "tera",

    title:
      "Tera Distribution",

    component:
      TeamTeraPanel,

    visible: true,
  },
]

export const rightWidgets = [
  {
    id: "roles",

    title:
      "Role Distribution",

    component:
      TeamRolePanel,

    visible: true,
  },

  {
    id: "speed",

    title:
      "Speed Control",

    component:
      TeamSpeedPanel,

    visible: true,
  },

  {
    id: "hazards",

    title:
      "Hazard Control",

    component:
      TeamHazardPanel,

    visible: true,
  },

  {
    id: "setup",

    title:
      "Setup Analysis",

    component:
      TeamSetupPanel,

    visible: true,
  },

  {
    id: "archetype",

    title:
      "Archetype",

    component:
      TeamArchetypePanel,

    visible: true,
  },

  {
    id: "score",

    title:
      "Team Score",

    component:
      TeamScorePanel,

    visible: true,
  },

  {
    id: "radar",

    title:
      "Team Radar",

    component:
      TeamRadarChart,

    visible: true,
  },

  {
    id: "recommendations",

    title:
      "Recommendations",

    component:
      TeamRecommendationPanel,

    visible: true,
  },
]