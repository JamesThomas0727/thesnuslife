import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from './slice.js';
const store = configureStore({
    reducer: {
        changeCurrency: currencyReducer,
    },
});

export default store;