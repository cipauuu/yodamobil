import React from "react";
import logo from "../../img/logo.svg";
import { Title, SubTitle } from "./LoginStyle";

const LoginTopHeader = ({ title, subtitle }) => {
  return (
    <div className="mt-4">
      <img src={logo} alt="" />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </div>
  );
};

export default LoginTopHeader;
