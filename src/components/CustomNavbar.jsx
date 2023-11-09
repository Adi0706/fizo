import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../assets/images/icon.png';

const CustomNavbar = () => {
  return (
    <header className="header_wrapper">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <img decoding="async" src={icon} className="img-fluid w-50" alt="icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={icon} className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav className="menu-navbar-nav">
              <Nav.Link href="#home" className="nav-link active" aria-current="page">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="#doctor" className="nav-link">
                Doctor
              </Nav.Link>
              <Nav.Link href="#data" className="nav-link">
                Data
              </Nav.Link>
              <Nav.Link href="#review" className="nav-link">
                Review
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link mt-3 mt-lg-0">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
