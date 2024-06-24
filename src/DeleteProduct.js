// src/components/DeleteProduct.js
import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { deleteProduct } from './redux/productSlice';
import axios from 'axios'; 

const DeleteProduct = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProductList(response.data.products);
    };

    fetchProducts(); 
  }, []);

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(productId)); // Dispatch action to delete product
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
