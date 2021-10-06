import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const ForgotPasswordForm2 = () => {
  const forgotpass2 = Cookies.get("forgotpass2");
  const history = useHistory();

  useEffect(() => {
    if (forgotpass2 !== "1") {
      history.push("/forgot-password");
    } else {
      Cookies.remove("forgotpass2");
    }
  });

  return (
    <Container className="con text-center">
      <Row>
        <Col>
          <img
            src="/assets/ic_regis_done.svg"
            alt=""
            style={{ marginTop: "20vh" }}
          />
          <p className="judul">Cek email Anda</p>
          <p className="sub-judul sj">
            Kami sudah mengirimkan link agar Anda dapat mengubah password Anda.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordForm2;
