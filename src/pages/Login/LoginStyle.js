import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Title = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin-top: 28px;
  margin-bottom: 0px;
`;

export const SubTitle = styled.p`
  color: #9a9ea7;
  font-size: 14px;
  margin-top: 5px;
`;

export const Kartu = styled.div`
  width:18rem;
`;

export const Hero = styled.div`
  background: url("/assets/yodahero.png");
  height: 90%;
  mix-blend-mode: luminosity;
opacity: 0.49;
`;

export const Chip = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 12px 94px;
  align-items: center;
  height: 10%;
`;

export const Typo = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: auto 0;
`;

export const LoginButton = styled(Button)`
  background: #203756;
  border: none;
  width: 116px;
  height: 44px;
  border-radius: 10px;
`;
