import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"

import { setPokemons } from '../../features/pokemons/pokemonSlice';
import { getPokemon, getPokemonDetails } from '../../api'

import { PokemonCard } from "../PokemonCard"

const PokemonList = () => {
    const pokemons = useSelector(state =>state.pokemons.pokemons)

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