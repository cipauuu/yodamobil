import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import { useHistory } from "react-router-dom";
import { checkEmail } from "../../helper/loginHelper";

const RegisInputForm1 = () => {
  const history = useHistory();
  const [inputEmail, setInputEmail] = useState("");

  const handleInputEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const nextStep = async () => {
    await checkEmail(inputEmail, history);
  };
  return (
    <>
      <Container className="con">
        <div className="wrapper">
          <p>Email</p>
          <InputGroup>
            <FormControl
              onChange={handleInputEmailChange}
              value={inputEmail}
              placeholder="nama@domain.com"
              type="email"
              autoFocus
            />
            <InputGroup.Text>
              <Img src="/assets/ic_email.svg" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="flex">
          <div className="flex">
            <InputGroup.Radio id="radio-sk" />{" "}
            <p className="typo-bold">
              Saya sudah setuju dengan syarat dan ketentuan yodamobi
            </p>
          </div>
        </div>
        <Button onClick={nextStep} className="sign-btn">
          Daftar
        </Button>

        <div className="flex">
          <div className="line" /> <p className="typo">Atau</p>{" "}
          <div className="line" />
        </div>
      </Container>
    </>
  );
};

export default RegisInputForm1;
