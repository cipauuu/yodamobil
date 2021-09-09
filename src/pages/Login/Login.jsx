import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import styled from "styled-components";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Login = () => {
  return (
    <ContainerP fluid>
      <Row>
        <LoginCard />
        <Col>2 of 2</Col>
      </Row>
    </ContainerP>
  );
};

export default Login;
