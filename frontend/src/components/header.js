import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";

import logo from "../images/logo1.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="site-header">
      <Navbar
        expand="lg"
        className="professional-navbar"
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="header-brand"
          >
            <img
              src={logo}
              alt="The Right Pack Out"
              className="header-logo"
            />

            <div className="brand-text d-none d-md-block">
              <span className="brand-name">
                The Right Pack Out
              </span>

              <span className="brand-tagline">
                Contents Care, Cleaning & Restoration
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navigation"
          />

          <Navbar.Collapse id="main-navigation">
            <Nav className="ms-auto align-items-lg-center header-navigation">
              <Nav.Link href="/">
                Home
              </Nav.Link>

              <Nav.Link href="/about">
                About
              </Nav.Link>

              <Nav.Link href="/review">
                Reviews
              </Nav.Link>

              <Button
                href="tel:+16197867089"
                variant="outline-danger"
                className="header-action-button"
              >
                Call 619-786-7089
              </Button>

              <Button
                href="/request-assistance"
                variant="danger"
                className="header-action-button"
              >
                Request Assistance
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;