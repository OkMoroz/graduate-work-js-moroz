import React from "react";
import "./buttonProducts.css";

const ButtonProducts = ({ icon, text }) => {
  return (
    <button className="btnProd" type="submit">
      {icon}
      {text}
    </button>
  );
};

export default ButtonProducts;
