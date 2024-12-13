import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import currencyReducer from './currencySlice';
import filterReducer from './filterSlice';
import sortReducer from './sortSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        currency: currencyReducer,
        filter: filterReducer,
        sort: sortReducer,
    },
});

export default store;