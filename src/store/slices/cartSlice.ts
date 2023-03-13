import { createSlice } from "@reduxjs/toolkit"

type Rating = {
    rate: number,
    count: number
}

export interface Cart {
    id: number,
    title: string,
    price: number,
    description?: string,
    category?: string,
    image: string,
    rating?: Rating,
    quantity: number
}

interface CartState {
    cartProducts: Cart[]
}

const initialState: CartState = {
    cartProducts: []
}

export const cartSlice = createSlice({

    name: "cartSlice",

    initialState,

    reducers: {

        addToCart: (state, action) => {

            const { value, data } = action.payload;

            let findProduct = state.cartProducts.find(product => {

                return product.id === data.id;

            });

            if (findProduct) {

                findProduct.quantity += value;

            } else {

                let cloneProduct = { ...data, quantity: value }
                
                state.cartProducts.push(cloneProduct);

            }

        },

        controlQuantity: (state, action) => {

            const { type, data } = action.payload;

            let findProduct = state.cartProducts.find(product => {

                return product.id === data.id;

            });

            if (findProduct) {

                if (type === "add") {

                    findProduct.quantity += 1;

                } else {

                    findProduct.quantity -= 1;

                }

            }

        },

        deleteFromCart: (state, action) => {

            state.cartProducts = state.cartProducts.filter(product => {

                return product.id !== action.payload.id

            });

        },

        clearCart: (state) => {

            state.cartProducts = []

        }

    }

});

export const {
    
    addToCart,

    controlQuantity,
    
    deleteFromCart,
    
    clearCart

} = cartSlice.actions;

export default cartSlice.reducer;