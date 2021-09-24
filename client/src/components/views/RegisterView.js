import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './RegisterView.scss';

const RegisterView = () => {
  return (
    <div className="register-view">
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter password" />
        </Form.Group>

        <Button variant="primary" className="text-white" type="submit">
          Register
        </Button>
        <a href="/login" className="link-light" type="submit">
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
