import { createSlice } from '@reduxjs/toolkit';

export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        integrantes: [],
        destinos: [],
        costos: [],

    },

    reducers: {

        //FUNCIONES PARA COSTOS
        addCosto: (state, action) => {
            const costos = action.payload

            const existe = state.costos.find(c => c.id == costos.id)

            if(!existe){
                state.costos.push(costos)
                console.log('Costo Agregado Correctamente')
            }
        },

        delCosto: (state, action) => {
            const { id } = action.payload

            state.costos = state.costos.filter(c => c.id !== id)
            console.log('Costo Eliminado Correctamente')
        },



        //FUNCIONES PARA DESTINOS
        addDestino: (state, action) => {
            const destinos = action.payload
        
            const existe = state.destinos.find(d => d.id == destinos.id)

            if(!existe){
             state.destinos.push(destinos)
             console.log('Destino Agregado Correctamente')
            }
            else{
                console.log('Ya Agregaste el Destino')
            }
        },

        delDestino: (state, action) => {
            const destinos = action.payload

            state.destinos = state.destinos.filter(d => d.id !== destinos.id)
            console.log('Destino Eliminado Correctamente')
        },

        
        //FUNCIONES PARA INTEGRANTES
        addPersona: (state, action) => {
            const persona = action.payload
            
            const existe = state.integrantes.find(p => p.id == persona.id)
            
            if(!existe){
                 state.integrantes.push(persona)
                 console.log('Persona Agregada Correctamente')
            }             
            else{
                console.log('Ya Agregaste la Persona')
            }       
        },

        delPersona: (state, action) => {
            const persona = action.payload
            
            state.integrantes = state.integrantes.filter(p => p.id !== persona.id)
            console.log('Persona Eliminada Correctamente')
        }
    }
})

export const { addPersona, delPersona, addDestino, delDestino, addCosto, delCosto } = viajesSlice.actions;
export default viajesSlice.reducer;