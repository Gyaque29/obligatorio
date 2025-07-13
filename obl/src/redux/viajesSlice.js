import { createSlice } from '@reduxjs/toolkit';

export const viajesSlice = createSlice({
    name: 'viajes',
    initialState: {
        integrantes: [],
        destinos: [],
        costos: [],

    },

    reducers: {

        //RESET ARREGLOS
        resetArreglo : (state) => {
            state.integrantes = []
            state.destinos = []
            state.costos = []
        },

        //FUNCIONES PARA COSTOS
        addCosto: (state, action) => {
            const costos = action.payload

            const existe = state.costos.find(c => c.id == costos.id)

            if(!existe){
                state.costos.push(costos)
                console.log('COSTO - Agregado Correctamente a REDUX')
            }
        },

        delCosto: (state, action) => {
            const { id } = action.payload

            state.costos = state.costos.filter(c => c.id !== id)
            console.log('COSTO - Eliminado Correctamente de REDUX')
        },



        //FUNCIONES PARA DESTINOS
        addDestino: (state, action) => {
            const destinos = action.payload
        
            const existe = state.destinos.find(d => d.id == destinos.id)

            if(!existe){
             state.destinos.push(destinos)
             console.log('DESTINO - Agregado Correctamente a REDUX')
            }
            else{
                console.log('DESTINO - Ya Agregaste el Destino a REDUX')
            }
        },

        delDestino: (state, action) => {
            const destinos = action.payload

            state.destinos = state.destinos.filter(d => d.id !== destinos.id)
            console.log('DESTINO - Eliminado Correctamente de REDUX')
        },

        
        //FUNCIONES PARA INTEGRANTES
        addPersona: (state, action) => {
            const persona = action.payload
            
            const existe = state.integrantes.find(p => p.id == persona.id)
            
            if(!existe){
                 state.integrantes.push(persona)
                 console.log('PERSONA - Agregada Correctamente a REDUX')
            }             
            else{
                console.log('PERSONA - Ya Agregaste la Persona a REDUX')
            }       
        },

        delPersona: (state, action) => {
            const persona = action.payload
            
            state.integrantes = state.integrantes.filter(p => p.id !== persona.id)
            console.log('PERSONA - Eliminada Correctamente de REDUX')
        }
    }
})

export const { addPersona, delPersona, addDestino, delDestino, addCosto, delCosto, resetArreglo } = viajesSlice.actions;
export default viajesSlice.reducer;