import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currency: {
            "currency_id": 5,
            "currency_type": "USD",
            "currency_rate": 1,
        }
    },
    reducers: {
        changeCurrency: (state, action) => {
            let currency = action.payload;
            console.log(action.payload);
            state.currency = {
                currency_id: currency.currency_id,
                currency_type: currency.currency_name,
                currency_rate: currency.currency_rate,
            }
        }
    }
})
export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;