import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Card = styled(Col)`
  background-color: #78c2b4;
  border-radius: 16px;
  height: calc(100vh - 32px);

  h1 {
    font-weight: 700;
    color: #ffffff;
    margin: 200px 90px;
    font-size: 64px;
  }
`;

const LoginCard = () => {
  return (
    <Card>
      <h1>Cara terbaru untuk membeli dan menjual mobil</h1>
    </Card>
  );
};

export default LoginCard;
