import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const IklanFavorit = () => {
  return (
    <Col className="iklan-favorit">
      <Row>
        <Col>
          <p className="title">Iklan Favorit di dekat Anda</p>
        </Col>
      </Row>
      <Row className="desktop">
        <Col xs={3}>
          <img src="/assets/iklan-favorit/1.png" alt="" />
          <p className="item-title">Mobil bekas dibawah Rp 320 jt</p>
          <p className="item-sub-title">723,457 mobil</p>
        </Col>
        <Col xs={3}>
          <img src="/assets/iklan-favorit/2.png" alt="" />
          <p className="item-title">Mobil bekas dibawah Rp 600 jt</p>
          <p className="item-sub-title">329,570 mobil</p>
        </Col>
        <Col xs={3}>
          <img src="/assets/iklan-favorit/3.png" alt="" />
          <p className="item-title">Toyota model 2021</p>
          <p className="item-sub-title">3,125 mobil</p>
        </Col>
        <Col xs={3}>
          <img src="/assets/iklan-favorit/4.png" alt="" />
          <p className="item-title">Compact SUVs </p>
          <p className="item-sub-title">229,660 mobil</p>
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
            <img src="/assets/iklan-favorit/1.png" alt="" />
            <p className="item-title">Mobil bekas dibawah Rp 320 jt</p>
            <p className="item-sub-title">723,457 mobil</p>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/iklan-favorit/2.png" alt="" />
            <p className="item-title">Mobil bekas dibawah Rp 600 jt</p>
            <p className="item-sub-title">329,570 mobil</p>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/iklan-favorit/3.png" alt="" />
            <p className="item-title">Toyota model 2021</p>
            <p className="item-sub-title">3,125 mobil</p>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="px-0">
            <img src="/assets/iklan-favorit/4.png" alt="" />
            <p className="item-title">Compact SUVs </p>
            <p className="item-sub-title">229,660 mobil</p>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
  );
};

export default IklanFavorit;
