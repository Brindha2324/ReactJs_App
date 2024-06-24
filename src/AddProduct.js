import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/productSlice'; // Correct import path
import { useNavigate } from 'react-router-dom'; // Navigation after product addition

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    stock: '',
    brand: '',
    category: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value, // Update the correct property
    }));
  };

  const handleSubmit = () => {
    // Validate product data
    if (!productData.title || !productData.price) {
      alert("Title and Price are required fields.");
      return;
    }

    // Dispatch the addProduct action
    dispatch(addProduct(productData));

    // Navigate to the product page after adding the product
    navigate('/productpage'); // Ensure this is the correct route to ProductPage
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={productData.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={productData.stock}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={productData.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
