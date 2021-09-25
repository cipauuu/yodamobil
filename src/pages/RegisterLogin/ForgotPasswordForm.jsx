import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Img from "../../components/Img/Img";

const ForgotPasswordForm = () => {
  return (
    <Container style={{ width: "70%" }} className="text-center">
      <Row>
        <Col>
          <img
            src="/assets/ic_forgotpass.svg"
            alt=""
            style={{ marginTop: "15vh" }}
          />
          <p className="judul" style={{ fontSize: "28px" }}>
            Lupa password Anda? <br />
            Masukan detail untuk melanjutkan
          </p>
          <p className="sub-judul">Masukan detail untuk melanjutkan</p>
        </Col>
      </Row>
      <div className="wrapper">
        <p>Email</p>
        <InputGroup>
          <FormControl placeholder="nama@domain.com" type="email" />
          <InputGroup.Text>
            <Img src="/assets/ic_checklist.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <Button className="sign-btn">Pulihkan</Button>
    </Container>
  );
};

export default ForgotPasswordForm;
