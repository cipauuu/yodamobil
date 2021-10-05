import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RegisInputForm1 = () => {
  const [inputEmail, setInputEmail] = React.useState("");

  function handleInputEmailChange(event) {
    setInputEmail(event.target.value);
  }

  let history = useHistory();
  const link = "/register/2?email=" + inputEmail;

  function nextStep() {
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
            history.push(link);
          }
        })
        .catch((error) => {
          if (
            error.response.data.message === "Email Registered" ||
            error.response.data.message === null
          ) {
            alert("Email telah terdaftar");
          }
        });
    }
  }
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
            <InputGroup.Radio />{" "}
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
