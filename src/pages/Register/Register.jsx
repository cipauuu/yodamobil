import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "../Login/LoginCard";
import LoginTopHeader from "../Login/LoginTopHeader";
import styled from "styled-components";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Register = () => {
  return (
    <ContainerP fluid>
      <Row>
        <LoginCard />
        <Col className="mt-5 text-center">
            <LoginTopHeader />
        </Col>
      </Row>
    </ContainerP>
  );
};

export default Register;
