import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProviders';



const Header = () => {
  const {user} = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            
          </Nav>
          <Nav>
           {user && 
              <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
           }
            
            {user ?
             <Button variant="secondary">Logout</Button> :
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