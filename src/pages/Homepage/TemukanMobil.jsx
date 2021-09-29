import React from "react";
import { Col, Row, Button } from "react-bootstrap";

const TemukanMobil = () => {
  return (
    <Col className="temukan-mobil">
      <Row style={{ marginBottom: "86px" }}>
        <Col xs={10} className="my-auto">
          <p className="title">Temukan mobil berdasarkan model</p>
        </Col>
        <Col xs={2} className="text-right my-auto">
          <p className="slider-num d-inline mr-4">1/6</p>
          <img src="/assets/ic_slider_arrow_left.svg" alt="" className="mr-2" />
          <img src="/assets/ic_slider_arrow_right.svg" alt="" />
        </Col>
      </Row>
      <Row className="text-center">
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
    </Col>
  );
};

export default TemukanMobil;
