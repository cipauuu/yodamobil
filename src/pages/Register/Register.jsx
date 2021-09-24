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
        <Col xs={6}>
          <LoginCard login={false} />
        </Col>

        <Col xs={6} className="mt-5 text-center">
          <LoginTopHeader
            title={"Masuk ke akun Anda"}
            subtitle={"Masukan detail untuk melanjutkan"}
          />
        </Col>
      </Row>
    </ContainerP>
  );
};

export default Register;
