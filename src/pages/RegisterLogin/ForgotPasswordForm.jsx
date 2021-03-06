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
import Cookies from "js-cookie";

const ForgotPasswordForm = () => {
  const [inputEmail, setInputEmail] = React.useState("");

  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }

  let history = useHistory();

  function tombolLupaPass() {
    if (inputEmail === "") {
      alert("Kolom email tidak boleh kosong");
    } else {
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
            apiForgotPass();
          }
        });
    }
  }

  function apiForgotPass() {
    const data = {
      email: inputEmail,
    };
    const headers = {
      Accept: "application/json",
    };
    axios
      .post("https://yodacentral.herokuapp.com/api/forgot-password", data, {
        headers,
      })
      .then((response) => {
        if (response.data.message === "Reset Password Email sent.") {
          alert("Email untuk reset password telah terkirim");
          Cookies.set("forgotpass2", 1);
          history.push("/forgot-password/2");
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
          <p className="judul" style={{ fontSize: "28px" }}>
            Lupa password Anda?
          </p>
          <p className="sub-judul">Masukan detail untuk melanjutkan</p>
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

export default ForgotPasswordForm;
