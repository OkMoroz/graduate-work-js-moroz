import React, { useState } from "react";
import Input from "../Input/Input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Toggle = ({ password, setPassword, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="passwordInput">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="passwordField"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div className="eyeIcon">
        {showPassword ? (
          <IoMdEyeOff
            onClick={togglePasswordVisibility}
            className="eyeIconClosed"
          />
        ) : (
          <IoMdEye onClick={togglePasswordVisibility} className="eyeIconOpen" />
        )}
      </div>
    </div>
  );
};

export default Toggle;
