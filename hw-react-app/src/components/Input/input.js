import React from "react";
import "./Input.css";

const Input = ({ type, placeholder }) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        className="input"
        placeholder={placeholder} />
    </div>
  );
};

export default Input;
