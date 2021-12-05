import { configureStore } from '@reduxjs/toolkit';
import newOrderSlice from '../slices/new_order_slice'

export default configureStore({
    reducer: {
        new_order: newOrderSlice,
    },
})