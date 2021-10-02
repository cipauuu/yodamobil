import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import CarLogo from "./CarLogo";
import IklanFavorit from "./IklanFavorit";
import TemukanMobil from "./TemukanMobil";
import JelajahiMerek from "./JelajahiMerek";
import UlasanTerbaru from "./UlasanTerbaru";
import Footer from "../../components/Footer/Footer";
import "./Style.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const Homepage = () => {

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Header />
          </Row>
        <Row>
          <CarLogo />
        </Row>
        <Row>
          <IklanFavorit />
        </Row>
        <Row>
          <TemukanMobil />
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <JelajahiMerek />
        </Row>
      </Container>
      <Container>
        <Row>
          <UlasanTerbaru />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
