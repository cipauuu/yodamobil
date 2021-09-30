import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import HeaderDealer from "./HeaderDealer";
import MobilCari from "./MobilCari";
import Populer from "./Populer";
import JelajahiMerek2 from "./JelajahiMerek2";
import UlasanTerbaru2 from "./UlasanTerbaru2";
import Footer from "../../components/Footer/Footer";
import "./Style.css";

const Dealer = () => {
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
          <UlasanTerbaru2 />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Dealer;
