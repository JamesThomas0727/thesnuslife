import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currency: {
            "currency_id": 4,
            "currency_type": "USD",
            "currency_rate": 1
        }
    },
    reducers: {
        changeCurrency: (state, action) => {
            state.currency = action.payload;
        }
    }
})
export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;