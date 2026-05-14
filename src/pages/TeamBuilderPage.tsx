import TeamManagerPanel
  from "../components/team/TeamManagerPanel"

import TeamCard
  from "../components/team/TeamCard"

import TeamWeaknessPanel
  from "../components/team/TeamWeaknessPanel"

import TeamRolePanel
  from "../components/team/TeamRolePanel"

import TeamOffensePanel
  from "../components/team/TeamOffensePanel"

import TeamWeatherPanel
  from "../components/team/TeamWeatherPanel"

import TeamTeraPanel
  from "../components/team/TeamTeraPanel"

import TeamSpeedPanel
  from "../components/team/TeamSpeedPanel"

import TeamHazardPanel
  from "../components/team/TeamHazardPanel"

import TeamSetupPanel
  from "../components/team/TeamSetupPanel"

import TeamArchetypePanel
  from "../components/team/TeamArchetypePanel"

import TeamRecommendationPanel
  from "../components/team/TeamRecommendationPanel"

import TeamScorePanel
  from "../components/team/TeamScorePanel"

import PokemonPoolPanel
  from "../components/team/PokemonPoolPanel"

export default function TeamBuilderPage() {
  return (
    <div
      className="
        grid
        grid-cols-[2fr_1fr_1fr]
        gap-8
      "
    >

      <div className="space-y-8">

        <TeamManagerPanel />

        <TeamCard />

      </div>

      <div className="space-y-8">

        <TeamWeaknessPanel />

        <TeamRolePanel />

        <TeamOffensePanel />

        <TeamWeatherPanel />

        <TeamTeraPanel />

        <TeamSpeedPanel />

        <TeamHazardPanel />

        <TeamSetupPanel />

        <TeamArchetypePanel />

        <TeamRecommendationPanel />

        <TeamScorePanel />

      </div>

      <div className="space-y-8">

        <PokemonPoolPanel />

      </div>

    </div>
  )
}