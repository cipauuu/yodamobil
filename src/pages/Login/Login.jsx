import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";
import LoginCard from "./LoginCard";
import LoginTopHeader from "../Login/LoginTopHeader";
import styled from "styled-components";
import LoginInputForm from "./LoginInputForm";
import LoginMobile from './LoginMobile';
import "./LoginStyle.css";

const ContainerP = styled(Container)`
  padding: 8px 24px;
`;

const Login = () => {
  const [isMobile, setIsMobile] = useState(false)
  const isBigScreen = useMediaQuery({maxDeviceWidth: 768-1});

  useEffect(()=>{
    setIsMobile(isBigScreen)
  },[isBigScreen])

  return (
      <>
       {isMobile ? <LoginMobile/> : (
             <ContainerP fluid>
             <Row>
               <Col xs={6}>
               <LoginCard login={true} />
               </Col>
               
               <Col xs={6} className="mt-5 text-center">
                 <LoginTopHeader
                   title={"Masuk ke akun Anda"}
                   subtitle={"Masukan detail untuk melanjutkan"}
                 />
                 <LoginInputForm />
               </Col>
             </Row>
           </ContainerP>
       )}
      </>
  );
};

export default Login;
