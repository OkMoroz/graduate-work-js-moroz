import React from "react";
import "./style.css";

const Input = ({ type, placeholder }) => {
  return (
    <div className="input-container">
      <input type={type} className="input" placeholder={placeholder} />
    </div>
  );
};

export default Input;
