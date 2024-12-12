import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort: { "field": "registered", "DES": true }, // Array of sort items
    },
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload;
        },
    },
});

// Export actions
export const { setSort } = sortSlice.actions;

// Export reducer
export default sortSlice.reducer;
