import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import Img from "../../components/Img/Img";

const RegisInputForm1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isBigScreen = useMediaQuery({ maxDeviceWidth: 1024 - 1 });

  useEffect(() => {
    setIsMobile(isBigScreen);
  }, [isBigScreen]);

  return (
    <>
      <Container className="con">
        <div className="wrapper">
          <p>Email</p>
          <InputGroup>
            <FormControl placeholder="nama@domain.com" type="email" />
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
        <Button className="sign-btn">Daftar</Button>

        <div className="flex">
          <div className="line" /> <p className="typo">Atau</p>{" "}
          <div className="line" />
        </div>
      </Container>
    </>
  );
};

export default RegisInputForm1;
