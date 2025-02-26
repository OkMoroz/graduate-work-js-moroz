import React from "react";
import "./input.css";

const Input = ({ type, placeholder, value, name, onChange, isError }) => {
  const inputClassName = isError ? "input error" : "input";
  return (
    <div className="input-container">
      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
