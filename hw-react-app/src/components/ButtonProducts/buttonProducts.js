import React from "react";
import "./ButtonProducts.css";

const ButtonProducts = ({ icon, text, onClick }) => {
  return (
    <button className="btn-prod" type="submit" onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default ButtonProducts;
