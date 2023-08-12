import React, { useState, useEffect } from "react";
import "./Card.css";
import logo from "../../assets/image/logo.png";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import Button from "../Button/Button";

const Card = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorInLogin, setIsErrorInLogin] = useState(false);
  const [isErrorInPassword, setIsErrorInPassword] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const sendRequest = () => {
    setIsErrorInLogin(false);
    setIsErrorInPassword(false);
    setIsErrorMessage(false);

    if (username === "") {
      setIsErrorInLogin(true);
      return;
    }

    if (password === "") {
      setIsErrorInPassword(true);
      return;
    }

    if (username === "Admin" && password === "123456789") {
      localStorage.setItem("jwt", "KJHJ5kmdgv236362fds3");
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
          onChange={(event) => setUsername(event.target.value)}
        />
        {isErrorInLogin && (
          <div className="errorMessage">Please enter login</div>
        )}
        <Toggle
          password={password}
          setPassword={setPassword}
          errorMessage={isErrorInPassword && "Please enter password"}
        />
      </label>
      <Button onClick={sendRequest} />
      {isErrorMessage && (
        <div className="errorMessage">Login or password is not valid</div>
      )}
    </div>
  );
};

export default Card;
