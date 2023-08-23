import React from "react";
import "./PreviewCard.css";
import logo from "../../assets/image/logo2.png";
import { Outlet, useParams } from "react-router-dom";

const PreviewCard = () => {
  const { id } = useParams();

  return (
    <div className="preview-card-container">
      <img src={logo} alt="logo2" className="logo" />
      <div className="card-container">
        <h1 className="card-title">{`Chosen product is: ${id}`}</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default PreviewCard;
