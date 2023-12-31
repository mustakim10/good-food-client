import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';



const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error));

  }

  const navLinkStyles = ({isActive})=> {
  return {
    fontWeight: isActive ? "bold" : "normal"
  }
 }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <h1 className='text-secondary bold'><strong>Good Food</strong></h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink style={navLinkStyles} className='text-decoration-none text-secondary me-5 '  to="/">Home</NavLink>
            <NavLink style={navLinkStyles}  className='text-decoration-none text-secondary  ' to="/blog">Blog</NavLink>
            
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