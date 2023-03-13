import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    option: ""
}

export const selectOptionSlice = createSlice({

    name: "selectOptionSlice",

    initialState,

    reducers: {

        selectOneOption: (state, action) => {

            state.option = action.payload

        }

    },

});

export const { selectOneOption } = selectOptionSlice.actions;

export default selectOptionSlice.reducer;