import React, { useState } from "react";
import Input from "../Input/input";
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
        placeholder="Демо пароль: 123"
        className="password-field"
        value={password}
        name="password"
        onChange={handleChange}
        isError={isErrorInPassword}
        title="Демо пароль: 123"
      />
      {isErrorInPassword && (
        <div className="error-message">Please enter password</div>
      )}
      <div className="eye-icon">
        {showPassword ? (
            <IoMdEye
                onClick={togglePasswordVisibility}
                className="eye-icon-open"
            />
        ) : (
            <IoMdEyeOff
            onClick={togglePasswordVisibility}
          className="eye-icon-closed"
      />
        )}
      </div>
    </div>
  );
};

export default Toggle;
