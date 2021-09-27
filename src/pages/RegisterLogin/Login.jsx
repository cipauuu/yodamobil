import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import TopHeader from "./TopHeader";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Mobile from "./Mobile";
import { useLocation } from "react-router-dom";
import "./Style.css";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isBigScreen = useMediaQuery({ maxDeviceWidth: 1024 - 1 });

  useEffect(() => {
    setIsMobile(isBigScreen);
  }, [isBigScreen]);

  const location = useLocation().pathname;
  const login = location === "/login" ? true : false;
  const forgotpass = location === "/forgot-password" ? true : false;

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <ContainerP fluid>
          <Row>
            <Col xs={6}>
              <LoginCard login={true} />
            </Col>

            <Col xs={6} className="mt-5 text-center">
              {login ? <TopHeader title={"Masuk ke akun Anda"} /> : ""}
              {login ? (
                <LoginInputForm />
              ) : forgotpass ? (
                <ForgotPasswordForm />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </ContainerP>
      )}
    </>
  );
};

export default Login;
