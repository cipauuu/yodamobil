import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RegisInputForm3 = () => {
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
          <p className="judul">Terima kasih!</p>
          <p className="sub-judul sj">
            Kami telah mengirimkan email ke {inputEmail} <br />
            Silahkan klik link pada email untuk memverifikasi akun Anda
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisInputForm3;
