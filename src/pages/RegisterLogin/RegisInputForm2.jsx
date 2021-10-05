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
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisInputForm2 = () => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let inputEmail = params.get("email");

  const [inputNamaDepan, setInputNamaDepan] = React.useState("");
  const [inputNamaBelakang, setInputNamaBelakang] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputKonfirmasiPassword, setInputKonfirmasiPassword] =
    React.useState("");

  let history = useHistory();
  const link = "/register/3?email=" + inputEmail;

  function handleInputNamaDepanChange(event) {
    setInputNamaDepan(event.target.value);
  }
  function handleInputNamaBelakangChange(event) {
    setInputNamaBelakang(event.target.value);
  }
  function handleInputPasswordChange(event) {
    setInputPassword(event.target.value);
  }
  function handleInputKonfirmasiPasswordChange(event) {
    setInputKonfirmasiPassword(event.target.value);
  }

  function letterCounter(x) {
    return x.replace(/[^a-zA-Z]/g, "").length;
  }

  function tombolDaftar() {
    if (inputNamaDepan === "") {
      alert("Kolom nama depan tidak boleh kosong");
    } else if (inputNamaBelakang === "") {
      alert("Kolom nama belakang tidak boleh kosong");
    } else if (inputPassword === "") {
      alert("Kolom password tidak boleh kosong");
    } else if (letterCounter(inputPassword) < 8) {
      alert("Minimal karakter password adalah 8");
    } else if (inputKonfirmasiPassword === "") {
      alert("Kolom konfirmasi password tidak boleh kosong");
    } else if (inputPassword !== inputKonfirmasiPassword) {
      alert("Kolom password dan konfirmasi password tidak sama");
    } else {
      const data = {
        name: inputNamaDepan + " " + inputNamaBelakang,
        email: inputEmail,
        password: inputPassword,
        password_confirmation: inputKonfirmasiPassword,
        phone_number: "081234567890",
      };
      const headers = {
        Accept: "application/json",
      };
      axios
        .post("https://yodacentral.herokuapp.com/api/register", data, {
          headers,
        })
        .then((response) => {
          history.push(link);
        })
        .catch((error) => {
          console.error(error.response.data.errors);
        });
    }
  }

  return (
    <Container className="con">
      <div className="wrapper">
        <p>Email</p>
        <InputGroup>
          <FormControl value={inputEmail} disabled />
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
              <FormControl
                onChange={handleInputNamaDepanChange}
                value={inputNamaDepan}
                placeholder="Depan"
                type="name"
                autoFocus
              />
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
              <FormControl
                onChange={handleInputNamaBelakangChange}
                value={inputNamaBelakang}
                placeholder="Belakang"
                type="name"
              />
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
          <FormControl
            onChange={handleInputPasswordChange}
            value={inputPassword}
            placeholder="******"
            type="password"
          />
          <InputGroup.Text>
            <Img src="/assets/ic_lock.svg" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="wrapper">
        <p>Konfirmasi Password</p>
        <InputGroup>
          <FormControl
            onChange={handleInputKonfirmasiPasswordChange}
            value={inputKonfirmasiPassword}
            placeholder="******"
            type="password"
          />
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
      <Button onClick={tombolDaftar} className="sign-btn">
        Lanjutkan
      </Button>
    </Container>
  );
};

export default RegisInputForm2;
