import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Product } from './productsSlice';

export const fetchSingleProduct = createAsyncThunk(

    "productsSlice/fetchSingleProduct",

    async (id: string | undefined) => {

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const product = await response.json();

        return product;
    }
    
);

export interface SingleProduct extends Product {
    quantity?: number
}

interface SingleProductsState {
    product: SingleProduct
}

const initialState: SingleProductsState = {
    product: {price: 0}
}

export const singleProductSlice = createSlice({

    name: "singleProductSlice",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {

            let cloneProduct = {...action.payload, quantity: 1}

            state.product = cloneProduct

        });

    }
});

export default singleProductSlice.reducer;
