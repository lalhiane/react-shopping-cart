import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: ""
}

export const searchSlice = createSlice({

    name: "searchSlice",

    initialState,

    reducers: {

        setSearchTerm: (state, action) => {

            state.term = action.payload;
        }

    },

});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;