import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";

const LoginInputForm = () => {
  const clearPassword = () => {
    document.getElementById("inputPass").value="";
  }

  return (
    <Container style={{ width: "70%" }}>
      <div className="wrapper">
        <p>Email</p>
        <InputGroup>
          <FormControl placeholder="mahendrawisnu@me.com" type="email"/>
          <InputGroup.Text>
            <Img src="/assets/ic_email.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="wrapper">
        <p>Password</p>
        <InputGroup>
          <FormControl placeholder="qwerty123" type="password" id="inputPass"/>
          <InputGroup.Text>
            <Img src="/assets/ic_clear.svg" onClick={clearPassword} className="clearPass"/>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="Flex">
        <div className="Flex">
          <InputGroup.Radio /> <p className="TypoBold">Ingat Saya</p>
        </div>
        <p className="TypoBold" style={{ color: "#78C2B4" }}>
          Pulihkan Password
        </p>
      </div>
      <Button className="SignInBtn">Masuk</Button>

      <div className="Flex">
        <div className="Line" /> <p className="typo">Atau</p>{" "}
        <div className="Line" />
      </div>
    </Container>
  );
};

export default LoginInputForm;
