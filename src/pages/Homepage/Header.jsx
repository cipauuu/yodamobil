import React from "react";
import { Col, Row } from "react-bootstrap";

const Homepage = () => {
  return (
    <Col className="home-head">
      <img src="/assets/home_head.png" className="image" alt="" />
      <div className="con">
        <p className="title">Pilih mobil, langsung cicil</p>
        <div className="search">
          <Row className="ml-0" style={{ marginTop: "10vw" }}>
            <Col className="item li">
              <p className="property ml-3">Tipe</p>
            </Col>
            <Col className="item li">
              <p className="property">Merek</p>
            </Col>
            <Col className="item li">
              <p className="property">Model</p>
            </Col>
            <Col className="item">
              <p className="property">Harga</p>
            </Col>
            <Col className="item">
              <p>asd</p>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Homepage;
