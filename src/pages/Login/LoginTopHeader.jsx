import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";

const Title = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin-top: 28px;
  margin-bottom: 0px;
`;

const SubTitle = styled.p`
  color: #9a9ea7;
  font-size: 14px;
  margin-top: 5px;
`;

const LoginTopHeader = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <Title>Daftar untuk memulai</Title>
      <SubTitle>Masukan detail untuk melanjutkan</SubTitle>
    </div>
  );
};

export default LoginTopHeader;
