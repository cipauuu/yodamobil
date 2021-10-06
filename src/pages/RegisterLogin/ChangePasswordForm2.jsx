import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChangePasswordForm2 = () => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let inputEmail = params.get("email");

  return (
    <Container className="con text-center">
      <Row>
        <Col>
          <img
            src="/assets/ic_regis_done.svg"
            alt=""
            style={{ marginTop: "20vh" }}
          />
          <p className="judul">Kata sandi berhasil diperbarui</p>
          <p className="sub-judul sj">
            Kata sandi Anda telah berhasil diperbarui. Silahkan masuk
            menggunakan kata sandi yang baru.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePasswordForm2;
