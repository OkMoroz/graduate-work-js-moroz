import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, value, name, onChange }) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
