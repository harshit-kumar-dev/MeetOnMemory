import React from "react";
import logo from "../../assets/logo.svg";

const BrandLogo = ({ className = "w-10 h-10", ...props }) => {
  return <img src={logo} alt="MeetOnMemory" className={className} {...props} />;
};

export default BrandLogo;
