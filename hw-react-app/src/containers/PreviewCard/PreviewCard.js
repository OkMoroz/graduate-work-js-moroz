import React from "react";
import "./PreviewCard.css";
import ClickLogo from "../../components/ClickLogo/ClickLogo";
import {Outlet } from "react-router-dom";

const PreviewCard = () => {
  return (
    <div className="preview-card-container">
      <ClickLogo to="/products-preview"/>
      <div className="card-container">
        <h1 className="card-title">{"Chosen product is: ${id}"}</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default PreviewCard;
