import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import banner from '../../assets/banner.avif'

const Header = () => {
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
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex gap-5 mx-4'>
        <div>
            <h2>The best resturent</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut magnam amet esse, obcaecati quos optio neque quia nobis magni non delectus fugit necessitatibus voluptatibus officiis minus. Fugiat, cum temporibus!</p>
            <button>About Us</button>
        </div>
        <img className='rounded' src={banner} alt="" />
    </div>
        </div>
    );
};

export default Header;