import React from "react";
import "./ButtonProducts.css";

const ButtonProducts = ({ icon, text, clickAction }) => {
  return (
    <button className="btn-prod" type="submit" onClick={clickAction}>
      {icon}
      {text}
    </button>
  );
};

export default ButtonProducts;
