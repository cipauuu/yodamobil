import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

const LoginInputForm = () => {
  let history = useHistory();

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }
  function handleInputPasswordChange(event) {
    setInputPassword(event.target.value);
  }

  function clearPassword() {
    setInputPassword("");
  }

  function tombolLogin() {
    if (inputEmail === "") {
      alert("Kolom email tidak boleh kosong");
    } else if (inputPassword === "") {
      alert("Kolom password tidak boleh kosong");
    } else {
      const data = {
        email: inputEmail,
        password: inputPassword,
      };
      const headers = {
        Accept: "application/json",
      };
      axios
        .post("https://yodacentral.herokuapp.com/api/login", data, {
          headers,
        })
        .then((response) => {
          Cookies.set('token', response.data.token);
          history.push("/");
        })
        .catch((error) => {
          //error.response.data.message
          alert("Kombinasi email dan password salah")
        });
    }
  }

  return (
    <Container className="con">
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
            <Img src="/assets/ic_email.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="wrapper">
        <p>Password</p>
        <InputGroup>
          <FormControl
            onChange={handleInputPasswordChange}
            value={inputPassword}
            placeholder="******"
            type="password"
            id="inputPass"
          />
          <InputGroup.Text>
            <Img
              src="/assets/ic_clear.svg"
              onClick={clearPassword}
              className="clear-pass"
            />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="flex">
        <div className="flex">
          <InputGroup.Radio /> <p className="typo-bold">Ingat Saya</p>
        </div>
        <Link to="/forgot-password">
          <p className="typo-bold" style={{ color: "#78C2B4" }}>
            Pulihkan Password
          </p>
        </Link>
      </div>
      <Button onClick={tombolLogin} className="sign-btn">
        Masuk
      </Button>

      <div className="flex">
        <div className="line" /> <p className="typo">Atau</p>{" "}
        <div className="line" />
      </div>
    </Container>
  );
};

export default LoginInputForm;
