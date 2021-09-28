import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import "./Style.css";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Header />
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
