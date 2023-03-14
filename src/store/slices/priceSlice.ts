import { createSlice } from '@reduxjs/toolkit';

export interface Price {
    minPrice?: string,
    maxPrice?: string
}

interface PriceState {
    price: Price
}

const initialState: PriceState = {
    price: {}
}

export const priceSlice = createSlice({

    name: "priceSlice",

    initialState,

    reducers: {

        setPrice: (state, action) => {

            state.price = action.payload;

        }

    },

});

export const { setPrice } = priceSlice.actions;

export default priceSlice.reducer;