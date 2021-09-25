import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RegisInputForm3 = () => {
  return (
    <Container style={{ width: "70%" }} className="text-center">
      <Row>
        <Col>
          <img
            src="/assets/ic_regis_done.svg"
            alt=""
            style={{ marginTop: "20vh" }}
          />
          <p className="judul">Terima kasih!</p>
          <p className="sub-judul" style={{ width: "410px" }}>
            Kami telah mengirimkan email ke mahendrawisnu@me.com Silahkan klik
            link pada email untuk memverifikasi akun Anda
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisInputForm3;
