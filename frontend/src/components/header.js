import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../images/logo.png'; // Update with the correct path to your logo

function Header() {
  return (
    <div className='' style={{ backgroundColor: 'lightblue', color: 'red' }}>
    <Navbar >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src={logo}
            width="70"
            height="70"
          />{' '}
          <h1>The Right Packout</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
