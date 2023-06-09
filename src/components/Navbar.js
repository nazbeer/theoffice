import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from './images/logo.svg'

const Navbar = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo} // Replace with your logo image path
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Solutions" id="solutions-dropdown">
              <NavDropdown.Item href="#solution1">Solution 1</NavDropdown.Item>
              <NavDropdown.Item href="#solution2">Solution 2</NavDropdown.Item>
              <NavDropdown.Item href="#solution3">Solution 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Button variant="primary">Button</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
