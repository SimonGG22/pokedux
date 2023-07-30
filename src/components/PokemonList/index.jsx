import { useSelector } from "react-redux"

import { PokemonCard } from "../PokemonCard"

const PokemonList = () => {
    const pokemons = useSelector(state =>state.pokemons.pokemons)

    return (
        <div className="w-full flex flex-wrap gap-5" >
            {pokemons.map((pokemon) => {
                return (
                    <div key={pokemon.id} className="flex-1">
                        <PokemonCard pokemon={pokemon} />
                    </div>
                )
            })}
        </div>
    )
}

export { PokemonList }