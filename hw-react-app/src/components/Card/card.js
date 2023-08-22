import React, { useState } from "react";
import "./Card.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorInLogin, setIsErrorInLogin] = useState(false);
  const [isErrorInPassword, setIsErrorInPassword] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const navigate = useNavigate();

  const setToken = () => {
    localStorage.setItem("token", "KJHJ5kmdgv236362fds3");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
      setIsErrorInLogin(false);
    }

    if (name === "password") {
      setPassword(value);
      setIsErrorInPassword(false);
    }
  };

  const sendRequest = (event) => {
    event.preventDefault();
    setIsErrorMessage(false);

    if (username === "") {
      setIsErrorInLogin(true);
      return;
    }

    if (password === "") {
      setIsErrorInPassword(true);
      return;
    }

    if (username === "Admin" && password === "123") {
      localStorage.setItem("token", "KJHJ5kmdgv236362fds3");
      setToken();
      navigate("/products");
      setIsErrorMessage(false);
    } else {
      setIsErrorMessage(true);
    }
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" className="image" />
      <label>
        <Input
          type="text"
          placeholder="User Name"
          value={username}
          name="username"
          onChange={handleChange}
          isError={isErrorInLogin}
        />

        {isErrorInLogin && (
          <div className="error-message">Please enter login</div>
        )}
        <Toggle
          password={password}
          handleChange={handleChange}
          isErrorInPassword={isErrorInPassword}
        />
      </label>
      <Button onClick={sendRequest} />
      {isErrorMessage && (
        <div className="error-message">Login or password is not valid</div>
      )}
    </div>
  );
};

export default Card;
