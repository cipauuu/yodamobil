import React from "react";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";

const CarLogo = () => {
  return (
    <>
      <Col className="text-center car-logo my-auto">
        <img src="/assets/car-logo/1.png" className="jr" alt="" />
        <img src="/assets/car-logo/2.png" className="jr" alt="" />
        <img src="/assets/car-logo/3.png" className="jr" alt="" />
        <img src="/assets/car-logo/4.png" className="jr" alt="" />
        <img src="/assets/car-logo/5.png" className="jr" alt="" />
        <img src="/assets/car-logo/6.png" className="jr" alt="" />
        <img src="/assets/car-logo/7.png" alt="" />
      </Col>

      <Swiper
        slidesPerView={3.1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper py-2"
        style={{marginBottom:"68px"}}
      >
        <SwiperSlide>
          <img src="/assets/car-logo/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/car-logo/7.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarLogo;
