import React from 'react';

// import {Redirect} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

const Navigation = ({history}) => {
  //   const logoutHandler = () => {
  //     localStorage.removeItem('authToken');
  //     history.push('/login');
  //     // return <Redirect to="/login" />;
  //   };
  return (
    <div>
      <Navbar bg="light" fixed="bottom" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Discography</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link className="text-primary" href="/discs">
                Discs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Button className="btn-danger" onClick={logoutHandler}>
            Logout
          </Button> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
