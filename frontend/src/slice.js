import { createSlice, configureStore, createReducer } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartReducer",
    initialState: {},
    reducers: {
        addCart: (state) => { }
    },
});

// const 

export const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,

    }
})