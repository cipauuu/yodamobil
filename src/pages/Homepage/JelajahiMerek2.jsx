import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const JelajahiMerek2 = () => {
  return (
    <Col className="jelajahi-merek2">
      <Container>
        <Row style={{ marginBottom: "49px" }}>
          <Col className="text-center">
            <p className="title">Jelajahi merek mobil terbaik</p>
          </Col>
        </Row>
        <Row>
        <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/1.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Subaru</p>
                  <p className="item-sub-title">mulai dari Rp 400 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/2.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Volkswagen</p>
                  <p className="item-sub-title">mulai dari Rp 800 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/3.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Toyota</p>
                  <p className="item-sub-title">mulai dari Rp 150 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/4.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Mercedes-Benz</p>
                  <p className="item-sub-title">mulai dari Rp 600 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/5.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Hyundai</p>
                  <p className="item-sub-title">mulai dari Rp 300 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <div className="car-card">
              <Row>
                <Col xs={3} className="my-auto text-right">
                  <img src="/assets/jelajahi-merek/1.svg" alt="" />
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="item-title">Infiniti</p>
                  <p className="item-sub-title">mulai dari Rp 500 jt</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default JelajahiMerek2;
