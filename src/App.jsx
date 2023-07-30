import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemon, getPokemonDetails } from './api'
import './App.css'
import { setPokemons } from './features/pokemons/pokemonSlice';
import { PokemonList } from './components/PokemonList';
import { FavsContainer } from './components/FavsContainer';

function App() {
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
    <>
      <FavsContainer />
      <PokemonList />
    </>
  )
}

export default App
