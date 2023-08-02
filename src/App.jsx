import './App.css'
import { PokemonList } from './components/PokemonList';
import { FavsContainer } from './components/FavsContainer';
import { PokemonAside } from './components/PokemonAside';

function App() {
  return (
    <>
      <FavsContainer />
      <PokemonList />
      <PokemonAside />
    </>
  )
}

export default App
