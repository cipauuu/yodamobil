import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import { register } from "../../helper/loginHelper";

const RegisInputForm2 = () => {
  let params = new URLSearchParams(document.location.search.substring(1));
  const inputEmail = params.get("email");
  const history = useHistory();
  const regis2 = Cookies.get("regis2");

  const [inputNamaDepan, setInputNamaDepan] = React.useState("");
  const [inputNamaBelakang, setInputNamaBelakang] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputKonfirmasiPassword, setInputKonfirmasiPassword] = useState("");

  const handleInputNamaDepanChange = (e) => {
    setInputNamaDepan(e.target.value);
  };
  const handleInputNamaBelakangChange = (e) => {
    setInputNamaBelakang(e.target.value);
  };
  const handleInputPasswordChange = (e) => {
    setInputPassword(e.target.value);
  };
  const handleInputKonfirmasiPasswordChange = (e) => {
    setInputKonfirmasiPassword(e.target.value);
  };

  const tombolDaftar = async () => {
    await register(
      inputNamaDepan,
      inputNamaBelakang,
      inputEmail,
      inputPassword,
      inputKonfirmasiPassword,
      history
    );
  };

  useEffect(() => {
    if (regis2 !== inputEmail) {
      history.push("/register");
    }
  });

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
          <InputGroup.Radio id="radio-sk" />{" "}
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
