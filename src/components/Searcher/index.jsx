import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { setPokemonSearch } from "../../features/pokemons/pokemonSlice";

import logo from "../../assets/logo.svg"

const Searcher = () => {
    const dispatch = useDispatch()

    const handlechange = (e) => {
        dispatch(setPokemonSearch(e.target.value))
    }

    return (
        <div className="flex flex-col gap-4 justify-center items-center pb-8">
            <img className="w-[200px] md:w-[400px]" src={logo} alt="logo pokedux" />
            <div className="relative">
                <input onChange={(e) => handlechange(e)} className="w-[200px] md:w-[400px] h-8 px-4 rounded-full" placeholder="Search" type="text" />
                <BsSearch  className="absolute top-2 right-4"/>
            </div>
        </div>
    )
}

export { Searcher }