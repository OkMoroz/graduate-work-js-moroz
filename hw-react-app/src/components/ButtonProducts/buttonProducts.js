import React from "react";
import "./ButtonProducts.css";

const ButtonProducts = ({ icon, text }) => {
  return (
    <button className="btn-prod" type="submit">
      {icon}
      {text}
    </button>
  );
};

export default ButtonProducts;
