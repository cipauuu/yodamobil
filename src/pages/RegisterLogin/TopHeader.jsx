import React from "react";
import logo from "../../img/logo.svg";

const TopHeader = ({ title }) => {
  return (
    <div className="mt-4 mb-5">
      <img src={logo} alt="" />
      <p className="judul">{title}</p>
      <p className="sub-judul">Masukan detail untuk melanjutkan</p>
    </div>
  );
};

export default TopHeader;
