import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux/es/hooks/useDispatch';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import { TypedUseSelectorHook } from 'react-redux/es/types';

import cartSlice from './slices/cartSlice';

import categoriesSlice from './slices/categoriesSlice';

import priceSlice from './slices/priceSlice';

import productsSlice from './slices/productsSlice';

import searchSlice from './slices/searchSlice';

import selectOptionSlice from './slices/selectOptionSlice';

import singleProductSlice from './slices/singleProductSlice';

export const store = configureStore({

    reducer: {

        product: productsSlice,

        singleProduct: singleProductSlice,

        cart: cartSlice,

        categories: categoriesSlice,

        selectOption: selectOptionSlice,

        settinPrice: priceSlice,
        
        searchTerm: searchSlice,

    }
    
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch; 

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;