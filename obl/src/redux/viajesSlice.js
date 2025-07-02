import { createSlice } from '@reduxjs/toolkit';


export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        integrantes: [],
        
    },

    reducers: {
        addPersona: (state, action) => {
            const persona = action.payload;
            state.integrantes.push(persona);
        },

        delPersona: (state, action) => {
            const persona = action.payload;
            state.integrantes = state.integrantes.filter(p => p.id !== persona.id);
        }
    }
})

export const { addPersona, delPersona } = viajesSlice.actions;
export default viajesSlice.reducer;