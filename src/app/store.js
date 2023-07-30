import { configureStore } from "@reduxjs/toolkit"
import pokemonsReducer from "../features/pokemons/pokemonSlice"
import asideReducer from "../features/pokemonAside/pokemonAsideSlice"

export const store = configureStore({
    reducer:{
        pokemons: pokemonsReducer,
        aside: asideReducer,
    }
})