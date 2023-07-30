/* eslint-disable react/prop-types */
import { BsFillStarFill, BsFillPassFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addFavPokemon } from "../../features/pokemons/pokemonSlice";
import { bgTypeColor, typeTextColor } from "../../consts";
import './pokemonCard.css'

const PokemonCard = ({pokemon}) => {
  const dispatch = useDispatch()

  const handleFav = (id) => {
    dispatch(addFavPokemon(id))
  }

  return (
    <div className="flex flex-col relative min-w-[200px] items-center justify-center h-52 bg-transparent shadow-sm shadow-white rounded-2xl cursor-pointer pokemon-container">
      <p className="absolute top-2 font-bold">{pokemon.name}</p>
      <div className="flex items-center justify-center w-full h-40">
        <img className=" w-[130px] h-[130px]" src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div className="invisible w-full h-8 flex items-center justify-center gap-6 absolute bg-gray-600/70 z-10 details">
        <BsFillStarFill onClick={() => handleFav(pokemon.id)} className="text-black hover:scale-125 hover:text-yellow-300"/>
        <BsFillPassFill className="text-black hover:scale-125 hover:text-yellow-300"/>
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