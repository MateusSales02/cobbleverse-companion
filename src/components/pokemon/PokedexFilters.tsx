import { usePokedexStore }
  from "../../store/pokedex-store"

export default function PokedexFilters() {
  const {
    search,
    setSearch,
  } = usePokedexStore()

  return (
    <section className="mb-8">

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        className="
          w-full
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          px-5
          py-4
          text-white
          outline-none
          focus:border-cyan-500
        "
      />

    </section>
  )
}