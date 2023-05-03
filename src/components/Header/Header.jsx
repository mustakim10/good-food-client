import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProviders';



const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error));

  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='text-decoration-none text-secondary me-5 fw-bold' to="/">Home</Link>
            <Link className='text-decoration-none text-secondary fw-bold ' to="/blog">Blog</Link>
            
          </Nav>
          <Nav>
           {user && 
              <FaUserCircle className='me-2' style={{fontSize: '2rem'}}></FaUserCircle>
           }
            
            {user ?
             <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
              <Link to="/login">
              <Button variant="secondary">Login</Button>
              </Link>}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    );
};

export default Header;