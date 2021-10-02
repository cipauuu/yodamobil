import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const Populer = () => {
  return (
    <Col className="populer">
      <Row>
        <Col className="text-center">
          <p className="title">Populer di dekat Anda</p>
        </Col>
      </Row>
      <Row className="desktop">
        <Col xs={4}>
          <img src="/assets/populer/1.png" alt="" />
          <p className="item-title">Used 2019 Audi S4 Premium Plus</p>
          <p className="item-sub-title">11 475 Miles</p>
          <Row>
            <Col>
              <p className="item-sub-title d-inline">AWD</p>
              <p className="item-sub-title d-inline mx-2">•</p>
              <p className="item-sub-title d-inline">4-Cylinder Turbo</p>
            </Col>
          </Row>
          <Button className="btn1 mr-1">Rp 412 jt</Button>
          <Button className="btn2">Terlaris</Button>
        </Col>
        <Col xs={4}>
          <img src="/assets/populer/2.png" alt="" />
          <p className="item-title">2013 Subaru Forester Premium Plus</p>
          <p className="item-sub-title">40 475 Miles</p>
          <Row>
            <Col>
              <p className="item-sub-title d-inline">AWD</p>
              <p className="item-sub-title d-inline mx-2">•</p>
              <p className="item-sub-title d-inline">4-Cylinder Turbo</p>
            </Col>
          </Row>
          <Button className="btn1 mr-1">Rp 223 jt</Button>
          <Button className="btn2">Terlaris</Button>
        </Col>
        <Col xs={4}>
          <img src="/assets/populer/3.png" alt="" />
          <p className="item-title">Used 2010 BMW X3 Sport package</p>
          <p className="item-sub-title">20 850 Miles</p>
          <Row>
            <Col>
              <p className="item-sub-title d-inline">RWD</p>
              <p className="item-sub-title d-inline mx-2">•</p>
              <p className="item-sub-title d-inline">4-Cylinder</p>
            </Col>
          </Row>
          <Button className="btn1 mr-1">Rp 819 jt</Button>
          <Button className="btn2">Terlaris</Button>
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
            <img src="/assets/populer/1.png" alt="" />
            <p className="item-title">Used 2019 Audi S4 Premium Plus</p>
            <p className="item-sub-title">11 475 Miles</p>
            <Row>
              <Col>
                <p className="item-sub-title d-inline">AWD</p>
                <p className="item-sub-title d-inline mx-2">•</p>
                <p className="item-sub-title d-inline">4-Cylinder Turbo</p>
              </Col>
            </Row>
            <Button className="btn1 mr-1">Rp 412 jt</Button>
            <Button className="btn2">Terlaris</Button>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/populer/2.png" alt="" />
            <p className="item-title">2013 Subaru Forester Premium Plus</p>
            <p className="item-sub-title">40 475 Miles</p>
            <Row>
              <Col>
                <p className="item-sub-title d-inline">AWD</p>
                <p className="item-sub-title d-inline mx-2">•</p>
                <p className="item-sub-title d-inline">4-Cylinder Turbo</p>
              </Col>
            </Row>
            <Button className="btn1 mr-1">Rp 223 jt</Button>
            <Button className="btn2">Terlaris</Button>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/populer/3.png" alt="" />
            <p className="item-title">Used 2010 BMW X3 Sport package</p>
            <p className="item-sub-title">20 850 Miles</p>
            <Row>
              <Col>
                <p className="item-sub-title d-inline">RWD</p>
                <p className="item-sub-title d-inline mx-2">•</p>
                <p className="item-sub-title d-inline">4-Cylinder</p>
              </Col>
            </Row>
            <Button className="btn1 mr-1">Rp 819 jt</Button>
            <Button className="btn2">Terlaris</Button>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
  );
};

export default Populer;
