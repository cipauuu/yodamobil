import React from "react";
import logo from "../../img/logo.svg";

const LoginTopHeader = ({ title, subtitle }) => {
  return (
    <div className="mt-4 mb-5">
      <img src={logo} alt="" />
      <p className="judul">{title}</p>
      <p className="sub-judul">{subtitle}</p>
    </div>
  );
};

export default LoginTopHeader;
