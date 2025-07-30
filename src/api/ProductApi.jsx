import { createSlice } from '@reduxjs/toolkit';

const itemsInCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: itemsInCart,
  },
  