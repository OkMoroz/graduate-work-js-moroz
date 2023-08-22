import React from "react";
import logo from "../../assets/image/logo2.png";
import "./PreviewCard.css";
import { useNavigate, Outlet } from "react-router-dom";

const PreviewCard = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/login");
  };

  return (
    <div className="preview-card-container">
      <img src={logo} alt="logo2" className="logo" onClick={handleLogoClick} />
      <div className="card-container">
        <h1 className="card-title">{"Chosen product is: ${id}"}</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default PreviewCard;
