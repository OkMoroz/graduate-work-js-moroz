import React, { useState } from "react";
import "./card.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input/input";
import Toggle from "../Toggle/Toggle";
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import { setToken } from "../localStorageService";

const Card = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorInLogin, setIsErrorInLogin] = useState(false);
  const [isErrorInPassword, setIsErrorInPassword] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const navigate = useNavigate();

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

    const handleLogin = () => {
      if (username === "Admin" && password === "123") {
        setToken("KJHJ5kmdgv236362fds3"); 
        navigate("/products"); 
        setIsErrorMessage(false);
      } else {
        setIsErrorMessage(true);
      }
    };
     handleLogin();
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" className="image" />
      <label>
        <Input
          type="text"
          placeholder="Демо логін: Admin"
          value={username}
          name="username"
          onChange={handleChange}
          isError={isErrorInLogin}
          title="Демо логін: Admin"
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
