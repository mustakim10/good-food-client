import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  console.log(location);
  const from = location.state?.from?.pathname || '/';

const handleGoogleSignIn = () => {
signInWithPopup(auth, googleProvider)
.then(result => {
  const user = result.user;
  navigate(from, {replace: true});
})
.catch(error => {
  console.log(error)
})
}

const handleGithubSignIn = () => {
  signInWithPopup(auth, githubProvider)
  .then(result => {
    const loggedUser = result.user ;
    navigate(from, {replace: true});
  })
  .catch(error =>{
    console.log(error)
  })
}

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    console.log(email,password);
    
    signIn(email,password)
    .then(result => {
      const loggedUser = result.user ;
      console.log(loggedUser);
      setError('')
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
    form.reset()
  }

    return (
        <Container className='mx-auto w-25'>
            <h2>Please Login</h2>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
         Don't Have an Account ? <Link
          to='/register'>Register</Link>
        </Form.Text>

        <Button onClick={handleGoogleSignIn} className='m-4' variant="outline-secondary">Google Sign-in</Button>
        
        <Button onClick={handleGithubSignIn} variant="outline-secondary">GitHub Sign-in</Button>
    </Form>
    <p className='text-danger'>{error}</p>
        </Container>
    );
};

export default Login;