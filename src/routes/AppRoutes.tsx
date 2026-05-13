import PokemonDetailsPage
  from "../pages/PokemonDetailsPage"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import DashboardPage from "../pages/DashboardPage"
import PokedexPage from "../pages/PokedexPage"
import TeamBuilderPage from "../pages/TeamBuilderPage"
import RegionsPage from "../pages/RegionsPage"
import LegendaryPage from "../pages/LegendaryPage"
import SettingsPage from "../pages/SettingsPage"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route
            path="/"
            element={<DashboardPage />}
          />

          <Route
            path="/pokedex"
            element={<PokedexPage />}
          />

          <Route
            path="/teams"
            element={<TeamBuilderPage />}
          />

          <Route
            path="/regions"
            element={<RegionsPage />}
          />

          <Route
            path="/legendary"
            element={<LegendaryPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

          <Route
            path="/pokemon/:id"
            element={<PokemonDetailsPage />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}