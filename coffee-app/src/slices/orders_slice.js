import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        title: "orders",
        orders: {},
        total_number: 0,
        active_number: 1,
    },
    reducers: {
        addOrder: (state, order) => {
            state.total_number++;
            state.active_number++;
            state.orders[state.total_number] = order.payload;
        },
        removeOrder: (state, order_id) => {
            state.active_number--;
            delete state.orders[order_id.payload];
        },
    }
});

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder } = ordersSlice.actions;

export const selectActiveNumber = state => state.orders.active_number;
export const selectTotalNumber = state => state.orders.total_number;
export const selectOrders = state => state.orders.orders;

export default ordersSlice.reducer;