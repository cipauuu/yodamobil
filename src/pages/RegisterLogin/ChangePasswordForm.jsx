import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Img from "../../components/Img/Img";
import { useHistory } from "react-router-dom";
import { forgotPass2 } from "../../helper/loginHelper";

const ChangePasswordForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const history = useHistory();

  const handleInputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const tombolLupaPass = () => {
    forgotPass2(inputEmail, history);
  };

  return (
    <Container className="text-center con">
      <Row>
        <Col>
          <img
            src="/assets/ic_forgotpass.svg"
            alt=""
            style={{ marginTop: "15vh" }}
          />
          <p className="judul mb-4" style={{ fontSize: "28px" }}>
            Ubah kata sandi Anda
          </p>
        </Col>
      </Row>
      <div className="wrapper">
        <p>Email</p>
        <InputGroup>
          <FormControl
            onChange={handleInputEmailChange}
            value={inputEmail}
            placeholder="nama@domain.com"
            type="email"
          />
          <InputGroup.Text>
            <Img src="/assets/ic_checklist.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <Button onClick={tombolLupaPass} className="sign-btn sbm">
        Pulihkan
      </Button>
    </Container>
  );
};

export default ChangePasswordForm;
