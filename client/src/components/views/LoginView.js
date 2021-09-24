import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './LoginView.scss';

const LoginView = () => {
  return (
    <div className="login-view">
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" className="text-white" type="submit">
          Login
        </Button>
        <Button variant="link" className="text-subtle">
          Forgot your password?
        </Button>
        {/* <a href="/register" variant="ml-1" className="link-white ml-2" type="submit">
          Forgot you password?
        </a> */}
        <hr />
        <a href="/register" className="text-secondary">
          No account? Register here.
        </a>
      </Form>
      {/* <form action="" method="post">
        <h2>Enter your credentials below</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" placeholder="Enter password" />
        </div>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
};

export default LoginView;
