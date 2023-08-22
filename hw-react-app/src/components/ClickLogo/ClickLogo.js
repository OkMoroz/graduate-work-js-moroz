import React from "react";
import logo from "../../assets/image/logo2.png";
import { useNavigate } from "react-router-dom";

const ClickLogo = ({ to }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(to);
  };

  return (
    <img src={logo} alt="logo2" className="logo" onClick={handleLogoClick} />
  );
};

export default ClickLogo;
