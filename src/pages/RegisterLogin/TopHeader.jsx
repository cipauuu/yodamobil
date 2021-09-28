import React from "react";

const TopHeader = ({ title }) => {
  return (
    <div className="mt-4 mb-5">
      <img src="assets/logo.svg" alt="" />
      <p className="judul">{title}</p>
      <p className="sub-judul">Masukan detail untuk melanjutkan</p>
    </div>
  );
};

export default TopHeader;
