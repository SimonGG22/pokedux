import { BsFillXSquareFill } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux"

import { closeAside } from "../../features/PokemonAside/pokemonAsideSlice";
import { bgTypeColor, typeTextColor } from "../../consts";
import './pokemonAside.css'

const PokemonAside = () => {
    const dispatch = useDispatch()
    const isAsideOpen = useSelector(state => state.aside)
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const pokemonId = useSelector(state => state.pokemons.pokemonDetails)

    const pokemonFound = pokemons.find(pokemon => pokemon.id === pokemonId)

    const handleOpenAside = () => {
        dispatch(closeAside(false))
    }

    const addComa = (value) => {
        if (value === undefined) {
            return null
        } else {
            let weightStr = value.toString()
            const lastChar = weightStr.charAt(weightStr.length - 1);
            return (weightStr.slice(0, -1) + ',' + lastChar)
        }
    }

    return (
        <aside className={`${isAsideOpen ? 'visible' : 'invisible'} w-3/4 md:w-2/4 h-full flex flex-col justify-center items-center fixed top-2 right-3 bg-zinc-700 z-20`}>
            <BsFillXSquareFill onClick={() => handleOpenAside()} className="w-10 h-10 absolute top-10 right-10 hover:scale-125"/>
            <div className="flex flex-col justify-center items-center gap-3 w-5/6 h-96">
                <h2 className='text-3xl font-bold'>{pokemonFound?.name}</h2>
                <img className="w-40 h-40" src={pokemonFound?.sprites.front_default} alt={pokemonFound?.name} />
                <div className="flex gap-2">
                    <p className="font-bold">Type: </p>
                    {
                        pokemonFound?.types.map((element) => (
                            <p
                            key={element.type.name}
                            className={`flex items-center ${bgTypeColor(element.type.name)} ${typeTextColor(element.type.name)} px-2 rounded-full`}
                            >
                            {element.type.name}
                            </p>
                        ))
                    }
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Abilities: </p>
                    {
                        pokemonFound?.abilities.map((element) => (
                            <p
                            key={element.ability.name}
                            className={`flex items-center bg-zinc-400 text-black px-2 rounded-full`}
                            >
                            {element.ability.name}
                            </p>
                        ))
                    }
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Height:</p>
                    <span className='flex items-center bg-zinc-400 text-black px-2 rounded-full'>{addComa(pokemonFound?.height)}m</span>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Weight:</p>
                    <span className='flex items-center bg-zinc-400 text-black px-2 rounded-full'>{addComa(pokemonFound?.weight)}kg</span>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Hp</p>
                        <progress className="progress-hp" max="160" value={pokemonFound?.stats[0].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[0].base_stat}</span>
                    </div>
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Attack</p>
                        <progress className="progress-attack" max="160" value={pokemonFound?.stats[1].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[1].base_stat}</span>
                    </div>
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Defense</p>
                        <progress max="160" value={pokemonFound?.stats[2].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[2].base_stat}</span>
                    </div>
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Special-attack</p>
                        <progress className="progress-sp-attack" max="160" value={pokemonFound?.stats[3].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[3].base_stat}</span>
                    </div>
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Special-defense</p>
                        <progress className="progress-sp-defense
                        " max="160" value={pokemonFound?.stats[4].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[4].base_stat}</span>
                    </div>
                    <div className="flex gap-1 relative">
                        <p className="font-bold">Speed</p>
                        <progress max="160" value={pokemonFound?.stats[5].base_stat}></progress>
                        <span className="absolute right-[73px] text-black font-bold">{pokemonFound?.stats[5].base_stat}</span>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export { PokemonAside }