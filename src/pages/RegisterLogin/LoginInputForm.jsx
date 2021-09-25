import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import { Link } from "react-router-dom";

const LoginInputForm = () => {
  const clearPassword = () => {
    document.getElementById("inputPass").value = "";
  };

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
      <div className="wrapper">
        <p>Password</p>
        <InputGroup>
          <FormControl placeholder="******" type="password" id="inputPass" />
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
      <Button className="sign-btn">Masuk</Button>

      <div className="flex">
        <div className="line" /> <p className="typo">Atau</p>{" "}
        <div className="line" />
      </div>
    </Container>
  );
};

export default LoginInputForm;
