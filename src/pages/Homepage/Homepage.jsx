import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Homepage = () => {
  return (
    <ContainerP fluid>
      <Row>
        <Col>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </Col>
      </Row>
    </ContainerP>
  );
};

export default Homepage;