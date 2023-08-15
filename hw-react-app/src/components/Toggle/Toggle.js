import React, { useState } from "react";
import Input from "../Input/Input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Toggle = ({ password, handleChange, isErrorInPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-input">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="password-field"
        value={password}
        name="password"
        onChange={handleChange}
        isError={isErrorInPassword}
      />
      {isErrorInPassword && (
        <div className="error-message">Please enter password</div>
      )}
      <div className="eye-icon">
        {showPassword ? (
          <IoMdEyeOff
            onClick={togglePasswordVisibility}
            className="eye-icon-closed"
          />
        ) : (
          <IoMdEye
            onClick={togglePasswordVisibility}
            className="eye-icon-open"
          />
        )}
      </div>
    </div>
  );
};

export default Toggle;
