import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const RegisInputForm3 = () => {
  const regis3 = Cookies.get("regis3");
  let history = useHistory();

  useEffect(() => {
    if (regis3 !== "1") {
      history.push("/register");
    } else {
      Cookies.remove("regis3");
    }
  });

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
