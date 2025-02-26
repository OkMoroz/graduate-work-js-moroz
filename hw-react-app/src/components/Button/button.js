import React from "react";
import "./button.css";

const Button = ({onClick}) => {
  return (
    <div>
      <button className="btn" type="submit" onClick={onClick}>
        Login
      </button>
    </div>
  );
};

export default Button;
