import { useSelector } from 'react-redux';
import './App.css'
import { PokemonList } from './components/PokemonList';
import { FavsContainer } from './components/FavsContainer';
import { PokemonAside } from './components/PokemonAside';
import { Searcher } from './components/Searcher';


function App() {
  const favs = useSelector(state =>state.pokemons.favorites)

  const renderfavs = () => {
    if (favs?.length > 0) {
      return (<FavsContainer />)
    } else {
      null
    }
  }

  return (
    <>
      <Searcher />
      { renderfavs() }
      <PokemonList />
      <PokemonAside />
    </>
  )
}

export default App
