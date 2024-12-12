import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'cart',
    initialState: {
        filters: {
            cateogries: ['ALL', 'ALL', 'ALL', 'ALL'],
            price: [0, 5000]
        }, // Array of cart filters
    },
    reducers: {
        addFilter: (state, action) => {
            const filter = action.payload; // { id, quantity }
            state.filters[filter.id] = filter.value;
        },
        priceFilter: (state, action) => {
            const [max, min] = action.payload;
            state.filters.price = [min, max];
        },
        clearFilter: (state, action) => {
            state.filters = {
                cateogries: ['ALL', 'ALL', 'ALL', 'ALL'],
                price: [0, 5000],
            };
        },
    },
});

// Export actions
export const { addFilter, priceFilter, clearFilter } = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;
