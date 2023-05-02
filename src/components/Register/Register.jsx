import React from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter your name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    
    type="checkbox" 
    name='accept' 
    label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
  </Form.Group>
  <Button variant="primary"  type="submit">
    Register
  </Button>
  <br />
  <Form.Text className="text-secondary">
     Already Have an Account ? <Link to='/login'>Login</Link>
    </Form.Text>

</Form>
    </Container>
    );
};

export default Register;