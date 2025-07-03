import { createSlice } from '@reduxjs/toolkit';

export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        integrantes: [],
        destinos: [],

    },

    reducers: {
        //FUNCIONES PARA DESTINOS
        addDestino: (state, action) => {
            const destinos = action.payload
        
            const existe = state.destinos.find(d => d.id == destinos.id)

            if(!existe){
             state.destinos.push(destinos)
            }
        },

        delDestino: (state, action) => {
            const destinos = action.payload

            state.destinos = state.destinos.filter(d => d.id !== destinos.id)
        },

        
        //FUNCIONES PARA INTEGRANTES
        addPersona: (state, action) => {
            const persona = action.payload
            
            const existe = state.integrantes.find(p => p.id == persona.id)
            
            if(!existe){
                 state.integrantes.push(persona)
            }                    
        },

        delPersona: (state, action) => {
            const persona = action.payload
            
            state.integrantes = state.integrantes.filter(p => p.id !== persona.id)
        }
    }
})

export const { addPersona, delPersona, addDestino, delDestino } = viajesSlice.actions;
export default viajesSlice.reducer;