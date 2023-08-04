import React from "react";
import "./buttonProducts.css";

const ButtonProducts = ({ icon, text }) => {
  return (
    <div>
      <button className="btnProd" type="submit">
        {icon}{text}
      </button>
    </div>
  );
};

export default ButtonProducts;
