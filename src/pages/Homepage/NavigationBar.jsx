import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";

const NavigationBar = () => {
  // const token = Cookies.get("token");

  // useEffect(() => {
  //   if((token === "") || (token === undefined) || (token === null)){
  //     document.getElementById("daftar").style.display = "none";
  //   }
  // });

  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Link to="/" className="navbar-brand">
          <img src="assets/logo.svg" alt="" />
        </Link>
        <Link to="/register" className="nav-daftar2 my-auto mr-3">
          <img src="assets/ic_nav_daftar.svg" alt="" className="mr-2" />
          Daftar
        </Link>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            navbarScroll
          >
            <li className="nav-item">
              <Link to="/beli" className="nav-link">
                Beli
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jual" className="nav-link">
                Jual
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kredit-multiguna" className="nav-link">
                Kredit Multiguna
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mitra-dealer" className="nav-link">
                Mitra Dealer
              </Link>
            </li>
            <li className="nav-item" id="daftar">
              <Link to="/register" className="nav-daftar1 my-auto">
                <img src="assets/ic_nav_daftar.svg" alt="" className="mr-2" />
                Daftar
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
