import { configureStore } from '@reduxjs/toolkit';
import  viajesReducer  from './viajesSlice';

export default configureStore({
    reducer: {
        viajes: viajesReducer,
    },
})

