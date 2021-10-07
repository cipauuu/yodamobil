import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../helper/loginHelper";

const LoginInputForm = () => {
  let history = useHistory();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const tombolLogin = async () => {
    await login(inputEmail, inputPassword, history);
  };

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
              onClick={() => setInputPassword("")}
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
