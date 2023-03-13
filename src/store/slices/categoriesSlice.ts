import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(

    "categoriesSlice/fetchCategories",

    async _ => {

        const response = await fetch("https://fakestoreapi.com/products/categories");

        const products = await response.json();

        return products;

    }

);

interface CategoriesState {
    categories: string[]
}

const initialState: CategoriesState = {
    categories: []
}

export const categoriesSlice = createSlice({

    name: "categoriesSlice",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        
        builder.addCase(fetchCategories.fulfilled, (state, action) => {

            state.categories = ["All", ...action.payload]

        });

    }
});

export default categoriesSlice.reducer;
