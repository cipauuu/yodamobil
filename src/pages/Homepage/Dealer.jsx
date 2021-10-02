import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";import { Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import HeaderDealer from "./HeaderDealer";
import MobilCari from "./MobilCari";
import Populer from "./Populer";
import JelajahiMerek2 from "./JelajahiMerek2";
import UlasanTerbaru from "./UlasanTerbaru";
import UlasanTerbaru2 from "./UlasanTerbaru2";
import Footer from "../../components/Footer/Footer";
import "./Style.css";

const Dealer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isBigScreen = useMediaQuery({ maxDeviceWidth: 1366 - 1 });

  useEffect(() => {
    setIsMobile(isBigScreen);
  }, [isBigScreen]);

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <HeaderDealer />
        </Row>
        <Row>
          <MobilCari />
        </Row>
        <Row>
          <Populer />
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <JelajahiMerek2 />
        </Row>
      </Container>
      <Container>
        <Row>
          {isMobile? <UlasanTerbaru /> : <UlasanTerbaru2 />}
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Dealer;
