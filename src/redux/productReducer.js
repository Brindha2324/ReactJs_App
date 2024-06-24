import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addProduct } from './productActions';
import products from './data/products'; // Import the mock data

const initialState = {
  products: products, // Initialize with mock data
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // No custom reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = ''; // Clear any previous errors
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Update the product list
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture the error message
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload); // Add the new product to the list
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload; // Handle errors
      });
  },
});

export default productSlice.reducer;
