import { configureStore } from '@reduxjs/toolkit';
import PersonasSlice from './PersonasSlice';

export default configureStore({
    reducer: {
        Personas: PersonasReducer,
    },
})

