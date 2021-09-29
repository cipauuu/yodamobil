import React from "react";
import { Col, Row } from "react-bootstrap";

const UlasanTerbaru = () => {
  return (
    <Col className="ulasan-terbaru">
      <Row style={{ marginBottom: "40px" }}>
        <Col>
          <p className="title">Iklan Favorit di dekat Anda</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <img src="/assets/ulasan-terbaru/1.png" alt="" />
          <p className="item-title">2021 Cadillac Escalade</p>
          <p className="item-sub-title">
            Ya, SUV Amerika ini memang keren. Dengan tongkrongannya yang besar
            dia terlihat gagah. Apalagi mesinnya juga berkapasitas besar.
          </p>
        </Col>
        <Col xs={4}>
          <img src="/assets/ulasan-terbaru/2.png" alt="" />
          <p className="item-title">2021 Hyundai Elantra</p>
          <p className="item-sub-title">
            Kualitas sedan-sedan hasil besutan Hyundai selalu menjadi unggulan
            dikalangannya.
          </p>
        </Col>
        <Col xs={4}>
          <img src="/assets/ulasan-terbaru/3.png" alt="" />
          <p className="item-title">2021 Mercedes-Benz GLA250</p>
          <p className="item-sub-title">
            Titik masuk baru ke dalam jajaran SUV Mercedes-Benz lebih besar dan
            lebih baik.
          </p>
        </Col>
      </Row>
      <Row className="review">
        <Col xs={4}>
          <Row>
            <Col xs={2}>
              <img src="/assets/ulasan-terbaru/review/1.png" alt="" />
            </Col>
            <Col xs={6}>
              <p className="item-title">Erviana Puspitasari</p>
              <p className="item-sub-title">Pekerja Lepas</p>
            </Col>
            <Col xs={4}>
              <img src="/assets/ic_review_star.svg" alt="" />
              <p className="item-title d-inline">4.91</p>
              <p className="item-sub-title d-inline">(98)</p>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <Col xs={2}>
              <img src="/assets/ulasan-terbaru/review/2.png" alt="" />
            </Col>
            <Col xs={6}>
              <p className="item-title">Retno Niawati</p>
              <p className="item-sub-title">Pegawai Negri</p>
            </Col>
            <Col xs={4}>
              <img src="/assets/ic_review_star.svg" alt="" />
              <p className="item-title d-inline">4.65</p>
              <p className="item-sub-title d-inline">(93)</p>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <Col xs={2}>
              <img src="/assets/ulasan-terbaru/review/3.png" alt="" />
            </Col>
            <Col xs={6}>
              <p className="item-title">Khusnu Wijaya</p>
              <p className="item-sub-title">Entrepreneur</p>
            </Col>
            <Col xs={4}>
              <img src="/assets/ic_review_star.svg" alt="" />
              <p className="item-title d-inline">4.55</p>
              <p className="item-sub-title d-inline">(35)</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default UlasanTerbaru;
