import React from "react";
import "./Button.css";

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
