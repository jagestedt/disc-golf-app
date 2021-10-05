import React from 'react';
import {useState} from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './RegisterView.scss';

const RegisterView = ({history}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    if (password !== passwordConfirmation) {
      setPassword('');
      setPasswordConfirmation('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError('Passwords do not match!');
    }

    try {
      const {data} = await axios.post('/api/auth/register', {username, email, password}, config);

      localStorage.setItem('authToken', data.token);

      history.push('/');
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="register-view">
      <h1>Register</h1>
      {error && <span className="error-message">{error}</span>}
      <Form onSubmit={registerHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">We'll never share your email.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </Form.Group>

        <Button variant="primary" className="text-white" type="submit">
          Register
        </Button>
        <br />
        <a href="/register" className="link-subtle">
          Already registered? Login here.
        </a>
      </Form>
      {/* <form action="" method="post">
        <h2>Enter your credentials below</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter a password</label>
          <input type="password" required id="password" placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label htmlFor="password-confirmation">Re-enter password</label>
          <input type="password" required id="password-confirmation" placeholder="Re-enter password" />
        </div>
        <button type="submit">Register</button>
      </form> */}
    </div>
  );
};

export default RegisterView;
