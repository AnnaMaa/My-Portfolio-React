import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>

          {/* Hamburger icon for mobile/tablet */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navigation links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-uppercase">
              <Nav.Link href="/" className="active">Accueil</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/portfolio">Réalisations</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Me Contacter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
