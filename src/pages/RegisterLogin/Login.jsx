import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import TopHeader from "./TopHeader";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordForm2 from "./ForgotPasswordForm2";
import ChangePasswordForm from "./ChangePasswordForm";
import ChangePasswordForm2 from "./ChangePasswordForm2";
import Mobile from "./Mobile";
import { useLocation } from "react-router-dom";
import "./Style.css";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isBigScreen = useMediaQuery({ maxDeviceWidth: 1366 - 1 });

  useEffect(() => {
    setIsMobile(isBigScreen);
  }, [isBigScreen]);

  const location = useLocation().pathname;
  const login = location === "/login" ? true : false;
  const forgotpass = location === "/forgot-password" ? true : false;
  const forgotpass2 = location === "/forgot-password/2" ? true : false;
  const changepass = location === "/change-password" ? true : false;
  const changepass2 = location === "/change-password/2" ? true : false;

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
              ) : forgotpass2 ? (
                <ForgotPasswordForm2 />
              ) : changepass ? (
                <ChangePasswordForm />
              ) : changepass2 ? (
                <ChangePasswordForm2 />
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
