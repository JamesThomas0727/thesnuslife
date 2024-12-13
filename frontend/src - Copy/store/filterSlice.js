import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'cart',
    initialState: {
        filter: {
            categories: ['ALL', 'ALL', 'ALL', 'ALL'],
            price: [0, 5000],
        }
    },
    reducers: {
        categoryFilter: (state, action) => {
            const category = action.payload;
            const cate_id = category.id;
            const cate_val = category.val;
            state.filter.categories[cate_id] = cate_val;
        },
        priceFilter: (state, action) => {
            const [max, min] = action.payload;
            state.filters.price = [min, max];
        },
        clearFilter: (state, action) => {
            state.filter = {
                categories: ['ALL', 'ALL', 'ALL', 'ALL',],
                price: [0, 5000],
            };
        },
    },
});

// Export actions
export const { categoryFilter, priceFilter, clearFilter } = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;
