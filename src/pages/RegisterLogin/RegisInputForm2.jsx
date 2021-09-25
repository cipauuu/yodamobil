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

const RegisInputForm2 = () => {
  return (
    <Container style={{ width: "70%" }}>
      <div className="wrapper">
        <p>Email</p>
        <InputGroup>
          <FormControl placeholder="nama@domain.com" type="email" />
          <InputGroup.Text>
            <Img src="/assets/ic_email.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <Row>
        <Col>
          <div className="wrapper">
            <p>Nama Depan</p>
            <InputGroup>
              <FormControl placeholder="Depan" type="name" />
              <InputGroup.Text>
                <Img src="/assets/ic_profile.svg" />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
        <Col>
          <div className="wrapper">
            <p>Nama Belakang</p>
            <InputGroup>
              <FormControl placeholder="Belakang" type="name" />
              <InputGroup.Text>
                <Img src="/assets/ic_profile.svg" />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <div className="wrapper">
        <p>Password</p>
        <InputGroup>
          <FormControl placeholder="******" type="password" />
          <InputGroup.Text>
            <Img src="/assets/ic_lock.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="wrapper">
        <p>Konfirmasi Password</p>
        <InputGroup>
          <FormControl placeholder="******" type="password" />
          <InputGroup.Text>
            <Img src="/assets/ic_checklist.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="flex">
        <div className="flex">
          <InputGroup.Radio />{" "}
          <p className="typo-bold">
            Saya sudah setuju dengan syarat dan ketentuan yodamobi
          </p>
        </div>
      </div>
      <Button className="sign-btn">Lanjutkan</Button>
    </Container>
  );
};

export default RegisInputForm2;
