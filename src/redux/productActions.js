// src/redux/productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});

export const addProduct = createAsyncThunk('product/addProduct', async (product) => {
  const response = await axios.post('https://dummyjson.com/products/add', product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (productId) => {
  await axios.delete(`https://dummyjson.com/products/${productId}`);
  return productId;
});
