import React from "react";
import logo from "../../img/logo.svg";
import { Title, SubTitle } from "./LoginStyle";

const LoginTopHeader = ({ title, subtitle }) => {
  return (
    <div>
      <img src={logo} alt="" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  );
};

export default LoginTopHeader;
