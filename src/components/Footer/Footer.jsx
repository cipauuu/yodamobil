import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Col xs={12} className="footer-sec">
        <Row>
          <Col xs={3}>
            <p className="title">Beli</p>
            <Link to="/proses-pengajuan-kredit" className="sub-title">
              Proses pengajuan kredit
            </Link>
            <Link to="/lihat-semua-mobil" className="sub-title">
              Lihat semua mobil
            </Link>
            <Link to="/mobil-baru" className="sub-title">
              Mobil baru
            </Link>
            <Link to="/mobil-bekas" className="sub-title">
              Mobil bekas
            </Link>
          </Col>
          <Col xs={3}>
            <p className="title">Jual</p>
            <Link to="/buat-iklan-mobil" className="sub-title">
              Buat iklan mobil
            </Link>
            <Link to="/kenapa-jual-mobil-di-yodamobi" className="sub-title">
              Kenapa jual mobil di Yodamobi?
            </Link>
            <Link to="/cara-menjual" className="sub-title">
              Cara menjual
            </Link>
            <Link to="/menerima-pengajuan-kredit" className="sub-title">
              Menerima pengajuan kredit
            </Link>
          </Col>
          <Col xs={3}>
            <p className="title">Tentang Kami</p>
            <Link to="/tentang-trihamas-finance" className="sub-title">
              Tentang Trihamas Finance
            </Link>
            <Link to="/management-perusahaan" className="sub-title">
              Management Perusahaan
            </Link>
            <Link to="/relasi-investor" className="sub-title">
              Relasi Investor
            </Link>
          </Col>
          <Col xs={3}>
            <p className="title">Artikel</p>
            <Link to="/news" className="sub-title">
              News
            </Link>
            <Link to="/indeks" className="sub-title">
              Indeks
            </Link>
          </Col>
        </Row>
      </Col>
      <Col className="footer-sec-bottom">
        <Link to="/ketentuan-pribadi" className="sub-title">
          Ketentuan Pribadi
        </Link>
        <Link to="/syarat-dan-ketentuan" className="sub-title">
          Syarat dan Ketentuan
        </Link>
        <p>© 2021 Kalachakra Consulting</p>
      </Col>
    </>
  );
};

export default Footer;
