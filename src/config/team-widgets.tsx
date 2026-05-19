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

export const widgetRegistry = {
  weakness: {
    component:
      TeamWeaknessPanel,
  },

  offense: {
    component:
      TeamOffensePanel,
  },

  weather: {
    component:
      TeamWeatherPanel,
  },

  tera: {
    component:
      TeamTeraPanel,
  },

  roles: {
    component:
      TeamRolePanel,
  },

  speed: {
    component:
      TeamSpeedPanel,
  },

  hazards: {
    component:
      TeamHazardPanel,
  },

  setup: {
    component:
      TeamSetupPanel,
  },

  archetype: {
    component:
      TeamArchetypePanel,
  },

  score: {
    component:
      TeamScorePanel,
  },

  radar: {
    component:
      TeamRadarChart,
  },

  recommendations: {
    component:
      TeamRecommendationPanel,
  },
}

export const defaultColumns = {
  left: [
    "weakness",
    "offense",
    "weather",
    "tera",
  ],

  right: [
    "roles",
    "speed",
    "hazards",
    "setup",
    "archetype",
    "score",
    "radar",
    "recommendations",
  ],
}