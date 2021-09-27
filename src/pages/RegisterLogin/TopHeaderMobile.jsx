import React from "react";

const TopHeaderMobile = ({ title }) => {
  return (
    <>
      <p className="judul-mobile mb-0">{title}</p>
      <p className="sub-judul-mobile">Enter your details to proceed further</p>
    </>
  );
};

export default TopHeaderMobile;
