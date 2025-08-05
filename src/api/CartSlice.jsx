import { createSlice } from '@reduxjs/toolkit';

const itemsInCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: itemsInCart,
  },
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.cartItems.find((itemInCart) => itemInCart.id === item.id);
        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cartItems.push({ ...item, quantity: 1 });

        }
    },

    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((itemInCart) => itemInCart.id !== action.payload);
    },

    incrementQuantity: (state, action) => {
        const item = state.cartItems.find((itemInCart) => itemInCart.id === action.payload);
        if(item) {
            item.quantity += 1;
        }
    },

    decrementQuantity: (state, action) => {
        const item = state.cartItems.find((itemInCart) => itemInCart.id === action.payload);
        if(item && item.quantity > 1) {
            item.quantity -= 1;
        }
    },

    clearCart: (state) => {
        state.cartItems = [];
    },
    },
});

export const { 
    addToCart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;