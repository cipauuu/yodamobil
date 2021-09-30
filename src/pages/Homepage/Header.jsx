import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./../../font-awesome//css/font-awesome.css";

const Homepage = () => {
  return (
    <Col className="home-head">
      <img src="/assets/home_head.png" className="image" alt="" />
      <div className="con">
        <p className="title">Pilih mobil, <br/>langsung cicil</p>
        <div className="search">
          <Row className="ml-0" style={{ marginTop: "2vw" }}>
            <Col className="item li">
              <p className="property">Tipe</p>
              <Form.Select
                aria-label="Default select example"
                className="option"
              >
                <option value="1">Mobil Bekas</option>
              </Form.Select>
            </Col>
            <Col className="item li">
              <p className="property">Merek</p>
              <Form.Select
                aria-label="Default select example"
                className="option"
              >
                <option value="1">Toyota</option>
              </Form.Select>
            </Col>
            <Col className="item li">
              <p className="property">Tahun</p>
              <Form.Select
                aria-label="Default select example"
                className="option"
              >
                <option value="1">2015</option>
              </Form.Select>
            </Col>
            <Col className="item li">
              <p className="property">Model</p>
              <Form.Select
                aria-label="Default select example"
                className="option"
              >
                <option value="1">Model</option>
              </Form.Select>
            </Col>
            <Col className="item">
              <p className="property">Harga</p>
              <Form.Select
                aria-label="Default select example"
                className="option"
              >
                <option value="1">10.000.000</option>
              </Form.Select>
            </Col>
            <Col className="item">
              <Button className="search mt-1">
                <i class="fa fa-search" aria-hidden="true"></i>
                Cari
              </Button>
            </Col>
          </Row>
        </div>
        <div className="bot-header">
          <Row className="ml-0" style={{ marginTop: "10vw" }}>
            <Col xs={1} className="pl-0 my-auto">
              <img
                src="/assets/ic_startvideo.svg"
                className="start-video"
                alt=""
              />
            </Col>
            <Col xs={5} className="pl-0 my-auto">
              <p className="text1">Mobil Favorit</p>
              <p className="text2">
                Tonton video untuk mempelajari lebih lanjut
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default Homepage;
