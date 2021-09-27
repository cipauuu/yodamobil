import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SplashMobile = () => {
  return (
    <>
      <Row>
        <Col xs={8} style={{ paddingLeft: "12vw" }}>
          <p className="splash-text">Don’t have an account</p>
        </Col>
        <Col xs={4} className="text-right" style={{ paddingRight: "10vw" }}>
          <Link className="splash-signup" to="/register">
            Sign Up
          </Link>
        </Col>
      </Row>

      <hr className="mb-3 mt-0"/>

      <Row>
        <Col xs={8} style={{ paddingLeft: "12vw" }}>
          <p className="splash-text">Already have an account</p>
        </Col>
        <Col xs={4} className="text-right" style={{ paddingRight: "10vw" }}>
        <Link className="splash-signin" to="/login">
            Sign In
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default SplashMobile;
