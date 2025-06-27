import { createSlice } from '@reduxjs/toolkit';


export const PersonasSlice = createSlice({
    name: 'Personas',

    initialState: {
        value: [],
    },

    reducers: {
        addPersona: (state) => {
           // state.value += 1;
        },
    }
})

export const { } = PersonasSlice.actions;
export default PersonasSlice.reducer;