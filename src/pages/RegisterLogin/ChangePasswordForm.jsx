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
import { useHistory } from "react-router-dom";
import axios from "axios";

const ChangePasswordForm = () => {
  const [inputEmail, setInputEmail] = React.useState("");

  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }

  let history = useHistory();

  function tombolLupaPass() {
    const data = {
      email: inputEmail,
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/check-email", data, {
        headers,
      })
      .then((response) => {
        if (response.data.meesage === "Email Not Registered") {
          alert("Email tidak terdaftar");
        }
      })
      .catch((error) => {
        if (
          error.response.data.message === "Email Registered" ||
          error.response.data.message === null
        ) {
          history.push("/");
        }
      });
  }

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
