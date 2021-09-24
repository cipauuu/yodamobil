import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import LoginTopHeader from "../Login/LoginTopHeader";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Login = () => {
  return (
    <ContainerP fluid>
      <Row>
        <Col xs={6}>
        <LoginCard login={true} />
        </Col>
        
        <Col xs={6} className="mt-5 text-center">
          <LoginTopHeader
            title={"Masuk ke akun Anda"}
            subtitle={"Masukan detail untuk melanjutkan"}
          />
          <LoginInputForm />
        </Col>
      </Row>
    </ContainerP>
  );
};

export default Login;
