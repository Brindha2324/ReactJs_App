import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import AddProduct from './AddProduct';
import ProductPage from './ProductPage';
import Login from './Login';
import Header from './Header';
import DeleteProduct from './DeleteProduct';
import ProductNavbar from './ProductNavbar';
import { Outlet } from 'react-router-dom'; 

const Layout = () => (
  <div>
    <Header />
    <Outlet /> 
  </div>
);

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="ProductPage" element={<ProductPage />} />
            <Route path="Login" element={<Login />} />
            <Route path="DeleteProduct" element={<DeleteProduct />} />
            <Route path="ProductNavbar" element={<ProductNavbar/>} />         
          </Route>
          {/* Fallback route to handle unmatched paths */}
          <Route path="*" element={<Navigate to="/Login" />} /> 
        </Routes>
      </Router>

  );
}

export default App;
