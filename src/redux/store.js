// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Product slice
import authReducer from './authSlice'; // Authentication slice (if needed)

const store = configureStore({
  reducer: {
    products: productReducer, // Manage products
    auth: authReducer, // Optional: Authentication management
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Default middleware including Redux Thunk
});

export default store;
