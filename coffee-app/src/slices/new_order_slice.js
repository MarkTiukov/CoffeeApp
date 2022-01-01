import { createSlice } from '@reduxjs/toolkit'

export const newOrderSlice = createSlice({
    name: 'new order',
    initialState: {
        title: "new_order",
        items: [],
    },
    reducers: {
        addItem: (state, item) => {
            state.items.push(item.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const { addItem, clearItems } = newOrderSlice.actions;

export const selectItems = state => state.new_order.items;

export default newOrderSlice.reducer;