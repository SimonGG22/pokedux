import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pokemons: [],
    favorites:[],
    pokemonDetails:'',
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

            if (!pokemonFound) return 

            const indexInFavorites = state.favorites.findIndex(pokemon => pokemon.id === action.payload)

            if (pokemonFound.favorite === false) {
                pokemonFound.favorite = true
                state.favorites.push(state.pokemons[state.pokemons.indexOf(pokemonFound)])
            } else {
                pokemonFound.favorite = false
                state.favorites.splice(indexInFavorites, 1)
            }
        },
        setPokemonDetails: (state, action) => {
            state.pokemonDetails = action.payload
        }
    }
})

export const { setPokemons, addFavPokemon, setPokemonDetails } = pokemonSlice.actions

export default pokemonSlice.reducer