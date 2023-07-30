import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pokemons: [],
    favorites:[]
}

export const pokemonSlice = createSlice ({
    name:'pokemons',
    initialState: initialState,
    reducers: {
        setPokemons: (state, action) => {
            return {...state, pokemons: action.payload}
        },
        addFavPokemon: (state, action) => {
            const pokemonFound = state.pokemons.find(pokemon => pokemon.id === action.payload)

            if (pokemonFound.favorite === false) {
                pokemonFound.favorite = true
                state.favorites.push(state.pokemons[state.pokemons.indexOf(pokemonFound)])
            } else {
                pokemonFound.favorite = false
                state.favorites.splice(state.favorites.indexOf(pokemonFound), 1)
            }
        },
    }
})

export const { setPokemons, addFavPokemon } = pokemonSlice.actions

export default pokemonSlice .reducer