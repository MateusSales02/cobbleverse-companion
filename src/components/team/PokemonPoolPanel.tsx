import { playerPokemon }
  from "../../data/player-pokemon"

import { pokemonSpecies }
  from "../../data/pokemon-species"

import { useTeamStore }
  from "../../store/team-store"

export default function PokemonPoolPanel() {
    const { addPokemon } =
    useTeamStore()
  return (
    
    <section
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-6
      "
    >
      <header className="mb-6">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-cyan-400
            text-sm
            mb-2
          "
        >
          Pokemon Collection
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Available Pokemon
        </h2>

      </header>

      <div className="space-y-4">

        {playerPokemon.map(
          (pokemon) => {
            const species =
              pokemonSpecies.find(
                (species) =>
                  species.id ===
                  pokemon.speciesId
              )

            if (!species) {
              return null
            }

            return (
              <div
                key={pokemon.id}
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-2xl
                  p-4
                  flex
                  items-center
                  gap-4
                "
              >
                <img
                  src={species.image}
                  alt={species.name}
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    object-cover
                  "
                />

                <div className="flex-1">

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {pokemon.nickname ??
                      species.name}
                  </h3>

                  <p className="text-zinc-500">
                    Lv. {pokemon.level}
                  </p>

                </div>
                    <button
                    onClick={() =>
                        addPokemon(
                        pokemon.id
                        )
                    }
                    className="
                        bg-cyan-500
                        hover:bg-cyan-400
                        transition-all
                        text-black
                        font-bold
                        px-4
                        py-2
                        rounded-xl
                    "
                    >
                    Add
                    </button>
              </div>
            )
          }
        )}

      </div>

    </section>
  )
}