import { configureStore } from "@reduxjs/toolkit"
import pokemonsReducer from "../features/pokemons/pokemonSlice"

export const store = configureStore({
    reducer:{
        pokemons: pokemonsReducer,
    }
})