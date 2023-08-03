import { useSelector } from "react-redux"

import { PokemonCard } from "../PokemonCard"

const FavsContainer = () => {
    const pokemons = useSelector(state =>state.pokemons.favorites)
    const inputSearch = useSelector(state =>state.pokemons.pokemonSearch)

    const filteredFavsPokemons = pokemons?.filter(pokemon => pokemon.name.toLowerCase().includes(inputSearch?.toLowerCase()))

    const renderView = () => {
        if (filteredFavsPokemons.length > 0) {
                return filteredFavsPokemons.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    )
                })
        } else {
            return (
                <p>no hay coincidencias para tu búsqueda</p>
            )
        }
    }

    return (
        <div className="w-full h-auto mb-10">
            <h2 className="text-2xl text-start text-white">Favorites</h2>
            <div className="flex gap-4 overflow-x-auto py-5 px-2">
            {renderView()}
            </div>
        </div>
    )
}

export { FavsContainer }