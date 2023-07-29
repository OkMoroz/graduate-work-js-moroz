import React from "react";
import "./style.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input";
import Button from "../Button";

const Card = () => {
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <Input type="text" placeholder="User Name" />
      <Input type="password" placeholder="Password" />
      <Button />
    </div>
  );
};

export default Card;
