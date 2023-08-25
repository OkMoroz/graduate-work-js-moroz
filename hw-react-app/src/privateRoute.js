import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../src/components/localStorageService";

const PrivateRoute = ({ redirectPath = "/login" }) => {
  if (!getToken()) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
