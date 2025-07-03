import { createSlice } from '@reduxjs/toolkit';

export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        integrantes: [],
    },

    reducers: {
        addPersona: (state, action) => {
            const persona = action.payload;
            
            const existe = state.integrantes.find(i => i.id == persona.id)
            
            if(!existe){
                 state.integrantes.push(persona);
            }                    
        },

        delPersona: (state, action) => {
            const persona = action.payload;
            state.integrantes = state.integrantes.filter(p => p.id !== persona.id);
        }
    }
})

export const { addPersona, delPersona } = viajesSlice.actions;
export default viajesSlice.reducer;