import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

const HeaderDealer = () => {
  return (
    <Col className="header-dealer">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="sub-title">Temui mobil yang tepat untuk Anda</p>
            <p className="title">Honda Civic Type R</p>
          </Col>
        </Row>
        <Row style={{ marginBottom: "147px" }}>
          <Col xs={1}>
            <img src="/assets/ic_slider_arrow_left.svg" alt="" />
          </Col>
          <Col xs={10} className="text-center my-auto">
            <Button className="detail">Detail</Button>
            <Button className="test-drive">Test Drive</Button>
          </Col>
          <Col xs={1}>
            <img src="/assets/ic_slider_arrow_right.svg" alt="" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center img-sec">
            <p className="title">Rp 299 jt</p>
            <p className="sub-title">Starting from</p>
            <img src="/assets/header-dealer/1.png" />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default HeaderDealer;
