import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSingleProduct = createAsyncThunk(

    "productsSlice/fetchSingleProduct",

    async (id: string | undefined) => {

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const product = await response.json();

        return product;
    }
    
);

type Rating = {
    rate: number,
    count: number
}

export interface SingleProduct {
    id?: string,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: Rating,
    quantity?: number
}

interface SingleProductsState {
    product: SingleProduct
}

const initialState: SingleProductsState = {
    product: {}
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
