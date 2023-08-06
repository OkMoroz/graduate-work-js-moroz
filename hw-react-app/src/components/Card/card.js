import React from "react";
import "./card.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input/input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Button from "../Button/button";

const Card = () => {
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <Input type="text" placeholder="User Name" />
      <div className="passwordInput">
        <Input type="password" placeholder="Password" className="passwordField"/>
        <div className="eyeIcon">
          <IoMdEye className="eyeIconOpen" />
          <IoMdEyeOff className="eyeIconClosed" />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Card;
