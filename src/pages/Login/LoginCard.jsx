import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./LoginStyle.css";

const LoginCard = ({ login }) => {
  const directPage = () => {
    window.location.href = login ? "/register" : "/login";
  };

  return (
    <Card className="mt-3">
      <div className="bg">
      <Card.Img
        variant="top"
        src="/assets/yodahero.png"
        style={{ height: "80vh" }}
        className="card-image"
      />
      </div>
      <Card.Body className="body-card">
        <Card.Title className="title">
          Cara terbaru untuk membeli dan menjual mobil
        </Card.Title>
        <Container>
          <Row>
            <Col xs={8} className="my-auto">
              <p className="mb-0 text-white">
                {!login ? "Sudah punya akun?" : "Belum punya akun?"}
              </p>
            </Col>
            <Col xs={4} className="text-right">
              <Button onClick={directPage} className="tombol">
                {!login ? "Masuk" : "Daftar"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default LoginCard;
