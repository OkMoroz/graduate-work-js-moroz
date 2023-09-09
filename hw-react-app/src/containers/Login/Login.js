import React from "react";
import "./Login.css";
import Card from "../../components/Card/Card";

const Login = () => {
  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1 className="welcome-title">
          I kindly invite you to review my diploma project for the FrontEnd PRO
          course
        </h1>
        <div className="welcome-help">
          <p>Login: Admin</p>
          <p>Password: 123</p>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Login;
