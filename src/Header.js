import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from './redux/authSlice';
import './styles/Header.css'; 

const Header = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth); 

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate('/Login);
  };

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar"> 
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto"> 
          </Nav>
          <Nav className="ms-auto"> 
            {authState.isAuthenticated ? ( 
              <>
                <Navbar.Text>
                  Signed in as: {authState.user}
                </Navbar.Text>
                <button 
                  className="btn btn-primary ms-3" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : ( 
              <> 
                <button 
                  className="btn btn-warning" 
                  onClick={() => navigate('/Login')}
                >
                  Login
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
