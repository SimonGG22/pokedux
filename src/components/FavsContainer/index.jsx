import { useSelector } from "react-redux"

import { PokemonCard } from "../PokemonCard"

const FavsContainer = () => {
    const pokemons = useSelector(state =>state.pokemons.favorites)

    return (
        <div className="w-full h-auto mb-10">
            <h2 className="text-2xl text-start text-white">Favorites</h2>
            <div className="flex gap-4 overflow-x-auto py-5 px-2">
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    )
                })}
            </div>
        </div>
    )
}

export { FavsContainer }