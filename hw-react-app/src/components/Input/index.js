import React from "react";
import "./style.css";

const Input = () => {
  return (
    <div>
      <input className="input" type="text" placeholder="User Name" />
      <input className="input" type="password" placeholder="Password" />
    </div>
  );
};

export default Input;
