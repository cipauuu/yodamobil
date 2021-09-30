import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./../../font-awesome//css/font-awesome.css";

const MobilCari = () => {
  return (
    <Col className="mobil-cari">
      <Row>
        <Col className="text-center">
          <p className="title">Mobil apa yang Anda cari?</p>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Col>
  );
};

export default MobilCari;
