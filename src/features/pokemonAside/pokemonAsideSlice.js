import { createSlice } from "@reduxjs/toolkit"

export const pokemonAsideSlice = createSlice ({
    name:'aside',
    initialState: false,
    reducers: {
        openAside: (state, action) => {
            return action.payload
        },
    }
})

export const { openAside } = pokemonAsideSlice.actions

export default pokemonAsideSlice.reducer