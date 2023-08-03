/* eslint-disable react/prop-types */
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addFavPokemon, setPokemonDetails } from "../../features/pokemons/pokemonSlice";
import { openAside } from "../../features/PokemonAside/pokemonAsideSlice";
import { bgTypeColor, typeTextColor } from "../../consts";
import './pokemonCard.css'

const PokemonCard = ({pokemon}) => {
  const dispatch = useDispatch()

  const handleFav = (id) => {
    dispatch(addFavPokemon(id))
  }

  const handleOpenAside = (id) => {
    dispatch(openAside(true))
    dispatch(setPokemonDetails(id))
  }

  const stopPropagationHandler = (event) => {
    event.stopPropagation();
  };

  return (
    
    <div 
      className="flex flex-col relative min-w-[200px] items-center justify-center h-52 bg-transparent shadow-sm shadow-white rounded-2xl cursor-pointer pokemon-container"
      onClick={() => handleOpenAside(pokemon.id)}
    >
      <BsFillStarFill 
        onClick={(event) => {
          handleFav(pokemon.id)
          stopPropagationHandler(event)
        }} 
        className={`absolute top-3 left-3 ${pokemon.favorite? 'text-yellow-300' : 'text-black'} text-black hover:scale-125 hover:text-yellow-300`}
      />
      <p className="absolute top-2 font-bold">{pokemon.name}</p>
      <div className="flex items-center justify-center w-full h-40">
        <img className=" w-[130px] h-[130px]" src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
  
      <div className="flex justify-center gap-2 w-[96%] absolute bottom-2">
        {
          pokemon.types.map((element) => (
            <p
            key={element.type.name}
            className={`flex items-center ${bgTypeColor(element.type.name)} ${typeTextColor(element.type.name)} px-2 rounded-full`}
            >
              {element.type.name}
            </p>
          ))
        }
      </div>
    </div>
  )
}

export { PokemonCard }