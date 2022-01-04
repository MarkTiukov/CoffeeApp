import { createSlice } from '@reduxjs/toolkit'

export const newOrderSlice = createSlice({
    name: 'new order',
    initialState: {
        title: "new_order",
        items: [],
        cost: 0,
    },
    reducers: {
        addItem: (state, item) => {
            state.items.push(item.payload);
            state.cost += item.payload.price;
        },
        clearItems: (state) => {
            state.items = [];
            state.cost = 0;
        },
    }
});

// Action creators are generated for each case reducer function
export const { addItem, clearItems } = newOrderSlice.actions;

export const selectItems = state => state.new_order.items;
export const selectCost = state => state.new_order.cost;

export default newOrderSlice.reducer;