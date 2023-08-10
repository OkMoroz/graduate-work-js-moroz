import React from "react";
import "./Card.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="card">
      <img src={logo} alt="logo" className="image" />
      <label>
        <Input type="text" placeholder="User Name" />
        <Toggle />
      </label>
      <Button />
    </div>
  );
};

export default Card;
