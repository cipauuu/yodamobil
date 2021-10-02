import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const TemukanMobil = () => {
  return (
    <Col className="temukan-mobil">
      <Row style={{ marginBottom: "86px" }}>
        <Col xs={7} xl={10} className="my-auto">
          <p className="title">Temukan mobil berdasarkan model</p>
        </Col>
        <Col xs={5} xl={2} className="text-right my-auto">
          <p className="slider-num d-inline mr-4">1/6</p>
          <img src="/assets/ic_slider_arrow_left.svg" alt="" className="mr-2" />
          <img src="/assets/ic_slider_arrow_right.svg" alt="" />
        </Col>
      </Row>
      <Row className="desktop text-center">
        <Col xs={3}>
          <img src="/assets/temukan-mobil/1.png" alt="" />
          <p className="item-title text-center">Sedan</p>
          <Button>23,457 mobil</Button>
        </Col>
        <Col xs={3}>
          <img src="/assets/temukan-mobil/2.png" alt="" />
          <p className="item-title text-center">SUV</p>
          <Button>23,457 mobil</Button>
        </Col>
        <Col xs={3}>
          <img src="/assets/temukan-mobil/3.png" alt="" />
          <p className="item-title text-center">Coupe</p>
          <Button>23,457 mobil</Button>
        </Col>
        <Col xs={3}>
          <img src="/assets/temukan-mobil/4.png" alt="" />
          <p className="item-title text-center">Hatchback</p>
          <Button>23,457 mobil</Button>
        </Col>
      </Row>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/temukan-mobil/1.png" alt="" />
            <p className="item-title text-center">Sedan</p>
            <Button>23,457 mobil</Button>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/temukan-mobil/2.png" alt="" />
            <p className="item-title text-center">SUV</p>
            <Button>23,457 mobil</Button>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/temukan-mobil/3.png" alt="" />
            <p className="item-title text-center">Coupe</p>
            <Button>23,457 mobil</Button>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/temukan-mobil/4.png" alt="" />
            <p className="item-title text-center">Hatchback</p>
            <Button>23,457 mobil</Button>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
  );
};

export default TemukanMobil;
