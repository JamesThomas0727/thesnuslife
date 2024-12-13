import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Array of cart items
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload; // { id, quantity }
            const existingProduct =
                state.items.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                state.items.push(product);
            }
        },
        removeProduct: (state, action) => {
            const productId = action.payload; // ID of the product to remove
            state.items = state.items.filter(item => item.id !== productId);
        },
        updateQuantity: (state, action) => {
            const { id, name, price, quantity } = action.payload;
            const existingProduct = state.items.find(item => item.id === id);
            if (existingProduct) {
                existingProduct.quantity = quantity;
            }
        },
    },
});

// Export actions
export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
