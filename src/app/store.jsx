import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './api/CartSlice';
import { productApi } from './api/ProductApi';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});