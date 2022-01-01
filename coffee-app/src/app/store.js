import { configureStore } from '@reduxjs/toolkit';
import newOrderSlice from '../slices/new_order_slice'
import ordersSlice from '../slices/orders_slice';

export default configureStore({
    reducer: {
        new_order: newOrderSlice,
        orders: ordersSlice,
    },
})