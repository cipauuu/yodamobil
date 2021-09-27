import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import TopHeader from "./TopHeader";
import styled from "styled-components";
import RegisInputForm1 from "./RegisInputForm1";
import RegisInputForm2 from "./RegisInputForm2";
import RegisInputForm3 from "./RegisInputForm3";
import Mobile from "./Mobile";
import { useLocation } from "react-router-dom";
import "./Style.css";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Register = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isBigScreen = useMediaQuery({ maxDeviceWidth: 1024 - 1 });

  useEffect(() => {
    setIsMobile(isBigScreen);
  }, [isBigScreen]);

  const location = useLocation().pathname;
  const regis = location === "/register" ? true : false;
  const regis2 = location === "/register/2" ? true : false;
  const regis3 = location === "/register/3" ? true : false;

  return (
    <>
      {isMobile ? (
        <Mobile />
      ) : (
        <ContainerP fluid>
          <Row>
            <Col xs={6}>
              <LoginCard login={false} />
            </Col>

            <Col xs={6} className="mt-5 text-center">
              {regis ? (
                <TopHeader title={"Daftar untuk memulai"} />
              ) : regis2 ? (
                <TopHeader title={"Ceritakan tentang diri Anda"} />
              ) : (
                ""
              )}
              {regis ? (
                <RegisInputForm1 />
              ) : regis2 ? (
                <RegisInputForm2 />
              ) : regis3 ? (
                <RegisInputForm3 />
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

export default Register;
