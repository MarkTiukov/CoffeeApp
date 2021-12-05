import { createSlice } from '@reduxjs/toolkit'

export const newOrderSlice = createSlice({
    name: 'new order',
    initialState: {
        title: "new_order",
        items: [],
    },
    reducers: {
        addItem: (state, item) => {
            state.items.push(item);
        },
    }
});

// Action creators are generated for each case reducer function
export const { addItem } = newOrderSlice.actions;

export default newOrderSlice.reducer;