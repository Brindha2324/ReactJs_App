import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/ProductNavbar.css'; 

const ProductNavbar = () => (
  <Navbar bg="light" expand="lg"> 
    <Container>
      <Navbar.Brand>Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="product-navbar" />
      <Navbar.Collapse id="product-navbar">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/ProductPage">Products</Nav.Link> 
          <Nav.Link as={NavLink} to="/AddProduct">Add Product</Nav.Link> 
          <Nav.Link as={NavLink} to="/DeleteProduct">Delete Product</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default ProductNavbar;
