import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img src="assets/logo.svg" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/beli" className="nav-link">
              Beli
            </Link>
            <Link to="/jual" className="nav-link">
              Jual
            </Link>
            <Link to="/kredit-multiguna" className="nav-link">
              Kredit Multiguna
            </Link>
            <Link to="/mitra-dealer" className="nav-link">
              Mitra Dealer
            </Link>
            <Link to="/register" className="nav-daftar my-auto">
              <img src="assets/ic_nav_daftar.svg" alt="" className="mr-2" />
              Daftar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
