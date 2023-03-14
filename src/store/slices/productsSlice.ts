import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(

    "productsSlice/fetchProducts",

    async (url: string) => {

        const response = await fetch(url);

        const products = await response.json();

        return products;

    }

)

type Rating = {
    rate: number,
    count: number
}

export interface Product {
    id?: number,
    title?: string,
    price: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: Rating
}

interface ProductsState {
    products: Product[]
}

const initialState: ProductsState = {
    products: []
}

export const productsSlice = createSlice({

    name: "productsSlice",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        
        builder.addCase(fetchProducts.fulfilled, (state, action) => {

            state.products = action.payload

        });

    }
});

export default productsSlice.reducer;
