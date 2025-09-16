import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: [],
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        }
    }
});

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;