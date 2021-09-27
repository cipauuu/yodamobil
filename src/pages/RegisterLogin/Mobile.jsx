import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopHeaderMobile from "./TopHeaderMobile";
import RegisInputForm1 from "./RegisInputForm1";
import RegisInputForm2 from "./RegisInputForm2";
import RegisInputForm3 from "./RegisInputForm3";
import LoginInputForm from "./LoginInputForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
// import SplashMobile from "./SplashMobile";
import { useLocation } from "react-router-dom";

const LoginMobile = () => {
  const location = useLocation().pathname;
  const login = location === "/login" ? true : false;
  const forgotpass = location === "/forgot-password" ? true : false;
  const register = location === "/register" ? true : false;
  const register2 = location === "/register/2" ? true : false;
  const register3 = location === "/register/3" ? true : false;

  return (
    <>
      <div className="bg-mobile">
        <img
          className="card-image-mobile"
          src="/assets/yodahero_mobile.png"
          alt=""
        />
      </div>
      <Container className="splash px-0 bg-white" fluid>
        <Row>
          <Col className="pt-5 text-center">
            {register ? (
              <TopHeaderMobile title={"You’re Welcome"} />
            ) : register2 ? (
              <TopHeaderMobile title={"Tell us more"} />
            ) : login ? (
              <TopHeaderMobile title={"You’re Welcome"} />
            ) : (
              ""
            )}
          </Col>
        </Row>
        {register ? <RegisInputForm1 /> : ""}
        {register2 ? <RegisInputForm2 /> : ""}
        {register3 ? <RegisInputForm3 /> : ""}
        {login ? <LoginInputForm /> : ""}
        {forgotpass ? <ForgotPasswordForm /> : ""}

        {/* <hr className="mb-2 pt-2" />
        <SplashMobile />
        <hr className="mt-0 mb-5" /> */}
      </Container>
    </>
  );
};

export default LoginMobile;
