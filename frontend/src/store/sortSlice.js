import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort: {
            "field": "registered",
            "des": true,
        }
    },
    reducers: {
        setSort: (state, action) => {
            let sortMethod = action.payload;
            console.log(sortMethod)
            state.sort = {
                field: sortMethod.field,
                des: sortMethod.des,
            }
        },
    },
});

// Export actions
export const { setSort } = sortSlice.actions;




// Export reducer
export default sortSlice.reducer;
