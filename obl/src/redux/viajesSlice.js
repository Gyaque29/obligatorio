import { createSlice } from '@reduxjs/toolkit';


export const viajesSlice = createSlice({
    name: 'viajes',

    initialState: {
        lista_personas: [],
        //lista_destinos,
        //lista_costos,
    },

    reducers: {
        addPersona: (state) => {
           // state.value += 1;
        },
    }
})

export const { addPersona } = viajesSlice.actions;
export default viajesSlice.reducer;