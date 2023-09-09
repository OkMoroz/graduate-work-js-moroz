import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo2.png"; 

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo2" className="logo" />
    </Link>
  );
};

export default Logo;
