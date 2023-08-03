import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { setPokemons } from '../../features/pokemons/pokemonSlice';
import { getPokemon, getPokemonDetails } from '../../api'

import { PokemonCard } from "../PokemonCard"

const PokemonList = () => {
    const pokemons = useSelector(state =>state.pokemons.pokemons)

    const inputSearch = useSelector(state =>state.pokemons.pokemonSearch)

    const filteredFavsPokemons = pokemons?.filter(pokemon => pokemon.name.toLowerCase().includes(inputSearch?.toLowerCase()))

    const renderView = () => {
      if (filteredFavsPokemons.length > 0) {
              return filteredFavsPokemons.map((pokemon) => {
                  return (
                    <div key={pokemon.id} className="flex-1">
                      <PokemonCard pokemon={pokemon} />
                    </div>
                  )
              })
      } else {
          return (
              <p>no hay coincidencias para tu búsqueda</p>
          )
      }
  }

    const dispatch = useDispatch() 

    useEffect(() => {
      const fetchPokemons = async () => {
        const pokemonsRes = await getPokemon();
  
        const pokemonDetailed = await Promise.all(
          pokemonsRes.map( async (pokemon) =>{
            const details = await getPokemonDetails(pokemon);
            return {... details, favorite: false}
          })
        )
        dispatch(setPokemons(pokemonDetailed))
      }
      
      fetchPokemons();
    }, [dispatch]);

    return (
        <div className="w-full flex flex-wrap gap-5" >
            {renderView()}
        </div>
    )
}

export { PokemonList }